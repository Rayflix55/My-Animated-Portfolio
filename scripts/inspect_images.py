from pathlib import Path
from PIL import Image
root = Path(__file__).resolve().parent.parent / 'public' / 'projects'
print('file,width,height,format,size_mb')
for path in sorted(root.glob('*')):
    if path.suffix.lower() in {'.png', '.jpg', '.jpeg'}:
        with Image.open(path) as img:
            print(f'{path.name},{img.width},{img.height},{img.format},{path.stat().st_size/1024/1024:.2f}')
