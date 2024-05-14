class ConversorDeTemperatura {
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
      return alert('Erro *Campo vazio , *Informe somente números')
    }
    const tempCelsius = Number(this.input.value);
    const tempfahrenheit = 1.8 * tempCelsius + 32;
    this.output.value = tempfahrenheit;
  }
}

const conversor = new ConversorDeTemperatura(
  "#celsius-input",
  "#fahrenheit-output",
  "#btn-calcular"
);
