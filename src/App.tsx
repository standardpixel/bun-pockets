import * as React from "react";
import { Container } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import ViewHome from "./views/home/Home";
import Header from "./components/Header";
import {goal} from "./entities/Goal/mock";
import {transaction} from "./entities/Transaction/mocks";
import {pocket} from "./entities/Pocket/mocks";

export function App() {
  const goalsState = React.useState([goal]);
  const transactionsState = React.useState([transaction]);
  const pocketsState = React.useState([pocket]);

  return (
    <Container className="App g-0" fluid>
      <Header />
      <ViewHome goalsState={goalsState} transactionsState={transactionsState} pocketsState={pocketsState} />
    </Container>
  );
}

export default App;
