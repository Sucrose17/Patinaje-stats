const contenedor = document.getElementById("lista-patinadores");

patinadores.forEach(patinador => {

    const tarjeta = document.createElement("a");

    tarjeta.className = "tarjeta-alumno";

    tarjeta.href = `perfil.html?id=${patinador.id}`;

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

    contenedor.appendChild(tarjeta);

});
