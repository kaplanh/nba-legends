import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import ContainerCard from "./components/ContainerCard";

function App() {
    return (
        <Container className="text-center">
            <Header />
            <ContainerCard />
        </Container>
    );
}

export default App;
