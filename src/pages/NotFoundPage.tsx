import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
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

                    {/* <!-- 404 Error Text --> */}
                    <div className="text-center">
                      <div className="error mx-auto" data-text="404">404</div>
                      <p className="lead text-gray-800 mb-5">Page Not Found</p>
                      <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
                      <Link to="/">&larr; Back to Dashboard</Link>
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
