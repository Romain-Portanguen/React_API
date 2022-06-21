import PropTypes from 'prop-types';
import { Message as SemanticUIMessage } from 'semantic-ui-react';

function Message({ isError, text }) {
  return (
    <SemanticUIMessage
      error={isError}
    >
      {text}
    </SemanticUIMessage>
  );
}

Message.propTypes = {
  isError: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
