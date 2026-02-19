/**
 * Lord's Supper (성찬식) Curriculum
 * Comprehensive key concepts aligned with transcript + research
 * Structured for solo entrepreneur learning: modular, step-by-step, actionable
 */

export interface CurriculumRow {
  step: number;
  concept: string;
  transcript: string;
  research: string;
  action?: string;
}

export interface CurriculumCategory {
  id: string;
  title: string;
  subtitle: string;
  order: number;
  rows: CurriculumRow[];
}

export const curriculumCategories: CurriculumCategory[] = [
  {
    id: "rituals-vs-essence",
    title: "1. 의식과 본질 (Rituals vs Essence)",
    subtitle: "Visible rituals vs invisible faith",
    order: 1,
    rows: [
      {
        step: 1,
        concept: "Why humans crave visible rituals",
        transcript:
          "믿는 하나님, 예수님, 성령을 볼 수 없기 때문에 사탄이 장난칠 틈이 많다. 의식(할례, 침례, 성찬식)은 보이므로, 안 보이는 것을 믿는 게 흔들릴 때 보이는 것을 함으로써 마음의 안정을 얻는다.",
        research:
          "Human psychology: rituals provide tangible reassurance when intangible beliefs feel uncertain. Religious studies show ritual participation reduces existential anxiety.",
        action: "Reflect: Do I seek ritual for stability or for the substance?",
      },
      {
        step: 2,
        concept: "Essence is invisible",
        transcript:
          "본질은 안 보인다. 할례도 남자 아이에게 하는 게 아니라 안 보이는 할례가 진짜. 침례도 마음속에서 일어나는 것이 진짜. 성찬식도 의식 자체가 본질이 아니다.",
        research:
          "Hebrews 11:1—faith is assurance of things not seen. Pauline theology distinguishes letter vs spirit (2 Cor 3:6).",
        action: "Distinguish external ritual from internal reality.",
      },
      {
        step: 3,
        concept: "Jewish vs Gentile education",
        transcript:
          "의식을 통한 교육은 하나님이 유대인을 가르치는 방법이다. 율법은 수많은 의식으로 교훈을 심었다. 이방인에게 하나님은 어떤 의식을 주셨는가? 없었다.",
        research:
          "Col 2:16–17: festivals, new moons, Sabbaths are shadows; substance is Christ. Jewish law served pedagogical purpose for Israel.",
        action: "Identify which practices are cultural/Jewish vs universal.",
      },
    ],
  },
  {
    id: "lords-supper-origins",
    title: "2. 성찬식의 기원 (Lord's Supper Origins)",
    subtitle: "Biblical mandate and Passover link",
    order: 2,
    rows: [
      {
        step: 1,
        concept: "Jesus' command",
        transcript:
          "예수님께서 '하라'고 시키셨다. '날 기념하라.' 유월절 어린 양—그것을 하는 것이다.",
        research:
          "1 Cor 11:24–25; Luke 22:19–20. Institution at Last Supper. 'Do this in remembrance of me.'",
        action: "Memorize the institution narrative.",
      },
      {
        step: 2,
        concept: "Paul's confirmation",
        transcript:
          "바울도 교회에서 성찬식을 했었다. 사도행전 28장 전까지. 다시 한번 짚어준다.",
        research:
          "1 Cor 11:23–26—Paul received from Lord, delivered to Corinthians. Paul practiced it before his prison epistles.",
        action: "Trace Paul's practice in Acts vs Prison Epistles.",
      },
      {
        step: 3,
        concept: "Focus: Jesus' body",
        transcript:
          "빵은 내 몸, 피는 이 몸을 지탱시키는 생명. 성찬식은 예수님의 몸에 관한 이야기—십자가에서 돌아가시는 것.",
        research:
          "Bread = body offered; wine = blood = life. Central theme: Christ's bodily sacrifice. Union with Christ through participation.",
        action: "Summarize in one sentence: communion = Jesus' body and blood.",
      },
    ],
  },
  {
    id: "passover-typology",
    title: "3. 유월절 어린 양 상징 (Passover Lamb Typology)",
    subtitle: "Exodus 12 foreshadows Christ",
    order: 3,
    rows: [
      {
        step: 1,
        concept: "Lamb without blemish",
        transcript:
          "흠이 없는 어린 양 = 죄를 지으신 적이 없는 예수님의 혼. 의인. 겉의 보라색 테두리 = 저주받은 몸. 짐승같은 몸으로 이 땅에 오셨다.",
        research:
          "Ex 12:5—lamb without blemish. 1 Pet 1:19—Christ as lamb without defect. Typology: OT foreshadows NT fulfillment.",
        action: "Map each Passover detail to Christ.",
      },
      {
        step: 2,
        concept: "No laying on of hands",
        transcript:
          "유대인 율법의 제사는 안수를 한다—내 죄가 제물로 넘어간다. 유월절은 안수 과정이 없다. 죄를 넘기지 않는다.",
        research:
          "Lev 1:4—laying on of hands transfers sin. Passover (Ex 12) precedes Levitical law; no imposition of hands. Lamb's sinlessness preserved.",
        action: "Contrast Passover vs Levitical sacrifices.",
      },
      {
        step: 3,
        concept: "Do not break bones",
        transcript:
          "'뼈를 꺾지 말라.' 뼈가 온전 = 부활의 상징. 죽었다가 다시 산다. 에스겔 37, 요한복음—뼈가 안 부러졌다.",
        research:
          "Ex 12:46; Num 9:12. Jn 19:33, 36—Jesus' legs not broken. Resurrection typology. Intact bones = future life.",
        action: "Connect unbroken bones to resurrection hope.",
      },
      {
        step: 4,
        concept: "Pre-law Passover",
        transcript:
          "출애굽기 12장은 율법 전이다. 유대인 명절과 다르다. 태초의 유월절. 안수 없이 죽고 살아나는 비밀이 숨겨져 있다.",
        research:
          "Passover in Ex 12 precedes Sinai. Distinct from later Mosaic cult. Foreshadows Christ's unique sacrifice.",
        action: "Place Exodus 12 on biblical timeline.",
      },
    ],
  },
  {
    id: "human-nature",
    title: "4. 인간의 본성 (Human Nature: Body & Soul)",
    subtitle: "Curse, sin, and the two-part human",
    order: 4,
    rows: [
      {
        step: 1,
        concept: "Fall and curse on body",
        transcript:
          "아담이 선악과를 먹었을 때 죄인이 됐다. 하나님께서 몸에 저주를 내리셨다. 늙고 병들고 죽는 몸, 막 죄를 짓게 만드는 몸. 이 저주가 유전된다.",
        research:
          "Gen 3:17–19—ground cursed, thorns and thistles. Rom 5:12—death spread to all. Body as locus of decay and temptation.",
        action: "List ways the cursed body manifests.",
      },
      {
        step: 2,
        concept: "Only body cursed, not soul",
        transcript:
          "영과 혼은 저주받지 않았다. 하나님 찾아서 돌아오게 하시려고. 몸만 저주. 몸의 저주를 풀려면 예수님이 저주받은 몸으로 오셔야 한다.",
        research:
          "Soul/spirit capable of repentance; body bears physical consequences. Christ assumes cursed flesh to redeem it.",
        action: "Differentiate soul-curse vs body-curse.",
      },
      {
        step: 3,
        concept: "Blood = body's death",
        transcript:
          "성경에서 '피가 흘려졌다' = 몸이 죽었다. 생명과 죽음은 몸의 죽음, 혼의 죽음 두 가지. 피 = 몸의 생명이 끝남.",
        research:
          "Lev 17:11—life is in the blood. Heb 9:22—without shedding of blood no remission. Blood = substitutionary death.",
        action: "Memorize: blood shed = bodily death.",
      },
    ],
  },
  {
    id: "inheritance-conditions",
    title: "5. 상속의 조건 (Conditions for Inheritance)",
    subtitle: "Two requirements for God's kingdom",
    order: 5,
    rows: [
      {
        step: 1,
        concept: "Two conditions for inheritance",
        transcript:
          "하나님 나라 상속자 되려면: (1) 혼이 의인이어야 함 (2) 몸이 완벽해야 함—늙지 않고 썩지 않고 죄짓게 유혹하지 않는 몸.",
        research:
          "Inheritance implies eschatological kingdom. 1 Cor 15:50—flesh and blood cannot inherit. Glorified body required.",
        action: "Checklist: soul righteous? body future-glorified?",
      },
      {
        step: 2,
        concept: "We fail both",
        transcript:
          "우리는 혼 자격도 몸 자격도 없다. 둘 다 문제.",
        research:
          "Rom 3:23—all have sinned. Rom 7—body of death. No human meets criteria apart from Christ.",
        action: "Acknowledge disqualification without Christ.",
      },
      {
        step: 3,
        concept: "Heaven or hell",
        transcript:
          "상속받지 못한다 = 지옥 간다. 둘 중 하나. 상속 = 구원 = 하나님 나라.",
        research:
          "Eschatological binary: inherit kingdom or face judgment. Mt 25:34, 41.",
        action: "Clarify stakes of inheritance.",
      },
    ],
  },
  {
    id: "marriage-metaphor",
    title: "6. 결혼 비유 (Marriage Metaphor: One Body)",
    subtitle: "Christ as bridegroom, church as bride",
    order: 6,
    rows: [
      {
        step: 1,
        concept: "Jesus given as husband",
        transcript:
          "예수님을 우리 남편으로 주셨다. 믿는 사람들이 아내, 예수님이 남편. 한 육체가 된다.",
        research:
          "Eph 5:23–32—Christ head of church, husband of bride. 'One flesh' applied to Christ and church. Rom 7:4—married to Christ.",
        action: "Identify 'one flesh' implications.",
      },
      {
        step: 2,
        concept: "Husband determines status",
        transcript:
          "남편이 의인이면 아내도 의인. 남편이 유대인이면 아내도 유대인. 남편의 신분이 결정한다. 아내가 죄인이어도 남편만 보고 의인으로 인정.",
        research:
          "Corporate identity: spouse's status imputed. Legal analogy: marriage changes standing. Eph 2—in Christ we are seated.",
        action: "Apply: my status = Christ's status.",
      },
      {
        step: 3,
        concept: "Citizenship analogy",
        transcript:
          "미국 시민권: 투자 이민 vs 미국 사람과 결혼. 하나님 나라도 그렇다. 왕과 결혼하면 끝.",
        research:
          "Naturalization through marriage. Union with Christ grants kingdom citizenship. Grace, not works.",
        action: "Contrast works-based vs marriage-based entry.",
      },
    ],
  },
  {
    id: "sin-atonement",
    title: "7. 죄와 속죄 (Sin, Curse, and Atonement)",
    subtitle: "Price paid, curse removed",
    order: 7,
    rows: [
      {
        step: 1,
        concept: "Debt and payment",
        transcript:
          "빚쟁이가 하나님한테 빚을 져서 몸에 저주를 받았다. 빚 = 죄값. 이 빚을 갚아야 저주가 풀린다. 죄값 = 몸이 죽는 것.",
        research:
          "Col 2:14—canceled record of debt. Heb 9:22—blood for forgiveness. Penal substitution: death pays debt.",
        action: "Trace: sin → curse → debt → death → payment.",
      },
      {
        step: 2,
        concept: "Jesus bears body-curse",
        transcript:
          "예수님이 저주받은 몸으로 오셨다. 우리 몸처럼. 완벽한 하늘 재질 몸을 버리고 저주받은 몸으로 바꿔서 오셨다.",
        research:
          "Gal 3:13—Christ became a curse. 2 Cor 5:21—made sin for us. Phil 2:7—form of servant.",
        action: "Identify Christ's voluntary assumption of curse.",
      },
      {
        step: 3,
        concept: "One body, one death",
        transcript:
          "예수님과 우리가 한 육체. 하나님은 예수님을 홀몸으로 보지 않는다. 한 육체가 죽으면 우리도 다 죽은 것. 죗값 치렀다고 봐주신다.",
        research:
          "Rom 6:5–11—united in death and resurrection. Corporate solidarity. Christ's death counts for believers.",
        action: "State: His death = my death (forensically).",
      },
    ],
  },
  {
    id: "resurrection",
    title: "8. 부활 (Resurrection)",
    subtitle: "Body transformation, not revival",
    order: 8,
    rows: [
      {
        step: 1,
        concept: "Resurrection definition",
        transcript:
          "부활 = 저주받은 몸을 가지고 있던 사람이 완벽한 몸을 갖게 되는 것. 죽었다 살아난다가 아니다. 몸의 성질이 바뀐다.",
        research:
          "1 Cor 15:42–44—sown perishable, raised imperishable. Spiritual body. Transformation, not resuscitation.",
        action: "Distinguish resurrection from resuscitation.",
      },
      {
        step: 2,
        concept: "Only Jesus resurrected",
        transcript:
          "성경에서 예수님만 부활했다고 돼 있다. 그렇게 많은 사람이 죽었다 살아났어도 부활이 아니다. 예수님만 부활.",
        research:
          "Lazarus, etc.—revived to same mortal body. Christ alone raised to glorified body. Firstfruits (1 Cor 15:20).",
        action: "Compare Jesus' resurrection to Lazarus.",
      },
      {
        step: 3,
        concept: "Heir born",
        transcript:
          "예수님 부활하신 날 = '내 상속자가 태어났구나' (시편 2편, 사도행전 13장). 의로운 혼 + 완벽한 몸 = 상속자.",
        research:
          "Acts 13:33—Psalm 2:7 fulfilled at resurrection. Christ as firstborn, heir. We share in His inheritance.",
        action: "Link resurrection to inheritance.",
      },
    ],
  },
  {
    id: "communion-elements",
    title: "9. 성찬식 요소 (Communion Elements)",
    subtitle: "Bread, wine, and their meanings",
    order: 9,
    rows: [
      {
        step: 1,
        concept: "Bread = body",
        transcript:
          "빵은 내 몸. 십자가에서 찢어졌다. 저주받은 몸이 죄값을 치르는 것. 빵 먹을 때 '그 몸이 내 몸을 대표했구나.'",
        research:
          "1 Cor 11:24—body broken for you. Participation in Christ's body. Union with His sacrifice.",
        action: "When eating bread: recall body = my representative death.",
      },
      {
        step: 2,
        concept: "Wine = blood, joy, forgetfulness of judgment",
        transcript:
          "포도주: 통치자는 법을 잊어버려 심판 못함. 죄인은 마시면 기분이 괜찮아짐. 예수님이 십자가에서 하신 희생이 내 죗값을 치렀다는 걸 믿으면 근심이 사라진다.",
        research:
          "Prov 31:4–7—wine and judgment. Wine as symbol of joy, covenant ratification. Heb 9:22—blood of covenant.",
        action: "When drinking wine: recall blood = my debt paid, joy.",
      },
      {
        step: 3,
        concept: "Drinking = believing in blood's efficacy",
        transcript:
          "예수님의 피를 믿는다 = 그 피의 효력을 믿는다. 내가 감히 몸의 저주를 풀고 새 몸을 받게 됐다는 걸 믿는 것. 마치 포도주 마시고 근심이 사라지는 것과 같다.",
        research:
          "Jn 6:53–58—eating and drinking = believing. Faith as reception. Efficacy of Christ's blood applied by faith.",
        action: "Connect drinking with believing.",
      },
      {
        step: 4,
        concept: "Jesus will drink later",
        transcript:
          "예수님은 아직 포도주를 안 마신다. 심판이 끝날 때까지. 새 하늘 새 땅에서 같이 마실 거라고 약속. 우리만 미리 마신다.",
        research:
          "Mt 26:29—'I will not drink until I drink it new in my Father's kingdom.' Eschatological meal.",
        action: "Anticipate future feast with Christ.",
      },
    ],
  },
  {
    id: "proper-partaking",
    title: "10. 합당한 참여 (Proper Partaking)",
    subtitle: "Discernment and self-examination",
    order: 10,
    rows: [
      {
        step: 1,
        concept: "Discern the body",
        transcript:
          "분별하고 먹어야 한다. 내가 예수님의 피의 효력이 진짜 믿어졌나? 내가 예수님 피에 취했나? 그러면 마셔도 된다.",
        research:
          "1 Cor 11:29—eat and drink in an unworthy manner, not discerning the body. Self-examination required.",
        action: "Before partaking: self-examine faith in blood.",
      },
      {
        step: 2,
        concept: "Meaning must precede action",
        transcript:
          "그 뜻도 모르고 십자가에서 죽은 몸이 내 몸인지 아닌지, 흘리신 피가 내 피인지 모르고 먹고 마시면 똑바로 하는 게 아니다.",
        research:
          "Ritual without understanding = empty. 1 Cor 11:27—unworthy manner. Knowledge + faith + action.",
        action: "Ensure understanding before participating.",
      },
      {
        step: 3,
        concept: " Corinthians' abuse",
        transcript:
          "고린도 교회는 막 포도주 먹고 취하고 빵 지들끼리 먹고 엉망이었다. 그래서 바울이 경고.",
        research:
          "1 Cor 11:17–22—divisions, excess, neglect of poor. Communion corrupted by selfishness.",
        action: "Avoid Corinthian errors: excess, division.",
      },
    ],
  },
  {
    id: "gentile-age",
    title: "11. 이방인 시대와 의식 종료 (Gentile Age & Cessation of Rituals)",
    subtitle: "Prison epistles, Colossians, and 'why we don't'",
    order: 11,
    rows: [
      {
        step: 1,
        concept: "Acts 28 turn",
        transcript:
          "사도행전 28장에서 바울이 '끝났구나.' 유대인 전도 이제 안 된다. 이방인의 시계가 켜졌다. 미스터리 시대.",
        research:
          "Acts 28:25–28—Paul quotes Isaiah: hearts dull, turned to Gentiles. Dispensational shift. Mystery period.",
        action: "Identify Acts 28 as turning point.",
      },
      {
        step: 2,
        concept: "Prison epistles",
        transcript:
          "바울이 갇혀있는 상태에서 쓴 서신 = 옥중서신. 에베소서, 빌립보서, 골로새서, 빌레몬서. 그 후 성경이 안 나온다.",
        research:
          "Ephesians, Philippians, Colossians, Philemon. Written AD 60–62. Final Pauline revelation.",
        action: "List prison epistles and their distinctives.",
      },
      {
        step: 3,
        concept: "Colossians: shadows and substance",
        transcript:
          "골로새서: 먹고 마시고 절기—그건 그림자. 실체는 그리스도다. 의식 통해서 배우는 유대인들 전도가 안 되니까 의식 그만하자.",
        research:
          "Col 2:16–17—no one judge you in food, drink, festival, new moon, Sabbath. Shadow vs substance. Christ is substance.",
        action: "Apply: rituals = shadow; Christ = substance.",
      },
      {
        step: 4,
        concept: "Why this church stopped",
        transcript:
          "저희 교회는 침례나 성찬식을 안 한다. 이방인 시대와 유대인 시대 차이. 거듭나지 못한 분들의 소외감도 있다. 안 해도 된다는 확신.",
        research:
          "Not wrong to do; but not required for Gentile age. Pastoral sensitivity to unbelievers present.",
        action: "Articulate your church's position.",
      },
    ],
  },
  {
    id: "passover-vs-atonement",
    title: "12. 유월절 vs 대속죄일 (Passover vs Day of Atonement)",
    subtitle: "Two gospels, two typologies",
    order: 12,
    rows: [
      {
        step: 1,
        concept: "Paul: Passover lamb",
        transcript:
          "바울은 예수님을 유월절 어린 양이라고 말한다. 같이 죽고 같이 살아나는 복음. 빵에 참여하고 피에 참여.",
        research:
          "1 Cor 5:7—Christ our Passover. 1 Cor 10:16—participation in body and blood. Pauline emphasis.",
        action: "Identify Paul's typology: Passover.",
      },
      {
        step: 2,
        concept: "Hebrews: Day of Atonement",
        transcript:
          "히브리서는 예수님을 대속죄일 제물로 비유한다. 유월절 1월 14일 vs 대속죄일 7월 10일. 다른 이야기.",
        research:
          "Heb 9—Christ as High Priest, entering holy place. Day of Atonement imagery. Lev 16 typology.",
        action: "Identify Hebrews' typology: Yom Kippur.",
      },
      {
        step: 3,
        concept: "No 'one body' outside Paul",
        transcript:
          "성도들을 예수님의 몸이라고 표현한 게 바울 13통 바깥에 있다? 없다. 단 한 번도 없다. 속죄제 복음과 성찬식은 다른 이야기.",
        research:
          "Body-of-Christ ecclesiology is distinctively Pauline. Hebrews, Peter, James—different metaphors. Pauline corpus unique.",
        action: "Contrast Paul's body-metaphor with other epistles.",
      },
      {
        step: 4,
        concept: "Historical mismatch",
        transcript:
          "지난 2000년간 예수님을 유월절 어린 양이라고 하지 않고 대속죄일 제물로 하는 복음을 전했다. 그 복음으로 거듭나서 바울의 성찬식을 했다. 엉뚱하다.",
        research:
          "Church history: dominant atonement model often sacrificial/substitutionary without Passover-one-body emphasis.",
        action: "Reflect on historical practice vs biblical alignment.",
      },
    ],
  },
  {
    id: "summary",
    title: "13. 요약 및 실행 (Summary & Action)",
    subtitle: "What communion really is",
    order: 13,
    rows: [
      {
        step: 1,
        concept: "Communion in one sentence",
        transcript:
          "'예수님이 흘리신 피가 내 피구나.' '예수님이 죗값 치르신 게 내가 치른 걸로 돼 있구나.' 그게 마시는 것. '돌아가신 그 몸이 내 몸을 대표했구나.' 그게 빵 먹는 것.",
        research:
          "Summary: communion = participatory remembrance of union with Christ in His death and resurrection. Faith in efficacy.",
        action: "Memorize the one-sentence summary.",
      },
      {
        step: 2,
        concept: "When to partake",
        transcript:
          "이 일이 성경 읽다가 마음에서 일어난 분들이 교육적으로 해보실 수 있다. 이방인 시대에는 의식을 통해 공부하는 것 틀리다고 할 수는 없지만 맞는 건 아니다.",
        research:
          "Optional for pedagogical purposes. Not mandated in Gentile-age revelation. Substance over ceremony.",
        action: "Decide: partake for education or abstain for consistency.",
      },
      {
        step: 3,
        concept: "The essence",
        transcript:
          "본질은 '성경 말씀에서 예수님이 흘리신 피가 내 피구나'를 믿는 것이다. 성찬식은 그걸 교육적으로 보여주는 것이다.",
        research:
          "Faith in Christ's blood = essence. Communion = visible aid to that faith when meaning is understood.",
        action: "Priority: believe the essence; ritual is secondary.",
      },
    ],
  },
];
