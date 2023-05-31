import "./App.css";
// import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import { makeStyles } from "@material-ui/core";
import Header from "./Components/Header";
import routes from "./Routes";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.App}>{routes()}</div>

    //
    // <Router>

    //     {/* <HomePage /> */}
    //     {/* <Header /> */}
    //     <Route path="/" exact component={HomePage} />
    //     <Switch>
    //       <Route path="/coins/:id" component={CoinPage} />
    //     </Switch>

    // </Router>
    //
  );
}

export default App;
