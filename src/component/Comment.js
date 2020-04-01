import React, { Component } from "react";
import Axios from "axios";
import { Card } from "react-bootstrap";

class Comment extends Component {
  state = {
    Comment: []
  };

  componentDidMount() {
    this.getComment();
  }

  getComment = () =>
    Axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`
    )
      .then(Comment =>
        this.setState({
          Comment: Comment.data
        })
      )
      .catch(err => console.log(err));
  render() {
    console.log(this.state.Comment);
    return (
      <div className="CardComment">
        {this.state.Comment.map((el, key) => (
          <Card bg="info" style={{ width: "18rem" }} key={key}>
            <Card.Img variant="top" src="" className="" />
            <Card.Body>
              <Card.Title>{el.id}</Card.Title>
              <Card.Text>{el.body}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default Comment;
