import { Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";

import { TABS } from "@/constants/tabs";

const HeadTab = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };
  return (
    <Tabs
      value={TABS.findIndex((tab) => tab.href === router.pathname)}
      centered
      sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none" } }}
    >
      {TABS.map((tab) => (
        <Tab
          component="a"
          onClick={() => handleClick(tab.href || "#")}
          key={tab.key}
          label={tab.name}
          href={tab.href || "#"}
        />
      ))}
    </Tabs>
  );
};

export default HeadTab;
