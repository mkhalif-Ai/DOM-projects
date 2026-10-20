function changeImage(){
     const image = document.querySelector('#image');
     const url = prompt("enter your link:")
    const borderColor = prompt(" enter your  border color:");
    const width = prompt(" enter the width of the image (in pixels):");
    const height = prompt("enter the height of the image (in pixels):");
    const borderRadius = prompt(" enter the border radius (in pixels):");
     image.setAttribute('src',url)
    image.style.border = `2px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${borderRadius}px`;
    image.style.padding = "10px";
    image.style.backgroundColor = '#cfc2dc';

      
}