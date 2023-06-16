import { Card, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";

export const Bureau: NextPage = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };
  return (
    <main>
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
            <Typography variant="h5">Comming soon Bureau Page</Typography>
            <Button onClick={() => handleClick("/")}>Return to Home</Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Bureau;
