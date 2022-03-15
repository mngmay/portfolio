import { Typography } from '@mui/material';
import Image from 'next/image';
import classnames from 'classnames/bind';
import styles from '../styles/about.module.scss';

const cx = classnames.bind(styles);

type GalleryCardProps = {
  img: StaticImageData;
  description: string;
};

// TODO: refactor to use util card styles

export default function GalleryCard({ img, description }: GalleryCardProps) {
  return (
    <div className={cx('gallery-card-container')} key={`${img}`}>
      <div className={cx('gallery-image')}>
        <Image src={img} alt={description} layout="fill" />
      </div>
      <div className={cx('image-info')}>
        <Typography className={cx('description')}>{description}</Typography>
      </div>
    </div>
  );
}
