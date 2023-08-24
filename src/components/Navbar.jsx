import React from 'react';
function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-primary fixed-top"
      data-bs-theme="light"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Entradita
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Comprar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Vender
              </a>
            </li>
          </ul>

          <div class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              id="inputSearch"
              list="inputSearch"
              placeholder="Buscar"
              aria-label="Search"
            ></input>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
