import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Divider, Typography, IconButton, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  children?: ReactNode;
};

const DetailLayout = ({ title, description, children }: Props) => {
  const router = useRouter();
  // TODO: 認証状態を確認し、未認証の場合はログイン画面にリダイレクト
  const isAuthenticated = true;
  const backPage = () => {
    if (isAuthenticated) {
      router.push("/personal-info").catch((err) => console.error(err));
    } else {
      router.push("/").catch((err) => console.error(err));
    }
  };
  return (
    <>
      {/* TODO: childrenを持たないHeaderを配置 */}
      {/* SideTabは配置しない */}

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
      </div>
      {/* TODO: Footerを配置 */}
    </>
  );
};

export default DetailLayout;
