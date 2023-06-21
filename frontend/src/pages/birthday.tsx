import { Paper } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

import { DetailLayout } from "@/components/layout";

export const Birthday: NextPage = () => {
  const [date, setDate] = useState(new Date());

  const router = useRouter();
  const handleClick = (link: string) => {
    router.push(link).catch((error) => {
      console.error(error);
    });
  };

  const details = {
    title: "生年月日",
    description:
      "生年月日は、Google サービスでアカウントのセキュリティ保護とカスタマイズに使用される場合があります。 この Google アカウントを企業または組織で使用する場合は、アカウントの管理者の生年月日を指定してください。",
  };

  return (
    <main>
      <div>
        <DetailLayout data={details}>
          <Paper variant="outlined" sx={{ width: 550, height: 600 }} />
        </DetailLayout>
      </div>
    </main>
  );
};

export default Birthday;
