import { InfoCard } from "@/components";


// 実際はgerServerSidePropsでDBから取得する。現在はモックデータを使用
const infoData = {
  "title": "住所",
  "description": "自宅と勤務先の住所は、Google サービスの利便性をパーソナライズするとともに、関連性の高い広告を表示するために使用されます。これらの住所はあなたにだけ表示されます。また、上記の住所とは別に、Google プロフィールに住所を追加することもできます。他のユーザーに自分のプロフィールの住所を公開するかどうかは自分で選択できます。",
  "table": [
    { "item" : "ホーム" , "value": "未設定", "link": "/address" },
    { "item": "職歴" , "value": "未設定", "link": "/history" },
    { "item": "その他の住所" , "value": "なし", "link": "/other-address" }
  ]
}

export default function PersonalInfo() {
  return (
    <div>
      <InfoCard data={infoData}/>
    </div>
  );
}

