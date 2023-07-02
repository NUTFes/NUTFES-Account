import { InfoCardProps } from "@/components/common/InfoCard";

// 基本情報
export const BASIC_INFO: InfoCardProps = {
  title: "基本情報",
  description:
    "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  table: [
    {
      key: "userImage",
      name: "プロフィール写真",
      value: "",
      href: "/user-image",
    },
    { key: "username", name: "名前", value: "", href: "/username" },
    { key: "birthday", name: "生年月日", value: "", href: "/birthday" },
    { key: "gender", name: "性別", value: "", href: "/gender" },
    { key: "password", name: "パスワード", value: "", href: "/password" },
  ],
};

// 連絡先情報
export const CONTACT_INFO: InfoCardProps = {
  title: "連絡先情報",
  description:
    "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  table: [
    { key: "email", name: "メール", value: "", href: "/#" },
    { key: "phone", name: "電話", value: "", href: "/phone" },
  ],
};

// 大学情報
export const UNIVERSITY_INFO: InfoCardProps = {
  title: "大学情報",
  description:
    "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  table: [
    { key: "studentId", name: "学籍番号", value: "", href: "/student-id" },
    { key: "grade", name: "学年", value: "", href: "/grade" },
    { key: "department", name: "学科", value: "", href: "/department" },
  ],
};

// 技大祭実行委員情報
export const NUTFES_COMMITTEE_INFO: InfoCardProps = {
  title: "技大祭実行委員情報",
  description:
    "一部の情報は、Google サービスを利用する他のユーザーに表示される場合があります。 詳細",
  table: [
    { key: "role", name: "役職", value: "", href: "/#" },
    { key: "bureau", name: "局", value: "", href: "/bureau" },
    { key: "division", name: "部門", value: "", href: "/#" },
  ],
};
