import { DetailLayoutProps } from "@/components/layout/DetailLayout";

export interface DetailPageConstants {
  [key: string]: DetailLayoutProps;
}

export const DETAIL_PAGE_CONSTANTS: DetailPageConstants = {
  birthday: {
    title: "生年月日",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  bureau: {
    title: "局",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  department: {
    title: "学科",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  division: {
    title: "部門",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  email: {
    title: "メールアドレス",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  gender: {
    title: "性別",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  grade: {
    title: "学年",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  password: {
    title: "パスワード",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  phone: {
    title: "電話番号",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  qrcode: {
    title: "QRコード",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  role: {
    title: "役職",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  studentID: {
    title: "学籍番号",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  userImage: {
    title: "プロフィール写真",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
  username: {
    title: "名前",
    description:
      "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  },
};
