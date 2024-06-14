// jquery_______start
$(document).ready(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");

  //Mobile Menu
  mobBtn.on("click", function () {
    BODY.toggleClass("mOpen");
  });

});

$(document).ready(function() {
  
  $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
          $('#topBtn').fadeIn();
      } else {
          $('#topBtn').fadeOut();
      }
  });

  
  $('#topBtn').on('click', function(event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth' 
      });
  });
});
// jquery_______end

let funcObj={
  f_0:function(){
    const tl = gsap.timeline();
    tl.to("#section0 .tit_wrap > *", {
      opacity: 1,
      stagger: 0.5,
      y: -20,
    });
    tl.to("#section1 .characterM", {
      opacity: 1,
      stagger: 0.5,
      y: -20,
    });
    document.addEventListener("DOMContentLoaded", function() {
      const isMobile = window.matchMedia("(max-width: 1199px)").matches;
      
      if (isMobile) {
        gsap.timeline()
          .set(".characterM", { x: -200 }) 
          .to(".characterM", { opacity: 1, duration: 1 })
          .to(".characterM", { x: 0, duration: 1, ease: "power1.out" })
          .to(".characterM", {
            y: -15,
            duration: 1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          });
        } else {
        gsap.timeline()
          .set(".characterM", { opacity: 1 }) 
          .to(".characterM", {
            y: -15,
            duration: 1,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1
          }); 
        }
    });
    },
    f_1: function () {
      const tl = gsap.timeline();
      tl.to("#section1 h2", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section1 h3", {
        opacity: 1,
        y: -30,
      });
      tl.to(".function >*", {
        opacity: 1,
        y: -50,
        stagger: 0.5,
      });
    },
    f_2:function(){
      const tl = gsap.timeline();
      tl.to("#section2 h2", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section2 h3", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section2 .function-bg >*", {
        opacity: 1,
        y: -50,
        stagger: 0.5,
      });
    },
    f_3:function(){
      const tl = gsap.timeline();
      tl.to("#section3 h2", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section3 h3", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section3 .function-bg >*", {
        opacity: 1,
        y: -50,
        stagger: 0.5,
      });
    },
    f_4:function(){
      const tl = gsap.timeline();
      tl.to("#section4 h2", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section4 h3", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section4 .function-bg >*", {
        opacity: 1,
        y: -50,
        stagger: 0.5,
      });
    },
    f_5:function(){
      const tl = gsap.timeline();
      tl.to("#section6 h2", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section6 h3", {
        opacity: 1,
        y: -30,
      });
      tl.to("#section6 .storeset >*", {
        opacity: 1,
        y: -50,
        stagger: 0.5,
      });
    },
};

let section = document.querySelectorAll('section');

funcObj['f_0']();  //스크롤과 상관없이 첫번째는 먼저 실행이 되게 함

window.addEventListener('scroll', function(){

  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;  //브라우저의 높이값

  for(let i =0; i<section.length;i++){
    //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
        console.log(i);
    }
  };

});






