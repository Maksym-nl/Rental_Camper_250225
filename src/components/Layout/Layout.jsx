import { NavLink, Outlet } from 'react-router-dom';
import { Header, Logo, Trucks, Nav } from './Layout.styled';
export const Layout = () => {
  return (
    <div>
      <Header>
        <Logo>
          Travel<Trucks>Trucks</Trucks>
        </Logo>
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
