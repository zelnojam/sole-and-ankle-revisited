/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss} aria-label='menu'>
      <Content aria-label='menu-content'>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>Close</VisuallyHidden>
          <Icon id='close' />
        </CloseButton>
        <Navigation>
          <ActiveLink href='/sale'>Sale</ActiveLink>
          <NavigationLink href='/new'>New&nbsp;Releases</NavigationLink>
          <NavigationLink href='/men'>Men</NavigationLink>
          <NavigationLink href='/women'>Women</NavigationLink>
          <NavigationLink href='/kids'>Kids</NavigationLink>
          <NavigationLink href='/collections'>Collections</NavigationLink>
        </Navigation>
        <Footer>
          <FooterLink href='/terms'>Terms and Conditions</FooterLink>
          <FooterLink href='/privacy'>Privacy Policy</FooterLink>
          <FooterLink href='/contact'>Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: hsl(var(--modal-bg-hue) / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  width: max(300px, 40vw);
  height: 100%;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  padding: 32px;
  padding-right: 20px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: auto 0;
`;

const NavigationLink = styled.a`
  font-size: calc(18 / 16 * 1rem);
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
`;

const ActiveLink = styled(NavigationLink)`
  color: var(--color-secondary);
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: calc(14 / 16 * 1rem);
  color: var(--color-gray-900);
  text-decoration: none;
`;

export default MobileMenu;
