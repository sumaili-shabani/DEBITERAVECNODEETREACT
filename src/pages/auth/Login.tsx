import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login({ email: email, passwords: password });
    
    if (result.success) {
      if (result.user?.idRole == 1) {
        navigate('/');
      }
    
    }
  };


  return (
    <div className="container">

      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-3 col-lg-3 col-md-3"></div>
        <div className="col-xl-6 col-lg-6 col-md-6">

          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">

                <div className="col-lg-12">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user" method='post' onSubmit={handleLogin}>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user"
                          id="exampleInputEmail" aria-describedby="emailHelp"
                          placeholder="Enter Email Address..." value={email}
                          onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user"
                          id="exampleInputPassword" placeholder="Password" value={password}
                          onChange={(e) => setPassword(e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label" htmlFor="customCheck">Remember
                            Me</label>
                        </div>
                      </div>
                      <button type='submit' className="btn btn-primary btn-user btn-block">
                        Login
                      </button>
                      <hr />
                      <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgot">Forgot Password?</Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">Create an Account!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="col-xl-3 col-lg-3 col-md-3"></div>

      </div>

    </div>

  )
}
