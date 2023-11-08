import { Conjugations, VerbEndings } from "./types";

export default function getConjugations(verb: string, verbType: string) {
  let baseForm = verbType === "Noun" ? verb : verb.slice(0, -1);

  const verbEndings: VerbEndings = {
    "Ichidan verb": {
      te: "て",
      past: "た",
      potential: "られる",
      potentialPast: "られた",
      passive: "られる",
      passivePast: "られた",
      causative: "させる",
      causativePast: "させた",
      causativePassive: "させられる",
      causativePassivePast: "させられた",
    },

    "Godan verb with 'su' ending": {
      te: "して",
      past: "した",
      potential: "できる",
      potentialPast: "できた",
      passive: "される",
      passivePast: "された",
      causative: "させる",
      causativePast: "させた",
      causativePassive: "させられる",
      causativePassivePast: "させられた",
    },

    "Godan verb with 'ku' ending": {
      te: "いて",
      past: "いた",
      potential: "ける",
      potentialPast: "けた",
      passive: "かれる",
      passivePast: "かれた",
      causative: "かせる",
      causativePast: "かせた",
      causativePassive: "かせられる",
      causativePassivePast: "かせられた",
    },

    "Godan verb with 'mu' ending": {
      te: "んで",
      past: "んだ",
      potential: "める",
      potentialPast: "めた",
      passive: "まれる",
      passivePast: "まれた",
      causative: "ませる",
      causativePast: "ませた",
      causativePassive: "ませられる",
      causativePassivePast: "ませられた",
    },
    "Godan verb with 'bu' ending": {
      te: "んで",
      past: "んだ",
      potential: "べる",
      potentialPast: "べた",
      passive: "ばれる",
      passivePast: "ばれた",
      causative: "ばせる",
      causativePast: "ばせた",
      causativePassive: "ばせられる",
      causativePassivePast: "ばせられた",
    },
    "Godan verb with 'ru' ending": {
      te: "って",
      past: "った",
      potential: "れる",
      potentialPast: "れた",
      passive: "られる",
      passivePast: "られた",
      causative: "らせる",
      causativePast: "らせた",
      causativePassive: "らせられる",
      causativePassivePast: "らせられた",
    },
    "Godan verb with 'u' ending": {
      te: "って",
      past: "った",
      potential: "える",
      potentialPast: "えた",
      passive: "われる",
      passivePast: "われた",
      causative: "わせる",
      causativePast: "わせた",
      causativePassive: "わせられる",
      causativePassivePast: "わせられた",
    },
    "Godan verb with 'gu' ending": {
      te: "いで",
      past: "いだ",
      potential: "げる",
      potentialPast: "げた",
      passive: "がれる",
      passivePast: "がれた",
      causative: "がせる",
      causativePast: "がせた",
      causativePassive: "がせられる",
      causativePassivePast: "がせられた",
    },

    "Godan verb with 'nu' ending": {
      te: "んで",
      past: "んだ",
      potential: "ねる",
      potentialPast: "ねた",
      passive: "なれる",
      passivePast: "なれた",
      causative: "なせる",
      causativePast: "なせた",
      causativePassive: "なせられる",
      causativePassivePast: "なせられた",
    },

    "Godan verb with 'tsu' ending": {
      te: "って",
      past: "った",
      potential: "てる",
      potentialPast: "てた",
      passive: "たれる",
      passivePast: "たれた",
      causative: "たせる",
      causativePast: "たせた",
      causativePassive: "たせられる",
      causativePassivePast: "たせられた",
    },

    "Godan verb with 'ru' ending (irregular verb)": {
      te: "って",
      past: "った",
      potential: "れる",
      potentialPast: "れた",
      passive: "られる",
      passivePast: "られた",
      causative: "らせる",
      causativePast: "らせた",
      causativePassive: "らせられる",
      causativePassivePast: "らせられた",
    },

    Noun: {
      te: "して",
      past: "した",
      potential: "できる",
      potentialPast: "できた",
      passive: "される",
      passivePast: "された",
      causative: "させる",
      causativePast: "させた",
      causativePassive: "させられる",
      causativePassivePast: "させられた",
    },
    "Godan verb - Iku/Yuku special class": {
      te: "って",
      past: "った",
      potential: "ける",
      potentialPast: "けた",
      passive: "かれる",
      passivePast: "かれた",
      causative: "かせる",
      causativePast: "かせた",
      causativePassive: "かせられる",
      causativePassivePast: "かせられた",
    },
  };

  let conjugations: { [key: string]: string } = {};

  if (verbType in verbEndings) {
    let endings: Conjugations = verbEndings[verbType];
    // If a specific grammar point is requested, return only that one
    // If the requested grammar point isn't available, or if no specific one is requested
    // return all conjugations for the verb type
    for (const point in endings) {
      conjugations[point] = baseForm + endings[point];
    }
  }

  return conjugations;
}
