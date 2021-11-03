import React from 'react';

const SearchBoxx = ({searchField, searchChange}) =>{
     
    return(
        <div className = 'pa3'>
        <input className ='pa2 b--green bg-lightest-blue  '
         type = 'search'
          placeholder ='Search robots'
          onChange = {searchChange} />

    </div>
    );
}
export default SearchBoxx;