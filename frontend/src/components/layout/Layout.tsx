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
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (session) {
        await router.push(router.pathname);
      } else {
        await signIn("keycloak", { callbackUrl: `/` });
      }
    })();
  }, [session, router]);

  return <div>{children}</div>;
};

export default Layout;
