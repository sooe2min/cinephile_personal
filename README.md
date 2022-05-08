## cinephile_personal

팀 프로젝트 이후 개인적인 탐구를 위한 저장소입니다.

- 기존 서버 저장소: https://github.com/codestates/cinephile_client.git
- 기존 클라이언트 저장소: https://github.com/codestates/cinephile_server.git

## Cinephile (영화광)

영화를 사랑하는 사람들이 모여 소통하는 커뮤니티 서비스입니다.

- 서비스 주소: https://cinephile-personal.netlify.app/
- 회고: [파이널 프로젝트 회고 (BLAR)](https://smss.netlify.app/2021-01-02-BLAR/)

---

#### Server

- Express 프레임워크를 기반으로 MVC 디자인 패턴을 적용한 Node.js 서버 구축
- Schema 설계 및 Sequelize ORM을 사용하여 MySQL 데이터베이스 연결
- SSL 인증서로 데이터를 암호화하여 보안 강화
- Socket.IO를 활용하여 실시간 채팅 기능 구현
- Heroku 배포

#### Authentication

- OAuth를 이용한 네이버, 카카오, 페이스북 소셜 로그인 인증
- 세션 기반 이메일 계정 인증
- Crypto를 이용한 비밀번호 암호화

#### HTTP API

- 사용자 가입, 로그인, 로그아웃, 유저정보 변경
- 게시판 글 작성, 댓글 작성, 댓글 좋아요
- Multer S3 & AWS SDK를 이용한 이미지 업로드
- 네이버 오픈 API를 활용한 영화 검색
- cheerio를 이용한 영화 데이터 크롤링
