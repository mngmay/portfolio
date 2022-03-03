import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Container } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </>
  );
}
