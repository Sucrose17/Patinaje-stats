const patinadores = [

    {
        id: "alexander",

        nombre: "Alexander",

        foto: "img/alexander.jpg",

        descripcion:
            "Patinador de Mexicali enfocado en slalom, patinaje urbano, saltos y larga distancia.",

        modalidades: [
            "Urban",
            "Slalom",
            "Fitness"
        ],

        tiempoPatinando: "2 años",

        niveles: {
            control: "A",
            velocidad: "B",
            resistencia: "S",
            agilidad: "A",
            saltos: "B",
            frenos: "A"
        },

        records: {
            metros100: 14.82,
            saltoVertical: 48,
            saltoLongitud: 1.72,
            distanciaMaxima: 100,
            tiempoDistanciaMaxima: "5 h 34 min",
            km20: null
        }
    },

    {
        id: "patinador-prueba",

        nombre: "Patinador de prueba",

        foto: "",

        descripcion:
            "Perfil temporal utilizado para probar el sistema de Patinaje Stats.",

        modalidades: [
            "Urban"
        ],

        tiempoPatinando: "1 año",

        niveles: {
            control: "C",
            velocidad: "D",
            resistencia: "C",
            agilidad: "B",
            saltos: "D",
            frenos: "C"
        },

        records: {
            metros100: 18.31,
            saltoVertical: 32,
            saltoLongitud: 1.20,
            distanciaMaxima: 25,
            tiempoDistanciaMaxima: "1 h 45 min",
            km20: null
        }
    }

];
/* =========================================================
   CÁLCULO DEL NIVEL GENERAL
   ========================================================= */

const valorNiveles = {
    E: 1,
    D: 2,
    C: 3,
    B: 4,
    A: 5,
    S: 6
};


const nivelesOrdenados = [
    "S",
    "A",
    "B",
    "C",
    "D",
    "E"
];


function calcularNivelGeneral(patinador) {

    const niveles = patinador.niveles;

    const estadisticas = [
        niveles.control,
        niveles.agilidad,
        niveles.frenos,
        niveles.saltos,
        niveles.velocidad,
        niveles.resistencia
    ];


    for (const nivelGeneral of nivelesOrdenados) {

        const valorObjetivo =
            valorNiveles[nivelGeneral];


        /*
            CONDICIÓN 1

            Al menos 4 de las 6 estadísticas
            deben estar en este nivel o superior.
        */

        const cantidadCumplen =
            estadisticas.filter(nivel =>

                valorNiveles[nivel] >=
                valorObjetivo

            ).length;


        if (cantidadCumplen < 4) {
            continue;
        }


        /*
            CONDICIÓN 2

            Frenos puede estar como máximo
            un nivel por debajo.

            Ejemplos:

            General S → Frenos mínimo A
            General A → Frenos mínimo B
            General B → Frenos mínimo C
            General C → Frenos mínimo D
            General D → Frenos mínimo E
        */

        const valorFrenos =
            valorNiveles[niveles.frenos];

        const minimoFrenos =
            Math.max(
                1,
                valorObjetivo - 1
            );


        if (valorFrenos < minimoFrenos) {
            continue;
        }


        /*
            Si cumple las dos condiciones,
            este es su nivel general.
        */

        return nivelGeneral;
    }


    return "E";
}
