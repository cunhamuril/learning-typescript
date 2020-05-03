const controller = new DealController();

// usando jQuery!
$(".form").submit(controller.add.bind(controller));

// document
//   .querySelector(".form")
//   .addEventListener("submit", controller.add.bind(controller));
