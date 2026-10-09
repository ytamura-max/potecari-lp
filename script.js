const targets=document.querySelectorAll('.reveal,.reveal-stagger');
const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});
targets.forEach(target=>observer.observe(target));
