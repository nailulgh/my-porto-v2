import io
from rembg import remove
from PIL import Image

def process_image(input_path, output_png_path):
    # Read input image
    with open(input_path, 'rb') as i:
        input_data = i.read()
    
    # Remove background
    output_data = remove(input_data)
    
    # Save PNG
    with open(output_png_path, 'wb') as f:
        f.write(output_data)
    
    print(f"Successfully saved to {output_png_path}")

if __name__ == '__main__':
    process_image('maincaracter.jpeg', 'src/assets/illustration.png')
