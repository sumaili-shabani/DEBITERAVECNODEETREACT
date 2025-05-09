import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { resetPassword } from '../../api/auth'; // make sure this API function exists
import { showError } from '../../api/callApi';


export default function ResetPassword() {
    const navigate = useNavigate();
    const { token } = useParams(); // get token from URL
    const [passwords, setPasswords] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwords !== confirm) {
            showError("Passwords do not match.");
            return;
        }

        const result = await resetPassword({ token: token, newPassword: passwords });

        if (result.success) {
            navigate('/login');
        } else {
            showError(result.message || "Reset failed. Please try again.");

        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-4">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Reset Your Password</h1>
                            </div>
                            <form className="user" method='post' onSubmit={handleSubmit}>
                             
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-user"
                                        placeholder="New Password"
                                        value={passwords}
                                        onChange={(e) => setPasswords(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control form-control-user"
                                        placeholder="Confirm Password"
                                        value={confirm}
                                        onChange={(e) => setConfirm(e.target.value)}
                                        required
                                    />
                                </div>
                                <button className="btn btn-primary btn-user btn-block" type="submit">
                                    Update Password
                                </button>
                            </form>
                            <hr />
                            <div className="text-center">
                                <Link className="small" to="/login">Back to Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
