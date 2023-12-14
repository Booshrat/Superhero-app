import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <main>
        <header>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/characters'>Superheros & Villains</NavLink>
                <NavLink to='/search'>Search</NavLink>
            </nav>
        </header>
        <Outlet />
        <footer>
          <p>Superher app 2023</p>
        </footer>
    </main>
  )
}

export default PageWrapper;
