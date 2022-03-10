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
