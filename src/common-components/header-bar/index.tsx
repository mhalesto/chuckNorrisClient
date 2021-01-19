import * as React from "react";
import { HeaderContainer } from "./styles";

interface IHeaderBar {
  companyName: string
}

const headerBar = (props: IHeaderBar) => {
  const { companyName } = props;
  return (
    <HeaderContainer>
      <span className="logo">{companyName}</span>
    </HeaderContainer>
  );
};

export default headerBar;