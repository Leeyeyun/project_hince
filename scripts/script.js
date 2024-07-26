//제품 스와이프
const swiper1 = new Swiper('.main_swiper', {
  speed:500,
  effect:'',
  autoplay:{},
  slidesPerView:1,
  loop:true,
  pagination:{
    el:'.left .swiper-pagination',
    type:'progressbar',
  },
});

//모델 스와이프
const swiper2 = new Swiper('.model_swiper', {
  speed:500,
  effect:'',
  autoplay:{},
  slidesPerView:1,
  loop:true,
  pagination:{
    el:'.left .swiper-pagination',
    type:'progressbar',
  },
});

//상단 배너 close 버튼 클릭 시 없어지기
const close_btn = document.querySelector('.close')
const top_banner = document.querySelector('.top_banner')
console.log(close_btn, top_banner)
close_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  top_banner.style.animation = 'display 0.5s both'
  for(let i of top_banner.children){
    i.style.display = 'none'
  }
})

const swiper3 = new Swiper('.mloved_swiper', {
  effect:'',
  slidesPerView:4,
})