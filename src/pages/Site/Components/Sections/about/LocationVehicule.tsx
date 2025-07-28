import React from 'react'

export default function LocationVehicule() {
  return (
      <section className="py-5" id="location-vehicule">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-6 mb-4 mb-lg-0">
                      <img src="https://cdn-icons-png.flaticon.com/512/744/744465.png" alt="Location de véhicule" className="img-fluid rounded shadow-sm" style={{ maxWidth: '80px' }} />
                          <h3 className="mt-4 text-success">Location de véhicules</h3>
                          <p className="lead">
                              Besoin d’un véhicule pour quelques heures ou plusieurs jours ? SwiftRide propose des options de location adaptées à vos besoins, avec ou sans chauffeur.
                          </p>
                          <ul className="list-unstyled">
                              <li><i className="fas fa-check-circle text-success me-2"></i> Véhicules récents et bien entretenus</li>
                              <li><i className="fas fa-check-circle text-success me-2"></i> Tarifs transparents et abordables</li>
                              <li><i className="fas fa-check-circle text-success me-2"></i> Réservation rapide en ligne</li>
                          </ul>
                  </div>
                  <div className="col-lg-6">
                      <img src="https://img.freepik.com/free-vector/car-sharing-illustration-concept_114360-9016.jpg?w=740" alt="Illustration location voiture" className="img-fluid rounded shadow" />
                  </div>
              </div>
          </div>
      </section>

  )
}
