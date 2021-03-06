import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: { 
    number: {
      value:  100,
      density:  {
        enable: true,
        value_area: 800
      }
    }
  }          	
}

function App() {
  constructor(); {
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  return (
    <div className="App">
      <Particles className = 'particles'
        params={particlesOptions} 
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange}/>


      {/* <Facerecognition /> */}
    </div>
  );
}

export default App;
