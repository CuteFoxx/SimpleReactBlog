import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";
import Posts from "./components/Posts/Posts";
import CreatePost from "./components/CreatePost/CreatePost";
import PostDetails from "./components/PostDetails/PostDetails";
import { useState } from "react";
import { userContext } from "./Contexts/userContext";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  const [user, setUser] = useState(null);
  const [isLogged, setLogged] = useState(false);

  return (
    <userContext.Provider value={{ user, setUser, isLogged, setLogged }}>
      <Router>
        <div className="container">
          <header className="header">
            <Link to="/">
              <h2 className="header__title">Simple react blog</h2>
            </Link>
            <Navbar />
          </header>

          <Switch>
            <Route exact path="/">
              <Posts></Posts>
            </Route>
            <Route path="/create-post">
              <CreatePost></CreatePost>
            </Route>
            <Route path="/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </userContext.Provider>
  );
};

export default App;
