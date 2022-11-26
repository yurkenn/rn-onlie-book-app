import axios from 'axios';
import {useCallback, useEffect, useState} from 'react';

const useApi = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [searchTerm, setSearchTerm] = useState('Harry Potter');
  const [resultTitle, setResultTitle] = useState('');

  const fetchBooks = useCallback(async () => {
    try {
      const response = await axios.get(`${url}${searchTerm}`);
      const {docs} = response.data;

      if (response) {
        const newBooks = docs.slice(0, 20).map(bookSingle => {
          const {
            key,
            author_name,
            title,
            cover_i,
            first_publish_year,
            edition_count,
          } = bookSingle;
          return {
            id: key,
            author: author_name,
            cover_id: cover_i,
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
          };
        });
        setData(newBooks);
        if (newBooks.length > 0) {
          setResultTitle('Search results for: ' + searchTerm);
        } else {
          setResultTitle('No results for: ' + searchTerm);
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setError(true);
      setLoading(false);
    }
  }, [searchTerm, url]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks, searchTerm]);

  return [data, loading, error, setSearchTerm, resultTitle];
};

export default useApi;
