import { Navigate , Route , Routes } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import { HomePage, MegamanPage, SearchPage } from './pages';

export const AppRouter = () => {
  return <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={ <HomePage /> } />
      <Route path='megaman/:id' element={ <MegamanPage /> } />
      <Route path='search' element={<SearchPage /> } />
    </Route>
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
    
}
