// Basic interactivity for Collier Exposed landing page
document.addEventListener('DOMContentLoaded',function(){
  const menuBtn = document.getElementById('menuBtn');
  menuBtn && menuBtn.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(!nav) return;
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '8px';
    nav.style.background = '#fff';
    nav.style.position = 'absolute';
    nav.style.right = '20px';
    nav.style.top = '64px';
    nav.style.border = '1px solid #eee';
    nav.style.padding = '12px';
    nav.style.borderRadius = '8px';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Tiny analytics: copy buffering for "Read Exposures" clicks (local)
  document.querySelectorAll('a[target="_blank"]').forEach(a=>{
    a.addEventListener('click', ()=>{
      try{ localStorage.setItem('lastExternal', a.href) }catch(e){}
    });
  });
});
