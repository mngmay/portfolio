import Header from "./Header";
import Footer from "./Footer";
import React from "react";
import { Container } from "@mui/material";
import classnames from "classnames/bind";
import styles from "../../styles/layout.module.scss";

const cx = classnames.bind(styles);

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div className={cx("relative-to-header")}>
        <Container className={cx("container")}>
          <main>{children}</main>
        </Container>
        <Footer />
      </div>
    </>
  );
}
