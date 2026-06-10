#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "==> Compressing hero video..."
ffmpeg -y -i public/herosec/herovd.webm \
  -c:v libvpx-vp9 -crf 36 -b:v 0 -an \
  -vf "scale=-2:720" -row-mt 1 \
  public/herosec/herovd-opt.webm 2>/dev/null
mv public/herosec/herovd-opt.webm public/herosec/herovd.webm

ffmpeg -y -i public/herosec/herovd.webm -ss 00:00:01 -vframes 1 \
  public/herosec/hero-poster.jpg 2>/dev/null
cwebp -q 82 public/herosec/hero-poster.jpg -o public/herosec/hero-poster.webp
rm -f public/herosec/hero-poster.jpg

echo "==> Compressing party images..."
for f in public/party/*.webp; do
  cwebp -q 72 -resize 1200 0 "$f" -o "$f.tmp" && mv "$f.tmp" "$f"
done

echo "==> Compressing food images..."
for f in public/food/*.webp; do
  cwebp -q 72 -resize 1000 0 "$f" -o "$f.tmp" && mv "$f.tmp" "$f"
done

echo "==> Compressing lovable-uploads PNGs to WebP..."
for f in public/lovable-uploads/*.png; do
  base="$(basename "$f" .png)"
  if [[ "$base" == "aeb86edc-b26e-4db4-a52f-ce91f9aa64d1" ]]; then
    magick "$f" -strip -resize 256x256\> -quality 90 "public/lovable-uploads/${base}.png"
    cwebp -q 90 -resize 256 0 "$f" -o "public/lovable-uploads/${base}.webp"
  else
    cwebp -q 80 -resize 1400 0 "$f" -o "public/lovable-uploads/${base}.webp"
  fi
done

echo "==> Done."
du -sh public/herosec public/party public/food public/lovable-uploads
