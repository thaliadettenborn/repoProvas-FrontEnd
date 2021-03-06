import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Header from './Header';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    anchorPosition={{
      top: 30,
      left: 5
    }}
    anchorReference={'anchorPosition'}
    transformOrigin={{
      vertical: 'top',
    }}
    {...props}
  />
));

export default function Nav(props) {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Container>
      <FiMenu
        size='35px'
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={() => setMenuIsOpen(true)} />
      <StyledMenu
        id="simple-menu"
        anchorEl={menuIsOpen}
        open={menuIsOpen}
        onClose={() => setMenuIsOpen(false)}
      >
        <MenuItem 
          onClick={() => history.push('/')}
        >
          Home
        </MenuItem>

        {
          pathname !== '/adicionar-prova' &&
          <MenuItem 
            onClick={() => history.push('/adicionar-prova')}
          >
            Adicionar prova
          </MenuItem>
        }

        {
          pathname !== '/visualizar-provas' &&
          <MenuItem 
            onClick={() => history.push('/visualizar-provas')}
          >
            Visualizar provas
          </MenuItem>
        }
      </StyledMenu>
      <Header />
    </Container>
  )
}

const Container = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 3%;
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  
  header{
    font-size: ${props => props.theme.fontSizes.medium};
    align-items: flex-start;
    margin-left: 20px;
  }
`;