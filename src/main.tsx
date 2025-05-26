import './styles/index.css';
import './styles/global.css';
import './configs/i18n';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router';
import routes from './configs/routes.config';
import store from './store/index';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);

