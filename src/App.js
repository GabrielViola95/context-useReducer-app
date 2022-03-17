import { Route, Routes } from 'react-router-dom';
import './index.css';
import Heading from './components/Heading';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import {contextProvider} from './context/globalContex'

function App() {
  
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
        <Heading/>
        <contextProvider>
        <Routes>
          <Route path='/' element={<TaskList/>} />
          <Route path='/add' element={<TaskForm/>} />
        </Routes>
        </contextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
