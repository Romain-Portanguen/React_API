import PropTypes from 'prop-types';
import { Form, Input, Segment } from 'semantic-ui-react';

function SearchBar({
  isLoading, searchValue, onSearchChange, onSearchSubmit,
}) {
  return (
    <Segment>
      <Form
        onSubmit={onSearchSubmit}
      >
        <Input
          fluid
          loading={isLoading}
          iconPosition="left"
          icon="search"
          placeholder="Search..."
          value={searchValue}
          onChange={onSearchChange}
        />
      </Form>
    </Segment>
  );
}

SearchBar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
