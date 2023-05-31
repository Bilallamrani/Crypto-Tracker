import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";


function App() {

  const useStyles = makeStyles (() => ({
      App: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh",
      },
  }));

  const classes = useStyles()

  return (
    
    <Router>
      <div className={classes.App}>
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/coins/:id" component={CoinPage} />
        </Switch>
      </div>
    </Router> 
    
    
  );
}

export default App;