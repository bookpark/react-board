import DetailBoard from './components/DetailBoard';
import ListBoard from './components/ListBoard';
import WriteBoard from './components/WriteBoard';
import { Route, Routes } from 'react-router-dom';
import UpdateBoard from './components/UpdateBoard';
import PageBoard from './components/PageBoard';
import DeleteBoard from './components/DeleteBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<PageBoard />} />
        <Route exact path='/write' element={<WriteBoard />} />
        <Route exact path='/detail/:id' element={<DetailBoard />} />
        <Route exact path='/update/:id' element={<UpdateBoard />} />
        <Route exact path='/delete/:id' element={<DeleteBoard />} />
      </Routes>
    </div>
  );
}

export default App;
