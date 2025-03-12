import { NavLink, Outlet } from 'react-router-dom';
// import { Logo } from './Layout.styled';
export const Layout = () => {
  return (
    <div>
      <header>
        <p>
          <span>Travel</span>Trucks
        </p>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/campers">Catalog</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};
