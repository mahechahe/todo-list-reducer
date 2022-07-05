import './App.css';
import {Route, Routes} from 'react-router-dom'
import { TaskForm } from './components/TaskForm';
import { Heading } from './components/Heading';
import { TaskList } from './components/TaskList';
import { ContextProvider } from './context/GlobalContext';


function App() {
  return (
    <div>
      <div className='h-screen text-white text-center p-10 '>
        <div className='container mx-auto h-full'>
          <ContextProvider>
            <Heading></Heading>
            <Routes>
              <Route path="/" element={<TaskList/>} exact></Route>
              <Route path="/add" element={<TaskForm />}></Route>
              <Route path="/edit/:id" element={<TaskForm />}></Route>
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
