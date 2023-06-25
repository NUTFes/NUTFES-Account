import { AccountCircle, ListAlt, QrCode } from "@mui/icons-material";

import { TabItem } from "@/type/common";

export const Tabs: TabItem[] = [
  {
    key: "home",
    name: "Home",
    displayName: "ホーム",
    icon: <AccountCircle />,
    href: "/",
  },
  {
    key: "personalInfo",
    name: "Personal info",
    displayName: "個人情報",
    icon: <ListAlt />,
    href: "/personal-info",
  },
  {
    key: "qrcode",
    name: "QR Code",
    displayName: "学祭QRコード",
    icon: <QrCode />,
    href: "/qrcode",
  },
];
