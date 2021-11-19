import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Signup from "./components/signup";
import Header from "./components/Header";
import Login from "./components/login";
import Chat from "./components/chat";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/chat" component={Chat}></Route>
      </Router>
    </>
  );
}

export default App;
