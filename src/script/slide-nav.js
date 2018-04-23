// window.onscroll =  function () {
//   stickybutton();
// };
// var navBtb = document.querySelector(".toggle-button");
// var sticky = navBtb.offsetTop;



// function stickybutton() {
//   if (window.pageYOffset>=sticky){
//       navBtb.classList.add("stickyBtn")
//   }else {
//       navBtb.classList.remove("stickyBtn")
//   }
// }


// var slideout = new Slideout({
//   'panel':document.getElementById('panel'),
//   'menu':document.getElementById('menu'),
//   'padding':256,
//   'tolerance':70,
//   'side':'right'

// });
// document.querySelector(".toggle-button").addEventListener("click",function () {
//  slideout.toggle();
// });
// var fixed = document.querySelector('.fixed-header');

//   slideout.on('translate', function(translated) {
//       fixed.style.transform = 'translateX(' + translated + 'px)';
//   });

//   slideout.on('beforeopen', function () {
//       fixed.style.transition = 'transform 300ms ease';
//       fixed.style.transform = 'translateX(256px)';
//   });

//   slideout.on('beforeclose', function () {
//       fixed.style.transition = 'transform 300ms ease';
//       fixed.style.transform = 'translateX(0px)';
//   });

//   slideout.on('open', function () {
//       fixed.style.transition = '';
//   });

//   slideout.on('close', function () {
//       fixed.style.transition = '';
//   });


