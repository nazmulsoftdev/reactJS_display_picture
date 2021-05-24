import React, { Component } from 'react';
import './asset/css/style.css';
import Particles from 'react-particles-js';
import Logo from './components/logo/Logo';
import Header from './components/header/Header';
import Searchbox from './components/SearchBox/Searchbox';
import Imagebox from './components/ImageBox/Imagebox';


const  particles = {
  line_linked: {
    shadow: {
      enable: true,
      color: "#3CA9D1",
      blur: 5,
    }
  }
}
 

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      Url: '',
      ImageUrl:''
    }
  }



  // Searchbox input handle

  HandleSearchBoxinput = (event) => {

    this.setState({
      Url: event.target.value
    });

  }


  // Searchbox button handle
  SubmitAction = () => {
    this.setState({
      ImageUrl: this.state.Url
    });

  document.querySelector(".displayImg").style.visibility = 'visible';

}



  render() {
      return (
        <div className="container">
            <Particles 
              className="particleName"
              params={{particles}}
            />
              <Logo />
              <Header />
              <Searchbox passInputAction={this.HandleSearchBoxinput}
              passSubmitAction={this.SubmitAction} />
            <Imagebox passImage={this.state.ImageUrl}/>
         </div>
      );
  }

  

}

export default App;
