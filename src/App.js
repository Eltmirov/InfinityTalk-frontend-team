import HomePage from './components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import FindPartnerPage from './components/Pages/FindPartnerPage';
import WebsitesPage from './components/Pages/WebsitesPage';
import MessagePage from './components/Pages/MessagePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/partners' element={<FindPartnerPage/>} />
      <Route path='/websites' element={<WebsitesPage/>} />
      <Route path='/message' element={<MessagePage/>} />
    </Routes>
  );
}

export default App;
