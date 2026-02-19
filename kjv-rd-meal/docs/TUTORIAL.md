# KJV 성찬식 성경 연구 – 튜토리얼

## Step 1: 프로젝트 설치

프로젝트를 클론한 뒤 의존성을 설치합니다.

```bash
git clone <repository-url>
cd kjv-rd-meal
npm install
```

## Step 2: 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 으로 접속합니다.

## Step 3: 첫 화면 확인

- 메인 페이지에 성찬식 관련 구절이 카테고리별로 표시됩니다.
- 각 카테고리(예: 주의 만찬, 유월절, 몸과 피 등)를 클릭해 내용을 확인합니다.

## Step 4: 구절 읽기

1. **카테고리 선택**: 관심 있는 주제(예: "Jesus as Passover Lamb")를 선택
2. **표 확인**: Reference, KJV, 흠정역 세 열로 구성된 표 확인
3. **구절 비교**: 같은 내용을 KJV와 흠정역으로 나란히 읽을 수 있습니다

## Step 5: 나만의 학습 방법

### 5.1 주제별 학습

- 한 주제(카테고리)만 선택해서 순서대로 읽기
- 예: "Lord's Supper" → "Passover" → "Body and Blood" 순서

### 5.2 성경책별 학습

- 같은 책의 구절만 모아서 읽기 (예: 1 Corinthians 관련 구절)
- 표에서 Reference 열을 참고해 성경책 이름으로 그룹화

### 5.3 설교/강의 준비

- 성찬식 설교나 강의 준비 시 해당 카테고리와 구절을 스크린샷 또는 복사해 활용
- KJV와 흠정역을 병기해 교회 소그룹·수요예배 자료로 활용 가능

## Step 6: 로컬 커스터마이징

`src/data/verse-refs.ts` 를 수정하면:

- 카테고리 추가·삭제
- 구절 추가·삭제
- 제목(한글/영문) 변경

이 가능합니다. 변경 후 `npm run dev` 로 새로고침하면 반영됩니다.

## Step 7: 빌드 및 배포

배포용 빌드를 만들려면:

```bash
npm run build
npm run start
```

Vercel, Netlify 등에 배포하려면 저장소를 연결하고 자동 빌드 설정을 사용하시면 됩니다.

---

**다음 단계**: [MANUAL.md](./MANUAL.md) 에서 상세 사용법과 문제 해결 방법을 확인하세요.
