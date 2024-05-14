class Calculadora {
  constructor(output) {
    this.output = document.querySelector(output);
    this.eventListener();
  }

  eventListener() {
    console.log(this.btn);
    document.addEventListener("click", (event) => {
      const element = event.target;
      if (!!element.closest("." + "calculadora")) {
        this.opration(element.textContent);
      }
    });
  }

  addOutput(value) {
    this.output.value += value;
  }

  removeOutput(value) {
    this.output.value = this.output.value.slice(0, -1);
  }

  clear() {
    this.output.value = "";
  }

  calcular() {
    this.output.value = eval(this.output.value);
  }

  opration(element) {
    switch (element) {
      case "CE":
        this.clear();
        break;
      case "<":
        this.removeOutput();
        break;
      case "=":
        this.calcular();
        break;
      default:
        this.addOutput(element);
    }
  }
}

const conversor = new Calculadora("#output");
