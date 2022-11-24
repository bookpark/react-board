import DetailBoard from './components/DetailBoard';
import ListBoard from './components/ListBoard';
import WriteBoard from './components/WriteBoard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<ListBoard />} />
        <Route exact path='/write' element={<WriteBoard />} />
        <Route exact path='/detail/:id' element={<DetailBoard />} />
      </Routes>
    </div>
  );
}

export default App;
