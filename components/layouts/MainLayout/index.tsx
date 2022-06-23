import { FC } from "react";
import Head from "next/head";
import { Navbar, Sidebar } from "../../ui";
import styled from "styled-components";

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
      <Navbar />
      <Children>{children}</Children>
    </>
  );
};

const Children = styled.main`
  padding: 20px;

  @media (min-width: 768px) {
    margin-left: 100px;
    padding: 40px;
  }
`;
