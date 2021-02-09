import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Container from "./component/Container";
import Row from "./component/Row";
import Col from "./component/Col";
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Main>
            <Container>
              <Row>
                <Col>
                </Col>
              </Row>
            </Container>
        </Main>
      <Footer />
    </div>
  );
}

export default App;
