import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import { ShowInfoList } from './MovieDetalisPage.styled';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const [movieDetails, setMovieDetails] = useState({});
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

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
            <button
                type="button"
                onClick={() => navigate(location.state?.from ?? '/')}
            >
                Go back
            </button>

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
                        : 'https://ltdfoto.ru/images/2023/02/08/image-1.png'
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

                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
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
