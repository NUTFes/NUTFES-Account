import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { DetailLayout } from "@/components/layout";
import { DETAIL_PAGE_CONSTANTS } from "@/constants/detailPage";

export const Division: NextPage = () => {
  const router = useRouter();
  const details = DETAIL_PAGE_CONSTANTS.division;
  // TODO: API側から名前を取得するメソッドを作成する
  const getCurrentName = (): {
    currentFirstName: string;
    currentLastName: string;
  } => ({
    currentFirstName: "技大",
    currentLastName: "太郎",
  });

  const { currentFirstName, currentLastName } = getCurrentName();

  const [firstName, setFirstName] = useState(currentFirstName);
  const [lastName, setLastName] = useState(currentLastName);

  const saveName = () => {
    console.log(firstName + lastName); // eslint-disable-line no-console
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
          名前の更新
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
          <TextField
            label="名"
            id="firstName"
            value={firstName}
            variant="standard"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <TextField
            label="姓"
            id="lastName"
            value={lastName}
            variant="standard"
            fullWidth
            margin="normal"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
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
          <Button
            disabled={lastName === "" && firstName === ""}
            variant="contained"
            onClick={saveName}
          >
            保存
          </Button>
        </Stack>
      </Box>
    </DetailLayout>
  );
};

export default Division;
