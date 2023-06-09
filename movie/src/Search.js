import React, {useState} from 'react';
import './scss/search.scss';
const key = 'f839cc5221a4442baa47bf5494ebe08b';

export default function Search({getResults}) {
  const [query, setQuery] = useState('');
  async function ApiCall(query) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1`;
    const response = await fetch(url)
    const data = await response.json()
    getResults(data)
  }
  return (
    <div className='searchAndButton'>
      <input 
      placeholder="Search"
      value={query}
      onChange={e => setQuery(e.target.value)}
      />
      <button className='searchButton' onClick={() => {
        ApiCall(query)
      }}>Search
      </button>
    </div>
  )
}
