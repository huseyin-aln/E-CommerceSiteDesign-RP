import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: #232f3e;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}
          <Logo>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              {"< h-aln >"} <span style={{ color: "#CF7808" }}>shop</span>
            </Link>
          </Logo>
        </Left>
        <Center>
          <MenuItem>
            <Link
              to="/categories"
              style={{ color: "white", textDecoration: "none" }}
            >
              CATEGORIES
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to="/productlist"
              style={{ color: "white", textDecoration: "none" }}
            >
              PRODUCTS
            </Link>
          </MenuItem>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/register"
              style={{ color: "white", textDecoration: "none" }}
            >
              REGISTER
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              SIGN IN
            </Link>
          </MenuItem>

          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart" style={{ color: "white" }}>
                <ShoppingCartOutlinedIcon />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
