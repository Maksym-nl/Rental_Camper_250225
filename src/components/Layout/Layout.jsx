import { NavLink, Outlet } from 'react-router-dom';
import { Header, Logo, Trucks, Nav, LogoLink } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Header>
        <LogoLink to="/campers">
          <Logo>
            Travel<Trucks>Trucks</Trucks>
          </Logo>
        </LogoLink>
        <Nav>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/campers">Catalog</NavLink>
          </li>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
      {/* <footer>Footer</footer> */}
    </div>
  );
};
