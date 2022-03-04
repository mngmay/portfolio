import classnames from "classnames/bind";
import styles from "../styles/projects.module.scss";

const cx = classnames.bind(styles);

export default function CaseStudyCard() {
  return <div className={cx("case-study-card-container")}>Case Study</div>;
}
