class DealController {
  private _inputDate: HTMLInputElement;
  private _inputAmount: HTMLInputElement;
  private _inputValue: HTMLInputElement;

  constructor() {
    // <HTMLInputElement>: Casting explícito: pegando tipo genérico e convertendo para um tipo específico
    this._inputDate = <HTMLInputElement>document.querySelector("#data");
    this._inputAmount = <HTMLInputElement>document.querySelector("#quantidade");
    this._inputValue = <HTMLInputElement>document.querySelector("#valor");
  }

  add(e: Event) {
    e.preventDefault();

    const deal = new Deal(
      // O construtor de Date não entende uma string assim: "01-01-2001", precisa converter para "01,01,2001"
      new Date(this._inputDate.value.replace(/-/g, ",")),
      // + na frente do atributo converte para tipo number
      +this._inputAmount.value,
      +this._inputValue.value
    );

    console.log(deal);
  }
}
