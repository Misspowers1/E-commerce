import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  LocationOn,
  Phone,
  Mail,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;

  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Description = styled.div`
  margin: 30px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;

  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Tittle = styled.h3`
  margin-bottom: 30px;
  margin-top: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 10px;
`;

const Payment = styled.img`
height: 100px;
width: 100px
object-fit: cover;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EDNA.</Logo>
        <Description>
          EDNA Clothing Store is a retail clothing store specializing in unique
          clothing and accessories. We encourage customers to be experimental
          with new clothing styles. Our mission is to understand what our
          customers' needs and hopes are after buying urban wear clothing.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Quick Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accesorries</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Tittle>Contact</Tittle>
        <ContactItem>
          {" "}
          <LocationOn style={{ color: "#1282a2", marginRight: "10px" }} /> Okore
          Road. Millimani,Kisumu
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ color: "#1282a2", marginRight: "10px" }} /> +254 721
          800 308{" "}
        </ContactItem>
        <ContactItem>
          {" "}
          <Mail style={{ color: "#1282a2", marginRight: "10px" }} />{" "}
          edna01@gmail.com
        </ContactItem>
        <Payment src="/images/32.png" />
      </Right>
    </Container>
  );
};

export default Footer;
