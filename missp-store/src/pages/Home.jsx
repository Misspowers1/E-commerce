import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fbf0f4;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </Container>
  );
};

export default Home;
