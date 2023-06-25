import { NextPage } from "next";

import { DetailLayout } from "@/components/layout";

export const Birthday: NextPage = () => {
  const details = {
    title: "生年月日",
    description:
      "生年月日は、Google サービスでアカウントのセキュリティ保護とカスタマイズに使用される場合があります。 この Google アカウントを企業または組織で使用する場合は、アカウントの管理者の生年月日を指定してください。",
  };

  return (
    <main>
      <div>
        <DetailLayout title={details.title} description={details.description}>
          test
        </DetailLayout>
      </div>
    </main>
  );
};

export default Birthday;
