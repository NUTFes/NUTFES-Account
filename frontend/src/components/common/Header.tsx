import { AppBar, Avatar } from "@mui/material";
import React from "react";

import HeaderLogo from "../icons/HeaderLogo";

interface Props {
  children?: React.ReactNode;
}

const Header = ({ children }: Props) => (
  <>
    <AppBar
      sx={{
        height: "4rem",
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        padding: "0.5rem",
        backgroundColor: "#FFFFFF",
      }}
      elevation={0}
    >
      <div className="flex h-12 items-center justify-end">
        <HeaderLogo height={24} width={157} />
      </div>
      <div className="ml-auto flex h-12 items-center justify-center pb-1 pl-1.5 pr-0.5 pt-1">
        <div className="h-10 p-1">
          <Avatar className="h-8 w-8" src="/favicon.ico" />
        </div>
      </div>
    </AppBar>
    {children}
  </>
);

export default Header;
