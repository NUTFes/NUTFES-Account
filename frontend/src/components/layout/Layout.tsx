import React, { ReactNode } from "react";

// TODO: モーダルViewを実装
// const ModalView = ({ modalView }: string) => {
//   <></>;
// };
// const ModalUI = () => {
//   const { displayModal, modalView } = useUI();
//   return displayModal ? <ModalView modalView={modalView} /> : null;
// };

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main>{children}</main>
);

export default Layout;
