import React, { 
  useState,
  useEffect
} from 'react';

import axios from 'axios';
import GridCards from './GridCards';
import Button from '@material-ui/core/Button';
import SearchBar from './SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';

import formatData from '../utilities/format_data';
import buildQueryParameters from '../utilities/build_query_parameters';

import properties from '../properties';
const { 
  flickrAppKey: FLICKR_APP_KEY, 
  baseUrl: BASE_URL 
} = properties;

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  
  const fetchData = async () => {
    setIsLoading(true);
    const queryParams = buildQueryParameters({
      page: page,
      text: searchText,
      apiKey: FLICKR_APP_KEY,
    });

    const url = `${BASE_URL}/?${queryParams}`;
    const result = await axios.get(url);
    setNoResultsFound(result.data.photos.photo.length === 0);
    const formattedData = formatData(result.data);
    setData([...(data || []), ...formattedData]);
    setIsLoading(false);
  };


  useEffect(() => {
    if(page === 0 || data === null){
      return;
    }
    
    fetchData();
  }, [page]);

  useEffect(() => {
    if(data === null) {
      fetchData();
    }
  }, [data]);

  const renderLoadMoreButton = () =>
    data && data.length
      ? <Button 
        style={ {width: '100%', margin: '40px'}} 
        onClick={() => setPage(page + 1)} 
        variant="contained" 
        color="primary">
        Load more
      </Button>
      : ''

    const onClickSearch = () => {
      setPage(1);
      setData(null);
    }

  return (
    <>
      <div className="container">
        <div className="ml-3 mt-5">
          <h1>Flickr Photo Stream</h1>
        </div>
        <SearchBar 
          searchText={searchText}
          onTextFieldChange={setSearchText}
          required
          onClickSearch={onClickSearch}
          />
          <GridCards
            items={data}
            />
          {
            noResultsFound && <h2 className="text-center">No result found :(</h2>
          }

          <div className="row">
            {
              isLoading
                ? <CircularProgress className="mx-auto mt-3" size={80}/>
                : renderLoadMoreButton()
            }
          </div>
      
      </div>
      
    </>
  )
}
export default App;
