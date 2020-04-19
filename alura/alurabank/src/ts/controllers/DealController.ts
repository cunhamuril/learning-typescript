class DealController {
  private _inputDate;
  private _inputAmount;
  private _inputValue;

  constructor() {
    this._inputDate = document.querySelector("#data");
    this._inputAmount = document.querySelector("#quantidade");
    this._inputValue = document.querySelector("#valor");
  }

  add(e) {
    e.preventDefault();

    const deal = new Deal(
      this._inputDate.value,
      this._inputAmount.value,
      this._inputValue.value
    );

    console.log(deal);
  }
}
