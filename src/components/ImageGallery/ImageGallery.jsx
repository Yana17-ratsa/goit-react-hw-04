import ImageCard from '../ImageCard/ImageCard';
import clsx from 'clsx';
import css from './ImageGallery.module.css';

const ImageGallery = ({ gallery, onOpenModal }) => {
  return (
    <div className={css.container}>
      <ul className={css.ul}>
        {gallery.map(galleryItem => (
          <li key={galleryItem.id} className={clsx(css.galleryItem)}>
            <div>
              <ImageCard
                galleryItemData={galleryItem}
                onOpenModal={onOpenModal}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
