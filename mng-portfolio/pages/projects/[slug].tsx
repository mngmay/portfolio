import { useRouter } from "next/router";
import React from "react";
import * as All from "../../components/projects";
import classnames from "classnames/bind";
import styles from "../../styles/projects.module.scss";
import Error404 from "../../components/Error404";

const cx = classnames.bind(styles);

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  // TODO: Fix this type error
  const ProjectComponent = slug ? All[slug] : null;

  return (
    <div className={cx("project-page-container")}>
      {/* TODO: Get rid of 404 blink, needs to fully load */}
      {ProjectComponent ? <ProjectComponent /> : <Error404 />}
    </div>
  );
};

export default ProjectPage;
