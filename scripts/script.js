//intro 제품 스와이프
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

//intro 모델 스와이프
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

//most loved 제품 스와이프
const swiper3 = new Swiper('.mloved_swiper', {
  effect:'',
  slidesPerView:4,
})

//makeup 제품 카테고리 선택 시 이벤트
const category = document.querySelector('.category')
const category_a = document.querySelectorAll('.category > a')
const category_bg = category.children[0]
const category_sub = document.querySelectorAll('.sub_cg')
category_a.forEach((a, index)=>{
  a.addEventListener('click',(e)=>{
    e.preventDefault();
    //makeup 이벤트 - 카테고리 background 이동
    category_bg.style.transition = 'left 0.4s ease-out'
    category_bg.style.left = `calc(25% * ${index})`;
    for(let i of category_a){
      i.style.color = '#A36D6A'
      i.style.fontWeight = '500'
    }
    a.style.color = '#fff'
    a.style.fontWeight = '400'
    //makeup 이벤트 - 서브 카테고리 변경
    const sub_cg = category.nextElementSibling.children
    for(let j of sub_cg){
      j.style.display = 'none'
    }
    sub_cg[index].style.display = 'flex'
    //makeup 이벤트 - item_wrap 변경
    const item_container = document.querySelector('.item_container')
    for(let k of item_container.children){
      k.style.display = 'none'
    }
    item_container.children[index].style.display = 'flex'
  })
})
//제품-좋아요&장바구니 버튼 toggle
let boolean = false;
const btn = document.querySelectorAll('.user_like')
const like_btn = document.querySelectorAll('.like_btn')
const cart_btn = document.querySelectorAll('.cart_btn')
for(let i of btn){
  for(let j of i.children){
    j.addEventListener('click',(e)=>{
      boolean=!boolean
      console.log(boolean)
    })
  }
}
for(let m of like_btn){
  m.addEventListener('click',(e)=>{
    e.preventDefault();
    m.classList.toggle('filled');
  })
}
for(let l of cart_btn){
  l.addEventListener('click',(e)=>{
    e.preventDefault();
    l.classList.toggle('filled');
  })
}
//제품 hover 시 모델+더보기 버튼 나오기
const item_container = document.querySelector('.item_container')
const item = document.querySelectorAll('.item')
const item_img = document.querySelectorAll('.item_wrap .item > p > img')