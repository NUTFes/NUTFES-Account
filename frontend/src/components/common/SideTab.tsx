import { Phone, AccountCircle } from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

interface LinkTabProps {
  label?: string;
  href?: string;
  icon?: React.ReactElement;
}

const LinkTab = (props: LinkTabProps) => (
  <Tab iconPosition="start" component="a" {...props} />
);

const SideTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: 280 }}>
      <Tabs value={value} onChange={handleChange} orientation="vertical">
        <LinkTab icon={<AccountCircle />} label="ホーム" href="/" />
        <LinkTab icon={<Phone />} label="個人情報" href="/personal-info" />
        <LinkTab icon={<Phone />} label="Page Three" href="#" />
      </Tabs>
    </Box>
  );
};

export default SideTab;
