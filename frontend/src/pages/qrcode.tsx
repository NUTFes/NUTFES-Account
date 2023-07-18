import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import QRCode from "react-qr-code";

import { DetailLayout } from "@/components/layout";
import { DETAIL_PAGE_CONSTANTS } from "@/constants/detailPage";

export const QRPage: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const details = DETAIL_PAGE_CONSTANTS.qrcode;
  // TODO: API側から名前を取得するメソッドを作成する

  const saveQR = () => {
    console.log("aa"); // eslint-disable-line no-console
  };
  const cancell = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };
  return (
    <DetailLayout {...details}>
      <Box sx={{ pt: "16px", pb: "16px" }}>
        <Typography
          color="text.secondary"
          pl={{ xs: "0px", sm: "16px" }}
          sx={{ mb: "4px", fontSize: 12 }}
        >
          技大祭 QR
        </Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          sx={{
            px: "24px",
            mt: "24px",
          }}
        >
          <QRCode
            size={128}
            style={{ borderRadius: 5 }}
            value={session?.user.id || "no id"}
            viewBox="0 0 256 256"
          />
        </Grid>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="end"
          sx={{
            width: 1,
            mt: "24px",
            mb: "8px",
            px: "16px",
          }}
        >
          <Button onClick={cancell}>キャンセル</Button>
          <Button disabled={false} variant="contained" onClick={saveQR}>
            保存
          </Button>
        </Stack>
      </Box>
    </DetailLayout>
  );
};

export default QRPage;
