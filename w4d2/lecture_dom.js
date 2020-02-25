window.addEventListener("DOMContentLoaded", event => {
  console.log(document.getElementsByTagName("h2")[0].innerText);

  // document.getElementsByTagName("h2")[0].innerText
  // document.getElementsByTagName("h2")[0].innerText = "Bob"
});

$(document).ready(event => {
  console.log("ready !");

  console.log($("#secret").text());
  $("#secret").text("Some text");

  $("#secret").addClass("SomeClass");

  $("body").on("click", () => $("body").toggleClass("night"));
});

const pollo = "Chicken in spanish";

// $()  <- selector
// .afterthedot <- action
