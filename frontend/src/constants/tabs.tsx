import { AccountCircle, ListAlt, QrCode } from "@mui/icons-material";

export const TABS = [
  {
    key: "home",
    name: "ホーム",
    icon: <AccountCircle />,
    href: "/",
  },
  {
    key: "personalInfo",
    name: "個人情報",
    icon: <ListAlt />,
    href: "/personal-info",
  },
  {
    key: "qrcode",
    name: "学祭QRコード",
    icon: <QrCode />,
    href: "/qrcode",
  },
] as const;
