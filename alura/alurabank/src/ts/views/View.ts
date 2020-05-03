declare var $: any;

// <T>: classe tipo genérico
abstract class View<T> {
  /**
   * Propriedades declaradas com o modificador private não podem ser acessadas pelas classes filhas.
   * Podemos resolver esse erro de compilação relaxando um pouco o nível de acesso à propriedade,
   * utilizando o modificador protected em vez de private:
   */
  // protected _element: Element;
  protected _element: any; // com jQuery

  constructor(selector: string) {
    this._element = $(selector);
  }

  update(model: T) {
    this._element.html(this.template(model));
  }

  // Abstract method: só tem assinatura, não tem corpo. Só é utilizando por quem herdar
  abstract template(model: T): string;
}
