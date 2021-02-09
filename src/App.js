import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Row from "./component/Row";
import Col from "./component/Col";
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Main>
              <Row>
                <Col>
                </Col>
              </Row>
        </Main>
      <Footer />
    </div>
  );
}

export default App;
