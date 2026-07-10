from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent / 'public'
project_dir = root / 'projects'
image_files = list(project_dir.glob('*.png'))
image_files.append(root / 'rayflix.png')

widths = [640, 1024]
quality = 80

for image_path in image_files:
    if not image_path.exists():
        continue
    base = image_path.with_suffix('')
    with Image.open(image_path) as img:
        print(f'Converting {image_path.name} ({img.width}x{img.height})')
        for width in widths:
            if width >= img.width:
                continue
            resized = img.resize((width, int(img.height * width / img.width)), Image.LANCZOS)
            target = base.with_name(f'{base.name}-{width}.webp')
            resized.save(target, 'WEBP', quality=quality, method=6)
            print(f'  -> {target.name} ({resized.width}x{resized.height})')

        target_full = base.with_suffix('.webp')
        img.save(target_full, 'WEBP', quality=quality, method=6)
        print(f'  -> {target_full.name} ({img.width}x{img.height})')
