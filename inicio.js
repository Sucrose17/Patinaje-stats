/* =========================================
   ESTADÍSTICAS DE LA PORTADA
========================================= */


/* TOTAL DE PATINADORES */

document.getElementById(
    "total-patinadores"
).textContent = patinadores.length;


/* =========================================
   RÉCORD DE 100 METROS
   Menor tiempo = mejor
========================================= */

const tiempos100m = patinadores

    .map(
        patinador =>
            patinador.records.metros100
    )

    .filter(
        valor =>
            valor !== null &&
            valor !== undefined
    );


if (tiempos100m.length > 0) {

    const mejorTiempo =
        Math.min(...tiempos100m);

    document.getElementById(
        "record-100m"
    ).textContent =
        `${mejorTiempo.toFixed(2)} s`;

}


/* =========================================
   RÉCORD SALTO VERTICAL
   Mayor = mejor
========================================= */

const saltosVerticales = patinadores

    .map(
        patinador =>
            patinador.records.saltoVertical
    )

    .filter(
        valor =>
            valor !== null &&
            valor !== undefined
    );


if (saltosVerticales.length > 0) {

    const mejorSalto =
        Math.max(...saltosVerticales);

    document.getElementById(
        "record-salto"
    ).textContent =
        `${mejorSalto} cm`;

}


/* =========================================
   RÉCORD DE DISTANCIA
   Mayor = mejor
========================================= */

const distancias = patinadores

    .map(
        patinador =>
            patinador.records.distanciaMaxima
    )

    .filter(
        valor =>
            valor !== null &&
            valor !== undefined
    );


if (distancias.length > 0) {

    const mejorDistancia =
        Math.max(...distancias);

    document.getElementById(
        "record-distancia"
    ).textContent =
        `${mejorDistancia} km`;

}
