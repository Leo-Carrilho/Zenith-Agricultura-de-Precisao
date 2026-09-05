from pathlib import Path
from PIL import Image
import json

root = Path(__file__).resolve().parents[1]
for size in (192, 512):
    image = Image.open(root / "public/assets/zenith-logo.png")
    image.thumbnail((size, size))
    image.save(root / f"public/assets/zenith-icon-{size}.png", optimize=True)
manifest = root / "public/manifest.webmanifest"
data = json.loads(manifest.read_text())
data["theme_color"] = "#286746"
data["background_color"] = "#f4f8ef"
data["icons"] = [
    {"src": f"/assets/zenith-icon-{size}.png", "sizes": f"{size}x{size}", "type": "image/png", "purpose": "any"}
    for size in (192, 512)
]
manifest.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
