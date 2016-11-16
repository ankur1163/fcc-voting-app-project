import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import YTSearch from 'youtube-api-search';

const API_KEY = "AIzaSyAmEecpNB25vt45ZO8NV-U9PvhPgk2Ny6s";
YTSearch({key:API_KEY,term:"surfboards"},function(data){
  console.log(data);
})

const App =()=>{
return ( <div>
<SearchBar />

</div>
)

};

ReactDOM.render(<App />,document.querySelector('.container'));
