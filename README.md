# Cinephile

영화 정보를 검색하고 감상을 기록·공유하는 커뮤니티 서비스입니다.

> 2020.11 — 2020.12 · 4주 · 4인 팀 프로젝트 · **백엔드 담당**

`JavaScript` `Node.js` `Express` `Sequelize` `MySQL` `OAuth` `SSL`

---

## 데이터 모델

화면보다 데이터 구조를 먼저 정의한 뒤 서버를 구성했습니다.



| 엔티티 | 역할 | 관계 |
|---|---|---|
| `User` | 계정·프로필 | 게시글·댓글의 작성자 |
| `Movie` | 외부 API로 수집한 영화 정보 | 게시글이 참조하는 대상 |
| `Post` | 감상 기록 | `User` · `Movie` 참조 |
| `Comment` | 게시글의 댓글 | `User` · `Post` 참조 |

Sequelize ORM으로 모델과 관계를 정의하고 MySQL에 연결했습니다.

<!-- 이미지: ERD -->

---

## 서버 구조

Express 서버를 MVC 패턴으로 분리했습니다.

```
routes/       요청 경로 정의
controllers/  요청 처리와 응답
models/       Sequelize 모델과 관계 정의
```

---

## API

| 영역 | 엔드포인트 |
|---|---|
| **사용자** | 회원가입 · 로그인 · 로그아웃 · 프로필 조회/수정 |
| **게시판** | 게시글·댓글 생성 · 조회 · 수정 · 삭제 |
| **영화 검색** | 네이버 오픈 API 연동 및 응답 가공 |

---

## 인증과 보안

- OAuth 소셜 로그인
- 세션 기반 일반 로그인
- Node.js `crypto` 기반 비밀번호 암호화
- SSL 인증서 적용

---

## 담당 범위

데이터베이스 스키마 설계, Express 서버 구성, 사용자·게시판 REST API 구현, 인증과 암호화, 외부 API 연동을 담당했습니다. 프론트엔드 화면 구현은 팀원이 담당했습니다.

📄 [포트폴리오 문서](https://fortune-trader-867.notion.site/3ce24b1bd1d580a69072d69faaa861bb?source=copy_link)
