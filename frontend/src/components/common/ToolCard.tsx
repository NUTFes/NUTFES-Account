import { Home, Settings, PersonAdd, Event, ListAlt } from "@mui/icons-material";
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
      icon: <Home />,
      url: "/",
    },
    {
      name: "toolList",
      displayName: "イベント一覧",
      icon: <Event />,
      url: "/",
    },
    {
      name: "participantList",
      displayName: "参加者一覧",
      icon: <ListAlt />,
      url: "/",
    },
    {
      name: "participantEventRegistration",
      displayName: "参加者・イベント登録",
      icon: <PersonAdd />,
      url: "/",
    },
    {
      name: "setting",
      displayName: "設定",
      icon: <Settings />,
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
