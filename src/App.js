import HomePage from './components/Pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import FindInterlocutorPage from './components/Pages/FindInterlocutorPage';
import FindTeacherPage from './components/Pages/FindTeacherPage';
import MessagePage from './components/Pages/MessagePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/interlocutor' element={<FindInterlocutorPage/>} />
      <Route path='/teacher' element={<FindTeacherPage/>} />
      <Route path='/message' element={<MessagePage/>} />
    </Routes>
  );
}

export default App;
