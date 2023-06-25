import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  useScrollTrigger,
} from "@mui/material";
import { ReactNode, ReactElement, cloneElement } from "react";

import HeaderLogo from "../icons/HeaderLogo";

interface Props {
  children?: ReactNode;
}

interface ElevationScrollProps {
  children?: ReactElement;
  window?: () => Window;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children!, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = ({ children }: Props, props: ElevationScrollProps) => (
  <ElevationScroll {...props}>
    <AppBar
      sx={{
        position: "sticky",
        backgroundColor: "rgba(255,255,255,0.9)",
      }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              // display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <HeaderLogo height={24} width={157} />
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/favicon.ico" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        {children}
      </Container>
    </AppBar>
  </ElevationScroll>
);

export default Header;
