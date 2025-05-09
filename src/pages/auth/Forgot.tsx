import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../api/auth';

export default function Forgot() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await forgotPassword({ email: email });

        if (result.success) {
            // navigate('/');

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
                                          <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                          <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                              and we'll send you a link to reset your password!</p>
                                      </div>
                                      <form className="user" method='post' onSubmit={handleLogin}>
                                          <div className="form-group">
                                              <input type="email" className="form-control form-control-user"
                                                  id="exampleInputEmail" aria-describedby="emailHelp"
                                                  placeholder="Enter Email Address..." value={email}
                                                  onChange={(e) => setEmail(e.target.value)} required />
                                          </div>
                                        
                                          
                                          <button type='submit' className="btn btn-primary btn-user btn-block">
                                              Reset Password
                                          </button>
                                        
                                      </form>
                                      <hr />
                                      <div className="text-center">
                                          <Link className="small" to="/register">Create an Account!</Link>
                                      </div>
                                      <div className="text-center">
                                          <Link className="small" to="/login">Already have an account? Login!</Link>
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
