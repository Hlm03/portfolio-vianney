gsap.registerPlugin(ScrollTrigger);

const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});
const burger=document.getElementById('burger'),menu=document.getElementById('mobileMenu');
if(burger&&menu){
  burger.addEventListener('click',()=>{burger.classList.toggle('open');menu.classList.toggle('open')});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('open');menu.classList.remove('open')}));
}

document.querySelectorAll('.reveal').forEach(el=>{
  gsap.fromTo(el,{opacity:0,y:36},{opacity:1,y:0,duration:.8,ease:'power3.out',
    scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'}});
});

/* Cursor Spotlight */
(function(){
  if(window.matchMedia('(max-width:768px)').matches) return;
  document.querySelectorAll('.spotlight-zone').forEach(function(zone){
    var glow=zone.querySelector('.spotlight-glow');
    if(!glow) return;
    zone.addEventListener('mousemove',function(e){
      var r=zone.getBoundingClientRect();
      glow.style.left=(e.clientX-r.left)+'px';
      glow.style.top=(e.clientY-r.top)+'px';
    });
  });
})();

/* Magnetic */
document.querySelectorAll('.btn-magnet').forEach(btn=>{
  const strength=0.32;
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    btn.style.transform=`translate(${(e.clientX-r.left-r.width/2)*strength}px,${(e.clientY-r.top-r.height/2)*strength}px)`;
  });
  btn.addEventListener('mouseleave',()=>{btn.style.transform='translate(0,0)'});
  btn.style.transition='transform .15s ease-out';
});

/* Ripple */
document.querySelectorAll('.btn-ripple').forEach(btn=>{
  btn.addEventListener('click',function(e){
    const r=btn.getBoundingClientRect();
    const size=Math.max(r.width,r.height)*1.2;
    const ink=document.createElement('span');
    ink.className='ripple-ink';
    ink.style.width=ink.style.height=size+'px';
    ink.style.left=(e.clientX-r.left-size/2)+'px';
    ink.style.top=(e.clientY-r.top-size/2)+'px';
    btn.appendChild(ink);
    setTimeout(()=>ink.remove(),650);
  });
});

/* Toast + copy email */
const toast=document.getElementById('toast');
function showToast(msg){
  if(!toast) return;
  if(msg) toast.textContent=msg;
  toast.classList.add('show');
  clearTimeout(showToast._t);
  showToast._t=setTimeout(()=>toast.classList.remove('show'),2200);
}
document.querySelectorAll('.contact-email').forEach(el=>{
  el.addEventListener('click',function(){
    const text=el.getAttribute('data-copy');
    if(text&&navigator.clipboard) navigator.clipboard.writeText(text).then(()=>showToast('Email copié ✓')).catch(()=>{});
  });
});

/* Stats counter */
(function(){
  const vals=document.querySelectorAll('.stat-card .val[data-target]');
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el=entry.target;
      if(el.dataset.done) return;
      el.dataset.done='1';
      const target=parseFloat(el.dataset.target);
      const prefix=el.dataset.prefix||'';
      const suffix=el.dataset.suffix||'';
      const decimals=parseInt(el.dataset.decimal||'0',10);
      const t0=performance.now();
      function frame(now){
        const p=Math.min(1,(now-t0)/900);
        const eased=1-Math.pow(1-p,3);
        let v=target*eased;
        el.textContent=prefix+(decimals>0?v.toFixed(decimals).replace('.',','):String(Math.round(v)))+suffix;
        if(p<1) requestAnimationFrame(frame);
        else {
          el.textContent=prefix+(decimals>0?target.toFixed(decimals).replace('.',','):String(target))+suffix;
          el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
        }
      }
      requestAnimationFrame(frame);
      io.unobserve(el);
    });
  },{threshold:0.4});
  vals.forEach(v=>io.observe(v));
})();

/* Project modal */
(function(){
  const modal=document.getElementById('projectModal');
  const grid=document.getElementById('projectsGrid');
  if(!modal||!grid) return;
  const img=document.getElementById('modalImg');
  const badge=document.getElementById('modalBadge');
  const title=document.getElementById('modalTitle');
  const desc=document.getElementById('modalDesc');
  const tools=document.getElementById('modalTools');
  const drive=document.getElementById('modalDrive');
  const closeBtn=document.getElementById('modalClose');
  const prevBtn=document.getElementById('modalPrev');
  const nextBtn=document.getElementById('modalNext');
  let list=[];
  let index=0;

  function visibleCards(){
    return [...grid.querySelectorAll('.project-card')].filter(c=>{
      if(c.style.display==='none') return false;
      if(c.classList.contains('is-hidden')) return false;
      return true;
    });
  }
  function fill(card){
    img.src=card.dataset.img||'';
    img.alt=card.dataset.title||'';
    badge.textContent=card.dataset.badge||'';
    title.textContent=card.dataset.title||'';
    desc.textContent=card.dataset.desc||'';
    tools.innerHTML='';
    (card.dataset.tools||'').split('|').filter(Boolean).forEach(t=>{
      const s=document.createElement('span');s.textContent=t;tools.appendChild(s);
    });
    drive.href=card.dataset.drive||'#';
    prevBtn.disabled=index<=0;
    nextBtn.disabled=index>=list.length-1;
  }
  function openModal(card){
    list=visibleCards();
    index=Math.max(0,list.indexOf(card));
    if(index<0){list=[...grid.querySelectorAll('.project-card')];index=list.indexOf(card)}
    fill(list[index]||card);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow='';
  }
  grid.addEventListener('click',e=>{
    const card=e.target.closest('.project-card');
    if(card) openModal(card);
  });
  grid.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){
      const card=e.target.closest('.project-card');
      if(card){e.preventDefault();openModal(card)}
    }
  });
  prevBtn.addEventListener('click',()=>{
    if(index>0){index--;fill(list[index])}
  });
  nextBtn.addEventListener('click',()=>{
    if(index<list.length-1){index++;fill(list[index])}
  });
  closeBtn.addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal) closeModal()});
  document.addEventListener('keydown',e=>{
    if(!modal.classList.contains('open')) return;
    if(e.key==='Escape') closeModal();
    if(e.key==='ArrowLeft'&&index>0){index--;fill(list[index])}
    if(e.key==='ArrowRight'&&index<list.length-1){index++;fill(list[index])}
  });
  document.getElementById('modalContact')?.addEventListener('click',closeModal);
})();

