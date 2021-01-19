import * as React from "react";
import { AppContainer } from './AppStyles'
import HeaderBar from "./common-components/header-bar";

export default function App() {
  return (
    <AppContainer className="App">
      <HeaderBar companyName="Sov-Tech" />
      <h1>Hello CodeSandbox2</h1>
      <h2>Start editing to see some magic happen!</h2>
    </AppContainer>
  );
}
