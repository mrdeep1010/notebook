import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

export default function Login() {
  const navigate = useNavigate();
  const context = useContext(authContext);
  const { userLogin, user, setUser } = context;

  const setData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const login = (e) => {
    e.preventDefault();
    const isLogin = userLogin();
    isLogin && navigate("/home");
  }

  return (
    <>
      <div className="container">
        <h2 className='text-center'>Login Notebook</h2>
        <div className="row justify-content-center my-5">
          <div className="col-md-6">
            <form onSubmit={login}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' onChange={setData} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={setData} />
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
