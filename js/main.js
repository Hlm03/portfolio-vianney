gsap.registerPlugin(ScrollTrigger);

const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40),{passive:true});
const burger=document.getElementById('burger'),mobileNav=document.getElementById('mobileNav');
if(burger&&mobileNav){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow=mobileNav.classList.contains('open')?'hidden':'';
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    burger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow='';
  }));
}

/* Magnetic buttons */
document.querySelectorAll('.btn-magnet').forEach(btn=>{
  btn.addEventListener('mousemove',e=>{
    const r=btn.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    btn.style.transform=`translate(${x*0.18}px,${y*0.18}px)`;
  });
  btn.addEventListener('mouseleave',()=>btn.style.transform='');
});

/* Ripple */
document.querySelectorAll('.btn-ripple').forEach(btn=>{
  btn.addEventListener('click',e=>{
    const r=btn.getBoundingClientRect();
    const ripple=document.createElement('span');
    ripple.className='ripple';
    const size=Math.max(r.width,r.height);
    ripple.style.width=ripple.style.height=size+'px';
    ripple.style.left=(e.clientX-r.left-size/2)+'px';
    ripple.style.top=(e.clientY-r.top-size/2)+'px';
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(),600);
  });
});

/* Spotlight */
document.querySelectorAll('.spotlight-zone').forEach(zone=>{
  zone.addEventListener('mousemove',e=>{
    const r=zone.getBoundingClientRect();
    zone.style.setProperty('--sx',((e.clientX-r.left)/r.width*100)+'%');
    zone.style.setProperty('--sy',((e.clientY-r.top)/r.height*100)+'%');
  });
});

/* Stats counter */
const statsObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting)return;
    const el=entry.target;
    const target=parseFloat(el.dataset.target);
    const suffix=el.dataset.suffix||'';
    const decimal=el.dataset.decimal==='1';
    let start=null;
    const dur=1400;
    function step(ts){
      if(!start)start=ts;
      const p=Math.min((ts-start)/dur,1);
      const ease=1-Math.pow(1-p,3);
      const val=target*ease;
      el.textContent=(decimal?val.toFixed(1):Math.floor(val))+suffix;
      if(p<1)requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    statsObserver.unobserve(el);
  });
},{threshold:0.4});
document.querySelectorAll('[data-target]').forEach(el=>statsObserver.observe(el));

/* Reveal on scroll */
gsap.utils.toArray('.reveal').forEach(el=>{
  gsap.fromTo(el,{opacity:0,y:28},{opacity:1,y:0,duration:0.7,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%'}});
});

/* Marquee */
const marquee=document.querySelector('.marquee-track');
if(marquee){
  const clone=marquee.innerHTML;
  marquee.innerHTML=clone+clone;
  gsap.to(marquee,{xPercent:-50,duration:28,ease:'none',repeat:-1});
}

/* Pinned notes / process timeline */
const processSection=document.querySelector('.process-section');
if(processSection&&window.innerWidth>900){
  const notes=gsap.utils.toArray('.process-note');
  notes.forEach((note,i)=>{
    gsap.fromTo(note,{opacity:0.25,scale:0.96},{opacity:1,scale:1,duration:0.5,scrollTrigger:{trigger:note,start:'top 70%',end:'bottom 40%',toggleActions:'play reverse play reverse'}});
  });
}

/* Project modal */
const modal=document.getElementById('projectModal');
const modalTitle=document.getElementById('modalTitle');
const modalCat=document.getElementById('modalCat');
const modalDesc=document.getElementById('modalDesc');
const modalTags=document.getElementById('modalTags');
const modalDrive=document.getElementById('modalDrive');
const modalClose=document.getElementById('modalClose');
const modalPrev=document.getElementById('modalPrev');
const modalNext=document.getElementById('modalNext');
let projects=[],currentIdx=0;

document.querySelectorAll('.project-card').forEach((card,i)=>{
  projects.push({
    title:card.dataset.title||card.querySelector('h3')?.textContent||'',
    cat:card.dataset.cat||'',
    desc:card.dataset.desc||'',
    tags:(card.dataset.tags||'').split(',').filter(Boolean),
    drive:card.dataset.drive||'#'
  });
  card.addEventListener('click',()=>openModal(i));
});

function openModal(i){
  currentIdx=i;
  const p=projects[i];
  if(!p||!modal)return;
  modalTitle.textContent=p.title;
  modalCat.textContent=p.cat;
  modalDesc.textContent=p.desc;
  modalTags.innerHTML=p.tags.map(t=>`<span class="tag">${t.trim()}</span>`).join('');
  if(modalDrive){modalDrive.href=p.drive;modalDrive.style.display=p.drive&&p.drive!=='#'?'inline-flex':'none';}
  modal.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(){
  modal?.classList.remove('open');
  document.body.style.overflow='';
}
modalClose?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});
modalPrev?.addEventListener('click',()=>openModal((currentIdx-1+projects.length)%projects.length));
modalNext?.addEventListener('click',()=>openModal((currentIdx+1)%projects.length));

/* Formspree contact */
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    const btn=form.querySelector('[type=submit]');
    const original=btn.textContent;
    btn.disabled=true;btn.textContent='Envoi…';
    try{
      const res=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
      if(res.ok){
        form.reset();
        btn.textContent='Message envoyé ✓';
        setTimeout(()=>btn.textContent=original,3000);
      }else throw new Error('fail');
    }catch{
      btn.textContent='Erreur — réessayez';
      setTimeout(()=>btn.textContent=original,3000);
    }
    btn.disabled=false;
  });
}

/* Copy email toast */
document.querySelectorAll('[data-copy]').forEach(el=>{
  el.addEventListener('click',e=>{
    e.preventDefault();
    const text=el.dataset.copy||el.textContent;
    navigator.clipboard?.writeText(text).then(()=>{
      const toast=document.getElementById('toast');
      if(toast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);}
    });
  });
});

/* Smooth year */
const yearEl=document.getElementById('year');
if(yearEl)yearEl.textContent=new Date().getFullYear();
