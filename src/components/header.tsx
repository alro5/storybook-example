import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import logo from "../assets/skymill-logo.png";

export interface HeaderProps {}

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <NavLink to="/" end>
        <img className="header__logo" src={logo} alt="Skymill logo" />
      </NavLink>
      <nav>
        <NavLink
          end
          className={(props) => (props.isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(props) => (props.isActive ? "active" : "")}
          to="/users"
        >
          Users
        </NavLink>
        <NavLink
          className={(props) => (props.isActive ? "active" : "")}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
