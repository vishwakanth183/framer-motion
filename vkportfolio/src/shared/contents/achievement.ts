export interface myAchievement {
  achievement: string;
  awaredBy: string;
  year: number;
  awardType: string;
}

export const totalAchievements = [
  {
    type: "Office",
    achievements: [
      {
        achievement: "Mr.Beyond Expectation",
        awaredBy: "Centizen Inc",
        year: 2023,
        awardType: "Personal",
      },
      {
        achievement: "Mission posible",
        for: "leading the team to glory",
        awaredBy: "Centizen Inc",
        year: 2023,
        awardType: "Team",
      },
      {
        achievement: "Outstanding Contributor",
        awaredBy: "Centizen Inc",
        year: 2022,
        awardType: "Personal",
      },
      {
        achievement: "Out of box thiker",
        awaredBy: "Centizen Inc",
        year: 2021,
        awardType: "Personal",
      },
    ],
  },
  {
    type: "College",
    achievements: [
      {
        achievement: "Completed degree with 8.7 GPA with no history of arrears",
      },
      {
        achievement: "Won Academic Topper award in 2018 & 2019 in college",
      },
      {
        achievement:
          "Scored more than 800+ medals by solving challenges in Skillrack",
      },
      {
        achievement:
          "Won prizes in mini project development, project expos and hackathons",
      },
    ],
  },
  {
    type: "School",
    achievements: [
      {
        achievement: "Completed HSC with 87%",
      },
      {
        achievement: "Completed SSLC with 93%",
      },
    ],
  },
];
