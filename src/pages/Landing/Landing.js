import React from "react";
import { Button} from 'react-bootstrap';
import './landing.css'

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <>
        <div className="image-landing"></div>

        <div className="landing-description">
            <h1>E-COMMERCE DE GAMES</h1>
            <h3>Seu melhor site para compra de jogos</h3>
            <Button variant="success" className = "start-landing" style = {{"font-size":"60px", "border-radius":"20px"}} href="/home">Start</Button>
        </div>
      </>
    );
  }
}

export default Landing;
