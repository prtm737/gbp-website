#!/usr/bin/env python3
"""Generate on-brand illustrations from the Guwahati Biotech Park logo.

Run from the project root:  python3 scripts/generate-images.py
Outputs JPEGs to assets/img/generated/ (1600x1000 cards + 1200x630 OG image).
Text-free artwork so the site can overlay live, accessible captions.
"""
from pathlib import Path
import math
import random

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "generated"
OUT.mkdir(parents=True, exist_ok=True)

LOGO = Image.open(ROOT / "assets" / "img" / "logo.png").convert("RGBA")
MARK = LOGO.crop((0, 0, 102, 80))
MARK.save(OUT / "logo-mark.png")

GREEN = (20, 108, 77)
FOREST = (11, 59, 42)
LIME = (201, 242, 107)
CYAN = (0, 179, 195)
PAPER = (245, 243, 234)
AMBER = (232, 168, 62)


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient(w, h, top, bottom):
    strip = Image.new("RGB", (1, h))
    px = strip.load()
    for y in range(h):
        px[0, y] = lerp(top, bottom, y / max(h - 1, 1))
    return strip.resize((w, h), Image.BICUBIC)


def leaf(draw, cx, cy, w, h, angle, fill):
    pts_l, pts_r = [], []
    steps = 26
    for i in range(steps + 1):
        t = i / steps
        x = -w / 2 + w * t
        y = math.sin(t * math.pi) * h * 0.5
        pts_l.append((x, y))
        pts_r.append((x, -y))
    pts = pts_l + pts_r[::-1]
    ca, sa = math.cos(angle), math.sin(angle)
    pts = [(cx + x * ca - y * sa, cy + x * sa + y * ca) for x, y in pts]
    draw.polygon(pts, fill=fill)


def dna(draw, x, y, height, turns, color, width=7):
    steps = 140
    left, right = [], []
    for i in range(steps + 1):
        t = i / steps
        yy = y + height * t
        a = t * math.pi * 2 * turns
        dx = math.sin(a) * 42
        left.append((x + dx, yy))
        right.append((x - dx, yy))
    draw.line(left, fill=color, width=width, joint="curve")
    draw.line(right, fill=color, width=width, joint="curve")
    for i in range(0, steps + 1, 10):
        draw.line([left[i], right[i]], fill=color, width=max(2, width // 3))


def molecule(draw, cx, cy, radius, color, nodes=7, seed=0):
    rng = random.Random(seed)
    pts = []
    for i in range(nodes):
        a = (i / nodes) * math.pi * 2 + rng.random() * 0.3
        r = radius * (0.55 + rng.random() * 0.45)
        pts.append((cx + math.cos(a) * r, cy + math.sin(a) * r))
    for i, p in enumerate(pts):
        for j in range(i + 1, len(pts)):
            if (i + j) % 3 == 0 or j == i + 1:
                draw.line([p, pts[j]], fill=color, width=3)
        draw.ellipse([p[0] - 9, p[1] - 9, p[0] + 9, p[1] + 9], fill=color)
    draw.ellipse([cx - 14, cy - 14, cx + 14, cy + 14], fill=color)


def hexagons(draw, x, y, scale, color):
    r = 46 * scale
    for row in range(4):
        for col in range(4):
            cx = x + col * r * 1.75 + (row % 2) * r * 0.87
            cy = y + row * r * 1.52
            pts = [
                (cx + r * math.cos(math.radians(60 * k - 30)), cy + r * math.sin(math.radians(60 * k - 30)))
                for k in range(6)
            ]
            draw.polygon(pts, outline=color, width=max(2, int(3 * scale)))


def waves(draw, w, h, color, seed=0):
    rng = random.Random(seed)
    for k in range(4):
        pts = []
        amp = 26 + k * 14
        y0 = h * 0.55 + k * 42
        for i in range(0, w + 20, 20):
            pts.append((i, y0 + math.sin(i / (150 + k * 30) + rng.random()) * amp))
        draw.line(pts, fill=color, width=4)


def dotted_grid(draw, w, h, color, step=38):
    for y in range(0, h, step):
        for x in range(0, w, step):
            draw.ellipse([x, y, x + 2, y + 2], fill=color)


def logo_badge(canvas, x, y, scale=0.95):
    mark = MARK.resize((round(MARK.width * scale), round(MARK.height * scale)), Image.LANCZOS)
    plate = Image.new("RGBA", (mark.width + 38, mark.height + 24), (255, 255, 255, 238))
    mask = Image.new("L", plate.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, plate.width - 1, plate.height - 1], radius=18, fill=255)
    canvas.alpha_composite(Image.composite(plate, Image.new("RGBA", plate.size, (0, 0, 0, 0)), mask), (x - 19, y - 12))
    canvas.alpha_composite(mark, (x, y))


def make_card(name, top, bottom, accent, motif, seed=1):
    w, h = 1600, 1000
    rng = random.Random(seed)
    img = gradient(w, h, top, bottom).convert("RGBA")
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)

    dotted_grid(d, w, h, (*accent, 26), 44)
    d.ellipse([w * 0.48, -h * 0.5, w * 1.38, h * 1.02], outline=(*accent, 46), width=3)
    d.ellipse([w * 0.56, -h * 0.32, w * 1.2, h * 0.82], fill=(*accent, 18))
    waves(d, w, h, (*accent, 34), seed)

    if motif == "honey":
        hexagons(d, w * 0.58, h * 0.14, 1.55, (*AMBER, 200))
        for i in range(8):
            cx = w * 0.62 + rng.random() * w * 0.3
            cy = h * 0.12 + rng.random() * h * 0.66
            r = 18 + rng.random() * 26
            d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*AMBER, 90), outline=(*accent, 160), width=2)
    elif motif == "tree":
        d.line([(w * 0.74, h * 0.82), (w * 0.74, h * 0.26)], fill=(*accent, 210), width=12)
        for side in (-1, 1):
            for k in range(4):
                leaf(d, w * 0.74 + side * (60 + k * 40), h * 0.34 + k * 74, 140 + k * 20, 54, side * 0.6, (*LIME, 150 - k * 16))
        for i in range(12):
            leaf(d, w * (0.55 + rng.random() * 0.38), h * (0.08 + rng.random() * 0.5), 90 + rng.random() * 80, 34 + rng.random() * 30, rng.uniform(-1.4, 1.4), (*LIME, 32 + rng.randint(0, 48)))
    elif motif == "training":
        dna(d, w * 0.7, h * 0.1, h * 0.76, 3.2, (*accent, 150), 8)
        d.ellipse([w * 0.82, h * 0.2, w * 0.98, h * 0.8], outline=(*LIME, 110), width=5)
        d.line([(w * 0.85, h * 0.32), (w * 0.95, h * 0.32)], fill=(*LIME, 110), width=4)
        molecule(d, w * 0.55, h * 0.68, 130, (*LIME, 90), 8, seed)
    elif motif == "innovation":
        molecule(d, w * 0.74, h * 0.42, 230, (*accent, 150), 11, seed)
        for i in range(4):
            d.rectangle([w * 0.57 + i * 52, h * 0.78 - i * 54, w * 0.57 + i * 52 + 32, h * 0.84], fill=(*LIME, 100 + i * 34))
    elif motif == "community":
        centers = [(w * 0.6, h * 0.24), (w * 0.8, h * 0.34), (w * 0.64, h * 0.56), (w * 0.88, h * 0.6), (w * 0.74, h * 0.8), (w * 0.95, h * 0.82)]
        for i in range(len(centers)):
            for j in range(i + 1, len(centers)):
                d.line([centers[i], centers[j]], fill=(*accent, 80), width=3)
        for i, (cx, cy) in enumerate(centers):
            r = 42 if i % 2 == 0 else 30
            d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*accent, 70), outline=(*LIME, 180), width=3)
    else:
        dna(d, w * 0.72, h * 0.12, h * 0.72, 3, (*accent, 150), 8)
        molecule(d, w * 0.56, h * 0.68, 160, (*LIME, 100), 8, seed)
        for i in range(5):
            r = 70 + i * 34
            d.arc([w * 0.6 - r, h * 0.3 - r, w * 0.6 + r, h * 0.3 + r], 200, 340, fill=(*LIME, 70), width=4)

    img.alpha_composite(layer.filter(ImageFilter.GaussianBlur(0.4)))
    logo_badge(img, 92, 84, 1.05)
    d = ImageDraw.Draw(img)
    d.line([(96, h - 84), (96 + 300, h - 84)], fill=(*accent, 190), width=4)

    img.convert("RGB").save(OUT / f"{name}.jpg", quality=84, optimize=True, progressive=True)
    print("wrote", OUT / f"{name}.jpg")


