# Project

> 영화 정보를 볼 수 있는 웹페이지이다.

![minbox-main-detail](https://github.com/seongm2n/react-movie/assets/62044613/9f38fc68-64d3-4f57-9bd9-0fdeb7ab0a25)
![minbox-movie2](https://github.com/seongm2n/react-movie/assets/62044613/6d7c074a-bb82-41ab-8c45-99591ae6efb7)
---


### Stacks

<p>
<img src="https://img.shields.io/badge/Code-React-informational?style=flat&logo=react&color=61DAFB">
<img src="https://img.shields.io/badge/Style-Styled--Components-informational?style=flat&logo=styled-components&color=CC6699">
<br>

<img src="https://img.shields.io/badge/Tool-Visual Studio Code-informational?style=flat&logo=visualstudiocode&color=007ACC">
</p>

### Planning

- 페이지 이동시 로딩바 표시
- 메인 페이지에서 스와이프 형식으로 영화 포스터보이기
- 평점 기준으로 영화 필터링 및 장르별 카테고리
- 영화 상세 페이지에서 영화정보 표시

### Development

- npm으로 CRA구성
- npm으로 build

### Trouble Shooting

- 라우팅 요소를 {}로 감싸지 않아 main이 뜨지 않았음
- 로딩이 nav바와 함께 보이는 문제  
   → 해결 : 로딩될때는 로딩바만 보이게, 로딩이 되지 않을땐 nav바 보이게 코드 수정
- 카테코리nav바 생성할 때 드롭다운이 안되는 현상 발견  
   → 해결 : 카테고리 라우트에서 useParams를 사용해서 카테고리 카테고리nav바의 URL 동적 매개변수 값을 가져왔음

### To improve

- 메인 페이지 이미지 크기 수정
- 스와이프 그림자 없애거나 배경을 블러 처리
- Hover 했을 때 보이는 내용 선명하게 수정
- 로딩 바 위치 수정
- 영화 페이지에서 장르 카테고리 스와이프 형식으로 수정
- 각각 추천영화, 평점 높은 순 이런식으로 데이터를 받아와서 캐러셀스타일로 수정
- 영화 상세 페이지도 완성도 있게 CSS 하기

### Deploy

[My dashboard](https://seongm2n.github.io/react-movie)
