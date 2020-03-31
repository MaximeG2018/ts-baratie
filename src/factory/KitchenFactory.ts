import Kitchen from '../classe/Kitchen'

export default class KitchenFactory {

  private dish: any[];

  constructor(dish: any[]) {
    this.dish = dish;
  }

  introduce() {
    console.log(`Dish(s) => ${this.dish}`);
  }

  public createKitchen(dish: any[]) {
    return new Kitchen(dish);
  }
}
