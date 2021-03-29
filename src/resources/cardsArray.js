import cheetosFantasma from "../images/cheetos-fantasmas.jpg"
import cheetosPalitos from "../images/cheetos-palitos.jpg"
import cheetosPelotas from "../images/cheetos-pelotas.jpg"
import cheetosQueso from "../images/cheetos-queso.jpg"
import conosMatutano from "../images/conos-matutano.jpg"
import cortezasTrigo from "../images/cortezas-de-trigo.jpg"
import doritosQueso from "../images/doritos-queso.jpg"
import fritos from "../images/fritos.jpg"
import gublins from "../images/gublins.jpg"
import laysSalVinagre from "../images/lays-sal-vinagre.jpg"
import patatasHuevo from "../images/patatas-huevo-frito.jpg"
import pringlesOriginal from "../images/pringles-original.jpg"
import pringlesSour from "../images/pringles-sour.jpg"
import rufflesJamon from "../images/ruffles-de-jamon.jpg"
import rufflesYork from "../images/ruffles-york.jpg"

/* ****************** */

import abeja from "../images/abeja.png"
import agnes from "../images/agnes.png"
import anciano from "../images/anciano.png"
import apu from "../images/apu.jpg"
import carl from "../images/carl.jpg"
import kent from "../images/kent.png"
import krusty from "../images/krusty.png"
import homer from "../images/homer.jpg"
import marge from "../images/marge.jpg"
import moe from "../images/moe.jpg"
import ned from "../images/ned.jpg"
import padreMilhouse from "../images/padre-milhouse.png"
import ralph from "../images/ralph.png"
import seymour from "../images/seymour.jpg"
import willie from "../images/willie.png"

const cardsArray = () => {
    const cardsArray1 = [
        { id: 0, image: cheetosFantasma, name: "Cheetos Pandilla" },
        { id: 1, image: cheetosPalitos, name: "Cheetos Palitos" },
        { id: 2, image: cheetosPelotas, name: "Cheetos Pelotazos" },
        { id: 3, image: cheetosQueso, name: "Cheetos Queso" },
        { id: 4, image: conosMatutano, name: "Conos Matutano" },
        { id: 5, image: cortezasTrigo, name: "Cortezas de Trigo" },
        { id: 6, image: doritosQueso, name: "Doritos de Queso" },
        { id: 7, image: fritos, name: "Fritos BBQ" },
        { id: 8, image: gublins, name: "Gublins BBQ" },
        { id: 9, image: laysSalVinagre, name: "Lays Sal y Vinagre" },
        { id: 10, image: patatasHuevo, name: "Patatas huevo frito" },
        { id: 11, image: pringlesOriginal, name: "Pringles Original" },
        { id: 12, image: pringlesSour, name: "Pringles Sour" },
        { id: 13, image: rufflesJamon, name: "Ruffles de Jamon" },
        { id: 14, image: rufflesYork, name: "Ruffles York" },
    ];
    
    const cardsArray2 = [
        { id: 0, image: abeja, name: "Abeja" },
        { id: 1, image: agnes, name: "Agnes" },
        { id: 2, image: apu, name: "apu" },
        { id: 3, image: carl, name: "carl" },
        { id: 4, image: kent, name: "kent" },
        { id: 5, image: krusty, name: "krusty" },
        { id: 6, image: homer, name: "homer" },
        { id: 7, image: marge, name: "marge" },
        { id: 8, image: moe, name: "moe" },
        { id: 9, image: ned, name: "ned" },
        { id: 10, image: padreMilhouse, name: "padre de Milhouse" },
        { id: 11, image: ralph, name: "ralph" },
        { id: 12, image: seymour, name: "seymour" },
        { id: 13, image: willie, name: "willie" },
        { id: 14, image: anciano, name: "anciano" },
    ];

    function getRandomArray() {
        let i = Math.floor(Math.random() * (1 + 1));
        switch(i) {
            case 0:
                return cardsArray1
            case 1:
                return cardsArray2
            default:
                return cardsArray2
        }
    }

    return getRandomArray()
}

export default cardsArray