import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import SplashScreen from "./Components/SplashScreen";

function App() {
  const [isSplashComplete, setIsSplashComplete] = useState(false);

  const handleSplashComplete = () => {
    setIsSplashComplete(true);
  };

  return (
    <>
      <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="bgimage" className="bgimage" />
      <Router>
        {!isSplashComplete && <SplashScreen onSplashComplete={handleSplashComplete} />}
        
        {isSplashComplete && (
          <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
            <Footer />
          </>
        )}
      </Router>
    </>
  );
}

export default App;
