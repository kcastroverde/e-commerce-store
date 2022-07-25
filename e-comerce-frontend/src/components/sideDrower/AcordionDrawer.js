import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';
import {MdArrowDropDown} from 'react-icons/md';
import "./AcordionDrawer.css";

function AcordionDrawer() {
  const [open, setOpen] = useState(false);
  return(
<div
  className="sidedrawer__links"
 onClick={e => {
    e.stopPropagation();}}
>
  <Button
  className='sidedrawer__button'
  onClick={() => setOpen(!open)}
  aria-controls="example-collapse-text"
  aria-expanded={open}
>
  Administrador <MdArrowDropDown />
</Button>
<Collapse in={open}>
    <ul id='list-dropdown'>
      <li><Link to="/admin/dashboard" >Opciones</Link></li>
      <li><Link to="/admin/orders">Ordenes</Link></li>
      <li><Link to="/admin/products">Productos</Link></li>
      <li><Link to="/admin/category">Categorias</Link></li>
    </ul>
</Collapse>
</div>
  );
}

export default AcordionDrawer;