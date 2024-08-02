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

/* let isSyncing1 = false;
let isSyncing2 = false; */

// main_swiper와 model_swiper의 인스턴스 생성
/* const swiper1 = new Swiper('.main_swiper', {
  speed: 500,
  effect: '',
  autoplay: {},
  slidesPerView: 1,
  loop: true,
  loopAdditionalSlides: 1,  // loop가 자연스럽게 되도록 추가 슬라이드를 생성
  pagination: {
    el: '.left .swiper-pagination',
    type: 'progressbar',
  },
}); */

// intro 모델 스와이프 인스턴스 생성
/* const swiper2 = new Swiper('.model_swiper', {
  speed: 500,
  effect: '',
  autoplay: {},
  slidesPerView: 1,
  loop: true,
  loopAdditionalSlides: 1,  // loop가 자연스럽게 되도록 추가 슬라이드를 생성
  pagination: {
    el: '.left .swiper-pagination',
    type: 'progressbar',
  },
}); */

// swiper1에서 slideChange 이벤트 발생 시 swiper2 동기화
/* swiper1.on('slideChange', function () {
  if (!isSyncing1) {
    isSyncing2 = true;
    swiper2.slideToLoop(swiper1.realIndex);
  }
  isSyncing1 = false;
}); */

// swiper2에서 slideChange 이벤트 발생 시 swiper1 동기화
/* swiper2.on('slideChange', function () {
  if (!isSyncing2) {
    isSyncing1 = true;
    swiper1.slideToLoop(swiper2.realIndex);
  }
  isSyncing2 = false;
}); */


//상단 배너 close 버튼 클릭 시 없어지기
const close_btn = document.querySelector('.close')
const top_banner = document.querySelector('.top_banner')
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
const btn = document.querySelectorAll('.user_like')
const like_btn = document.querySelectorAll('.like_btn')
const cart_btn = document.querySelectorAll('.cart_btn')

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
const more_btn = document.querySelectorAll('.pd_more')
const item_img = document.querySelectorAll('.item_wrap .item .images')
const lip_wrap_item = document.querySelectorAll('.item_lip .item')
const eye_wrap_item = document.querySelectorAll('.item_eye .item')
const face_wrap_item = document.querySelectorAll('.item_face .item')
const tool_wrap_item = document.querySelectorAll('.item_tool .item')
let item_type;
for(let i of more_btn){
  i.style.opacity = '0';
  i.style.transition = 'opacity 0.5s, background-color 0.5s'
}
//function
function bg_img(){
  element.style.backgroundImage = `url(../images/${item_type}_00${index + 1}.jpg)`;
  overlay.style.backgroundImage = `url(../images/${item_type}m_00${index + 1}.jpg)`;
}
function animation(){
  element.addEventListener('mouseover', (e) => {
    e.preventDefault();
    overlay.style.opacity = '1';
    element.children[0].style.opacity = '1'
  });

  element.addEventListener('mouseout', (e) => {
    e.preventDefault();
    overlay.style.opacity = '0';
    element.children[0].style.opacity = '0'
  });
}

//lip 이미지변경
lip_wrap_item.forEach((element, index)=>{
  const overlay = element.querySelector('.overlay');
  item_type = 'lip'
  console.log(element, index)
  element.children[0].style.backgroundImage = `url(../images/${item_type}_00${index + 1}.jpg)`;
  overlay.style.backgroundImage = `url(../images/${item_type}m_00${index + 1}.jpg)`;
  element.children[0].addEventListener('mouseover', (e) => {
    e.preventDefault();
    overlay.style.opacity = '1';
    overlay.previousElementSibling.style.opacity = '1';
  });

  element.children[0].addEventListener('mouseout', (e) => {
    e.preventDefault();
    overlay.style.opacity = '0';
    overlay.previousElementSibling.style.opacity = '0';
  });
})

//eye 이미지변경
eye_wrap_item.forEach((element, index)=>{
  const overlay = element.querySelector('.overlay');
  item_type = 'eye'
  console.log(element, index)
  element.children[0].style.backgroundImage = `url(../images/${item_type}_00${index + 1}.jpg)`;
  overlay.style.backgroundImage = `url(../images/${item_type}m_00${index + 1}.jpg)`;
  element.children[0].addEventListener('mouseover', (e) => {
    e.preventDefault();
    overlay.style.opacity = '1';
    overlay.previousElementSibling.style.opacity = '1';
  });

  element.children[0].addEventListener('mouseout', (e) => {
    e.preventDefault();
    overlay.style.opacity = '0';
    overlay.previousElementSibling.style.opacity = '0';
  });
})

//face 이미지변경
face_wrap_item.forEach((element, index)=>{
  const overlay = element.querySelector('.overlay');
  item_type = 'face'
  console.log(element, index)
  element.children[0].style.backgroundImage = `url(../images/${item_type}_00${index + 1}.jpg)`;
  overlay.style.backgroundImage = `url(../images/${item_type}m_00${index + 1}.jpg)`;
  element.children[0].addEventListener('mouseover', (e) => {
    e.preventDefault();
    overlay.style.opacity = '1';
    overlay.previousElementSibling.style.opacity = '1';
  });

  element.children[0].addEventListener('mouseout', (e) => {
    e.preventDefault();
    overlay.style.opacity = '0';
    overlay.previousElementSibling.style.opacity = '0';
  });
})

//tool 이미지변경
tool_wrap_item.forEach((element, index)=>{
  const overlay = element.querySelector('.overlay');
  item_type = 'tool'
  console.log(element, index)
  element.children[0].style.backgroundImage = `url(../images/${item_type}_00${index + 1}.jpg)`;
  element.children[0].addEventListener('mouseover', (e) => {
    e.preventDefault();
    overlay.style.opacity = '1';
    overlay.previousElementSibling.style.opacity = '1';
  });

  element.children[0].addEventListener('mouseout', (e) => {
    e.preventDefault();
    overlay.style.opacity = '0';
    overlay.previousElementSibling.style.opacity = '0';
  });
})

