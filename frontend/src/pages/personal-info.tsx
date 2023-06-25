import { InfoCard } from "@/components";
import { HomeLayout } from "@/components/layout";

// 実際はgerServerSidePropsでDBから取得する。現在はモックデータを使用
const address = "長岡市";
const history = "長岡技術科学大学卒業";
const otherAddress = "";

const PersonalInfo = () => (
  <HomeLayout>
    <InfoCard
      data={{
        title: "住所",
        description: `自宅と勤務先の住所は、Google サービスの利便性をパーソナライズするとともに、関連性の高い広告を表示するために使用されます。これらの住所はあなたにだけ表示されます。\n\nまた、上記の住所とは別に、Google プロフィールに住所を追加することもできます。他のユーザーに自分のプロフィールの住所を公開するかどうかは自分で選択できます。 詳細`,
        table: [
          {
            item: "ホーム",
            value: `${address}`,
            link: "/address",
          },
          {
            item: "職歴",
            value: `${history}`,
            link: "/history",
          },
          {
            item: "その他の住所",
            value: `${otherAddress}`,
            link: "/other-address",
          },
        ],
      }}
    />
    <InfoCard
      data={{
        title: "住所",
        description: `自宅と勤務先の住所は、Google サービスの利便性をパーソナライズするとともに、関連性の高い広告を表示するために使用されます。これらの住所はあなたにだけ表示されます。\n\nまた、上記の住所とは別に、Google プロフィールに住所を追加することもできます。他のユーザーに自分のプロフィールの住所を公開するかどうかは自分で選択できます。 詳細`,
        table: [
          {
            item: "ホーム",
            value: `${address}`,
            link: "/address",
          },
          {
            item: "職歴",
            value: `${history}`,
            link: "/history",
          },
          {
            item: "その他の住所",
            value: `${otherAddress}`,
            link: "/other-address",
          },
        ],
      }}
    />
  </HomeLayout>
);
export default PersonalInfo;
