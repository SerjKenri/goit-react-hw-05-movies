import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader';
import { Section, CastList, CastItem, CastImage } from './Cast.styled';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoader(true);

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=58f452bc794f10dc7b9a5ba94d5a1bbe&language=en-US`
                );
                if (response.ok) {
                    const data = await response.json();
                    setCast(data.cast);
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                toast.error(`Something went wrong, ${error}`);
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [movieId]);

    if (loader) {
        return <Loader />;
    }

    return cast.length !== 0 ? (
        <Section>
            <CastList>
                {cast.map(({ name, character, profile_path }) => {
                    return (
                        <CastItem key={nanoid()}>
                            <CastImage
                                src={
                                    profile_path
                                        ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`
                                        : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
                                }
                                alt={name}
                            />
                            <p>{name}</p>
                            <p>Character: {character}</p>
                        </CastItem>
                    );
                })}
            </CastList>
        </Section>
    ) : (
        <Section>
            <p>Unfortunately, the cast is missing.</p>
        </Section>
    );
};

export default Cast;
