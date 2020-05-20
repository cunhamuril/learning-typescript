class DealController {
  private _inputDate: JQuery;
  private _inputAmount: JQuery;
  private _inputValue: JQuery;
  private _deals = new Deals();
  private _dealsView = new Views.DealsView("#dealsView");
  private _messageView = new Views.MessageView("#messageView");

  constructor() {
    // <HTMLInputElement>: Casting explícito: pegando tipo genérico e convertendo para um tipo específico
    this._inputDate = $("#data");
    this._inputAmount = $("#quantidade");
    this._inputValue = $("#valor");
    this._dealsView.update(this._deals);
  }

  add(e: Event) {
    e.preventDefault();

    const deal = new Deal(
      // O construtor de Date não entende uma string assim: "01-01-2001", precisa converter para "01,01,2001"
      new Date(this._inputDate.val().replace(/-/g, ",")),
      // + na frente do atributo converte para tipo number
      +this._inputAmount.val(),
      +this._inputValue.val()
    );

    this._deals.add(deal);

    this._dealsView.update(this._deals);

    this._messageView.update("Negociação adicionada com sucesso!");
  }
}
