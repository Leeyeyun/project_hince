# project_hince 24.07.26 ~
## 힌스 반응형 웹페이지 리디자인
### 기존 웹페이지 바로가기
https://hince.co.kr/
### 힌스 리디자인 웹페이지 바로가기
http://eey1741.dothome.co.kr/project_hince/index.html<br>
https://hince-yeyun.netlify.app/
## 📃작업 과정
## 24.07.03
### 힌스 웹페이지 조사 및 기획 + 메인페이지 프로토타입 제작
#### 기존 웹페이지 분석
* 브랜드 중점의 웹페이지
* 제품 및 오프라인 매장 홍보에 중점을 둔 콘텐츠 구성
* 제품, 모델 이미지 소스가 다양하고 상세페이지 구성이 좋음
* 🔴 커머스 형식이 아니어서 제품 가격을 메인페이지에서 확인할 수 없음
* 🔴 스크롤바가 없어 마우스 휠로만 동작할 수 있는 불편함
* 🔴 shop 페이지 - 제품 나열이 단조롭고 카테고리별 인기 제품 또는 신제품 구별을 확인하기 힘듦<hr>
#### 웹페이지 리디자인 기획
* 🔵 <span style="color:red;">커머스 위주</span>의 웹페이지로 제작의 웹페이지로 제작
* 🔵 아치형 디자인 + 핑크 컬러 활용하여 기존 컨셉 유지 및 레이아웃 변경
* 🔵 제품, 모델 이미지 소스를 다양하게 활용하여 제품 효과적 홍보
## 24.07.31
### 힌스 메인페이지 html, css, js 작업
* **`pagination {type : 'progressbar'}`**
* 카드 스와이프 될 때 바가 늘어나는 방식
* 일정한 넓이의 바가 이동하는 방식 -> `div`그룹 등으로 디자인해서 index 움직일 때 전체 넓이의 ?퍼센트가 이동하는 방법으로 제작
* **`아치형 디자인 데코 & 제품 레이어 순서`**
* 아치형 데코 이미지가 겹쳐 제품 선택이 안 되는 오류 발생(레이어가 겹침)
* 아치형 데코 디자인을 두 개 겹치기 + 그 사이에 제품 스와이프 배치
## 24.08.01
### 메인페이지 하단 html 작업 및 js 작업
* **`transition 애니메이션`**
* transition 속성에 display는 애니메이션 적용이 안 됨
* `display` -> `opacity`로 자연스러운 애니메이션 적용
* `background-image` 또한 transition으로 애니메이션 설정하면 오류남
* hover 했을 때 바뀌는 이미지 태그를 따로 작성 -> opacity transition 을 적용
* **`연동 스와이프`**
* 제품 스와이프 + 모델 스와이프 개별로 작업 -> 제품 스와이프 인덱스와 모델 인덱스가 함께 움직이면 좋겠다!
* `slideChange` 이벤트를 활용하여 서로의 인덱스를 동기화하기
## 24.08.02
* **`카테고리별 제품 및 모델 이미지 넣기 js`**
```
element.style.backgroundImage = `url(../images/${item_type}_00${index + 1}.jpg)`;
overlay.style.backgroundImage = `url(../images/${item_type}m_00${index + 1}.jpg)`;
```
* item type {lip, eye, face, tool} & 해당 카테고리 아이템 순서(index)를 정의하여 이미지 이름에 대입
