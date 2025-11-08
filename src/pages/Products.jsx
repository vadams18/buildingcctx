import React, {useState} from 'react';

const parcels = [
  { id: 'lot-1', title: 'Bayfront Parcel — Lot A', acres: 0.35, basePrice: 95000, img: 'https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2016/07/smart-home-360x240.jpg', status: 'Available' },
  { id: 'lot-2', title: 'Meadowview Parcel — Lot B', acres: 0.47, basePrice: 120000, img: 'https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2014/07/ab-mobile-workshop-300x217.jpg', status: 'Reserved' },
  { id: 'lot-3', title: 'Harbor Edge — Lot C', acres: 0.22, basePrice: 175000, img: 'https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2016/07/portfolio-image-3-360x240.jpg', status: 'Available' }
];

function currency(n){ return n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}); }

const Products = () => {
  const [option, setOption] = useState('empty');
  const [tier, setTier] = useState('standard');

  const multipliers = { empty: {standard:1, premium:1.2, luxury:1.5}, turnkey: {standard:1.5, premium:1.8, luxury:2.2}, custom: {standard:2.5, premium:3.2, luxury:4.0} };

  const computePrice = (base) => Math.round(base * multipliers[option][tier]);

  return (
    <div style={{padding:24}}>
      <h1>Available Parcels & Product Offerings</h1>
      <p>Select purchase option and price tier to preview pricing (placeholders).</p>
      <div style={{display:'flex', gap:12, marginTop:12}}>
        <div style={{flex:'1 1 320px', background:'#222', padding:12, borderRadius:6}}>
          <label>Purchase Option</label>
          <select value={option} onChange={(e)=>setOption(e.target.value)} style={{width:'100%', marginTop:6, padding:8, background:'#111', color:'#fff'}}>
            <option value='empty'>Empty Lot</option>
            <option value='turnkey'>Turn-key (Home Built & Ready)</option>
            <option value='custom'>Custom Build (Design & Build)</option>
          </select>
          <label style={{marginTop:12}}>Price Tier</label>
          <select value={tier} onChange={(e)=>setTier(e.target.value)} style={{width:'100%', marginTop:6, padding:8, background:'#111', color:'#fff'}}>
            <option value='standard'>Standard</option>
            <option value='premium'>Premium</option>
            <option value='luxury'>Luxury</option>
          </select>
          <div style={{marginTop:12}}>Estimated price for sample lot:</div>
          <div style={{fontSize:24, color:'#ff8a42', marginTop:6}}>{currency(100000)}</div>
          <a href='/contact' style={{display:'inline-block', marginTop:12, padding:'0.5rem 1rem', background:'#f97316', color:'#111'}}>Inquire</a>
        </div>
        <div style={{flex:'2 1 640px'}}>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12}}>
            {parcels.map(p => (
              <div key={p.id} style={{background:'#222', padding:8, borderRadius:6}}>
                <img src={p.img} alt={p.title} style={{width:'100%', height:120, objectFit:'cover', borderRadius:4}}/>
                <h4 style={{margin:'8px 0 0'}}>{p.title}</h4>
                <div style={{color:'#bbb', fontSize:12}}>{p.acres} acres • {p.status}</div>
                <div style={{color:'#ff8a42', fontWeight:700, marginTop:6}}>{currency(computePrice(p.basePrice))}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
