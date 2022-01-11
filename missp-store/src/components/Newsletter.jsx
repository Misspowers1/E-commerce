import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 60vh;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.div`
  font-size: 24px;
  margin: 20px 0;
  font-weight: 300;

  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #1282a2;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
