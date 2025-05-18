
ScrollOut({
onShown: (element) => {
    new TypeIt(element.querySelector('.date'), {
    startDelay: 500,
    cursor: false,
    })
    .pause(2000)
    .go();
},
});

window.onscroll = function() {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
};

// 스크롤 이동 기능
const home = document.querySelector(".nav_hover li:nth-of-type(1) button")
const about = document.querySelector(".nav_hover li:nth-of-type(2) button")
const work = document.querySelector(".nav_hover li:nth-of-type(3) button")
const contact = document.querySelector(".nav_hover li:nth-of-type(4) button")


const aboutSection = document.querySelector(".about")
const workSection = document.querySelector(".work_cate")
const contactSection = document.querySelector(".contact_container")

home.addEventListener("click", function(){
    window.scrollTo({ top:0, behavior:"smooth" })
})
about.addEventListener("click", function(){
    // offsetTop = 위치값 측정
    // aboutSection.offsetTop
    // console.log(aboutSection.offsetTop)
    // behavior = smooth 부드럽게 이동
    window.scrollTo({ top:aboutSection.offsetTop, behavior:"smooth" })
})

work.addEventListener("click", function(){
    window.scrollTo({ top:workSection.offsetTop, behavior:"smooth" })
})
contact.addEventListener("click", function(){
    window.scrollTo({ top:contactSection.offsetTop, behavior:"smooth" })
})

ScrollReveal({ reset: true });
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.tagline', { 
    distance:'60px',
    duration:2500,
});
ScrollReveal().reveal('.punchline_a', { 
    delay: 50,
    origin: 'left',
    distance:'60px',
});

ScrollReveal().reveal('.punchline_c', { 
    delay: 150,
    origin: 'left',
    distance:'60px',
});

ScrollReveal().reveal('.punchline_b', { 
    delay: 150,
    origin: 'right',
    distance:'60px',
});

ScrollReveal().reveal('.taglined', { 
    distance:'60px',
    duration:1000,
});
