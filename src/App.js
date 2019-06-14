import NavBar from "./components/NavBar";
import images from "./images.json";
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images
  };

  mixImages = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.images.map(image => (
           <Card
           id={images.id}
           key={images.id}
           image={images[0].image}
         />
        ))}
      </Wrapper>
    );
  }
}
export default App;
