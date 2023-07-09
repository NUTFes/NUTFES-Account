import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";
import { useEffect, ReactNode, FC } from "react";

// TODO: モーダルViewを実装
// const ModalView = ({ modalView }: string) => {
//   <></>;
// };
// const ModalUI = () => {
//   const { displayModal, modalView } = useUI();
//   return displayModal ? <ModalView modalView={modalView} /> : null;
// };

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (status === "unauthenticated" && router.pathname !== "/auth/signin") {
        await signIn("keycloak", { callbackUrl: "/" });
      }
    })();
  }, [router, session, status]);
  if (status === "loading") return <p>Loading...</p>;
  if (status === "authenticated") return children;
  return <h1>Unauthenticated</h1>;
};

export default Layout;
