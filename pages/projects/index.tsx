// in current layout don't actually link directly to this, go straight to slugs from homepage
import ProjectsSection from "../../components/sections/Projects";
import classnames from "classnames/bind";
import styles from "../../styles/projects.module.scss";

const cx = classnames.bind(styles);

export default function Projects() {
  return (
    <div className={cx("project-page-container")}>
      <ProjectsSection />
    </div>
  );
}
