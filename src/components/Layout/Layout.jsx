import { NavLink, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <header>
        <h4>"TravelTrucks"</h4>
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
