import './styles/index.css';
import './styles/global.css';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import routes from './routes.config.ts';

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routes} />
);

