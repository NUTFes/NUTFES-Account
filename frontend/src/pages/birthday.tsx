import { Button, Box, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { DetailLayout } from "@/components/layout";

export const Birthday: NextPage = () => {
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };

  const details = {
    // TODO: 今後constansに移行する
    title: "生年月日",
    description:
      "生年月日は、Google サービスでアカウントのセキュリティ保護とカスタマイズに使用される場合があります。 この Google アカウントを企業または組織で使用する場合は、アカウントの管理者の生年月日を指定してください。",
  };

  // TODO: APIから取得してくる機能の実装
  const getBirthday = () => dayjs("2022-04-17");

  const [birthday, setBirthday] = useState<Dayjs | null>(getBirthday());

  const cancell = () => {
    router.push("/personal-info").catch((err) => console.error(err));
  };

  const saveBirthday = () => {
    // TODO: birthdayを保存する機能の実装
    console.log(birthday?.format()); // eslint-disable-line no-console
  };

  return (
    <DetailLayout title={details.title} description={details.description}>
      <div className="pt-4">
        <div className="h-screen w-full items-center justify-center">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <DatePicker
                label="生年月日の更新"
                value={birthday}
                onChange={(newBirthday) => setBirthday(newBirthday)}
              />
            </Box>
          </LocalizationProvider>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="end"
            sx={{ width: 1, maxWidth: 489 }}
          >
            <Button onClick={cancell}>キャンセル</Button>
            <Button
              disabled={birthday?.format() === getBirthday().format()}
              onClick={saveBirthday}
            >
              保存
            </Button>
          </Stack>
        </div>
      </div>
    </DetailLayout>
  );
};

export default Birthday;
