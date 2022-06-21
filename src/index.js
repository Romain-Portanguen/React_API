import 'semantic-ui-css/semantic.min.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root'),
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
