class Deals {
  // Array que tem uma lista do tipo Deal
  private _deals: Deal[] = [];
  // é a mesma coisa que: private _deals: Array<Deal> = [];

  add(deal: Deal) {
    this._deals.push(deal);
  }

  // Deal[]: Tipo de retorno
  toArray(): Deal[] {
    return [].concat(this._deals);
  }
}
