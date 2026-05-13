import base64
import io
from rembg import remove
from PIL import Image

def process_image(input_path, output_svg_path):
    # 1. Read input image
    with open(input_path, 'rb') as i:
        input_data = i.read()
    
    # 2. Remove background
    output_data = remove(input_data)
    
    # 3. Open as PIL Image to get dimensions
    img = Image.open(io.BytesIO(output_data))
    width, height = img.size
    
    # 4. Base64 encode the output PNG data
    base64_encoded = base64.b64encode(output_data).decode('utf-8')
    data_uri = f"data:image/png;base64,{base64_encoded}"
    
    # 5. Create SVG string
    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="100%" height="100%">
  <image href="{data_uri}" width="{width}" height="{height}" />
</svg>"""
    
    # 6. Save SVG
    with open(output_svg_path, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    
    print(f"Successfully saved to {output_svg_path}")

if __name__ == '__main__':
    process_image('maincaracter.jpeg', 'src/assets/illustration.svg')
