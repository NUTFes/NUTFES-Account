import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Divider,
  Typography,
  IconButton,
  Paper,
  Container,
} from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Header } from "@/components/common";

export interface DetailLayoutProps {
  title: string;
  description: string;
  children?: ReactNode;
}

const DetailLayout = ({ title, description, children }: DetailLayoutProps) => {
  const router = useRouter();
  const backPage = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };
  return (
    <Container>
      <Header>
        {/* TODO: DetailTitleとかでコンポーネントに分けても良いかも */}
        <Container
          sx={{
            display: "flex",
            height: "3.5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="delete" color="primary" onClick={backPage}>
            <ArrowBackIcon color="action" />
          </IconButton>
          <Typography
            color="text.primary"
            sx={{
              fontWeight: "regular",
              width: 550,
              display: { xs: "none", sm: "none", md: "block" },
            }}
            style={{ fontSize: 28 }}
          >
            {title}
          </Typography>
          <Typography
            color="text.primary"
            sx={{
              fontWeight: "regular",
              width: 550,
              display: { xs: "block", sm: "block", md: "none" },
            }}
            style={{ fontSize: 24 }}
          >
            {title}
          </Typography>
        </Container>
        <Divider
          absolute
          sx={{
            width: "screen",
            display: { xs: "none", sm: "none", md: "none", lg: "block" },
          }}
        />
      </Header>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 1.5,
          marginTop: "120px",
        }}
      >
        <div className="mb-8 max-w-xl">
          <Typography color="text.secondary">{description}</Typography>
        </div>
        <div className="flex">
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
      </Box>
    </Container>
  );
};

export default DetailLayout;
