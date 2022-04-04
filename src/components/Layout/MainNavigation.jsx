import React from 'react'
import {
    Link,
    NavLink,
    Outlet
  } from 'react-router-dom';

const MainNavigation = () => {
  return (
    <header>
        <nav className='navbar navbar-light' style =  {{backgroundColor:'#435a6b'}} >
         <div class="container-fluid m-3 ">
          <NavLink to="/">Home </NavLink>
          <NavLink to="image-gallery">Image Gallery </NavLink>
          <NavLink to="modal">Modal </NavLink>
          <NavLink to="kanban-board">Kanban Board </NavLink>
          <NavLink to="react-table">React Table </NavLink>
          <NavLink to="load-more-pagination">Load More Pagination </NavLink>
          <NavLink to="image-gallery-2">Image Gallery 2 </NavLink>
          <NavLink to="bootstrap-examples">Bootstrap Examples </NavLink>
          </div>
        </nav>

      <Outlet />
    </header>
  )
}

export default MainNavigation