#!/usr/bin/env python3
"""Re-encode oversized JPEGs for the public site.

Run from the project root after adding new photos:  python3 scripts/optimize-images.py
Keeps every image at or below 1800 px on its long edge and writes progressive
JPEGs at quality 82. The AI hero images are already prepared separately.
"""
from io import BytesIO
from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMG = ROOT / "assets" / "img"
MAX_EDGE = 1800
QUALITY = 82


def shrink(path: Path) -> None:
    before = path.stat().st_size
    with Image.open(path) as raw:
        im = raw.convert("RGB")
        w, h = im.size
        scale = min(1.0, MAX_EDGE / max(w, h))
        if scale < 1:
            im = im.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
            im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=90, threshold=3))
        buffer = BytesIO()
        im.save(buffer, "JPEG", quality=QUALITY, optimize=True, progressive=True)
        if buffer.tell() > 300_000:
            buffer = BytesIO()
            im.save(buffer, "JPEG", quality=76, optimize=True, progressive=True)
    data = buffer.getvalue()
    if len(data) < before:
        path.write_bytes(data)
        print(f"{path.relative_to(ROOT)}: {before // 1024}K -> {len(data) // 1024}K")
    else:
        print(f"{path.relative_to(ROOT)}: kept ({before // 1024}K)")


def main() -> None:
    for path in sorted(IMG.rglob("*")):
        if path.suffix.lower() not in {".jpg", ".jpeg"}:
            continue
        if path.parent.name == "generated" and path.name.startswith("hero-"):
            continue
        with Image.open(path) as im:
            long_edge = max(im.size)
        if path.stat().st_size > 120_000 or long_edge > 1600:
            shrink(path)


if __name__ == "__main__":
    main()
