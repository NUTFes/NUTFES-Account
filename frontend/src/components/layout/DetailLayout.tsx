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
    <Container sx={{ mt: "120px" }}>
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
              display: { xs: "none", md: "block" },
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
              display: { sm: "block", md: "none" },
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
            display: { xs: "none", lg: "block" },
          }}
        />
      </Header>

      {/* PC */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Typography
          color="text.secondary"
          fontSize="16px"
          sx={{ fontWeight: "thin" }}
          fontWeight="thin"
          width={550}
          mt="16px"
          mb="32px"
        >
          {description}
        </Typography>
        <Paper
          variant="outlined"
          sx={{
            borderRadius: 2,
            width: 550,
            minHeight: 100,
            py: "7px",
            mb: "24px",
          }}
        >
          {children}
        </Paper>
      </Box>

      {/* Mobile */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Typography color="text.secondary" fontSize="14px">
          {description}
        </Typography>
        <Box sx={{ width: "100%" }}>{children}</Box>
      </Box>
    </Container>
  );
};

export default DetailLayout;
