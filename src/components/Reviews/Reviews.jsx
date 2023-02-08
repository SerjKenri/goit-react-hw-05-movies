import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { toast } from 'react-toastify';
import { Section, ReviewsList } from './Reviews.styled';
import Loader from 'components/Loader';

const Reviews = () => {
    const [reviews, setRewiews] = useState([]);
    const [loader, setLoader] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoader(true);

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=58f452bc794f10dc7b9a5ba94d5a1bbe&language=en-US&page=1`
                );

                if (response.ok) {
                    const data = await response.json();

                    setRewiews(data.results);
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

    if (loader)
        return (
            <div>
                <Loader />
            </div>
        );

    return reviews.length ? (
        <Section>
            <ReviewsList>
                {reviews.map(({ author, content }) => (
                    <li key={nanoid()}>
                        <h4>{author}</h4>

                        <p>{content}</p>
                    </li>
                ))}
            </ReviewsList>
        </Section>
    ) : (
        <Section>
            <p>Reviews list is empty</p>
        </Section>
    );
};
export default Reviews;
