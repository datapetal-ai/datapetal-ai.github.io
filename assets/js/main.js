!function(){AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:120,delay:50,duration:600,easing:"cubic-bezier(0.77, 0, 0.175, 1)",once:!0,mirror:!1,anchorPlacement:"top-bottom"});var e=document.querySelectorAll(".typed-animation");0<e.length&&e.forEach(e=>{new Typed(e,{strings:JSON.parse(e.dataset.strings),typeSpeed:80,backSpeed:40,backDelay:3e3,startDelay:1e3,fadeOut:!0,loop:!0})}),new VenoBox({selector:".video-play-btn",overlayColor:"rgba(23, 24, 37,0.99)"});const s=document.querySelector(".pricing-table");if(s){e=document.querySelectorAll(".switch-wrapper input");const i=s.querySelectorAll(".price"),o="d-none";e.forEach(e=>{e.addEventListener("input",function(){i.forEach(e=>{e.classList.add(o)}),s.querySelectorAll(".price."+e.id).forEach(e=>{e.classList.remove(o)})})})}new Swiper(".review-carousel",{loop:!1,freemode:!0,slidesPerView:1,spaceBetween:24,speed:1e3,autoplay:{delay:3e3,disableOnInteraction:!0},pagination:{el:".review-carousel-container .swiper-pagination",type:"bullets",clickable:!0},breakpoints:{1:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3}}}),new Swiper(".review-rolling-carousel",{loop:!0,freemode:!0,slidesPerView:1,spaceBetween:24,centeredSlides:!1,allowTouchMove:!0,speed:1e4,autoplay:{delay:1,disableOnInteraction:!1},breakpoints:{1:{slidesPerView:1.1},768:{slidesPerView:2},992:{slidesPerView:2.5},1200:{slidesPerView:3},1400:{slidesPerView:3.5},1600:{slidesPerView:4},1900:{slidesPerView:4.5}}}),new Swiper(".review-rolling-carousel-reversed",{loop:!0,freemode:!0,slidesPerView:1,spaceBetween:24,centeredSlides:!1,allowTouchMove:!0,speed:8e3,autoplay:{delay:1,reverseDirection:!0,disableOnInteraction:!1},breakpoints:{1:{slidesPerView:1.1},768:{slidesPerView:2},992:{slidesPerView:2.5},1200:{slidesPerView:3},1400:{slidesPerView:3.5},1600:{slidesPerView:4},1900:{slidesPerView:4.5}}});const t=document.querySelector("#contact-form"),r=document.querySelector(".status");t&&t.addEventListener("submit",function(s){if(s.preventDefault(),t){s=new FormData(t);let e=new XMLHttpRequest;e.open("POST",t.action),e.onload=function(){200===e.status?(r.classList.remove("error"),r.classList.add("success"),r.textContent=e.responseText,t.reset()):(r.classList.remove("success"),r.classList.add("error"),""!==e.responseText?r.textContent=e.responseText:r.textContent="Oops! An error occurred and your message could not be sent.")},e.send(s)}})}();