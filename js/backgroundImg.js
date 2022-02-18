imgsArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const selectedImg = imgsArr[Math.floor(Math.random() * imgsArr.length)];

const imgElement = document.createElement("img");
imgElement.src = `background-img/${selectedImg}`;

document.body.appendChild(imgElement);
