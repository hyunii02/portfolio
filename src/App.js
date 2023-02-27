import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ProjectA from './pages/ProjectA/ProjectA';
import ProjectB from './pages/ProjectB/ProjectB';
import ProjectC from './pages/ProjectC/ProjectC';
import Resume from './pages/Resume/Resume';

function App() {

  return (
      <Routes>
        <Route element={<Header/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/ProjectA" element={<ProjectA/>} />
          <Route path="/ProjectB" element={<ProjectB/>} />
          <Route path="/ProjectC" element={<ProjectC/>} />
          <Route path="/Resume" element={<Resume/>} />
        </Route>
      </Routes>
  );
}

export default App;
