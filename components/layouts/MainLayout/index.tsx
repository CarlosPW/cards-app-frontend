import { FC } from "react";
import Head from "next/head";
import { Sidebar } from "../../ui";

interface Props {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export const MainLayout: FC<Props> = ({
  children,
  description = "",
  title = "",
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      {children}
    </>
  );
};
