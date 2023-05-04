class Animal {
  tipo;
  nombre;
  sonido;

  constructor(tipo, nombre, sonido) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.sonido = sonido;
  }

  hacerSonido = () => {
    console.log(
      `El animal ${this.tipo} se llama ${this.nombre} y hace el sonido de ${this.sonido}`
    );
  };

   zoo = () => {
    const nombreAnimal = prompt("elija un animal (gato, perro, leon)");
    let animal;

    switch (nombreAnimal) {
      case "gato":
        animal = new Animal("gato", "ciruja", "miau" );
        break;
      case "perro":
        animal = new Animal("perro",  "firualais","guau");
        break;
      case "leon":
        animal = new Animal("leon", "garritas" ,"rawwrrr!" );
        break;
      default:
        console.log("animal no reconocido");
        return null;
    }

    animal.hacerSonido();

    return null;
  };
}

const miAnimal = new Animal("perro", "Rex", "guau");
miAnimal.hacerSonido();
miAnimal.zoo();