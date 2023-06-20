import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  data: {
    title: string;
    description: string;
  };
  children?: React.ReactNode;
};

const DetailLayout = ({ data, children }: Props) => {
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

      <div className="fixed z-10 w-full border-b border-slate-300 bg-white">
        <div className="m-auto flex h-14 items-center justify-center">
          <button type="button" className="mr-1 h-12 w-12" onClick={backPage}>
            <ArrowBackIcon color="action" />
          </button>
          <div className="w-3/5 w-[576px] text-3xl">{data.title}</div>
        </div>
      </div>

      <div className="flex snap-y flex-col items-center justify-center pt-20">
        <div className="mb-8 max-w-xl">
          <Typography color="text.secondary">{data.description}</Typography>
        </div>
        <div>{children}</div>
      </div>
      {/* TODO: Footerを配置 */}
    </>
  );
};

export default DetailLayout;
