import styled from "styled-components";

import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Li = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: #000;
  }
`;

export const Logo = styled.img`
  height: 110px;
  width: 140px;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #333;
  color: #333;
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
`;
