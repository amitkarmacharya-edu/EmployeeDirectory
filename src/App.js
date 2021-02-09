import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Row from "./component/Row";
import Employees from "./component/Employees";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Main>
          <Employees />
        </Main>
      <Footer />
    </div>
  );
}

export default App;
