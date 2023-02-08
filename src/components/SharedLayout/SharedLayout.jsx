import { NavItem, NavEl, HeaderEl } from './SharedLayout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from 'components/Loader';

const SharedLayout = () => {
    return (
        <div>
            <HeaderEl>
                <NavEl>
                    <NavItem to="/" end>
                        Home
                    </NavItem>
                    <NavItem to="/movies">Movies</NavItem>
                </NavEl>
            </HeaderEl>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
};

export default SharedLayout;
