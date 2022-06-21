import { useState } from 'react';
import axios from 'axios';

import SearchBar from 'src/components/SearchBar';
import Message from 'src/components/Message';
import RepoResults from 'src/components/ReposResults';

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const [repos, setRepos] = useState([]);

  const [totalCount, setTotalCount] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const [hasError, setHasError] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm === '') {
      return;
    }

    setCurrentPage(1);

    setIsLoading(true);

    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage}&per_page=9`)
      .then((response) => {
        setRepos(response.data.items);

        setTotalCount(response.data.total_count);

        setHasError(false);
      })
      .catch(() => {
        setHasError(true);
      })

      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLoadMoreRepos = () => {
    setIsLoading(true);

    setCurrentPage(currentPage + 1);

    axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage + 1}&per_page=9`)
      .then((response) => {
        setRepos([
          ...repos,
          ...response.data.items,
        ]);
        setIsLoading(false);
      });
  };

  const buildMessageText = () => {
    if (hasError) {
      return 'Une erreur est survenue, merci de réessayer plus tard';
    }

    return totalCount !== null
      ? `La recherche a donné ${totalCount} résultat(s)`
      : 'Utilisez le champ pour faire une recherche et validez avec entrée';
  };

  return (
    <div>

      <SearchBar
        isLoading={isLoading}
        searchValue={searchTerm}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <Message
        isError={hasError}
        text={buildMessageText()}
      />
      <RepoResults
        repos={repos}
        isLoading={isLoading}
        onLoadMoreRepos={handleLoadMoreRepos}
      />
    </div>
  );
}

export default SearchPage;
