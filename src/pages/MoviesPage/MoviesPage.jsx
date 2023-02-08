import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Section, List, ListLink } from './MoviePage.styled';
import Loader from 'components/Loader';

const { default: SearchForm } = require('components/SearchForm');

const MoviesPage = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loader, setLoader] = useState(false);
    const searchQuery = searchParams.get('query');
    const location = useLocation();

    const handleFormSubmit = sParams => {
        setSearchParams({ query: sParams });
    };

    useEffect(() => {
        if (searchQuery === '' || searchQuery === null) {
            return;
        }
        const fetchData = async () => {
            setLoader(true);

            try {
                const result = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=58f452bc794f10dc7b9a5ba94d5a1bbe&language=en-US&query=${searchQuery}&page=1&include_adult=true`
                );
                const data = await result.json();

                const { results } = data;

                if (!results.length) {
                    toast.error(
                        'Попробуйте использовать другой запрос для поиска'
                    );
                }

                const movies = results.map(({ id, original_title }) => ({
                    id,
                    original_title,
                }));

                setMoviesList(movies);
            } catch (err) {
                toast.error('Ошибка! Что-то пошло не так');
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, [searchQuery]);

    return (
        <Section>
            <SearchForm onSubmit={handleFormSubmit} />
            {loader && <Loader />}
            {moviesList.length !== 0 && !loader && (
                <List>
                    {moviesList.map(({ id, original_title }) => {
                        return (
                            <li key={id}>
                                <ListLink
                                    state={{ from: location }}
                                    to={`/movies/${id}`}
                                >
                                    {original_title}
                                </ListLink>
                            </li>
                        );
                    })}
                </List>
            )}
        </Section>
    );
};

export default MoviesPage;
