import { Grid, TextField, Stack, Button } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { DetailLayout } from "@/components/layout";
import { DETAIL_PAGE_CONSTANTS } from "@/constants/detailPage";

export const UserName: NextPage = () => {
  const router = useRouter();
  const details = DETAIL_PAGE_CONSTANTS.username;

  // TODO: API側から名前を取得するメソッドを作成する
  const getDefaultName = (): {
    defaultFirstName: string;
    defaultLastName: string;
  } => ({
    defaultFirstName: "技大",
    defaultLastName: "太郎",
  });

  const { defaultFirstName, defaultLastName } = getDefaultName();

  const [firstName, setFirstName] = useState(defaultFirstName);
  const [lastName, setLastName] = useState(defaultLastName);

  const saveName = () => {
    console.log(firstName + lastName); // eslint-disable-line no-console
  };

  const cancell = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };

  return (
    <DetailLayout {...details}>
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
          label="名前"
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
          label="苗字"
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
    </DetailLayout>
  );
};

export default UserName;
