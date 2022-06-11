const getParsedDate = (createdAt) => {
  return new Date(createdAt).toLocaleDateString("ko-KR");
};

const dummyTweets = [
  {
    id: 1,
    username: "계산기",
    team: "PERSONAL",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 2,
    username: "나만의 아고라스테이츠",
    team: "TEAM",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 3,
    username: "계산기",
    team: "PERSONAL",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 4,
    username: "나만의 아고라스테이츠",
    team: "TEAM",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 5,
    username: "계산기",
    team: "PERSONAL",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 6,
    username: "나만의 아고라스테이츠",
    team: "TEAM",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 7,
    username: "계산기",
    team: "PERSONAL",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
  {
    id: 8,
    username: "나만의 아고라스테이츠",
    team: "TEAM",
    content:
      "자바스크립트의 동작 원리를 파악하기 위해 EventListener를 이용하여 계산기를 구현했습니다.",
    createdAt: getParsedDate("2022-02-24T16:17:47.000Z"),
  },
];

export { dummyTweets };
