/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import Router from 'src/routes/sections';
import ThemeProvider from 'src/theme';
import { Provider } from 'react-redux';
import { store } from './redux/favorite-store';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
