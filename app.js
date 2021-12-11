const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});


navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
    
  });
});


// start stats conter

let nums = document.querySelectorAll(" .box5 .number5");


let progSpan =document.querySelector(" .skill-per ");
var d = document.getElementById("stats898");
var topPos = d.offsetTop;
var n = progSpan.offsetTop;
let span = document.querySelector(".up");

let started = false; // Function Started ? No

window.onscroll = function () {
 
  if (window.scrollY >=  topPos) {
    if (!started) {
      setTimeout(function(){
      nums.forEach((number5) => startCount(number5));
    },)}
    started = true;
    
  }
 
 
 
  
  // setInterval(function(){ 
  // if (window.scrollY >= n ) {
  //   $('.skill-per').each(function(){
  //     var $this = $(this);
  //     var per = $this.attr('per');
  //     $this.css("width",per+'%');
  //     $({animatedValue: 0}).animate({animatedValue: per},{
  //       duration: 1000,
  //       step: function(){
  //         $this.attr('per', Math.floor(this.animatedValue) + '%');
  //       },
  //       complete: function(){
  //         $this.attr('per', Math.floor(this.animatedValue) + '%');
  //       }
  //     });
  //   });
 

  // }
  // ; }, 3000);

  this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");//button to up

// start scroll indecator in the head red color under nav
  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  document.querySelector(' .scroll-indicator').style.width = percentage + '%';
// end scroll indecator in the head red color under nav




//   $(function(){
//     $('nav a').click(function () {
//         $('nav a').removeClass('active'); //code to add avtive class t nav when clickid 
//         $(this).addClass('active');
//      });
//  });



//start add class active to nav li a when active and remove from other 
$('.nav-links li a').click(function () {

  $('.nav-links li a').removeClass('active');
  $(this).addClass('active');
});
//end add class active to nav li a when active and remove from other 



//start add active class to nav when arrive section
$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 550,
	scrollThreshold: 0.9,
	filter: '',
	easing: 'swing',
 
	

});
//end add active class to nav when arrive section







}


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    
    if (el.textContent == goal) {
      clearInterval(count);
      
    }
    
  }, 3000 / goal)
 
  
  
};



// end stats conter


//  start active label portfolilo
let switcherLis = document.querySelectorAll(".proo label ");


switcherLis.forEach((label) => {
  label.addEventListener("click", removeActive);
  
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherLis.forEach((label) => {
    label.classList.remove("active12");
    this.classList.add("active12");
  });
}
// end active label portfolio

// start button to up




span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// end button to up


setInterval(function(){ 
  $('.skill-per').each(function (){
    
    var $this = $(this);
    
    var per = $this.attr('per');

    
    $this.css("width",per+'%');
   
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 2000,
      step: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      },
      complete: function(){
        $this.attr('per', Math.floor(this.animatedValue) + '%');
      }
    });
   
  });

  
  ; }, 3000);
  

 

 

  
 
  
