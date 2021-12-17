import '../css/App.css';
import React from 'react';
import logo from '../assets/login.svg';
import Form from '../components/common/Form';
import Home from '../components/Home';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import register_login from './fireBase-authentication';
function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate=useNavigate();
  React.useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token');
    if(authToken){
        navigate('/home');
    }
  },[navigate])
  return (
      <div className='App'>
        <>
          <Routes>
            <Route 
              path="/" 
              element={<Form 
                        title="Login" 
                        otherTitle="or Register"
                        changeOption={()=>navigate('/register')}
                        setEmail={ setEmail }
                        setPassword={ setPassword } 
                        handleAction={ ()=>register_login(1,email,password,toast,navigate) }
                      />}
              
            />
            <Route 
              path="/login" 
              element={<Form 
                        title="Login" 
                        otherTitle="or Register"
                        changeOption={()=>navigate('/register')}
                        setEmail={ setEmail }
                        setPassword={ setPassword } 
                        handleAction={ ()=>register_login(1,email,password,toast,navigate) }
                      />}
              
            />
            <Route 
              path="/register" 
              element={<Form 
                          title="Register"
                          otherTitle="or Login"
                          changeOption={()=>navigate('/login')}
                          setEmail={ setEmail }
                          setPassword={ setPassword }
                          handleAction={ ()=>register_login(2,email,password,toast,navigate) }
                        />}
              
            />
            <Route
              path='/home'
              element={
                <Home />
              }
            />
          </Routes>
        </>
        <ToastContainer />
        <img className="App-logo" alt="Logo Spin" src={ logo } />
      </div>
  );
}

export default App;
