class DealsView {
  private _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(model: Deals): void {
    this._element.innerHTML = this.template(model);
  }

  template(model: Deals): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>

        <tbody>
          ${model
            .toArray()
            .map(
              (deal) => `
            <tr>
              <td>${deal.date.getDate()}/${
                deal.date.getMonth() + 1
              }/${deal.date.getFullYear()}</td>
              <td>${deal.amount}</td>
              <td>${deal.value}</td>
              <td>${deal.volume}</td>
            <tr>
          `
            )
            .join("")}
        </tbody>

        <tfoot>
        </tfoot>
      </table> 
    `;
  }
}
