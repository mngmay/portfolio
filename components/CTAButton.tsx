import { Button } from "@mui/material";
import classnames from "classnames/bind";
import Link from "next/link";
import styles from "../styles/clickables.module.scss";

const cx = classnames.bind(styles);

type ButtonProps = {
  href: string;
  text: string;
  external: boolean;
};

export default function CTAButton({
  href,
  text,
  external = false,
}: ButtonProps) {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer">
      <Button className={cx("cta-button")}>{text}</Button>
    </a>
  ) : (
    <Link href={href} passHref>
      <Button className={cx("cta-button")}>{text}</Button>
    </Link>
  );
}

CTAButton.defaultProps = {
  external: false,
};
