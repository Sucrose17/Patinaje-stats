const parametros = new URLSearchParams(window.location.search);

const idPatinador = parametros.get("id");

const patinador = patinadores.find(
    p => p.id === idPatinador
);


if (!patinador) {

    document.querySelector(".pagina-perfil").innerHTML = `
        <div class="perfil-no-encontrado">

            <h1>Patinador no encontrado</h1>

            <p>
                El perfil que intentas consultar no existe.
            </p>

            <a href="patinadores.html">
                Volver a patinadores
            </a>

        </div>
    `;

} else {

    document.title =
        `${patinador.nombre} | Patinaje Stats`;


    // FOTO

    const fotoContenedor =
        document.getElementById("perfil-foto");

    if (patinador.foto) {

        fotoContenedor.innerHTML = `
            <img
                src="${patinador.foto}"
                alt="Foto de ${patinador.nombre}"
            >
        `;

    } else {

        fotoContenedor.innerHTML = `
            <div class="foto-placeholder perfil-placeholder">
                ${patinador.nombre
                    .charAt(0)
                    .toUpperCase()}
            </div>
        `;
    }


    // INFORMACIÓN GENERAL

    document.getElementById("perfil-nombre")
        .textContent = patinador.nombre;

    document.getElementById("perfil-descripcion")
        .textContent = patinador.descripcion;

    document.getElementById("perfil-tiempo")
        .textContent = patinador.tiempoPatinando;


    // MODALIDADES

    const modalidades =
        document.getElementById(
            "perfil-modalidades"
        );

    patinador.modalidades.forEach(
        modalidad => {

            const etiqueta =
                document.createElement("span");

            etiqueta.textContent = modalidad;

            modalidades.appendChild(
                etiqueta
            );
        }
    );


    // ESTADÍSTICAS

    const r = patinador.records;

    document.getElementById("stat-100m")
        .textContent =
        r.metros100 ?? "—";

    document.getElementById(
        "stat-salto-vertical"
    ).textContent =
        r.saltoVertical ?? "—";

    document.getElementById(
        "stat-salto-longitud"
    ).textContent =
        r.saltoLongitud ?? "—";

    document.getElementById(
        "stat-distancia"
    ).textContent =
        r.distanciaMaxima ?? "—";

    document.getElementById(
        "stat-tiempo-distancia"
    ).textContent =
        r.tiempoDistanciaMaxima ?? "—";

    document.getElementById(
        "stat-20km"
    ).textContent =
        r.km20 ?? "—";


    // NIVELES

    const niveles = patinador.niveles;

    function aplicarNivel(idElemento, nivel) {

    const elemento =
        document.getElementById(idElemento);

    elemento.textContent = nivel;

    elemento.classList.add(
        `nivel-${nivel.toLowerCase()}`
    );
}


aplicarNivel(
    "nivel-control",
    niveles.control
);

aplicarNivel(
    "nivel-velocidad",
    niveles.velocidad
);

aplicarNivel(
    "nivel-resistencia",
    niveles.resistencia
);

aplicarNivel(
    "nivel-agilidad",
    niveles.agilidad
);

aplicarNivel(
    "nivel-saltos",
    niveles.saltos
);

aplicarNivel(
    "nivel-frenos",
    niveles.frenos
);


    // CONVERTIR E-S A NÚMEROS

    const valoresNivel = {
        E: 1,
        D: 2,
        C: 3,
        B: 4,
        A: 5,
        S: 6
    };


    // GRÁFICO RADAR

    const ctx =
        document.getElementById(
            "graficoRadar"
        );


    new Chart(ctx, {

        type: "radar",

        data: {

            labels: [
                "Control",
                "Velocidad",
                "Resistencia",
                "Agilidad",
                "Saltos",
                "Frenos"
            ],

            datasets: [

                {
                    label:
                        patinador.nombre,

                    data: [
                        valoresNivel[
                            niveles.control
                        ],

                        valoresNivel[
                            niveles.velocidad
                        ],

                        valoresNivel[
                            niveles.resistencia
                        ],

                        valoresNivel[
                            niveles.agilidad
                        ],

                        valoresNivel[
                            niveles.saltos
                        ],

                        valoresNivel[
                            niveles.frenos
                        ]
                    ],

                    borderWidth: 3,

                    backgroundColor:
                        "rgba(56, 189, 248, 0.20)",

                    borderColor:
                        "#38bdf8",

                    pointBackgroundColor:
                        "#38bdf8",

                    pointBorderColor:
                        "#ffffff",

                    pointRadius: 5
                }

            ]

        },


        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                r: {

                    min: 0,

                    max: 6,

                    ticks: {
                        display: false,
                        stepSize: 1
                    },

                    grid: {
                        color:
                            "rgba(148, 163, 184, 0.25)"
                    },

                    angleLines: {
                        color:
                            "rgba(148, 163, 184, 0.25)"
                    },

                    pointLabels: {

                        color:
                            "#cbd5e1",

                        font: {
                            size: 14,
                            weight: "bold"
                        }

                    }

                }

            }

        }

    });

}
