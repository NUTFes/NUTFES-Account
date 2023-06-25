import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";

import { Tabs } from "@/constants/tabs";

const SideTab = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };

  return (
    <List sx={{ width: 280 }}>
      {Tabs.map((tab) => (
        <ListItem
          key={tab.key}
          disablePadding
          sx={{
            width: 280,
            height: 44,
          }}
        >
          <ListItemButton
            onClick={() => handleClick(tab.href)}
            sx={
              router.pathname === tab.href
                ? {
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    backgroundColor: "#E8F0FE",
                    color: "#1967D2",
                    "& .MuiListItemIcon-root": {
                      color: "#1967D2",
                    },
                    "&:hover": {
                      backgroundColor: "#E8F0FE",
                    },
                  }
                : {
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    color: "text.secondary",
                  }
            }
          >
            <ListItemIcon>{tab.icon}</ListItemIcon>
            <ListItemText
              primary={tab.displayName}
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
