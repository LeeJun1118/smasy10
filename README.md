# SMASY(Sport Matching System)

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

3. MySQL 설정
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
    
### 참고 사이트
1. Spring + React.js
    - [참고블로그](https://lemontia.tistory.com/912)
    
2. 리액트
    - [리액트자습서](https://ko.reactjs.org/)
    - [BootStrap](https://react-bootstrap.github.io/)
    
3. 캘린더
    - [캘린더 패키지](https://www.npmjs.com/package/react-calendar)
    - [참고](https://codingmania.tistory.com/360)
    
4. 로그인 구현
    - [카카오-참고](https://electricburglar.tistory.com/151)
    
5. DB 구현
    - [SpringBoot& DB 연동 & Entity 관계 사용법(2017.04.19.게시물)](https://m.blog.naver.com/sim4858/220985748658)
    - [Spring JPA 연관관계 매핑 & Entity 관계 사용법(2018.04.29.게시물)](https://victorydntmd.tistory.com/208)

6. Spring Boot + JPA + MySQL 게시판 구현
    - [velog.io](https://velog.io/@max9106/Spring-Boot-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%83%9D%EC%84%B1)
    - [victolee tistory](https://victorydntmd.tistory.com/320?category=764331)
7. Spring & Spring Boot 참고 사이트
    - [jojoldu tistory](https://jojoldu.tistory.com/)

8. Spring boot + devtools 설정 - 소스가 변할때 마다 자동으로 서버 재가동
    - [havijy tistory](https://haviyj.tistory.com/11)   
