# KJV 성찬식 성경 연구 – 사용 설명서

## 1. 목적

이 도구는 **성찬식**을 주제로 한 설교/강의 내용에 맞춰, KJV 성경과 흠정역 한글성경전서의 관련 구절을 카테고리별로 표 형태로 보여줍니다.

## 2. 기본 사용법

### 2.1 프로젝트 실행

1. 터미널을 열고 프로젝트 폴더로 이동합니다.
   ```bash
   cd kjv-rd-meal
   ```

2. 의존성 설치 (최초 1회)
   ```bash
   npm install
   ```

3. 개발 서버 실행
   ```bash
   npm run dev
   ```

4. 브라우저에서 `http://localhost:3000` 접속

### 2.2 화면 구성

- **헤더**: 제목 (KJV Lord's Supper / 성찬식 성경 연구)
- **카테고리 섹션**: 각 주제별로 접기/펼치기 가능
- **표**: 열 구성
  - **Reference**: 책·장·절 (예: 1 Corinthians 11:23)
  - **KJV**: King James Version 영문
  - **흠정역**: 한글 흠정역 번역

### 2.3 카테고리 탐색

- 카테고리 제목을 클릭하면 해당 섹션이 펼쳐지거나 접힙니다.
- 스크롤을 내려 모든 주제를 순서대로 확인할 수 있습니다.

## 3. 데이터 소스

- **KJV**: bible-api.com (공개 API)
- **흠정역**: 흠정역 한글성경전서 (프로젝트 내 데이터 파일)

## 4. 빌드 및 배포

### 4.1 프로덕션 빌드

```bash
npm run build
```

### 4.2 로컬에서 프로덕션 실행

```bash
npm run start
```

### 4.3 Vercel 배포

1. [Vercel](https://vercel.com) 회원가입
2. GitHub 저장소 연결
3. 프로젝트 선택 후 Deploy

## 5. 문제 해결

### 5.1 구절이 로딩되지 않음

- 인터넷 연결 확인
- bible-api.com 서버 상태 확인
- 브라우저 콘솔에서 에러 메시지 확인

### 5.2 한글(흠정역)이 표시되지 않음

- `src/data/korean-verses.ts` 또는 관련 데이터 파일이 존재하는지 확인
- 새로 추가된 구절은 해당 파일에 수동 입력이 필요할 수 있습니다

### 5.3 빌드 에러

- Node.js 버전 확인 (권장: v18 이상)
- `npm install` 재실행
- `node_modules` 삭제 후 다시 `npm install`

## 6. 개발자용

### 6.1 새 카테고리 추가

1. `src/data/verse-refs.ts` 에서 `VERSE_CATEGORIES` 배열에 새 객체 추가
2. `id`, `titleEn`, `titleKo`, `refs` 필드 작성

### 6.2 새 구절 추가

- `refs` 배열에 `{ book, chapter, verse }` 객체 추가
- verse는 숫자 또는 `[시작, 끝]` 배열

### 6.3 Lint 실행

```bash
npm run lint
```

## 7. 문의

프로젝트 관련 문의는 저장소 이슈 또는 담당자에게 연락하시기 바랍니다.
