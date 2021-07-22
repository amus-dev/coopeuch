import ListNotes from "../components/list";
import { Container } from "react-bootstrap";
import Header from "../components/header";

const LayoutDefault = () => {
  return (
    <Container>
      <Header />
      <ListNotes />
    </Container>
  );
};

export default LayoutDefault;
