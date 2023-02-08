import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import Loader from './Loader';
import SharedLayout from './SharedLayout/SharedLayout';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
    import('../pages/MovieDetalisPage/MovieDetalisPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
    return (
        <BrowserRouter basename="/goit-react-hw-05-movies">
            <Suspense
                fallback={
                    <div>
                        <Loader />
                    </div>
                }
            >
                <Routes>
                    <Route path="/" element={<SharedLayout />}>
                        <Route index element={<HomePage />} />

                        <Route path="/movies" element={<MoviesPage />} />

                        <Route
                            path="movies/:movieId"
                            element={<MovieDetailsPage />}
                        >
                            <Route path="cast" element={<Cast />} />

                            <Route path="reviews" element={<Reviews />} />
                        </Route>
                    </Route>
                </Routes>{' '}
            </Suspense>
            <ToastContainer autoClose={3000} theme="colored" />
        </BrowserRouter>
    );
};
