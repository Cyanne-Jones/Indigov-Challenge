'use client'

import Link from 'next/link';
import styled from '@emotion/styled';

const StyledNav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #330072;
  color: #f5b27e;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

const StyledLink = styled(Link)`
  color: #f5b27e;
  text-decoration: none;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  :hover {
    background-color: rgba(245, 178, 126, 0.3);
  }
`

export const NavBar = () => {
  return (
    <StyledNav>
      <StyledLink href="/">
        Home
      </StyledLink>
      <StyledLink href="/add">
        Add Constituent
      </StyledLink>
    </StyledNav>
  )
}