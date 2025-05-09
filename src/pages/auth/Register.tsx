import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { registerAnCount, RegisterData } from '../../api/auth';
import { showError } from '../../api/callApi';

export default function Register() {
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPasswords] = useState('');
  // const [sexe, setSexe] = useState('M');
  // const [idRole, setidRole] = useState(2);
  // const [telephone, setTelephone] = useState('');
  // const [adresse, setAdresse] = useState('...');

  const [formData, setFormData] = useState<RegisterData>({
    id: "",
    name: "",
    email: "",
    telephone: "",
    adresse: "",
    sexe: "",
    idRole: 2,
    avatar: "avatar.png",
    passwords: "",
    password2: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'idRole' ? parseInt(value) : value, // convertir si nécessaire
    }));
  };


  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.passwords == formData.password2) {
      // alert(formData.passwords);

      const result = await registerAnCount(formData);

      if (result.success) {

        navigate('/login');

      }
    }
    else {
      showError("Les deux mot de passe doivent etre identiques!!!");
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
                      <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                    </div>
                    <form className="user" method='post' onSubmit={handleRegister} autoComplete='true'>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input type="text" className="form-control form-control-user" id="exampleFirstName"
                            placeholder="First Name" name="name"
                            value={formData.name}
                            onChange={handleChange} required />
                        </div>

                      </div>
                      <div className="form-group row">
                        <div className="col-sm-12">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                            placeholder="Email Address" name="email"
                            value={formData.email}
                            onChange={handleChange} required />
                        </div>
                      </div>
                      <div className="form-group row">
                        
                         <div className="col-sm-12">
                          <input type="tel" className="form-control form-control-user" id="exampleInputEmail"
                            placeholder="Phone number +24381..." name="telephone"
                            value={formData.telephone}
                            onChange={handleChange} required />

                         </div>
                       
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input type="password" className="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Password" name="passwords"
                            value={formData.passwords}
                            onChange={handleChange} required />
                        </div>
                        <div className="col-sm-6">
                          <input type="password" className="form-control form-control-user"
                            id="exampleRepeatPassword" placeholder="Repeat Password" name="password2"
                            value={formData.password2}
                            onChange={handleChange} required/>
                        </div>
                      </div>
                      <button type='submit'  className="btn btn-primary btn-user btn-block">
                        Register Account
                      </button>
                      <hr />
                      <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw"></i> Register with Google
                      </a>
                      <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgot">Forgot Password?</Link>
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
