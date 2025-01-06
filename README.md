# React-Movie-List
영화 타이틀, 이미지가 포함된 영화 목록 및 상세 정보를 보여주는 사이트 구현
<br>
<br>

## 배포 URL
https://main--리치 무비.netlify.app/
<br>
<br>
## 사용 API
[TMDB](https://developers.themoviedb.org/3/getting-started/introduction)
<br>
<br>

## 프로젝트 시연
|영화 목록 반응형|영화 검색 기능 <br> *추천검색어를 통해 검색|클릭시 상세페이지 이동|
|---|---|---|
|![반응](https://github.com/khv2644511/React-Movie-List/assets/38063033/0f640cd0-e0f5-4108-a098-a5130b0fb1f8)|![55](https://github.com/khv2644511/React-Movie-List/assets/38063033/2582791e-45f1-4ae1-b18e-d5ae893aac54)|![상세페이지이동](https://github.com/khv2644511/React-Movie-List/assets/38063033/2ec9fb92-8d42-4932-a311-2419b40d96c5)|

|클라이언트에서 API Key 숨기기|무한 스크롤 기능|잘못된 경로 리다이렉트|방향키로 검색결과 이동|
|---|---|---|---|
|![image](https://github.com/khv2644511/React-Movie-List/assets/38063033/d70ee99d-e85d-433f-9ca7-66c0f9547f02)|![무무](https://github.com/khv2644511/React-Movie-List/assets/38063033/71cbb67b-5725-47f1-b7f8-ddee80718076)|![리다이렉트](https://github.com/khv2644511/React-Movie-List/assets/38063033/1d75c004-3c60-4b47-b459-60a527908a79)|![키보드이동](https://github.com/khv2644511/React-Movie-List/assets/38063033/38dd0489-c469-47e9-9207-c69c3ba3c8ae)|

<br>
<br>


## 기술스택
- react
- tailwindcss
- axios
- react-icons
<br>
<br>

## 폴더구조
```
📦src
 ┣ 📂api
 ┃ ┣ 📜axiosInstance.js
 ┃ ┗ 📜movieAPI.js
 ┣ 📂component
 ┃ ┣ 📂MovieCardList
 ┃ ┃ ┣ 📜AgeTag.jsx
 ┃ ┃ ┣ 📜MovieContent.jsx
 ┃ ┃ ┣ 📜MovieImg.jsx
 ┃ ┃ ┣ 📜MovieItem.jsx
 ┃ ┃ ┗ 📜MovieList.jsx
 ┃ ┣ 📂MovieDetail
 ┃ ┃ ┣ 📜Info.jsx
 ┃ ┃ ┣ 📜TabMenu.jsx
 ┃ ┃ ┗ 📜Title.jsx
 ┃ ┣ 📂Search
 ┃ ┃ ┣ 📜SearchBar.jsx
 ┃ ┃ ┗ 📜SearchList.jsx
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜BackButton.jsx
 ┃ ┃ ┗ 📜Headers.jsx
 ┃ ┗ 📜NavBar.jsx
 ┣ 📂constant
 ┃ ┗ 📜baseURL.js
 ┣ 📂hooks
 ┃ ┣ 📜useClickOutside.js
 ┃ ┣ 📜useDebounce.js
 ┃ ┣ 📜useDebounceSuggestion.js
 ┃ ┣ 📜useInput.js
 ┃ ┗ 📜useKeypress.js
 ┣ 📂pages
 ┃ ┣ 📜BoxOffice.jsx
 ┃ ┣ 📜MovieDetail.jsx
 ┃ ┣ 📜NotFound.jsx
 ┃ ┗ 📜NowPlayingMovie.jsx
 ┣ 📜.DS_Store
 ┣ 📜App.js
 ┣ 📜index.css
 ┗ 📜index.js
```
