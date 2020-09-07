import React from 'react';
import LazyLoad from "react-lazyload";
import { ComicWrapper, Placeholder, ComicImage, Title } from '../styles';
import { IComic } from '../model/model';



const Comic: React.FC<IComic> = (props) => {
    const { img, alt, num, title, year, month, day, transcript } = props;
    const refPlaceholder = React.useRef<HTMLDivElement>(null);
    console.log(props)
    const removePlaceholder = () => {
        if (refPlaceholder && refPlaceholder.current) {
            refPlaceholder.current.remove();
        }
    };
    return (
        <ComicWrapper>
            <Placeholder ref={refPlaceholder} />
            <LazyLoad>
                <div onLoad={removePlaceholder}
                    onError={removePlaceholder}>
                    <Title>{title} - {num}</Title>
                    <span>{day}/{month}/{year}</span>
                    <figure>
                        <img
                            src={img}
                            alt={alt}
                        />
                    </figure>
                    <p>{transcript}</p>

                </div>
            </LazyLoad>
        </ComicWrapper>
    );
}



export default Comic;