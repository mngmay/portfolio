import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import classnames from 'classnames/bind';
import heroStyles from '../../styles/hero.module.scss';
import utilStyles from '../../styles/utility.module.scss';
import CTAButton from '../CTAButton';
import SocialMedia from './SocialMedia';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const styles = { ...utilStyles, ...heroStyles };

const cx = classnames.bind(styles);

type HeroProps = {
  handleScrollClick: () => void;
};

export default function Hero({ handleScrollClick }: HeroProps) {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={cx('hero-image', 'full-width')}>
      <div className={cx('hero-content')}>
        <div className={cx('hero-text')}>
          <div className={cx('intro-name')}>
            <Typography variant="subtitle1">Hi, my name is</Typography>
            <Typography variant="h1" className={cx('hero-myname')}>
              May Ng
            </Typography>
          </div>
          <div className={cx('intro-description')}>
            <Typography variant="subtitle1">
              I&#39;m a <strong>UX Researcher</strong> in{' '}
              <strong>Seattle, WA</strong>
            </Typography>
          </div>
        </div>
        <div className={cx('hero-contact')}>
          <CTAButton href="mailto: mngmay@gmail.com" text="Contact" external />
          <SocialMedia parent="hero-contact" />
        </div>
      </div>
      {mdUp && (
        <div
          className={cx('learn-more')}
          onClick={handleScrollClick}
          onKeyPress={handleScrollClick}
          role="link"
          tabIndex={0}
        >
          <Typography>Learn More</Typography>
          <ArrowDownwardIcon />
        </div>
      )}
    </div>
  );
}
