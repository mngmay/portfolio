import classnames from "classnames/bind";
import utilStyles from "../styles/utility.module.scss";
import clickableStyles from "../styles/clickables.module.scss";

const styles = { ...utilStyles, ...clickableStyles };

const cx = classnames.bind(styles);

type LinkProps = {
  children?: string | JSX.Element | JSX.Element[];
  href: string;
};

export default function StyledExternalLink({ children, href }: LinkProps) {
  return (
    <a
      href={`${href}`}
      target="_blank"
      rel="noreferrer"
      className={cx("external-link")}
    >
      {children}
    </a>
  );
}