def make_og():
    w, h = 1200, 630
    img = gradient(w, h, FOREST, (6, 28, 20)).convert("RGBA")
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    dotted_grid(d, w, h, (*LIME, 26), 36)
    d.ellipse([w * 0.5, -h * 0.6, w * 1.35, h * 1.1], fill=(*CYAN, 26))
    dna(d, w * 0.88, -20, h * 1.1, 3.4, (*LIME, 130), 7)
    for i in range(8):
        leaf(d, w * 0.74 + i * 42, h * 0.1 + (i % 3) * 42, 110, 40, -0.5 + i * 0.2, (*LIME, 36))
    img.alpha_composite(layer)

    plate = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    pd = ImageDraw.Draw(plate)
    pd.rounded_rectangle([48, 48, 1152, 582], radius=30, fill=(255, 253, 246, 240))
    img.alpha_composite(plate)

    full_logo = LOGO.resize((round(LOGO.width * 1.5), round(LOGO.height * 1.5)), Image.LANCZOS)
    img.alpha_composite(full_logo, (96, 96))
    full_logo2 = LOGO.resize((round(LOGO.width * 0.8), round(LOGO.height * 0.8)), Image.LANCZOS)
    img.alpha_composite(full_logo2, (96, 470))
    d = ImageDraw.Draw(img)
    d.line([(96, 250), (96 + 520, 250)], fill=(11, 59, 42, 80), width=3)
    d.ellipse([760, 300, 1060, 600], outline=(11, 59, 42, 40), width=3)
    molecule(d, 900, 420, 150, (11, 59, 42, 70), 9, 7)

    img.convert("RGB").save(OUT / "og-default.jpg", quality=88, optimize=True, progressive=True)
    print("wrote", OUT / "og-default.jpg")


cards = [
    ("achievement-honey-lab", (12, 48, 36), (7, 30, 22), AMBER, "honey", 11),
    ("achievement-tree-planting", (14, 62, 44), (8, 34, 24), LIME, "tree", 22),
    ("achievement-training", (10, 42, 52), (6, 24, 30), CYAN, "training", 33),
    ("achievement-innovation", (18, 56, 40), (8, 30, 22), LIME, "innovation", 44),
    ("achievement-incubation", (11, 50, 38), (7, 26, 20), CYAN, "community", 55),
    ("achievement-outreach", (14, 58, 46), (8, 32, 24), LIME, "outreach", 66),
]
for args in cards:
    make_card(*args)
make_og()
