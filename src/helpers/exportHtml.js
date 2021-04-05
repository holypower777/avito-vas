export default state => {
const [firstColor, secondColor] = state.backgroundColor;

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Banner</title>
    <style>
    html, body {
        height: 100%;
    }
    #banner {
        width: ${state.width}px;
        height: ${state.height}px;
        background: linear-gradient(${firstColor}, ${secondColor});
    
        border-radius: 10px;
        display: flex;
        padding: 20px;
        cursor: pointer;
        outline: none;
        text-decoration: none;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
    }
        
    .banner-image, .banner-text {
        position: absolute;
        left: 20px;
        width: calc(100% - 40px);
    }
        
    .banner-image {
        top: ${state.imageOffset + 20}px;
    }
    .banner-text {
        max-height: ${1.2 * state.textSize * 3}px;
        font-size: ${state.textSize}px;
        color: ${state.textColor};
        top: ${state.height + state.textOffset}px;
          
        overflow: hidden;
        text-overflow: ellipsis;
    }
    </style>
</head>
<body>
    <a href="${state.link}" target="_blank" id="banner">
        <img src="${state.imageSrc}" alt="banner image" class="banner-image">
        <span class="banner-text">${state.text}</span>
    </a>
</body>
</html>`
}