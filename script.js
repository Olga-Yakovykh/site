// let burger = document.querySelector('.burger');
// let mainMenu = document.querySelector('.main-menu')
// burger.addEventListener('click', (e)=>{
//     burger.classList.toggle('active');
//     mainMenu.classList.toggle('active');
// } );
// 
const btn = document.querySelector('.dropdown_button');
const ul = document.querySelector('.dropdown_list');
let items = document.querySelectorAll('.dropdown_list-item');
let inputSale = document.querySelector('.dropdown_input-hidden');

btn.addEventListener('click', function(){
  ul.classList.toggle('dropdown_list-visible');
  this.classList.add('dropdown_active');
});
items.forEach(function(listItem){
  listItem.addEventListener('click', function(e){
      e.stopPropagation();
      btn.innerText = this.innerText;
      btn.focus();
      inputSale.value = this.dataset.value;
      ul.classList.remove('dropdown_list-visible');
  })
});
document.addEventListener('click', function(e){
  if(e.target !== btn){
    ul.classList.remove('dropdown_list-visible');
    // this.classList.remove('dropdown_active');
  }
})
document.addEventListener('keydown', function(e){
  if(e.key === "Tab" || e.key === 'Escape'){
    ul.classList.remove('dropdown_list-visible');
    // this.classList.remove('dropdown_active');
  }
})

let form = document.querySelector('.js-form');
let formInputs = document.querySelectorAll('.js-input');
let inputName = document.querySelector('.js-input-name');
let inputPhone = document.querySelector('.js-input-phone');

form.onsubmit = function() {
  let nameVal = inputName.value;
  let phoneVal = inputPhone.value;
  let categorySale = inputSale.value;
  let emptyInputs = Array.from(formInputs).filter(input => input.value === '');

  function validatePhone(phone){
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
  }

  formInputs.forEach(function(input){
    if(input.value ===''){
      input.classList.add('error')
    }
  });
   if(emptyInputs.lenght !== 0){
     return false;
   };

   if(!validatePhone(phoneVal)){
     console.log('error');
     inputPhone.classList.add('error');
     return false;
   }
   else{
    inputPhone.classList.remove('error');
   }
}














var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    eventsTarget:'.swiper-slide card',
    autoheight: true,
    // type: 'progressbar',
  },
});

// $('.slider').slick({
//   centerMode: true,
//   centerPadding: '60px',
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });

// http://api.telegram.org/bot2116973294:AAHBm3nIPry45U2WU4mkfJe-BgRFlNubhRg/getUpdates
// http://api.telegram.org/bot2116973294:AAHBm3nIPry45U2WU4mkfJe-BgRFlNubhRg/sendMessage?chat_id=1008327115&text=hi
