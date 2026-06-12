const temporizador = {
  contador: 0,

  iniciar() {
    setInterval(() => {
      this.contador++;
      console.log(this.contador);
    }, 1000);
  }
};

temporizador.iniciar();