/* Contact form — Formspree AJAX */
(function(){
  const form=document.getElementById('contactForm');
  if(!form) return;
  const status=document.getElementById('formStatus');
  const btn=document.getElementById('cf-submit');
  form.addEventListener('submit',async function(e){
    e.preventDefault();
    if(status){status.hidden=false;status.className='form-status';status.textContent='Envoi en cours…'}
    if(btn){btn.disabled=true}
    try{
      const res=await fetch(form.action,{
        method:'POST',
        body:new FormData(form),
        headers:{'Accept':'application/json'}
      });
      if(res.ok){
        form.reset();
        if(status){status.className='form-status ok';status.textContent='Message envoyé ✓ Je vous réponds sous 12 h.'}
      } else {
        let msg='Envoi impossible. Réessayez ou contactez-moi sur WhatsApp.';
        try{
          const data=await res.json();
          if(data&&data.errors&&data.errors.length) msg=data.errors.map(e=>e.message).join(' ');
        }catch(_){}
        if(status){status.className='form-status err';status.textContent=msg}
      }
    }catch(_){
      if(status){status.className='form-status err';status.textContent='Erreur réseau. Vérifiez votre connexion ou utilisez WhatsApp.'}
    }
    if(btn){btn.disabled=false}
  });
})();

/* Filter pill + limit */
(function(){
  const bar=document.getElementById('filterBar');
  const pill=document.getElementById('filterPill');
  const grid=document.getElementById('projectsGrid');
  const btn=document.getElementById('btnMoreProjects');
  if(!bar||!grid) return;
  const btns=[...bar.querySelectorAll('.filter-btn')];
  const PAGE=4;
  let expanded=false;

  function movePill(btnEl){
    if(!pill||!btnEl) return;
    pill.style.left=btnEl.offsetLeft+'px';
    pill.style.width=btnEl.offsetWidth+'px';
  }
  function apply(){
    const f=(bar.querySelector('.filter-btn.active')||btns[0]).dataset.filter;
    const cards=[...grid.querySelectorAll('.project-card')];
    const matched=cards.filter(c=>f==='all'||c.dataset.cat===f);
    cards.forEach(c=>{
      const show=f==='all'||c.dataset.cat===f;
      c.style.display=show?'':'none';
      c.classList.remove('is-hidden');
    });
    matched.forEach((c,i)=>{
      if(!expanded && i>=PAGE) c.classList.add('is-hidden');
    });
    if(btn){
      const left=matched.length-PAGE;
      if(left<=0){
        btn.hidden=true;
      } else {
        btn.hidden=false;
        if(expanded){
          btn.textContent='Voir moins';
          btn.setAttribute('aria-expanded','true');
        } else {
          btn.textContent='Voir plus de projets ('+left+')';
          btn.setAttribute('aria-expanded','false');
        }
      }
    }
  }
  requestAnimationFrame(()=>movePill(bar.querySelector('.filter-btn.active')||btns[0]));
  btns.forEach(b=>{
    b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      movePill(b);
      expanded=false;
      apply();
    });
  });
  if(btn) btn.addEventListener('click',()=>{
    expanded=!expanded;
    apply();
    if(!expanded){
      const section=document.getElementById('portfolio')||grid;
      section.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
  window.addEventListener('resize',()=>{const a=bar.querySelector('.filter-btn.active');if(a)movePill(a)});
  apply();
})();

/* Process notes reveal */
(function(){
  const notes=document.querySelectorAll('.process-note');
  if(!notes.length) return;
  if(window.matchMedia('(max-width:768px)').matches){
    notes.forEach(n=>n.classList.add('visible'));
    return;
  }
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        const i=parseInt(en.target.getAttribute('data-i')||'0',10);
        setTimeout(()=>en.target.classList.add('visible'), i*120);
        io.unobserve(en.target);
      }
    });
  },{threshold:0.2});
  notes.forEach(n=>io.observe(n));
})();

if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  ScrollTrigger.getAll().forEach(st=>st.kill());
  gsap.set('.process-note,.process-cta,.reveal,.stat-card,.skill-card',{clearProps:'all',opacity:1,scale:1});
  document.querySelectorAll('.process-note').forEach(n=>n.classList.add('visible'));
}
