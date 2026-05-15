<script>

    // 🔢 розміри сітки
    let rows = 5;     // кількість рядків
    let cols = 8;     // кількість колонок

    let size = 60;    // розмір одного квадрата

    for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {

    let div = document.createElement("div");

    // 📍 позиція
    div.style.position = "absolute";
    div.style.top = i * size + 50 + "px";
    div.style.left = j * size + 50 + "px";

    // 📐 розмір
    div.style.width = "50px";
    div.style.height = "50px";

    // 🎨 рандомний колір
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    div.style.background = `rgb(${r}, ${g}, ${b})`;

    // 🧾 текст (координати)
    div.textContent = i + "," + j;

    // 🎯 центрування тексту
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";

    // рамка (щоб красиво)
    div.style.border = "2px solid black";

    document.body.appendChild(div);
}
}

</script>