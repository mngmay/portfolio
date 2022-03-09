import Link from "next/link";
import { Typography } from "@mui/material";
import classnames from "classnames/bind";
import Image from "next/image";
import projectStyles from "../styles/sections.module.scss";
import utilStyles from "../styles/utility.module.scss";

const styles = { ...projectStyles, ...utilStyles };
const cx = classnames.bind(styles);

type ProjectCardProps = {
  img: StaticImageData;
  title: string;
  description: string;
  slug: string;
};

export default function ProjectCard({
  img,
  title,
  description,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={slug} passHref>
      <div className={cx("card-container", "project-card-container")}>
        <div className={cx("card-image")}>
          <Image src={img} alt={title} layout="fill" />
        </div>
        <div className={cx("card-info")}>
          <Typography variant="cardTitle">{title}</Typography>
        </div>
      </div>
    </Link>
  );
}
