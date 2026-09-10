const contenedor = document.getElementById("lista-patinadores");

patinadores.forEach(patinador => {

    const tarjeta = document.createElement("a");

    tarjeta.className = "tarjeta-alumno";

    tarjeta.href = `perfil.html?id=${patinador.id}`;

    let imagen;

    if (patinador.foto) {

        imagen = `
            <img
                src="${patinador.foto}"
                alt="Foto de ${patinador.nombre}"
                onerror="this.style.display='none'"
            >
        `;

    } else {

        imagen = `
            <div class="foto-placeholder">
                ${patinador.nombre.charAt(0).toUpperCase()}
            </div>
        `;

    }

    const modalidades = patinador.modalidades
        .map(modalidad => `<span>${modalidad}</span>`)
        .join("");

    tarjeta.innerHTML = `

        ${imagen}

        <div class="contenido-tarjeta">

            <h2>${patinador.nombre}</h2>

            <div class="modalidades-tarjeta">
                ${modalidades}
            </div>

            <p>${patinador.descripcion}</p>

            <div class="nivel-destacado">

                <span>Control</span>

                <strong>
                    ${patinador.niveles.control}
                </strong>

            </div>

        </div>
    `;

    contenedor.appendChild(tarjeta);

});
