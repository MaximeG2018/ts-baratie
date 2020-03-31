
export enum DishType {
   Takoyaki = 1 ,
   Katsudon = 2 ,
   Udon = 4 ,
   Ramen = 8,
   MatchaCookie = 16
};

export enum Dishsize {
   S = 1 ,
   M = 2 ,
   L = 4 ,
   XL = 8 ,
   XXL = 16
};

export enum CommandRegex {
  type = '[a-zA-Z]+',
  size = '[a-zA-Z]+',
  number  = '[0-9]+'
};
