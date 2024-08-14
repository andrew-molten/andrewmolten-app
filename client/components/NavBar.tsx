import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="header">
        <NavLink to={'/'}>Andrew Molten</NavLink>
      </h1>
      <div className="nav-links">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/projects'}
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={'/blog'}
          className={({ isActive }) =>
            isActive ? 'nav-link active-link' : 'nav-link'
          }
        >
          Blog
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
