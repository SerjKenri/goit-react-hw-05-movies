import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import {
    ShowInfoList,
    GoBackLink,
    DetailsLink,
} from './MovieDetalisPage.styled';
import { BsFillSkipBackwardFill } from 'react-icons/bs';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState({});
    const [loader, setLoader] = useState(false);
    const [comeBack] = useState(() => {
        return location.state?.from ?? '/movies';
    });

    useEffect(() => {
        setLoader(true);

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=58f452bc794f10dc7b9a5ba94d5a1bbe&language=en-US`
                );
                const data = await response.json();

                setMovieDetails(data);
            } catch (err) {
                toast.error('Something went wrong');
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [movieId]);

    if (loader) {
        return (
            <div>
                <Loader />
            </div>
        );
    }

    return (
        <>
            <GoBackLink to={comeBack}>
                <BsFillSkipBackwardFill
                    style={{
                        marginRight: '10',
                    }}
                />
                Come Back
            </GoBackLink>

            <h2>
                {movieDetails.title} (
                {movieDetails.release_date
                    ? movieDetails.release_date.substring(0, 4)
                    : ''}
                )
            </h2>

            <img
                src={
                    movieDetails.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                        : 'https://thumbs.filmix.ac/posters/orig/kon4-admiral-2008_435.jpg'
                }
                alt={movieDetails.original_title}
            />

            <p>
                User Score:
                {movieDetails.vote_average
                    ? Math.round(movieDetails.vote_average * 10).toFixed(0)
                    : ''}
                %
            </p>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>

            <h4>Genres</h4>
            <p>{movieDetails?.genres?.map(genre => genre?.name)?.join(' ')}</p>
            <ShowInfoList>
                <p>Additional information</p>

                <ul
                    style={{
                        marginRight: '10',
                        listStyleType: 'none',
                    }}
                >
                    <li>
                        <DetailsLink to="cast">Cast</DetailsLink>
                    </li>
                    <li>
                        <DetailsLink to="reviews">Reviews</DetailsLink>
                    </li>
                </ul>
            </ShowInfoList>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default MovieDetailsPage;
