# SMASY(Sport Matching System)

## REST API GUIDE
### Auth
 
 | HTTP method  | URI                              | Description                                                |
 |------------- | -------------------------------- | ---------------------------------------------------------- |
 | POST         | /auth/signup                     | Sing Up                     (회원가입)                       |
 | POST         | /auth/login                      | Login                       (로그인)                         |
 | GET          | /user/me                         | Profile                     (프로필)                         |
 
 ### Room
 | HTTP method  | URI                              | Description                                         | parameter |
 |------------- | -------------------------------- | --------------------------------------------------- | --------- | 
 | GET          | /api/rooms                       | Room List(Search)           (방 목록, 검색)                |           |
 | POST         | /room/create                     | Create Room                 (방 생성)                |           |
 | POST         | /rooms/enter/{id}                | Enter Room                  (방 입장)                |  Room Id  | 
 | GET          | /rooms/enter/{id}                | Room info                   (방 정보)                |  Room Id  |
 | GET          | /rooms/enter/user/count/{id}     | Number of Users in the Room (방에 입장한 사용자 수)    |  Room Id   |
 | GET          | /rooms/enter/users/info/{id}     | Info of Users in the Room   (방에 입장한 사용자들 정보) |  Room Id   |
 | DELETE       | /room/exit/{id}                  | Exit Room                   (방 나가기)              |User Room Id|
 | DELETE       | /room/delete/{id}                | Delete Room                 (방 삭제하기)             |  Room Id  |

 ### Comment
 | HTTP method  | URI                              | Description                                        | parameter  |
 |------------- | -------------------------------- | -------------------------------------------------- | ---------- |
 | POST         | /room/create/reply/{id}          | Write a room comment        (방 댓글 쓰기)           |  Room Id   |
 | PUT          | /room/edit/reply/{id}            | Edit a room comment         (방 댓글 수정하기)        |  Reply Id  |
 | DELETE       | /reply/delete/{id}               | Delete Reply                (댓글 삭제하기)           |  Reply Id  | 
 | GET          | /room/replies/{id}               | List of room comments       (방 댓글 목록)            |  Room Id   |
 
  ### Reservation
 | HTTP method  | URI                              | Description                                          | parameter  |
 |------------- | -------------------------------- | ---------------------------------------------------- | ---------- |
 | POST         | /room/reservation/{id}           | Make a reservation          (방 예약하기)              |  Room Id   |
 | DELETE       | /room/reservation/cancel/{id}    | Cancel a room reservation   (예약 취소하기)            |  Room Id   |
 | GET          | /rooms/reservation/me            | Reserved room               (예약된 내 방)                |           |
 
  ### Review
 | HTTP method  | URI                              | Description                                          | parameter  |   
 |------------- | -------------------------------- | ---------------------------------------------------- | ---------- | 
 | POST         | /place/review/create/{id}        | Write a review              (리뷰쓰기)                 |Reservation Id| 
 | GET          | /place/replies/{id}              | View facility reviews       (시설 리뷰 보기)            | Place Id   |
 | DELETE       | /place/review/delete/{id}        | Delete review               (리뷰 삭제하기)             | Reply Id   | 
 | GET          | /place/reviews                   | All reviews                 (전체 리뷰 보기)            |            |
 | GET          | /place/my/reviews                | My Reviews                  (내가 쓴 리뷰들 보기)        |            |
 
  ### My Room & Reservation Room
 | HTTP method  | URI                              | Description                                          | parameter  |
 |------------- | -------------------------------- | ---------------------------------------------------- | ---------- |
 | GET          | /rooms/me                        | My rooms                    (내가 입장한 방 보기)       |            |
 | GET          | /rooms/reservation/me            | My reservation room list    (내 방 예약 목록 보기)      |            |

### 프로젝트 실행 방법
1. Frond-End
    1. terminal 에서 \...\front 경로로 이동 
    2. npm i
    4. npm run build
    5. frontend/front/build 폴더 생성 

