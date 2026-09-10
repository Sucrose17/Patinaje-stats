function obtenerInicial(nombre) {
    return nombre.charAt(0).toUpperCase();
}


function crearRanking({
    contenedorId,
    obtenerValor,
    menorEsMejor = false,
    formatearValor
}) {

    const contenedor =
        document.getElementById(contenedorId);


    const participantes = patinadores
        .map(patinador => {

            return {
                ...patinador,
                valor: obtenerValor(patinador)
            };

        })
        .filter(patinador => {

            return patinador.valor !== null &&
                   patinador.valor !== undefined;

        });


    participantes.sort((a, b) => {

        if (menorEsMejor) {
            return a.valor - b.valor;
        }

        return b.valor - a.valor;

    });


    if (participantes.length === 0) {

        contenedor.innerHTML = `
            <div class="ranking-vacio">
                Todavía no hay registros.
            </div>
        `;

        return;
    }


    participantes.forEach((patinador, indice) => {

        const posicion = indice + 1;

        let medalla = "";

        if (posicion === 1) {
            medalla = "🥇";
        }

        if (posicion === 2) {
            medalla = "🥈";
        }

        if (posicion === 3) {
            medalla = "🥉";
        }


        const fila =
            document.createElement("a");

        fila.className = "ranking-fila";

        fila.href =
            `perfil.html?id=${patinador.id}`;


        fila.innerHTML = `

            <div class="ranking-posicion">
                ${medalla || posicion}
            </div>


            <div class="ranking-avatar">

                ${
                    patinador.foto

                    ? `
                        <img
                            src="${patinador.foto}"
                            alt="${patinador.nombre}"
                        >
                    `

                    : `
                        <div class="ranking-inicial">
                            ${obtenerInicial(
                                patinador.nombre
                            )}
                        </div>
                    `
                }

            </div>


            <div class="ranking-nombre">
                ${patinador.nombre}
            </div>


            <div class="ranking-valor">
                ${formatearValor(
                    patinador.valor
                )}
            </div>

        `;


        contenedor.appendChild(fila);

    });

}


/* =======================================
   100 METROS
======================================= */

crearRanking({

    contenedorId: "ranking-100m",

    obtenerValor:
        patinador =>
            patinador.records.metros100,

    menorEsMejor: true,

    formatearValor:
        valor => `${valor.toFixed(2)} s`

});


/* =======================================
   SALTO VERTICAL
======================================= */

crearRanking({

    contenedorId: "ranking-vertical",

    obtenerValor:
        patinador =>
            patinador.records.saltoVertical,

    formatearValor:
        valor => `${valor} cm`

});


/* =======================================
   SALTO LONGITUD
======================================= */

crearRanking({

    contenedorId: "ranking-longitud",

    obtenerValor:
        patinador =>
            patinador.records.saltoLongitud,

    formatearValor:
        valor => `${valor.toFixed(2)} m`

});


/* =======================================
   DISTANCIA MÁXIMA
======================================= */

crearRanking({

    contenedorId: "ranking-distancia",

    obtenerValor:
        patinador =>
            patinador.records.distanciaMaxima,

    formatearValor:
        valor => `${valor} km`

});


/* =======================================
   20 KM
======================================= */

/*
   Para 20 km vamos a guardar el tiempo
   EN SEGUNDOS.

   Ejemplo:

   1 hora 5 minutos 30 segundos

   km20: 3930
*/


function segundosATiempo(segundos) {

    const horas =
        Math.floor(segundos / 3600);

    const minutos =
        Math.floor(
            (segundos % 3600) / 60
        );

    const segundosRestantes =
        segundos % 60;


    if (horas > 0) {

        return (
            `${horas}:` +
            `${String(minutos).padStart(2, "0")}:` +
            `${String(segundosRestantes).padStart(2, "0")}`
        );

    }


    return (
        `${minutos}:` +
        `${String(segundosRestantes).padStart(2, "0")}`
    );

}


crearRanking({

    contenedorId: "ranking-20km",

    obtenerValor:
        patinador =>
            patinador.records.km20,

    menorEsMejor: true,

    formatearValor:
        segundosATiempo

});
