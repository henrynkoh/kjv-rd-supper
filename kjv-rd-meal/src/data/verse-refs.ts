/**
 * Bible verse references organized by category
 * Aligned with Lord's Supper (성찬식) sermon content - KJV only
 * Categories derived from: Passover, Body/Blood, Sin/Curse, Inheritance, Marriage, etc.
 */

export type VerseRef = {
  book: string;
  chapter: number;
  verse: number | [number, number];
};

export type Category = {
  id: string;
  titleEn: string;
  titleKo: string;
  refs: VerseRef[];
};

export const VERSE_CATEGORIES: Category[] = [
  {
    id: "lords-supper",
    titleEn: "Lord's Supper / Communion",
    titleKo: "성찬식 / 주의 만찬",
    refs: [
      { book: "1 Corinthians", chapter: 11, verse: [23, 34] },
      { book: "Luke", chapter: 22, verse: [19, 20] },
      { book: "Matthew", chapter: 26, verse: [26, 29] },
      { book: "Mark", chapter: 14, verse: [22, 25] },
    ],
  },
  {
    id: "passover",
    titleEn: "Passover Origin",
    titleKo: "유월절 기원",
    refs: [
      { book: "Exodus", chapter: 12, verse: [1, 51] },
    ],
  },
  {
    id: "passover-lamb",
    titleEn: "Jesus as Passover Lamb",
    titleKo: "유월절 어린 양으로서의 예수",
    refs: [
      { book: "1 Corinthians", chapter: 5, verse: 7 },
      { book: "John", chapter: 1, verse: 29 },
      { book: "1 Peter", chapter: 1, verse: 19 },
      { book: "Exodus", chapter: 12, verse: [3, 14] },
      { book: "Exodus", chapter: 12, verse: [43, 51] },
    ],
  },
  {
    id: "body-blood",
    titleEn: "Body and Blood / One Flesh",
    titleKo: "몸과 피 / 한 육체",
    refs: [
      { book: "1 Corinthians", chapter: 10, verse: [16, 17] },
      { book: "Ephesians", chapter: 5, verse: [28, 32] },
      { book: "Romans", chapter: 7, verse: 4 },
      { book: "Ephesians", chapter: 5, verse: [22, 33] },
      { book: "1 Corinthians", chapter: 12, verse: [12, 27] },
      { book: "Ephesians", chapter: 1, verse: [22, 23] },
    ],
  },
  {
    id: "sin-curse",
    titleEn: "Sin and Curse on the Body",
    titleKo: "죄와 몸에 내린 저주",
    refs: [
      { book: "Genesis", chapter: 3, verse: [17, 19] },
      { book: "Romans", chapter: 5, verse: 12 },
      { book: "Romans", chapter: 6, verse: 23 },
      { book: "Genesis", chapter: 3, verse: [1, 24] },
    ],
  },
  {
    id: "blood-life",
    titleEn: "Blood and Death / Life",
    titleKo: "피와 사망 / 생명",
    refs: [
      { book: "Leviticus", chapter: 17, verse: 11 },
      { book: "Hebrews", chapter: 9, verse: 22 },
      { book: "Genesis", chapter: 9, verse: [4, 6] },
      { book: "Deuteronomy", chapter: 12, verse: 23 },
      { book: "Hebrews", chapter: 9, verse: [11, 28] },
    ],
  },
  {
    id: "inheritance",
    titleEn: "Inheritance and Heirs",
    titleKo: "상속과 상속자",
    refs: [
      { book: "Romans", chapter: 8, verse: [16, 17] },
      { book: "Galatians", chapter: 3, verse: 29 },
      { book: "Ephesians", chapter: 1, verse: [11, 14] },
      { book: "Colossians", chapter: 1, verse: 12 },
      { book: "Psalm", chapter: 2, verse: [7, 8] },
      { book: "Acts", chapter: 13, verse: [32, 33] },
      { book: "Acts", chapter: 2, verse: [29, 36] },
    ],
  },
  {
    id: "resurrection",
    titleEn: "Resurrection / Bones Not Broken",
    titleKo: "부활 / 뼈가 꺾이지 않음",
    refs: [
      { book: "1 Corinthians", chapter: 15, verse: [1, 58] },
      { book: "John", chapter: 19, verse: [33, 36] },
      { book: "Exodus", chapter: 12, verse: 46 },
      { book: "Numbers", chapter: 9, verse: 12 },
      { book: "Psalm", chapter: 34, verse: 20 },
    ],
  },
  {
    id: "gentile-age",
    titleEn: "Acts 28 / Gentile Age",
    titleKo: "사도행전 28장 / 이방인 시대",
    refs: [
      { book: "Acts", chapter: 28, verse: [25, 31] },
    ],
  },
  {
    id: "ordinances",
    titleEn: "Ordinances in Colossians",
    titleKo: "골로새서의 의식",
    refs: [
      { book: "Colossians", chapter: 2, verse: [11, 23] },
    ],
  },
  {
    id: "wine",
    titleEn: "Wine / Cup",
    titleKo: "포도주 / 잔",
    refs: [
      { book: "Proverbs", chapter: 31, verse: [4, 5] },
      { book: "Matthew", chapter: 26, verse: 29 },
      { book: "1 Corinthians", chapter: 11, verse: [25, 26] },
    ],
  },
  {
    id: "faith-of-christ",
    titleEn: "Faith of Christ / Believing the Blood",
    titleKo: "그리스도의 믿음 / 피를 믿음",
    refs: [
      { book: "Romans", chapter: 3, verse: [21, 26] },
      { book: "Galatians", chapter: 2, verse: 16 },
      { book: "Romans", chapter: 5, verse: [6, 11] },
      { book: "Hebrews", chapter: 12, verse: 2 },
    ],
  },
  {
    id: "day-atonement",
    titleEn: "Day of Atonement (Contrast)",
    titleKo: "대속죄일 (대조)",
    refs: [
      { book: "Hebrews", chapter: 9, verse: [1, 28] },
      { book: "Hebrews", chapter: 10, verse: [1, 18] },
    ],
  },
  {
    id: "ezekiel-bones",
    titleEn: "Ezekiel – Dry Bones",
    titleKo: "에스겔 – 마른 뼈",
    refs: [
      { book: "Ezekiel", chapter: 37, verse: [1, 14] },
    ],
  },
  {
    id: "circumcision",
    titleEn: "Circumcision (Spiritual)",
    titleKo: "할례 (영적)",
    refs: [
      { book: "Colossians", chapter: 2, verse: [10, 12] },
      { book: "Romans", chapter: 2, verse: 29 },
      { book: "Philippians", chapter: 3, verse: 3 },
    ],
  },
  {
    id: "baptism",
    titleEn: "Baptism",
    titleKo: "침례",
    refs: [
      { book: "Romans", chapter: 6, verse: [3, 4] },
      { book: "Colossians", chapter: 2, verse: 12 },
    ],
  },
  {
    id: "christ-cursed",
    titleEn: "Christ Made a Curse for Us",
    titleKo: "우리를 위한 저주가 되신 그리스도",
    refs: [
      { book: "Galatians", chapter: 3, verse: 13 },
      { book: "2 Corinthians", chapter: 5, verse: 21 },
      { book: "Isaiah", chapter: 53, verse: [4, 12] },
    ],
  },
  {
    id: "one-body-death",
    titleEn: "One Body – Death and Life",
    titleKo: "한 몸 – 사망과 생명",
    refs: [
      { book: "Romans", chapter: 6, verse: [1, 11] },
      { book: "2 Corinthians", chapter: 5, verse: [14, 15] },
      { book: "Galatians", chapter: 2, verse: 20 },
    ],
  },
];
