// start burger icon
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
// end burger icon




//start add class active to nav li a when active and remove from other 
$('.nav-links li a').click(function () {

  $('.nav-links li a').removeClass('active');
  $(this).addClass('active');
});
//end add class active to nav li a when active and remove from other 



//  start carousal
var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var dots = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" enable", "");
    
   
  }
  slides[slidePosition-1].style.display = "block";
  dots[slidePosition-1].className += " enable";
} 


var slidePositionm = 0;

function SlideShown() {
  var p//#region ;
  var slides = document.getElementsByClassName("Containers");
  for (p = 0; p < slides.length; p++) {
    slides[p].style.display = "none";
    
  }
  slidePositionm++;
  if (slidePositionm > slides.length) {slidePositionm = 1}
  slides[slidePositionm-1].style.display = "block";
  setTimeout(SlideShown, 2000); // Change image every 2 seconds

} 

SlideShown();

// end carousal





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
 
 
 
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    
    if (el.textContent == goal) {
      clearInterval(count);
      
    }
    
  }, 3000 / goal)
 
  
  
};





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





//start add active class to nav when arrive section
$('#nav').onePageNav({
	currentClass: 'active',
	changeHash: true,
	scrollSpeed: 550,
	scrollThreshold: 0.9,
	filter: '',
	easing: 'swing',
 
	begin: function() {
		//Hack so you can click other menu items after the initial click
		$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
	},
	end: function() {
		$('#device-dummy').remove();
	}

});
//end add active class to nav when arrive section

 

}

 
setInterval(function(){ 
  
  $('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
      duration: 2900,
      // step: function(){
      //   $this.attr('per', Math.ceil(this.animatedValue) + '%');
      // },
      // complete: function(){
      //   $this.attr('per', Math.ceil(this.animatedValue) + '%');
      // }
    });
  });



; }, 3000);

// end stats conter



// start button to up
span.addEventListener("click", myFunction);
function myFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// end button to up
 
