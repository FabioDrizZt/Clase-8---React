import { Component } from "react";
const API_PREFIX = "https://rickandmortyapi.com/api/character/";
const names = ["Pedro", "Lucia", "Juan"];

export default class ClassComponent extends Component {
  state = {
    index: 0,
    message: "",
    name: null,
  };

  getData = async () => {
    fetch(`${API_PREFIX}${this.state.index}`)
      .then((res) => res.json())
      .then((resp) => {
        this.setState({ character: resp });
      });
  };
  incrementCount = () => {
    this.setState({ index: this.state.index % 826 + 1 });
  };

  componentDidMount() {
    this.setState({
      message: "Saludos desde didMount",
      name: names[this.state.index],
      index: 1,
    });
    this.getData();
  }

  componentDidUpdate(prevState) {
    if (prevState.index !== this.state.index) this.getData();
  }

  render() {
    return (
      <>
        <h1>Componente de Clase</h1>
        <p>{this.state.index}</p>
        <h2>El nombre del personaje es: {this.state.character?.name}</h2>
        <img
          src={this.state.character?.image}
          alt={this.state.character?.name}
        />
        <br />
        <button onClick={() => this.incrementCount()}>
          Cambiar al siguiente personaje
        </button>
        <hr />
      </>
    );
  }
}
