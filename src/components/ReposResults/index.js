/* eslint-disable react/jsx-no-useless-fragment */
import PropTypes from 'prop-types';
import { Card, Icon, Button } from 'semantic-ui-react';

function RepoResults({ repos, onLoadMoreRepos, isLoading }) {
  return (
    <>
      {repos.length > 0 && (
        <>
          <Card.Group itemsPerRow={3}>
            {
              repos.map((repo) => (
                <Card
                  key={repo.id}
                  image={repo.owner.avatar_url}
                  header={repo.name}
                  meta={repo.owner.login}
                  description={repo.description}
                  extra={(
                    <a>
                      <Icon name="star outline" />
                      {repo.stargazers_count} Stars
                    </a>
                  )}
                />
              ))
            }
          </Card.Group>
          <div style={{ width: '40%', margin: '1rem auto' }}>
            <Button
              fluid
              loading={isLoading}
              onClick={onLoadMoreRepos}
            >
              ⬇️ Charger plus de résultats ⬇️
            </Button>
          </div>
        </>
      )}
    </>
  );
}

RepoResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      stargazers_count: PropTypes.number.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  onLoadMoreRepos: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RepoResults;
