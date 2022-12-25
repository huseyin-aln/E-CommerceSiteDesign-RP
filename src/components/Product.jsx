import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #439fc5;
  margin-right: 20px;
`;

const Price = styled.h2`
  font-size: 20px;
  color: #b12704;
`;

const Product = ({ item, handleClick }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={() => navigate("/cart")}>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon onClick={() => navigate("/categories")}>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
      <PriceInfo>
        <Title>{item.name}</Title>
        <Price>${item.price}</Price>
      </PriceInfo>
    </Container>
  );
};

export default Product;
