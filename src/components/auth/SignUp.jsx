import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import authContext from '../../context/auth/authContext';

export default function SignUp() {
  const navigate = useNavigate();
  const context = useContext(authContext);
  const { userSignUp, user, setUser } = context;

  const setData = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const signUpApi = async (e) => {
    e.preventDefault();
    const isSignUp = userSignUp();
    isSignUp && navigate("/");
  }

  return (
    <>
      <div className="container">
        <h2 className='text-center'>Sign Up Notebook</h2>
        <div className="row justify-content-center my-5">
          <div className="col-md-6">
            <form onSubmit={signUpApi}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" name='name' onChange={setData} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name='email' onChange={setData} aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" name='password' onChange={setData} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Confired Password</label>
                <input type="password" className="form-control" id="conPassword" name='conPassword' onChange={setData} />
              </div>
              <div className='d-flex justify-content-center'>
                <button type="submit" className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
