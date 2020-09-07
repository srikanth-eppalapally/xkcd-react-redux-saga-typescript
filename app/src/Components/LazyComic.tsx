import React from 'react';
import LazyLoad from "react-lazyload";
import { ImageWrapper, Placeholder, StyledImage } from '../styles';
import { Link } from 'react-router-dom';




interface Props {
  img: string;
  alt: string;
  num: number;
}


const LazyComic: React.FC<Props> = (props) => {
  const { img, alt, num } = props;
  const refPlaceholder = React.useRef<HTMLDivElement>(null);

  const removePlaceholder = () => {
    if (refPlaceholder && refPlaceholder.current) {
      refPlaceholder.current.remove();
    }

  };
  return (
    <ImageWrapper>
      <Placeholder ref={refPlaceholder} />
      <LazyLoad>
        <Link to={`/comic/${num}`}>
          <StyledImage
            onLoad={removePlaceholder}
            onError={removePlaceholder}
            src={img}
            alt={alt}
          />
        </Link>
      </LazyLoad>
    </ImageWrapper>
  );
}



export default LazyComic;