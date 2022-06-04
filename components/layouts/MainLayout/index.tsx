import { FC } from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

export const MainLayout: FC<Props> = ({ children, description, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};
