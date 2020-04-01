import React, { Component } from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Profil extends Component {
  state = {
    Profil: []
  };

  componentDidMount() {
    this.getProfils();
  }

  getProfils = () =>
    Axios.get(
      `https://jsonplaceholder.typicode.com/posts?id=${this.props.match.params.id}`
    )
      .then(Profils =>
        this.setState({
          Profil: Profils.data
        })
      )
      .catch(err => console.log(err));

  render() {
    return (
      <div className="CardProfil">
        {this.state.Profil.map((el, key) => (
          <Card bg="info" style={{ width: "18rem" }} key={key}>
            <Card.Img variant="top" src="" className="" />
            <Card.Body>
              <Card.Title>{el.title}</Card.Title>
              <Card.Text>{el.body}</Card.Text>
              <Link to={`/Comment/${el.id}`}>
                <Button variant="light">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default Profil;
