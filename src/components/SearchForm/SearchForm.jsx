import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import propTypes from 'prop-types';

function SearchForm({ onSubmit }) {
    const [searchParams, setSearchParams] = useState('');

    const handleRequestChange = event => {
        setSearchParams(event.currentTarget.value.trim().toLowerCase());
    };

    const handleSubmin = event => {
        event.preventDefault();

        if (!searchParams) {
            toast.warn('Enter search parameters');
            return;
        }

        onSubmit(searchParams);
        setSearchParams('');
    };
    return (
        <div>
            <form onSubmit={handleSubmin}>
                <button type="submit">
                    <span className="button-label">
                        <BsSearch />
                    </span>
                </button>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleRequestChange}
                    value={searchParams}
                />
            </form>
        </div>
    );
}

SearchForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};

export default SearchForm;
