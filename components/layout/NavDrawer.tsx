import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import classnames from "classnames/bind";
import layoutStyles from "../../styles/layout.module.scss";
import utilStyles from "../../styles/utility.module.scss";

const styles = { ...utilStyles, ...layoutStyles };

const cx = classnames.bind(styles);

type NavDrawerProps = {
  children?: React.ReactNode;
  open: boolean;
  toggleDrawer: () => void;
};

export default function NavDrawer({
  children,
  open,
  toggleDrawer,
}: NavDrawerProps) {
  const anchor = "right";
  return (
    <>
      <MenuIcon
        onClick={toggleDrawer}
        className={cx("nav-hamburger", "icon-link")}
      />
      <Drawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer}
        className={cx("nav-drawer")}
      >
        {children}
      </Drawer>
    </>
  );
}
