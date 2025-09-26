import React, { useEffect } from 'react'
import SEO from './SEO';

export default function Reservation() {
   
  return (
      <section className="py-5" id="reservation-future">
         <SEO
                title="Réservation à l'avance & Planification - SwiftRide"
                description="Planifiez vos trajets à l'avance avec SwiftRide."
                keywords="Réservation, Planification, SwiftRide, taxi, CDF"
                author="SwiftRide"
              />
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      <img src="https://cdn-icons-png.flaticon.com/512/2354/2354634.png" alt="Réservation à l'avance" className="img-fluid rounded shadow-sm" style={{ maxWidth: '80px' }} />
                          <h3 className="mt-4 text-success">Réservation à l'avance & Planification</h3>
                          <p className="lead">
                              Organisez vos déplacements à l'avance avec SwiftRide. Que ce soit pour un vol tôt le matin, un rendez-vous important ou un événement prévu, vous pouvez réserver un taxi selon vos horaires.
                          </p>
                          <ul className="list-unstyled">
                              <li><i className="fas fa-calendar-alt text-success me-2"></i> Réservez un trajet à une date et heure précise</li>
                              <li><i className="fas fa-bell text-success me-2"></i> Rappels automatiques avant la course</li>
                              <li><i className="fas fa-user-clock text-success me-2"></i> Priorité de service aux trajets planifiés</li>
                          </ul>
                  </div>
                  <div className="col-lg-6">
                      <img src="https://media.istockphoto.com/id/2194164775/fr/photo/calendrier-de-bureau-sur-fond-de-bois.webp?a=1&b=1&s=612x612&w=0&k=20&c=VvdqkPgOi2qgqJ1j5Mph3_0U6TGdRzDvP7QMsQluUEQ=" alt="Illustration planification de trajet" className="img-fluid rounded shadow" />
                  </div>
              </div>
          </div>
      </section>

  )
}
