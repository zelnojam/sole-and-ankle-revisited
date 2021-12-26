import React from 'react';
import styled from 'styled-components/macro';

import { VIEW, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>A&nbsp;Vendre</NavLink>
          <NavLink href='/new'>Nouvellese&nbsp;Versions</NavLink>
          <NavLink href='/men'>Hommes</NavLink>
          <NavLink href='/women'>Femmes</NavLink>
          <NavLink href='/kids'>Les&nbsp;Enfants</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side>
          <Buttons>
            <UnstyledButton>
              <Icon id='shopping-bag' />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id='search' />
            </UnstyledButton>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon id='menu' />
            </UnstyledButton>
          </Buttons>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;
  overflow-y: hidden;

  @media ${VIEW.mobile} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.5vw - 4.75rem, 3rem);
  margin: 0px 48px;

  @media ${VIEW.tablet} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Buttons = styled.div`
  display: none;

  @media ${VIEW.tablet} {
    display: flex;
    justify-content: flex-end;
    gap: clamp(1rem, 7vw - 1.5rem, 2rem);
  }
`;

export default Header;