2. MySQL 설정
    1. MySQL WorkBench 설치 
    2. MySQL WorkBench 들어가기
    3. 기본으로 생성되어 있는 MySQL Connections 들어가기
    4. 왼쪽 Schemas 빈 공간에 오른쪽 클릭하여 Create Schemas 
    5. Name : smasy  Charset : utf8mb4  Collation : utf8mb4_general_ci 선택 후 생성
    6. MySQL 설정 time_zone 에러 해결 사이트 : [time_zone 문제 해결 사이트](https://jwkim96.tistory.com/23)


3. Back-End
    1. smasy\src\main\java\com\smasy10\apple 로 이동
    2. Application 파일 열기
    3. public class Application 왼쪽의 화살표 클릭

    
### 로그인 관련  참고 사이트
 1. [참고사이트](https://xmfpes.github.io/spring/spring-security/)
 2. [spring document](https://spring.io/guides/tutorials/spring-boot-oauth2/)
 
### 참고 사이트
1. Spring + React.js
    - [참고블로그](https://lemontia.tistory.com/912)
    - [spring document](https://spring.io/guides/tutorials/react-and-spring-data-rest?utm_content=buffer6f4d3&utm_medium=social&utm_source=plus.google.com&utm_campaign=buffer/)
 
2. 리액트
    - [리액트자습서](https://ko.reactjs.org/)
    - [BootStrap](https://react-bootstrap.github.io/)
    
3. 캘린더
    - [캘린더 패키지](https://www.npmjs.com/package/react-calendar)
    - [참고](https://codingmania.tistory.com/360)

4. 카카오 로그인 구현
    -하단 참고
    
5. DB 구현
    - [SpringBoot& DB 연동 & Entity 관계 사용법(2017.04.19.게시물)](https://m.blog.naver.com/sim4858/220985748658)
    - [Spring JPA 연관관계 매핑 & Entity 관계 사용법(2018.04.29.게시물)](https://victorydntmd.tistory.com/208)

6. Spring Boot + JPA + MySQL 게시판 구현
    - [velog.io](https://velog.io/@max9106/Spring-Boot-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
    - [victolee tistory](https://victorydntmd.tistory.com/320?category=764331)
7. Spring & Spring Boot 참고 사이트
    - [jojoldu tistory](https://jojoldu.tistory.com/)
    - [havijy tistory](https://haviyj.tistory.com/11)   

8. Spring boot + devtools 설정 - 소스가 변할때 마다 자동으로 서버 재가동
    - [havijy tistory](https://haviyj.tistory.com/11)   



### FrontEnd 폴더 구성 
```markdown
|-- smasy
    |-- frontend
    |   |-- front
    |   |   |-- src
                |-- customAxios.js
                |-- index.css
                |-- index.js
                |-- registerServiceWorker.js
                |-- serviceWorker.js
                |-- setupTests.js
                |-- common
                |   |-- AppHeader.css
                |   |-- AppHeader.js
                |   |-- LoadingIndicator.js
                |   |-- NotFound.css
                |   |-- NotFound.js
                |   |-- PrivateRoute.js
                |-- component
                |   |-- EachRoomComponent.jsx
                |   |-- EroomComponent.jsx
                |   |-- MapPopUp.js
                |   |-- MenuComponent.jsx
                |   |-- MroomComponent.jsx
                |   |-- MyMapPopUp.js
                |   |-- SearchRoom.js
                |-- constants
                |   |-- index.js
                |-- css
                |   |-- App.css
                |   |-- EachRoom.css
                |   |-- Eroom.css
                |   |-- Footer.css
                |   |-- Home.css
                |   |-- index.css
                |   |-- MapPopUp.css
                |   |-- Menu.css
                |   |-- Mroom.css
                |   |-- Review.css
                |-- img
                |   |-- fb-logo.png
                |   |-- github-logo.png
                |   |-- google-logo.png
                |-- pages
                |   |-- Between.jsx
                |   |-- Eachroom.jsx
                |   |-- Eroom.jsx
                |   |-- Footer.jsx
                |   |-- Home.jsx
                |   |-- Menu.jsx
                |   |-- Reserve.jsx
                |   |-- Review.jsx
                |-- shared
                |   |-- App.css
                |   |-- App.js
                |-- user
                |   |-- login
                |   |   |-- Login.css
                |   |   |-- Login.js
                |   |-- oauth2
                |   |   |-- OAuth2RedirectHandler.js
                |   |-- profile
                |   |   |-- Profile.css
                |   |   |-- Profile.js
                |   |-- signup
                |       |-- Signup.css
                |       |-- Signup.js
                |-- util
                    |-- APIUtils.js
```
