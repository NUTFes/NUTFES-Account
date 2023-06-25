import { Card, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { DetailLayout } from "@/components/layout";

export const Birthday: NextPage = () => {
  const router = useRouter();

  const details = {
    // TODO: 今後constansに移行する
    title: "生年月日",
    description:
      "生年月日は、Google サービスでアカウントのセキュリティ保護とカスタマイズに使用される場合があります。 この Google アカウントを企業または組織で使用する場合は、アカウントの管理者の生年月日を指定してください。",
  };

  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };
  return (
    <DetailLayout title={details.title} description={details.description}>
      <div className="flex h-screen w-full items-center justify-center">
        <div className="w-1/3">
          <Card
            sx={{
              width: "100%",
              height: "10rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Typography variant="h5">Comming soon Birthday Page</Typography>
            <Button onClick={() => handleClick("/")}>Return to Home</Button>
          </Card>
        </div>
      </div>
    </DetailLayout>
  );
};

export default Birthday;
