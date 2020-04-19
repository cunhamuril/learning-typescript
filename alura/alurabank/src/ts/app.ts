const controller = new DealController();

document
  .querySelector(".form")
  ?.addEventListener("submit", controller.add.bind(controller));
