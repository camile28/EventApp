import { useContext } from "react";

import { AuthenticationContext } from "./AuthenticationContext";
import { Nav, Ul, Li, NavLink, Logo, Button } from "../styles/StyledNavBar";

export const NavBar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoading) {
    return;
  }

  return (
    <Nav>
      <Logo
        src="https://www.creativefabrica.com/wp-content/uploads/2022/05/19/KT-Logo-with-Classic-Modern-Style-Graphics-30830731-2-580x387.jpg"
        alt="Logo"
      />
      <Ul>
        {isSignedIn ? (
          <>
            <Li>
              <NavLink to="/">Home</NavLink>
            </Li>
            <Li>
              <NavLink to="/participants">Participants</NavLink>
            </Li>
            <Li>
              <NavLink to="/addParticipant">Register participant</NavLink>
            </Li>
          </>
        ) : (
          <>
            <Li>
              <NavLink to="/login">Login</NavLink>
            </Li>
            <Li>
              <NavLink to="/register">Register</NavLink>
            </Li>
          </>
        )}
      </Ul>
      {isSignedIn && <Button onClick={onLogout}>LOGOUT</Button>}
    </Nav>
  );
};
