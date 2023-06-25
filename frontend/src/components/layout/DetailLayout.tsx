import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Divider, Typography, IconButton, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Header, Footer } from "@/components/common";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};

const DetailLayout = ({ title, description, children }: Props) => {
  const router = useRouter();
  const backPage = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };
  return (
    <>
      <header className="h-16 bg-gray-200">
        <Header>
          hoge
          {/* TODO: DetailLayoutのtitleとBack Buttonはここ */}
        </Header>
      </header>

      <div className="sticky z-10 w-full bg-white">
        <div className="flex h-14 items-center justify-center">
          <IconButton aria-label="delete" color="primary" onClick={backPage}>
            <ArrowBackIcon color="action" />
          </IconButton>
          <Typography sx={{ width: 550 }} style={{ fontSize: 28 }}>
            {title}
          </Typography>
        </div>
      </div>

      <Divider sx={{ display: { md: "none", lg: "block" } }} />

      <div className="flex flex-col items-center justify-center overflow-y-scroll px-6 pt-6">
        <div className="mb-8 max-w-xl">
          <Typography color="text.secondary">{description}</Typography>
        </div>
        <main className="flex h-full">
          <Paper
            variant="outlined"
            sx={{
              borderRadius: 2,
              width: 660,
              minHeight: 100,
              display: { xs: "none", sm: "block" },
            }}
          >
            {children}
          </Paper>
          <Box
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          >
            {children}
          </Box>
        </main>
      </div>
      <footer className="bg-gray-400">
        <Footer />
      </footer>
    </>
  );
};

export default DetailLayout;
