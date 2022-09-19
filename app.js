/****************************************************
 * VARIABLES
 ***************************************************/
const btones = document.querySelectorAll(".btn");
const oportunidades = document.querySelector(".oportunidades");
const usuario = document.querySelector(".usuario");
const imagen = document.querySelector("#imagen"); //maquina
const imagenUsuario = document.querySelector("#imagenUsuario"); //usuario
const resultado = document.querySelector(".resultado");
const reseteo = document.querySelector("#reseteo");
const victorias = document.querySelector(".victorias");
let imgSwitch = null;
let c = 1;
let v = 0;

const imgn = {
  uno: "./img/uno.jpg",
  dos: "./img/dos.jpg",
  tres: "./img/tres.jpg",
  cuatro: "./img/cuatro.jpg",
  cinco: "./img/cinco.jpg",
  seis: "./img/seis.jpg",
  siete: "./img/siete.jpg",
  ocho: "./img/ocho.jpg",
  nueve: "./img/nueve.jpg",
  cero: "./img/cero.jpg",
};

const ob = {
  seleccionarOpciones: function (e) {
    console.log(e.target);
    const numero = Number(e.target.textContent);

    console.log(numero);
    this.jugar(numero);
    this.usuario(numero);
    return numero;
  },

  jugar: function (numero) {
    return eleccionMaquina(numero); //pinto las imagenes
  },

  usuario: function (numero) {
    if (numero === 1) {
      imagenUsuario.src = imgn.uno;
    }
    if (numero === 2) {
      imagenUsuario.src = imgn.dos;
    }
    if (numero === 3) {
      imagenUsuario.src = imgn.tres;
    }
    if (numero === 4) {
      imagenUsuario.src = imgn.cuatro;
    }
    if (numero === 5) {
      imagenUsuario.src = imgn.cinco;
    }
    if (numero === 6) {
      imagenUsuario.src = imgn.seis;
    }
    if (numero === 7) {
      imagenUsuario.src = imgn.siete;
    }
    if (numero === 8) {
      imagenUsuario.src = imgn.ocho;
    }
    if (numero === 9) {
      imagenUsuario.src = imgn.nueve;
    }
    if (numero === 0) {
      imagenUsuario.src = imgn.cero;
    }
  },
};
//console.log(btones);

/****************************************************
 * LOGICA IMAGENES MAQUINA
 ***************************************************/
function switchesMaquina(maquina) {
  switch (maquina) {
    case 1:
      imgSwitch = imagen.dataset.numero = "uno";
      return imgn.uno;
    case 2:
      imgSwitch = imagen.dataset.numero = "dos";
      return imgn.dos;
    case 3:
      imgSwitch = imagen.dataset.numero = "tres";
      return imgn.tres;
    case 4:
      imgSwitch = imagen.dataset.numero = "cuatro";
      return imgn.cuatro;
    case 5:
      imgSwitch = imagen.dataset.numero = "cinco";
      return imgn.cinco;
    case 6:
      imgSwitch = imagen.dataset.numero = "seis";
      return imgn.seis;
    case 7:
      imgSwitch = imagen.dataset.numero = "siete";
      return imgn.siete;
    case 8:
      imgSwitch = imagen.dataset.numero = "ocho";
      return imgn.ocho;
    case 9:
      imgSwitch = imagen.dataset.numero = "nueve";
      return imgn.nueve;
    case 0:
      imgSwitch = imagen.dataset.numero = "cero";
      return imgn.cero;
  }
}

/****************************************************
 * CARGAR LAS IMAGENES
 ***************************************************/
const eleccionMaquina = (numero) => {
  /*******REPITO LA FIGURA DE LA IMAGEN********/
  console.log("entre a la primera: ", numero);
  const dato = numero; // aja porque n entra a cuadrando
  const tiempo = setInterval(() => {
    const maquina = Math.round(Math.random() * 9);
    const URL = switchesMaquina(maquina);
    imagen.src = URL;
  }, 40);

  /*******CORTO EL INTERVALO DE REPETICION*******/

  setTimeout(() => {
    clearInterval(tiempo);

    console.log(imagen.getAttribute("data-numero"));

    const inmagenData = imagen.getAttribute("data-numero");

    /****************************************************
     * PINTAR usuario
     ***************************************************/
    const cuadrando = (dato) => {
      console.log(inmagenData);
      console.log("Estoy en cuadrando: ", dato);

      resultado.innerHTML = "";
      if (inmagenData === "uno" && dato === 1) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "dos" && dato === 2) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "tres" && dato === 3) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "cuatro" && dato === 4) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "cinco" && dato === 5) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "seis" && dato === 6) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "siete" && dato === 7) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "ocho" && dato === 8) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "nueve" && dato === 9) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
      }
      if (inmagenData === "cero" && dato === 0) {
        resultado.classList.remove("d-none");
        resultado.innerHTML = "GANASTE";
        v += 1;
        document.querySelector("main").style.background = "yellow";
      }

      if (v > 0) {
        victorias.classList.remove("d-none");
      }
      victorias.innerHTML = `Victorias: ${v}`;
    };
    cuadrando(dato);
    ganar();
    return inmagenData;
  }, 1000); //end setTimeout

  const ganar = () => {
    setTimeout(() => {
      resultado.classList.add("d-none");
      document.querySelector("main").style.background = "rgb(11, 10, 10)";
    }, 1000);
  };
};

/****************************************************
 * CAPTURO LOS BOTONES
 ***************************************************/
reseteo.disabled = true;

btones.forEach((botones) => {
  botones.addEventListener("click", (e) => {
    e.preventDefault();
    while (c <= 7) {
      if (c === 7) {
        oportunidades.innerHTML = `SUPERASTE EL LIMITE`;
        reseteo.disabled = false;
        btones.map((btn) => (btn.disabled = true));
      }
      oportunidades.innerHTML = `Intentos: ${c}`;
      console.log(c++);

      reseteo.disabled = true;

      ob.seleccionarOpciones(e);
      break;
    }
  });
});

/****************************************************
 * RESET
 ***************************************************/
reseteo.addEventListener("click", (e) => {
  e.preventDefault();
  //reseteo.disabled = true;
  oportunidades.innerHTML = ``;
  imagen.src = imgn.cero;
  imagenUsuario.src = imgn.cero;
  c = 1;
  v = 0;
  victorias.classList.add("d-none");
  btones.map((btn) => (btn.disabled = false));
});
