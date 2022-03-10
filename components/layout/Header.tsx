import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavDrawer from "./NavDrawer";
import NavBar from "./NavBar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import classnames from "classnames/bind";
import utilStyles from "../../styles/utility.module.scss";
import layoutStyles from "../../styles/layout.module.scss";

const styles = { ...utilStyles, ...layoutStyles };
const cx = classnames.bind(styles);

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Convert to MUI AppBar/ToolBar and update theme palette when there's time?
  return (
    <div className={cx("header")}>
      <Logo />
      {smDown ? (
        <NavDrawer open={drawerOpen} toggleDrawer={toggleDrawer}>
          <NavLinks />
        </NavDrawer>
      ) : (
        <NavBar>
          <NavLinks />
        </NavBar>
      )}
    </div>
  );
}
