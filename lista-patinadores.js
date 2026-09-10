const contenedor =
    document.getElementById(
        "lista-patinadores"
    );


patinadores.forEach(patinador => {

    const tarjeta =
        document.createElement("a");

    tarjeta.className =
        "tarjeta-alumno";

    tarjeta.href =
        `perfil.html?id=${patinador.id}`;


    /* FOTO */

    let imagen;

    if (patinador.foto) {

        imagen = `
            <img
                src="${patinador.foto}"
                alt="Foto de ${patinador.nombre}"
            >
        `;

    } else {

        imagen = `
            <div class="foto-placeholder">
                ${patinador.nombre
                    .charAt(0)
                    .toUpperCase()}
            </div>
        `;

    }


    /* MODALIDADES */

    const modalidades =
        patinador.modalidades
            .map(
                modalidad =>
                    `<span>${modalidad}</span>`
            )
            .join("");


    /* NIVEL GENERAL */

    const nivelGeneral =
        calcularNivelGeneral(
            patinador
        );


    tarjeta.innerHTML = `

        ${imagen}

        <div class="contenido-tarjeta">

            <h2>
                ${patinador.nombre}
            </h2>


            <div class="modalidades-tarjeta">
                ${modalidades}
            </div>


            <p>
                ${patinador.descripcion}
            </p>


            <div class="nivel-destacado">

                <div class="nivel-general-texto">

                    <span>
                        Nivel general
                    </span>

                </div>


                <strong
                    class="nivel-general-badge nivel-${nivelGeneral.toLowerCase()}">

                    ${nivelGeneral}

                </strong>

            </div>

        </div>
    `;


    contenedor.appendChild(
        tarjeta
    );

});
