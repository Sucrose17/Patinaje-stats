const contenedor = document.getElementById("lista-patinadores");

patinadores.forEach(patinador => {

    // Crear tarjeta
    const tarjeta = document.createElement("a");

    tarjeta.className = "tarjeta-alumno";

    // Al hacer clic nos llevará al perfil de ese patinador
    tarjeta.href = `perfil.html?id=${patinador.id}`;

    // Contenido de la tarjeta
    tarjeta.innerHTML = `
        <img
            src="${patinador.foto}"
            alt="Foto de ${patinador.nombre}"
        >

        <div class="contenido-tarjeta">

            <h2>${patinador.nombre}</h2>

            <p>${patinador.descripcion}</p>

            <div class="nivel-destacado">
                Control
                <strong>${patinador.niveles.control}</strong>
            </div>

        </div>
    `;

    // Añadir tarjeta a la página
    contenedor.appendChild(tarjeta);

});
