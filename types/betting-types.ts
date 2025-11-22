export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSitesHR: BettingSite[] = [

  {
    id: 1,
    name: "SuperSport",
    logo: "/supersport.png",
    bonus: "Do 100€",
    url: "https://www.supersport.hr/",
    rating: 9.9,
    stars: 5,
    reviews: 2124,
    badges: ["PREPORUČENO"],
    terms: "18+ • Sigurna platforma • Licencirano • Odgovorno klađenje",
    isPopular: true,
  },

  {
    id: 3,
    name: "Favbet",
    logo: "/favbet.svg",
    bonus: "Do 300€",
    dopBonus: "+ 30€ Oklade Bez Rizika",
    url: "https://www.favbet.hr/",
    rating: 9.4,
    stars: 5,
    reviews: 2987,
    badges: ["VRHUNSKI IZBOR"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Primjenjuju se T&C",
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 4,
    name: "Germania Sport",
    logo: "/germania.png",
    bonus: "Cash Out na Klađenju Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.1,
    stars: 5,
    reviews: 2441,
    badges: ["KVALITETAN IZBOR"],
    terms: "18+ • Sigurna igra • Provjereno • Primjenjuju se uvjeti",
    isPopular: true,
    isTrending: true,
  },
]
