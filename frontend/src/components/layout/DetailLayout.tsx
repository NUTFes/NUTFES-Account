import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const DetailLayout = ({ title, description, children }: Props) => {
  const router = useRouter();
  // TODO: 認証状態を確認し、未認証の場合はログイン画面にリダイレクト
  const isAuthenticated = true;
  const backPage = () => {
    if (isAuthenticated) {
      router.push("/personal-info");
    } else {
      router.push("/");
    }
  };
  return (
    <>
      {/* TODO: childrenを持たないHeaderを配置 */}
      {/* SideTabは配置しない */}

      <div className="sticky z-10 w-full border-b border-slate-300 bg-white">
        <div className="flex h-14 items-center justify-center">
          <IconButton aria-label="delete" color="primary" onClick={backPage}>
            <ArrowBackIcon color="action" />
          </IconButton>
          <Typography sx={{ width: 550 }} style={{ fontSize: "28px" }}>
            {title}
          </Typography>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center overflow-y-scroll px-6 pt-6">
        <div className="mb-8 max-w-xl">
          <Typography color="text.secondary">{description}</Typography>
        </div>
        <div className="w-full max-w-xl">{children}</div>
      </div>
      {/* TODO: Footerを配置 */}
    </>
  );
};

export default DetailLayout;
