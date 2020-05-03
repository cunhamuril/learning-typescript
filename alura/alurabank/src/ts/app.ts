const controller = new DealController();

$(".form").submit(controller.add.bind(controller));

// document
//   .querySelector(".form")
//   .addEventListener("submit", controller.add.bind(controller));
