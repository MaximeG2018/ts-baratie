import KitchenFactory from '../factory/KitchenFactory';

export default class KitchenManager {

  private static instance: KitchenManager;

  private kitchensInstance: any[] = [];

  public static getInstance(): KitchenManager {
    if (!KitchenManager.instance) {
      KitchenManager.instance = new KitchenManager();
    }
    return KitchenManager.instance;
  }

  public createKitchen(kitchenFactory: KitchenFactory, nbCooks: number): void {
    const kitchen = kitchenFactory.create(nbCooks);
    this.kitchensInstance.push(kitchen);
  }
}
