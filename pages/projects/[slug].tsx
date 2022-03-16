import { useRouter } from 'next/router';
import * as Projects from '../../components/projects';
import classnames from 'classnames/bind';
import styles from '../../styles/projects.module.scss';
import Error404 from '../../components/Error404';

const cx = classnames.bind(styles);

const ProjectPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const checkSlug = (slugToCheck: string | string[] | undefined) => {
    if (!slugToCheck || Array.isArray(slugToCheck)) {
      return;
    } else {
      const newSlug: string = slugToCheck;
      return newSlug;
    }
  };

  // hack - need to better understand important from index as * and using string to index * object type
  const projects: { [key: string]: () => JSX.Element } = { ...Projects };

  const newSlug: string | undefined = checkSlug(slug);
  const ProjectComponent = newSlug ? projects[newSlug] : false;

  return (
    <div className={cx('project-page-container')}>
      {/* TODO: Get rid of 404 blink, needs to fully load */}
      {ProjectComponent ? <ProjectComponent /> : <Error404 />}
    </div>
  );
};

export default ProjectPage;
