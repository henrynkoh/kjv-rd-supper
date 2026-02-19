# 성찬식 커리큘럼 사용 설명서 (User Manual)

## 1. 소개

성찬식 커리큘럼은 주님의 성찬(성찬식, Lord's Supper)에 대한 13개 카테고리의 핵심 개념을 표 형식으로 정리한 학습 도구입니다. 원본 강의 내용(Transcript)과 보조 연구(Research)를 함께 제공하며, Solo Entrepreneur 스타일의 단계별 실행(Action) 항목을 포함합니다.

## 2. 시스템 요구사항

- **Node.js** 18.x 이상
- **npm** 9.x 이상 (또는 yarn, pnpm)
- 최신 브라우저 (Chrome, Firefox, Safari, Edge)

## 3. 설치 및 실행

### 3.1 설치

```bash
cd kjv-rd-성찬식
npm install
```

### 3.2 개발 모드

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

### 3.3 프로덕션 빌드

```bash
npm run build
npm start
```

## 4. 화면 구성

### 4.1 헤더

- **제목**: 성찬식 커리큘럼
- **설명**: 프로젝트 목적과 대상( solo learners )

### 4.2 사용 방법 안내

- 13개 카테고리를 순서대로 학습
- 각 행: Concept → Transcript → Research 읽기
- Action 완료 후 다음 단계 진행
- Quick-nav로 원하는 카테고리 이동

### 4.3 카테고리 섹션

각 카테고리는 접기/펼치기 가능한 섹션입니다.

| 열(Column) | 설명 |
|------------|------|
| **Step** | 단계 번호 |
| **Concept** | 핵심 개념 (영어) |
| **Transcript (원문)** | 강의 원문 요약 |
| **Research (보조)** | 보조 연구/참고 내용 |
| **Action** | 실행 과제 |

### 4.4 Quick Navigation (Pill 버튼)

- 각 카테고리로 바로 이동
- **Expand all**: 모든 카테고리 펼치기
- **Collapse all**: 모든 카테고리 접기

## 5. 학습 흐름

1. **1~13번 순서대로 진행** 권장
2. 각 카테고리 클릭하여 펼치기
3. 테이블의 Concept, Transcript, Research 순서로 읽기
4. Action 항목 수행
5. 다음 단계로 진행

## 6. 키보드 및 접근성

- 카테고리 제목 클릭: 펼치기/접기
- Quick-nav 링크: 해당 카테고리로 스크롤
- 모바일: 터치로 동일 동작

## 7. 문제 해결

### 사이트가 열리지 않을 때

- `npm install` 실행 여부 확인
- 포트 3000이 다른 앱에서 사용 중인지 확인
- `npm run dev` 출력에서 에러 메시지 확인

### 빌드 실패 시

- Node.js 버전 확인: `node -v` (18 이상)
- `rm -rf node_modules .next && npm install` 후 재시도

## 8. 디렉터리 구조

```
kjv-rd-성찬식/
├── docs/           # 문서 (MANUAL, TUTORIAL, QUICKSTART)
├── src/
│   ├── app/        # Next.js 앱 라우트
│   ├── components/ # React 컴포넌트
│   └── lib/        # 커리큘럼 데이터
├── README.md
└── package.json
```

## 9. 버전 및 업데이트

- 커리큘럼 내용 수정: `src/lib/curriculum-data.ts`
- 스타일 수정: `src/app/globals.css`
- UI 수정: `src/components/CurriculumContent.tsx`, `src/app/page.tsx`
