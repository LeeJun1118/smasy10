# SMASY(Sport Matching System)

## REST API GUIDE
 | HTTP method  | URI                              | Role                                                       |
 |------------- | -------------------------------- | ---------------------------------------------------------- |
 | POST         | /auth/signup                     | Sing Up                     (회원가입)                       |
 | POST         | /auth/login                      | Login                       (로그인)                         |
 | GET          | /user/me                         | Profile                     (프로필)                         |
 | GET          | /api/rooms                       | Room List(Search)           (방 목록)                        |
 | POST         | /room/create                     | Create Room                 (방 생성)                        |
 | POST         | /rooms/enter/{id}                | Enter Room                  (방 입장)                        | 
 | GET          | /rooms/enter/{id}                | Room info                   (방 정보)                        |
 | GET          | /rooms/enter/user/count/{id}     | Number of Users in the Room (방에 입장한 사용자 수)            |
 | GET          | /rooms/enter/users/info/{id}     | Info of Users in the Room   (방에 입장한 사용자들 정보)         |
 | DELETE       | /room/exit/{id}                  | Exit Room                   (방 나가기)                      |
 | POST         | /room/create/reply/{id}          | Write a room comment        (방 댓글 쓰기)                    |
 | PUT          | /room/edit/reply/{id}            | Edit a room comment         (방 댓글 수정하기)                 | 
 | DELETE       | /reply/delete/{id}               | Delete Reply                (댓글 삭제하기)                   | 
 | GET          | /room/replies/{id}               | List of room comments       (방 댓글 목록)                    |
 | POST         | /room/reservation/{id}           | Make a reservation          (방 예약하기)                     |
 | DELETE       | /room/reservation/cancel/{id}    | Cancel a room reservation   (예약 취소하기)                    |
 | POST         | /place/review/delete/{id}        | Write a review              (리뷰쓰기)                        |
 | GET          | /place/replies/{id}              | View facility reviews       (시설 리뷰 보기)                   |
 | DELETE       | /place/review/delete/{id}        | Delete review               (리뷰 삭제하기)                    |
 | GET          | /rooms/me                        | My rooms                    (내가 입장한 방 보기)              |
 | GET          | /rooms/reservation/me            | My reservation room list    (내가 입장한 방 보기)              |

### 첫 클론 후
1. terminal 에서 \...\front 경로로 이동한 후 
    1. npm i
    2. npm install bootstrap react-bootstrap --save
    3. npm install react-router-dom --save
    4. npm install axios --save
    5. npm run build
    6. frontend/front/build 라는 폴더가 생성되었다면
    
2. 빌드하기
    1. 우측에 Gradle 클릭 -> Tasks -> build 폴더 들어가서 bootJar 더블 클릭
    2. ./build/libs 폴더에 jar 파일 만들어졌다면
    3. ./build/libs 에서 terminal 열어서 
    4. java -jar jar파일이름 
    5. http://localhost:8080/ 로 들어가서 실행이 잘 되는지 확인

3. MySQL 설정 - 사용 안해도 될 
    1. 설치 후 
    2. MySQL WorkBench 들어가기
    3. 왼쪽 상단에 Schemas 칸의 빈 여백에 마우스 우측 클릭
    4. Create Schemas -> Name : smasy
    5. CharSet : utf8mb4    Collation : utf8mb4_general_ci
    6. 인텔리제이 우측 Database 클릭
    7. + 클릭 -> Data Source -> MySQL
    8. User : Mysql 설치할 때 만든 id(아무설정 안했다면 default로 root가 설정 됨)
    9. Password : Mysql 설치할 때 만든 비밀번호 
    10. database : smasy
    11. test Connection 했을 때 안되면 time_zone 문제인지 에러 확인
    12. [time_zone 문제 해결 사이트](https://jwkim96.tistory.com/23)
    13. 해결이 됐다면 6 ~ 10 까지 한 후 Apply 누르고 닫기
    14. ./db/tables.sql 파일 열어서 ctrl+a -> ctrl+enter
    
4. 카카오 로그인
    1. npm install react-kakao-login
    2. npm i --save kakaojs
    3. ...
    
5. h2 인 메모리 데이터 베이스 사용
    1. 프로젝트 실행
    2. http://localhost:8080/h2-console 
    3. connect 클릭

6. moment.js : 날짜 관련 작업을 위한 js 라이브러리
    1. npm install moment

### 로그인 관련 사이트
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


***
** 고쳤습니다 <br>
(1번만 실행하면 될 듯,<br>
2번은 디렉토리 구조 정리 참고,<br>
3번은 package.json 파일 고친 것,<br>
나머지 부분은 아래 링크 참고하고,<br>
이해 안되는 부분 말해주세여 알려드릴게요)
- [참고 : react-route-dom](https://velopert.com/3417)
<br><br>
1. npm install cross-env --save

2. 디렉토리 구성
    - src/component: 컴포넌트들이 위치하는 디렉토리
    - src/pages: 각 라우트들이 위치하는 디렉토리
    - src/client: 브라우저 측에서 사용할 최상위 컴포넌트. 우리가 추후 서버사이드 렌더링을 구현 할 것이기 때문에 디렉토리를 따로 구분. (서버사이드 렌더링을 할 때에는 서버 전용 라우터를 써야함) 여기서 라우터를 설정.
    - src/server: 서버측에서 사용 할 리액트 관련 코드
    - src/shared: 서버와 클라이언트에서 공용으로 사용되는 컴포넌트 App.js 가 여기에 위치.
    - src/lib: 나중에 웹 연동을 구현 할 때 사용 할 API와 코드스플리팅 할 때 필요한 코드
    - src/css: css 파일
    - public/img: 이미지 파일 
    
3. NODE_ENV 설정
<br>(우리가 코드들을 불러올 때 ‘../components/Something’ -> ‘components/Something’ 이렇게 불러 올 수 있도록 프로젝트의 루트경로를 설정)
    - package.json 파일의 script 부분을 다음과 같이 수정<br>
  "scripts": {<br>
    "start": "cross-env NODE_PATH=src react-scripts start",<br>
    "build": "cross-env NODE_PATH=src react-scripts build",<br>
    "test": "react-scripts test --env=jsdom",<br>
    "eject": "react-scripts eject"<br>
  }
    - 본 코드 <br>
    "scripts": {<br>
        "start": "react-scripts start",<br>
        "build": "react-scripts build",<br>
        "test": "react-scripts test",<br>
        "eject": "react-scripts eject"<br>
      }
      
---
###카카오 로그인

   - [카카오 로그인](https://developers.kakao.com/docs/latest/ko/kakaologin/common)
   - [JavaScript SDK 다운로드](https://developers.kakao.com/docs/latest/ko/sdk-download/js)
   - [JavaScript SDK 사용법](https://developers.kakao.com/docs/latest/ko/getting-started/sdk-js)

   - [참고](http://macaronics.net/index.php/m03/codeigniter/view/905)
   - [카카오-참고](https://electricburglar.tistory.com/151)
   - [참고2](https://m.blog.naver.com/PostView.nhn?blogId=hjinha2&logNo=221176502285&proxyReferer=https:%2F%2Fwww.google.com%2F)
   - [참고3](https://krksap.tistory.com/1579)