import { Route, Routes } from 'react-router-dom';
import './index.css';
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {ContextProvider} from './context/GlobalContex'

function App() {
  
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
        <Heading/>
        <ContextProvider>
        <Routes>
          <Route path='/' element={<TaskList/>} />
          <Route path='/add' element={<TaskForm/>} />
        </Routes>
        </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
