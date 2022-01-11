import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #fbf0f4;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 90vh;

  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  margin-top: 50px;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
  width: 50%;

  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  padding: 5px;
  margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;

  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  font-weight: 700;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Amount = styled.span`
  margin: 0 5px;
  border: 1px solid #1282a2;
  display: flex;
  width: 30px;
  border-radius: 10px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #1282a2;
  background-color: white;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="/images/9.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Floral Dress</Title>
          <Description>
            Floral dresses are symbol of elegance, sophistication and
            femininity. Floral dresses are appropriate for every season even if
            they always symbolize the spring, the bloom, the blossoming, the
            develop, a good and full of beauty growth. They indicate
            carefreeness and cheerfulness (or at least the hope and the desire
            to feel that way).
          </Description>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
