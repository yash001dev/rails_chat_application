//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require semantic-ui
//= require_tree .

$(document).on("turbolinks:load", function () {
  console.log("button is clicked");
  $(".ui.dropdown").dropdown();
});
