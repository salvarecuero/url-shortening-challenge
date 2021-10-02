import React from "react";

import NavBarLink from "../NavBarLink/NavBarLink.component";
import Button from "../Button/Button.component";

import "./LoginAndSignUp.styles.scss";

function LoginAndSignUp() {
  return (
    <>
      <NavBarLink title="Login" />
      <Button rounded>Sign Up</Button>
    </>
  );
}

export default LoginAndSignUp;
