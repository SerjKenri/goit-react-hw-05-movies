import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Section, Title, List, ListLink } from './HomePage.styled';
import { BiFilm } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'components/Loader';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoader(true);
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/trending/movie/day?api_key=58f452bc794f10dc7b9a5ba94d5a1bbe`
                );
                if (!response.ok) throw new Error('Something went wrong');
                const data = await response.json();
                setMovies(data.results);
            } catch (error) {
                toast.error(`Something went wrong, ${error}`);
            } finally {
                setLoader(false);
            }
        };
        fetchData();
    }, []);

    if (loader) return <Loader />;

    return (
        <Section>
            <Title>Trending today</Title>
            {movies.length !== 0 && (
                <List>
                    {movies.map(({ original_title, id }) => (
                        <li key={id}>
                            <ListLink
                                state={{ from: location }}
                                to={`/movies/${id}`}
                            >
                                <BiFilm />
                                {original_title}
                            </ListLink>
                        </li>
                    ))}
                </List>
            )}
        </Section>
    );
};

export default HomePage;
