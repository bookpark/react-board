import DetailBoard from './components/DetailBoard';
import ListBoard from './components/ListBoard';
import WriteBoard from './components/WriteBoard';
import { Route, Routes } from 'react-router-dom';
import UpdateBoard from './components/UpdateBoard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ListBoard />} />
        <Route exact path='/write' element={<WriteBoard />} />
        <Route exact path='/detail/:id' element={<DetailBoard />} />
        <Route exact path='/update/:id' element={<UpdateBoard />} />
      </Routes>
    </div>
  );
}

export default App;
