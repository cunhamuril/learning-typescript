class Deal {
  // Attrs
  constructor(
    private _date: Date,
    private _amount: number,
    private _value: number
  ) {}

  // Getters
  get date() {
    return this._date;
  }

  get amount() {
    return this._amount;
  }

  get value() {
    return this._value;
  }

  get volume() {
    return this._amount * this._value;
  }
}
