import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";

function App() {
    return (
        <Container>
            <Header />
            <ContainerCard />
        </Container>
    );
}

export default App;
