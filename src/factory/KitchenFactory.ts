import Kitchen from '../classe/Kitchen'

export default class KitchenFactory {
  public create(nbCooks: number) {
    return new Kitchen(nbCooks);
  }
}
