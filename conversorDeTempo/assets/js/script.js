class ConversorDeTempo {
  constructor(input, output, btn) {
    this.btn = document.querySelector(btn);
    this.input = document.querySelector(input);
    this.output = document.querySelector(output);
    this.eventListener();
  }

  eventListener() {
    console.log(this.btn);
    this.btn.addEventListener("click", (event) => {
      event.preventDefault();
      this.calcular();
    });
  }

  calcular() {
    if (this.input.value === "") {
      return alert("Erro *Campo vazio , *Informe somente números");
    }
    const minutos = Number(this.input.value);
    const hora = minutos * 60;
    this.output.value = hora;
  }
}

const conversor = new ConversorDeTempo(
  "#hora-input",
  "#minuto-output",
  "#btn-calcular"
);
