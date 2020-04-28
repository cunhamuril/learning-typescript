// <T>: classe tipo genérico
class View<T> {
  /**
   * Propriedades declaradas com o modificador private não podem ser acessadas pelas classes filhas.
   * Podemos resolver esse erro de compilação relaxando um pouco o nível de acesso à propriedade,
   * utilizando o modificador protected em vez de private:
   */
  protected _element: Element;

  constructor(selector: string) {
    this._element = document.querySelector(selector);
  }

  update(model: T) {
    this._element.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw new Error("Você deve implementar o método template");
  }
}
