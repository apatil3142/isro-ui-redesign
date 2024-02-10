import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ISROLogo from '../assets/ISRO-Color.svg';
import EmblemIndiaTiranga from '../assets/Emblem_of_India_(Gold).svg';
import Menus from '../utils/menu.json';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  z-index: 99;
  &::before{
    position: absolute;
    content: '';
    top: 0%;
    width: 100%;
    left: 0;
    height: 200px;
    background: linear-gradient(to bottom, rgba(137, 137, 137, 0.5), transparent);
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  width: 90%;
  z-index: 99;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Logo = styled.img`
  width: 90px;
  aspect-ratio: 4/3;
  object-fit: contain;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const SubMenuDrawer = styled.div`
  position: absolute;
  top: 100%;
  left: 5px;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 6px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  min-width: 200px;
  overflow: hidden;
  z-index: 99;
`;

const LogoTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  max-width: 190px;
`;

const MenuTitle = styled(LogoTitle)<{isActive?: boolean}>`
  padding: 4px 10px;
  color: ${({isActive}) => isActive ? '#ffa600' : ''};
`;

const Label = styled.div`
  font-size: 14px;
`;

const SubMenuLabel = styled(Label)`
  padding: 6px;
  background: none;
  transition: background 0.3s ease;
  &:hover{
    background: linear-gradient(to left, #ffa60094, #ffff007f);
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  position: relative;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 10px;
`;

const VerticalDivider = styled.div`
  width: 2px;
  background-color: #bbb;
  border-radius: 4px;
  height: inherit;
`;

const LogoName = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  margin-left: 6px;
`;

const Navbar = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState<boolean>(false);
  const [menuDrawerId, setMenuDrawerId] = useState<number>(-1);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const handleMenuClick = useCallback((hasSubMenu: boolean, to: string) => {
    if(!hasSubMenu){
      navigate(to);
    }
  }, [navigate]);

  return (
    <Container>
      <NavbarWrapper>
        <LogoContainer>
          <Logo src={ISROLogo} />
          <VerticalDivider />
          <LogoName>
            <LogoTitle>Indian Space Research Orgnization</LogoTitle>
            <Label>Department of Space</Label>
          </LogoName>
        </LogoContainer>
        <MenuContainer>
          {Menus.menuList.map((menuItem, index) => (
            <MenuItem onMouseEnter={() => {setMenuDrawerOpen(true); setMenuDrawerId(index);}} onMouseLeave={() => {setMenuDrawerOpen(false); setMenuDrawerId(-1);}}>
              <MenuTitle isActive={pathname.split('/')[1] === menuItem.to.split('/')[1]} onClick={() => handleMenuClick(!!(menuItem?.subMenu && menuItem?.subMenu?.length > 0), menuItem.to)}>{menuItem.name}</MenuTitle>
              {menuItem.subMenu && 
              <>
                {menuDrawerId === index && menuDrawerOpen && 
                <SubMenuDrawer>
                  {menuItem.subMenu?.map(submenu => (
                    <SubMenuLabel onClick={() => navigate(submenu.to)}>{submenu.name}</SubMenuLabel>
                  ))}
                </SubMenuDrawer>
                }
              </>
              }
            </MenuItem>
          ))}
        </MenuContainer>
        <RightContainer>
          <Logo src={EmblemIndiaTiranga} />
          <Label>सत्यमेव जयते</Label>
        </RightContainer>
      </NavbarWrapper>
    </Container>
  );
};

export default Navbar;
