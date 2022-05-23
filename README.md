## cinephile_personal

팀 프로젝트 이후 개인적인 탐구를 위한 저장소입니다.

- 기존 서버 저장소: https://github.com/codestates/cinephile_client.git
- 기존 클라이언트 저장소: https://github.com/codestates/cinephile_server.git

## Cinephile (영화광)

시네필은 영화를 사랑하는 사람들이 모여 소통하는 커뮤니티 서비스입니다.

- 서비스 주소: https://cinephile-personal.netlify.app/
- 회고: [파이널 프로젝트 회고 (BLAR)](https://smss.netlify.app/2021-01-02-BLAR/)

---

#### Server

- MVC 디자인 패턴을 적용한 Express 기반 Node.js Server 셋업
- Schema 설계 및 Sequelize ORM을 이용한 MySQL 데이터베이스 연결
- SSL 인증서로 데이터를 암호화하여 보안 강화
- WebSocket을 서버에 연결하여 실시간 채팅 기능 구현
- Heroku 배포

#### Authentication

- OAuth 기반 소셜 로그인 인증
- MemoryStore 세션 저장소 기반 일반 로그인 인증
- Crypto를 이용한 비밀번호 암호화

#### HTTP API

- 사용자 관련 API 개발
- 게시판 관련 API 개발
- 네이버 오픈 API를 활용한 영화 검색 로직 구현
- cheerio를 이용한 영화 데이터 크롤링 로직 구현
- Multer S3 & AWS SDK를 이용한 이미지 파일 업로드 로직 구현
