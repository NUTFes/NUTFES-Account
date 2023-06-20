import {
  HomeIcon,
  SettingsIcon,
  PersonAddIcon,
  EventIcon,
  ListAltIcon,
} from "@mui/icons-material";
import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
// icons

const ToolCard = () => {
  const toolList = [
    {
      name: "home",
      displayName: "ホーム",
      icon: <HomeIcon />,
      url: "/",
    },
    {
      name: "toolList",
      displayName: "イベント一覧",
      icon: <EventIcon />,
      url: "/",
    },
    {
      name: "participantList",
      displayName: "参加者一覧",
      icon: <ListAltIcon />,
      url: "/",
    },
    {
      name: "participantEventRegistration",
      displayName: "参加者・イベント登録",
      icon: <PersonAddIcon />,
      url: "/",
    },
    {
      name: "setting",
      displayName: "設定",
      icon: <SettingsIcon />,
      url: "/",
    },
  ];

  return (
    <Card sx={{ maxWidth: 275 }}>
      <Typography
        fontWeight="bold"
        color="text.secondary"
        sx={{ mx: 5, my: 2 }}
      >
        ツール
      </Typography>
      <List>
        {toolList.map((tool) => (
          <ListItem key={tool.name} disablePadding>
            <ListItemButton href={tool.url}>
              {tool.icon ? <ListItemIcon>{tool.icon}</ListItemIcon> : null}
              <ListItemText primary={tool.displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ToolCard;
