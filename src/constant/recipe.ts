interface Recipe {
  name: string;
  bakedin: number;
  ingredients: string[];
}

export const recipes: Recipe[] = [
  {
    name: 'Takoyaki',
    bakedin: 1,
    ingredients: ['octopus', 'soja sauce']
  },
  {
    name: 'Katsudon',
    bakedin: 2,
    ingredients: ['rice', 'pork', 'eggs']
  },
  {
    name: 'Udon',
    bakedin: 2,
    ingredients: ['noodle', 'pork', 'eggs']
  },
  {
    name: 'Ramen',
    bakedin: 2,
    ingredients: ['noodle', 'chicken', 'eggs']
  },
  {
    name: 'MatchaCookie',
    bakedin: 4,
    ingredients: ['dough', 'matcha', 'chocolate', 'chief love']
  }

]
