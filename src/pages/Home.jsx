import React from 'react';

const Home = () => (
  <main>
    <section style={{padding:'2rem', display:'flex', gap:'2rem', alignItems:'center'}}>
      <div style={{flex:1}}>
        <h1 style={{fontSize:'2rem', margin:0}}>Renovating Homes and Offices</h1>
        <p style={{color:'#ccc'}}>We offer complete home and business renovation and/or remodeling services, kitchen & bath design, and functional workspaces.</p>
        <a href="/contact" style={{display:'inline-block', marginTop:'1rem', padding:'0.5rem 1rem', background:'#f97316', color:'#111'}}>Get a Quote</a>
      </div>
      <div style={{width:460}}>
        <img src="https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2016/07/hero-image.jpg" alt="Hero" style={{width:'100%', height:'auto', borderRadius:6}}/>
      </div>
    </section>

    <section style={{padding:'2rem', background:'#222'}}>
      <h2>Featured Articles</h2>
      <div style={{display:'flex', gap:'1rem', marginTop:12}}>
        <article style={{background:'#333', padding:12, borderRadius:6, width:300}}>
          <img src="https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2016/07/smart-home-360x240.jpg" alt="Smart Home" style={{width:'100%', height:150, objectFit:'cover'}}/>
          <h3>Smart Home</h3>
          <p style={{color:'#bbb'}}>Want instant smartness for your home? Call us today for an estimate.</p>
        </article>
        <article style={{background:'#333', padding:12, borderRadius:6, width:300}}>
          <img src="https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2014/07/ab-mobile-workshop-300x217.jpg" alt="Workshop" style={{width:'100%', height:150, objectFit:'cover'}}/>
          <h3>Design Visualization Tools</h3>
          <p style={{color:'#bbb'}}>Use these tools to help you choose finishes for your interior spaces.</p>
        </article>
        <article style={{background:'#333', padding:12, borderRadius:6, width:300}}>
          <img src="https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2016/07/portfolio-image-3-360x240.jpg" alt="Portfolio" style={{width:'100%', height:150, objectFit:'cover'}}/>
          <h3>Custom Home Design/Build</h3>
          <p style={{color:'#bbb'}}>Committed to making your personal vision of the perfect home.</p>
        </article>
      </div>
    </section>

    <section style={{padding:'2rem'}}>
      <h2>Who Are We?</h2>
      <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
        <img src="https://web.archive.org/web/20180103202757im_/http://www.buildingcorpuschristi.com/wp-content/uploads/2016/07/who-are-we-360x240.jpg" alt="Who are we" style={{width:220, height:140, objectFit:'cover', borderRadius:6}}/>
        <div>
          <p style={{color:'#ccc'}}>We maintain high standards and strive to exceed client expectations. Building Corpus Christi combines local permitting knowledge with experienced contractors and planners to deliver projects on time and on budget.</p>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
