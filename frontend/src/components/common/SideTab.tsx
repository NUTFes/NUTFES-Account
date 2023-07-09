import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

import { TABS } from "@/constants/tabs";

const SideTab = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };

  return (
    <List sx={{ pt: "20px", pb: 0, width: "100%" }}>
      {TABS.map((tab) => (
        <ListItem key={tab.key} disablePadding>
          <ListItemButton
            onClick={() => handleClick(tab.href || "#")}
            sx={[
              {
                py: "10px",
                pr: "16px",
                pl: "24px",
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
              },
              router.pathname === tab.href
                ? {
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
                    color: "text.secondary",
                  },
            ]}
          >
            <ListItemIcon style={{ minWidth: "40px" }} sx={{ pr: "16px" }}>
              {tab.icon}
            </ListItemIcon>
            <ListItemText
              primary={<Typography fontSize="0.875rem">{tab.name}</Typography>}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SideTab;
