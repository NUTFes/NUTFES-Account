import { Card, Button, Typography } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => (
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
          <Typography variant="h5">Tailwind + MUI</Typography>
          <Button>test</Button>
        </Card>
      </div>
    </div>
  </main>
);

export default Home;
