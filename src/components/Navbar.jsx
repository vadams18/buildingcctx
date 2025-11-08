import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{background:'#111', padding:'12px 24px'}}>
    <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <div style={{width:44, height:44, background:'linear-gradient(135deg,#f97316,#ff8a42)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:6}}>BC</div>
        <div style={{color:'#fff'}}>
          <div style={{fontWeight:700}}>Building Corpus Christi</div>
          <div style={{fontSize:12, color:'#bbb'}}>Affordable Quality Craftsmanship</div>
        </div>
      </div>
      <div>
        <Link to="/" style={{color:'#fff', marginRight:16}}>Home</Link>
        <Link to="/products" style={{color:'#fff', marginRight:16}}>Products</Link>
        <Link to="/about" style={{color:'#fff', marginRight:16}}>About</Link>
        <Link to="/contact" style={{color:'#ff8a42'}}>Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
