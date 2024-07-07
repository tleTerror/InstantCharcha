import './App.css';
// import Login from './pages/login/Login'; // Capitalize component name
// import SignUp from '.pages/signup/SignUp';
import Home from './pages/home/Home';

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'> {/* Fix typo: classname -> className */}
      {/* <SignUp /> */}
      <Home/>
    </div>
  );
}

export default App;