export class Pokemon {
  id: number;
  name: string;
  type: string;

  constructor(id: number, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  presentarse(): string {
    return `Soy ${this.name}, de tipo ${this.type}`;
  }
}

const pikachu = new Pokemon(1, "Pikachu", "Eléctrico");
console.log(pikachu.presentarse());