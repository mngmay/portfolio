import classnames from 'classnames/bind';
import layoutStyles from '../../styles/layout.module.scss';
import utilStyles from '../../styles/utility.module.scss';

const styles = { ...utilStyles, ...layoutStyles };

const cx = classnames.bind(styles);

type NavBarProps = {
  children?: React.ReactNode;
};

export default function NavBar({ children }: NavBarProps) {
  return (
    <nav role="navigation" className={cx('nav-bar')}>
      {children}
    </nav>
  );
}
