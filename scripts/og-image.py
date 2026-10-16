# Regenerate public/og.png (1200x630): python3 scripts/og-image.py
import json
from PIL import Image, ImageDraw, ImageFont
F = "/usr/share/fonts/truetype/sand-box/google/Inter/Inter-VariableFont_opsz,wght.ttf"
def font(size, weight):
    f = ImageFont.truetype(F, size)
    try: f.set_variation_by_axes([size if size <= 32 else 32, weight])
    except Exception: pass
    return f
n = len(json.load(open("src/data/tools.json")))
im = Image.new("RGB", (1200, 630), "#0b0e14")
d = ImageDraw.Draw(im)
d.rectangle([0, 0, 1200, 10], fill="#7fd1ff")
d.text((80, 150), "BuilderStack", font=font(104, 800), fill="#e6e6e6")
d.text((80, 290), "Crypto dev tools, compared.", font=font(52, 600), fill="#7fd1ff")
d.text((80, 380), "RPCs · indexers · security · wallets · oracles", font=font(36, 400), fill="#b8bec9")
d.text((80, 520), f"{n} tools · vendor-neutral · sponsors always labeled", font=font(28, 400), fill="#8a919c")
im.save("public/og.png", optimize=True)
print("tools", n)
