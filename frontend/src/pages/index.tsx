import { Card, Button, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";

import Header from "@/components/common/Header";

const Home: NextPage = () => {
  Header();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (session) {
        await router.push("/");
      } else {
        await signIn("keycloak", { callbackUrl: `/` });
      }
    })();
  }, [session, router]);
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
            <Typography variant="h5">Tailwind + MUI</Typography>
            <Button>test</Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
