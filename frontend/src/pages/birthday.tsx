import { Button, Box, Stack, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { ja } from "date-fns/locale";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { DetailLayout } from "@/components/layout";
import { DETAIL_PAGE_CONSTANTS } from "@/constants/detailPage";

export const Birthday: NextPage = () => {
  const router = useRouter();

  const details = DETAIL_PAGE_CONSTANTS.birthday;

  // TODO: APIから取得してくる機能の実装
  const getBirthday = (): Date => new Date(2020, 8, 21, 21, 10, 5);

  const [birthday, setBirthday] = useState<Date | null>(getBirthday());

  const cancell = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };

  const saveBirthday = () => {
    // TODO: birthdayを保存する機能の実装
    console.log(birthday); // eslint-disable-line no-console
  };

  const handleBirthdayChange = (newBirthday: Date | null) => {
    setBirthday(newBirthday);
  };

  return (
    <DetailLayout {...details}>
      <Box sx={{ pt: "16px", pb: "16px" }}>
        <Typography
          color="text.secondary"
          pl={{ xs: "0px", sm: "16px" }}
          sx={{ mb: "4px", fontSize: 12 }}
        >
          生年月日の更新
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DateCalendar value={birthday} onChange={handleBirthdayChange} />
          </Box>
        </LocalizationProvider>
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
            disabled={birthday?.getTime() === getBirthday().getTime()}
            variant="contained"
            onClick={saveBirthday}
          >
            保存
          </Button>
        </Stack>
      </Box>
    </DetailLayout>
  );
};

export default Birthday;
