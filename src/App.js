import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Employees from "./component/Employees";
import "bootstrap/dist/css/bootstrap.css";

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
