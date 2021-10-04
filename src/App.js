import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import About from './Components/About/About';
import Doc from './Components/Doc/Doc';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {



  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>


          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/service">
            <Service></Service>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/doc">
            <Doc></Doc>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>
    </div>
  );
}

export default App;
