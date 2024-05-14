class ConversorDeMetragem {
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
    const cm = Number(this.input.value);
    const metros = cm / 100;
    this.output.value = metros;
  }
}

const conversor = new ConversorDeMetragem(
  "#cm-input",
  "#m-output",
  "#btn-calcular"
);
