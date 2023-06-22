import { AccountCircle, ListAlt, QrCode } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";

const SideTab = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };

  const tabs = [
    {
      key: "home",
      name: "ホーム",
      icon: <AccountCircle />,
      url: "/",
    },
    {
      key: "personal-info",
      name: "個人情報",
      icon: <ListAlt />,
      url: "/personal-info",
    },
    {
      key: "qrcode",
      name: "学祭QRコード",
      icon: <QrCode />,
      url: "/qrcode",
    },
  ];

  return (
    <List sx={{ width: 280 }}>
      {tabs.map((tab) => (
        <ListItem
          key={tab.key}
          disablePadding
          sx={{
            width: 280,
            height: 44,
          }}
        >
          <ListItemButton
            autoFocus={router.pathname === tab.url}
            onClick={() => handleClick(tab.url)}
            sx={{
              borderTopRightRadius: 22,
              borderBottomRightRadius: 22,
              color: "text.secondary",
              "&:focus": {
                backgroundColor: "#E8F0FE",
                color: "#1967D2",
                "& .MuiListItemIcon-root": {
                  color: "#1967D2",
                },
              },
            }}
          >
            <ListItemIcon>{tab.icon}</ListItemIcon>
            <ListItemText
              primary={tab.name}
              sx={{
                width: 200,
                height: 20,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideTab;
