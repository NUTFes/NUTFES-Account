import { AccountCircle } from "@mui/icons-material";

export const APPS = [
  {
    key: "homePage",
    name: "ホームページ",
    icon: <AccountCircle />,
    href: "https://www.nutfes.net",
  },
  {
    key: "pamphlet",
    name: "パンフレット",
    icon: <AccountCircle />,
    href: "https://pamphlet.nutfes.net",
  },
  {
    key: "groupManager2",
    name: "参加団体管理アプリ",
    icon: <AccountCircle />,
    href: "https://group-manager.nutfes.net",
  },
  {
    key: "groupManager2Admin",
    name: "参加団体管理アプリ-管理者画面",
    icon: <AccountCircle />,
    href: "https://group-manager-admin.nutfes.net",
  },
  {
    key: "finansu",
    name: "FinanSu",
    icon: <AccountCircle />,
    href: "https://finansu.nutfes.net",
  },
  {
    key: "seeft",
    name: "SeeFT",
    icon: <AccountCircle />,
    href: "https://seeft.nutfes.net",
  },
  {
    key: "seeds",
    name: "NUTMEG Seeds",
    icon: <AccountCircle />,
    href: "https://seeds.nutfes.net",
  },
] as const;
