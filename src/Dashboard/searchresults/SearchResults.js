import React, { useEffect, useState } from 'react';
import SearchComponent from '../Header/SearchComponent';
import recipeData from '../../recipes.json';
import { Link, useSearchParams } from 'react-router-dom';

const dummyResult = {
  name: 'Recipes',
  instructions: [
    'Desserts: Gulab Jamun Paayasam Bobbatlu Double Ka Meetha. Soups: Veg: Vegetable Soup Tomato Soup Corn ...',
  ],
};

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const searchText = searchParams.get('searchText');
  const performSearch = () => {
    const results = recipeData.filter(
      (each) =>
        each.name.toLowerCase().includes(searchText.toLowerCase()) ||
        each.id.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };
  useEffect(() => {
    performSearch();
  }, [searchText]);

  const renderResultCard = (result, id) => {
    const toString =
      id === 'dummy'
        ? '/recipes'
        : `/recipedetails/${result?.name.toLowerCase().replace(/\s+/g, '-')}`;
    return (
      <div
        style={{
          borderTopWidth: 5,
          borderTopColor: 'black',
          padding: '10px',
        }}
        key={id}
      >
        <Link to={toString} style={{ textDecoration: 'none' }}>
          <h4 style={{ color: '#023cfa' }}>{result?.name}</h4>
        </Link>
        <p>{result?.instructions[0]}</p>
      </div>
    );
  };

  const renderSearchResults = () => {
    return (
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          rowGap: '10px',
          borderRadius: 10,
        }}
      >
        {searchResults.map((each, idx) => renderResultCard(each, idx))}
        {renderResultCard(dummyResult, 'dummy')}
      </div>
    );
  };
  return (
    <div
      style={{
        backgroundColor: '#dedad9',
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <SearchComponent searchText={searchText} />
      <div style={{ marginTop: '30px', alignSelf: 'center' }}>
        {searchResults.length > 0 ? (
          renderSearchResults()
        ) : (
          <img src='../../images/nosearchresults.png' alt='No Search Results' />
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
