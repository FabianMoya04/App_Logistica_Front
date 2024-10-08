import React from 'react'

export default function NavBar() {
  return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                      App Logistica 
                  </a>
                  <button className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                  >
                      <span classNameName="navbar-toggler-icon"></span>
                  </button> 
                  <button className="btn btn-outline-light">Registrarme</button>
                  <button className="btn btn-outline-light">Iniciar Sesion</button>
                  <button className="btn btn-outline-light">Agregar Producto</button>
              </div>
          </nav>
      </div>
  )
}
