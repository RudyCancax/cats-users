import React from 'react';

const SearchBox = ({ searchChange }) => {

    return (
        <div className='pa2'>
            <input 
                className='tc bg-light-blue dib br3 pa3 ma2 shadow-2' 
                placeholder='Search Cat' 
                onChange={searchChange}
            />
        </div>
    );

}

export default SearchBox;