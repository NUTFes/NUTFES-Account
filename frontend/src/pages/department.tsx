import { Button, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { DetailLayout } from "@/components/layout";
import { DETAIL_PAGE_CONSTANTS } from "@/constants/detailPage";

export const Department: NextPage = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };
  const details = DETAIL_PAGE_CONSTANTS.department;
  return (
    <DetailLayout {...details}>
      <Typography variant="h5">Comming soon Department Page</Typography>
      <Button onClick={() => handleClick("/")}>Return to Home</Button>
    </DetailLayout>
  );
};

export default Department;
