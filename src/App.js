import React from "react";
import User from "./component/User";
import "./App.css";
import axios from "axios";
import Profil from "./component/Profil";
import { BrowserRouter, Route } from "react-router-dom";
import Comment from "./component/Comment";

class App extends React.Component {
  state = {
    User: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(Users =>
        this.setState({
          User: Users.data
        })
      )
      .catch(err => console.log(err));

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <User User={this.state.User} />
              </>
            )}
          />

          <Route
            exact
            path="/profile/:id"
            render={props => (
              <>
                <Profil {...props} />
              </>
            )}
          />

          <Route
            exact
            path="/Comment/:id"
            render={props => <Comment {...props} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
