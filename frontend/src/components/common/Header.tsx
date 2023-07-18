import { AppsRounded, HelpOutline, Logout, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import { ReactElement, ReactNode, cloneElement, useState } from "react";

import { APPS } from "@/constants/apps";

import HeaderLogo from "../icons/HeaderLogo";

interface Props {
  children?: ReactNode;
}

interface ElevationScrollProps {
  children?: ReactElement;
  window?: () => Window;
}

// スクロール時にHeaderに影が表示される処理
// TODO: Layoutに移しても良いかも。
const ElevationScroll = (props: ElevationScrollProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children!, {
    elevation: trigger ? 4 : 0,
  });
};

const Header = ({ children }: Props, props: ElevationScrollProps) => {
  const session = useSession();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [anchorElApps, setAnchorElApps] = useState<null | HTMLElement>(null);

  // 新規タブ処理
  const handleClick = (link: string) => {
    window.open(link, "_blank")?.focus();
  };

  // ユーザーメニュー
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // ユーザーメニュー：ログアウト
  const handleLogout = () => {
    signOut().catch((error) => {
      console.error(error);
    });
  };

  // Appsメニュー
  const handleOpenAppsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElApps(event.currentTarget);
  };
  const handleCloseAppsMenu = () => {
    setAnchorElApps(null);
  };

  return (
    <ElevationScroll {...props}>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: "rgba(255,255,255,0.95)",
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar>
            {/* NUTFES Logo */}
            <Box
              component="a"
              href="/"
              sx={{
                pr: 2,
              }}
            >
              <HeaderLogo height={24} width={157} />
            </Box>

            {/* Search */}
            <Box
              // display="flex"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
                borderRadius: "8px",
                backgroundColor: "#F1F3F4",
                px: 2,
                py: 1,
                mr: 2,
                ml: 0,
                width: "100%",
                maxWidth: "722px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Search sx={{ color: "text.secondary" }} />
              <InputBase
                placeholder="NUTFESアカウントを検索"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  ml: 2,
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              />
            </Box>

            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />

            {/* Help Button */}
            <Box>
              <IconButton
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                <HelpOutline sx={{ color: "text.secondary" }} />
              </IconButton>
            </Box>

            {/* Apps Button */}
            <Box>
              <IconButton onClick={handleOpenAppsMenu}>
                <AppsRounded sx={{ color: "text.secondary" }} />
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElApps}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElApps)}
                onClose={handleCloseAppsMenu}
              >
                {APPS.map((app) => (
                  <MenuItem key={app.key} onClick={() => handleClick(app.href)}>
                    <ListItemIcon>{app.icon}</ListItemIcon>
                    <Typography textAlign="center">{app.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Avatar Button */}
            <Box sx={{ ml: 2 }}>
              <Tooltip title={session.data?.user.name}>
                <IconButton
                  size="small"
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                >
                  <Avatar sx={{ width: "32px", height: "32px" }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key="logout" onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout />
                  </ListItemIcon>
                  <Typography textAlign="center">ログアウト</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
          {children}
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
