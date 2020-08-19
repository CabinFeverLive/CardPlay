import React from 'react';

function SearchBox({searchfield, searchChange}){
    return(
        <div className='pa2 b--green bg--lightest blue'>
        <input className='pa3 ' type='search' placeholder='Search Robots'
        onChange={searchChange} 
        />
        </div>
    );
}

export default SearchBox;