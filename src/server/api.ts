import type { Coach } from "../interfaces/coach";

const coaches = [
  {
    location: "Frankfurt",
    name: "Magdalena",
    tag: "Life Coach",
    id: "coach-1",
    tags: ["Life", "Relation", "Fitness"],
    description:
      "Hej, ich bin Magda, dein Life Coach aus Frankfurt. Ich bin seit 10 Jahren Personal Trainer. Ich habe schon vielen Menschen geholfen, ihre Ziele zu erreichen.",
  },
  {
    location: "Stuttgart",
    name: "Clara",
    tag: "Personal Coach",
    id: "coach-2",
    tags: ["Life", "Relation", "Fitness"],
    description:
      "Für mich geht es im Coaching darum, dass du dich selbst besser kennenlernst und deine eigenen Stärken und Schwächen erkennst.",
  },
  {
    location: "Berlin",
    name: "Jannis",
    tag: "Fitness Coach",
    id: "coach-3",
    tags: ["Life", "Relation", "Business"],
    description:
      "Ich bin Jannis und ich bin seit 10 Jahren Personal Trainer. Ich habe schon vielen Menschen geholfen, ihre Ziele zu erreichen.",
  },
  {
    location: "Hannover",
    name: "Cora",
    tag: "Life Coach",
    id: "coach-4",
    tags: ["Life", "Fitness"],
    description:
      "Ich bin Cora und ich bin seit 10 Jahren Personal Trainer. Ich habe schon vielen Menschen geholfen, ihre Ziele zu erreichen.",
  },
  {
    location: "Köln",
    name: "Mateo",
    tag: "Life Coach",
    id: "coach-5",
    tags: ["Business", "Fitness"],
    description:
      "Hey, ich bin Mateo und ich bin seit zwei Jahren Life Coach in Köln. Life Coaching ist für mich eine Herzensangelegenheit. Es inspiriert mich, Menschen dabei zu helfen, ihr volles Potenzial zu entfalten.",
  },
  {
    location: "München",
    name: "Niko",
    tag: "Nutrition Coach",
    id: "coach-6",
    tags: ["Life", "Business"],
    description:
      "Nutrition Coaching ist für mich eine Herzensangelegenheit. Es inspiriert mich, Menschen dabei zu helfen, ihr volles Potenzial zu entfalten.",
  },
  {
    location: "Hamburg",
    name: "Vici",
    tag: "Life Coach",
    id: "coach-7",
    tags: ["Life", "Business"],
    description:
      "Ich kümmere mich um alle Herzensangelegenheiten. Es inspiriert mich, Menschen dabei zu helfen, ihr volles Potenzial zu entfalten.",
  },
  {
    location: "Leipzig",
    name: "Sandra",
    tag: "Life Coach",
    id: "coach-8",
    tags: ["Relation", "Fitness"],
    description:
      "Life Coaching hat mein Leben verändert. Mein Wissen will ich teilen, um andere Menschen zu inspirieren und ihnen neue Perspektiven zu eröffnen.",
  },
  {
    location: "Düsseldorf",
    name: "Toni",
    tag: "Life Coach",
    id: "coach-9",
    tags: ["Business"],
    description:
      "Ich bin Toni und ich bin seit 10 Jahren Personal Trainer. Ich habe schon vielen Menschen geholfen, ihre Ziele zu erreichen.",
  },
];

export const getCoaches = async (filter: {
  tag: string | null;
}): Promise<Coach[]> => {
  if (filter.tag !== null) {
    return coaches.filter((coach) =>
      coach.tags.some((tag) => tag === filter.tag)
    );
  }

  return coaches;
};

export const getCoachTags = async (): Promise<string[]> => {
  const tags = coaches.map((coach) => coach.tags).flat();
  return [...new Set(tags)];
};
