import Link from "next/link";
import { Typography } from "@mui/material";
import resume from "../../assets/May_Ng_UXR_Resume.pdf";
import classnames from "classnames/bind";
import utilStyles from "../../styles/utility.module.scss";
import layoutStyles from "../../styles/layout.module.scss";

const styles = { ...utilStyles, ...layoutStyles };
const cx = classnames.bind(styles);

export const navLinks = [
  { link: "/", text: "Home", external: false },
  { link: "/about", text: "About", external: false },
  { link: "/projects", text: "My Work", external: false },
  { link: resume, text: "Resume", external: true },
  { link: `mailto: mngmay@gmail.com`, text: "Contact", external: true },
];

type NavLinkProps = {
  toggleDrawer?: () => void;
};

const NavLinks = ({ toggleDrawer }: NavLinkProps) => {
  return (
    <ul className={cx("nav-links")}>
      {navLinks.map(({ link, text, external }) => {
        return external ? (
          <li
            className={cx("link")}
            key={`atag-${link}`}
            onClick={toggleDrawer}
          >
            <a href={link} target="_blank" rel="noreferrer">
              <Typography variant="navLink">{text}</Typography>
            </a>
          </li>
        ) : (
          <li
            className={cx("link")}
            key={`link-${link}`}
            onClick={toggleDrawer}
          >
            <Link href={link} passHref>
              <Typography variant="navLink">{text}</Typography>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
