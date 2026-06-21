#!/usr/bin/env python3
"""public/thumbs/ に置いた PNG を WebP に変換（リサイズ＋圧縮）するスクリプト。

使い方:
  1. ChatGPT等で作ったサムネ(PNG)を public/thumbs/<id>.png に置く
  2. プロジェクト直下で  python3 scripts/thumbs-to-webp.py
  → <id>.webp を生成し、元PNGは assets/thumbs_png_src/ へ退避（git除外）

アプリは /thumbs/<id>.webp を参照する（thumbBg / StylePreviewSlider / StyleThumbStrip）。
"""
from PIL import Image
import glob, os, shutil

MAXW = 1100   # 表示は最大880px幅。retina気味に1100へ
Q = 80
SRC_DIR = 'assets/thumbs_png_src'

def main():
    os.makedirs(SRC_DIR, exist_ok=True)
    pngs = sorted(glob.glob('public/thumbs/*.png'))
    if not pngs:
        print('変換対象のPNGがありません（public/thumbs/*.png）')
        return
    before = after = 0
    for png in pngs:
        before += os.path.getsize(png)
        im = Image.open(png).convert('RGBA')
        w, h = im.size
        if w > MAXW:
            im = im.resize((MAXW, round(h * MAXW / w)), Image.LANCZOS)
        out = png[:-4] + '.webp'
        im.save(out, 'WEBP', quality=Q, method=6)
        after += os.path.getsize(out)
        shutil.move(png, os.path.join(SRC_DIR, os.path.basename(png)))
        print(f'  {os.path.basename(out)}')
    print(f'変換 {len(pngs)}枚: {before/1e6:.1f}MB → {after/1e6:.1f}MB '
          f'({(1-after/before)*100:.0f}% 削減)')

if __name__ == '__main__':
    main()
