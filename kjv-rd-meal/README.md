# KJV Lord's Supper (성찬식) Bible Study

성경에 나오는 대표적인 종교의식 **성찬식**을 주제로 한 KJV 성경 구절 연구 도구입니다.

## Overview

이 프로젝트는 성찬식 설교 내용에 맞춘 모든 KJV 성경 구절을 수집하여, 카테고리별로 정리된 표 형식으로 제공합니다.  
각 구절은 KJV 스타일로 제시되며, 흠정역 한글성경전서 번역을 병기합니다.

## Features

- **KJV 전용**: 킹제임스 성경(KJV)만 사용
- **카테고리별 정리**: Lord's Supper, Passover, Body/Blood, Sin & Curse, Inheritance, Resurrection 등 18개 주제
- **이중 언어**: KJV (영문) + 흠정역 (한글)
- **중복 제거**: 관련 구절을 빠짐없이 수집하되 중복 없이 정리

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **bible-api.com** (KJV 구절 조회)

## Quick Start

```bash
# Install
npm install

# Run development server
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 를 엽니다.

## Project Structure

```
src/
├── app/
│   ├── page.tsx      # Main verse table UI
│   └── layout.tsx
├── data/
│   └── verse-refs.ts # Verse references by category
└── lib/
    └── bible-api.ts  # KJV fetch utility
```

## Categories (18)

| ID | English | 한국어 |
|----|---------|--------|
| lords-supper | Lord's Supper / Communion | 성찬식 / 주의 만찬 |
| passover | Passover Origin | 유월절 기원 |
| passover-lamb | Jesus as Passover Lamb | 유월절 어린 양으로서의 예수 |
| body-blood | Body and Blood / One Flesh | 몸과 피 / 한 육체 |
| sin-curse | Sin and Curse on the Body | 죄와 몸에 내린 저주 |
| blood-life | Blood and Death / Life | 피와 사망 / 생명 |
| inheritance | Inheritance and Heirs | 상속과 상속자 |
| resurrection | Resurrection / Bones Not Broken | 부활 / 뼈가 꺾이지 않음 |
| gentile-age | Acts 28 / Gentile Age | 사도행전 28장 / 이방인 시대 |
| ordinances | Ordinances in Colossians | 골로새서의 의식 |
| wine | Wine / Cup | 포도주 / 잔 |
| faith-of-christ | Faith of Christ / Believing the Blood | 그리스도의 믿음 / 피를 믿음 |
| day-atonement | Day of Atonement (Contrast) | 대속죄일 (대조) |
| ezekiel-bones | Ezekiel – Dry Bones | 에스겔 – 마른 뼈 |
| circumcision | Circumcision (Spiritual) | 할례 (영적) |
| baptism | Baptism | 침례 |
| christ-cursed | Christ Made a Curse for Us | 우리를 위한 저주가 되신 그리스도 |
| one-body-death | One Body – Death and Life | 한 몸 – 사망과 생명 |

## Vercel Deployment

If the project lives in a subfolder (e.g. `kjv-rd-meal/`) in your repo:
- Set **Root Directory** to `kjv-rd-meal` in Vercel Project Settings
- Leave other defaults (Framework: Next.js)

## License

Private. KJV text: Public Domain. 흠정역: 해당 출판사의 저작권 규정을 따릅니다.
