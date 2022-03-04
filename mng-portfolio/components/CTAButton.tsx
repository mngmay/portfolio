import { Button } from "@mui/material";
import classnames from "classnames/bind";
import styles from "../styles/buttons.module.scss";

const cx = classnames.bind(styles);

type ButtonProps = {
  href: string;
  text: string;
  dark: boolean;
};

export default function CTAButton({ href, text, dark }: ButtonProps) {
  return (
    <a href={`${href}`}>
      <Button className={cx("cta-button", `${dark && "dark"}`)}>{text}</Button>
    </a>
  );
}
