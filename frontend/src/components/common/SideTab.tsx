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
    <List sx={{ pt: "20px", pb: 0, width: "100%" }}>
      {Tabs.map((tab) => (
        <ListItem key={tab.key} disablePadding>
          <ListItemButton
            onClick={() => handleClick(tab.href || "#")}
            sx={
              router.pathname === tab.href
                ? {
                    py: "10px",
                    pr: "16px",
                    pl: "24px",
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
                    py: "10px",
                    pr: "16px",
                    pl: "24px",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                    color: "text.secondary",
                  }
            }
          >
            <ListItemIcon style={{ minWidth: "40px" }} sx={{ pr: "16px" }}>
              {tab.icon}
            </ListItemIcon>
            <ListItemText
              sx={{ width: "220px", height: "20px" }}
              primary={tab.name}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideTab;
