// Función para generar fuegos artificiales en el centro de la pantalla

function generateFireworks() {
    // Número de fuegos artificiales a generar
    const fireworksCount = 10;
    
    // Colores posibles para los fuegos artificiales
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff'];
    
    // Contenedor donde se colocarán los fuegos artificiales
    const container = document.body;
    
    // Generar cada fuego artificial
    for (let i = 0; i < fireworksCount; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        
        // Posición en el centro de la pantalla
        firework.style.left = `calc(50vw - 5px)`; // Establecer el left para el centro horizontal
        firework.style.top = `calc(50vh - 15px)`; // Establecer el top para el centro vertical
        
        // Tamaño fijo
        const width = 10;
        const height = 30;
        firework.style.width = `${width}px`;
        firework.style.height = `${height}px`;
        
        // Color aleatorio
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.backgroundColor = randomColor;
        
        // Agregar el fuego artificial al contenedor
        container.appendChild(firework);
        
        // Animación de explosión
        setTimeout(() => {
            firework.style.transform = `translate(-50%, -50%) scale(2)`;
            firework.style.opacity = 0;
        }, 100);
        
        // Eliminar el fuego artificial después de la explosión
        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

// Llamar a la función para generar fuegos artificiales
generateFireworks();
