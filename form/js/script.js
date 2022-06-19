//  $(document).ready(function() {
//   $("#formOne").submit(function() {
//     $(".person1").append("blah blah");
//     $(".person2").append("blah blah");
//     $(".animal").append("blah blah");
//     $(".exclamation").append("blah blah");
//     $(".verb").append("blah blah");
//     $(".noun").append("blah blah");

//     $("#story").show();
//     event.preventDefault();
//   });
// });
$(document).ready(function() {
    $("#formOne").submit(function(event) {
      const person1Input = $("#person1").val();
      const person2Input = $("#person2").val();
      const animalInput= $("#animal").val();
      const exclamationInput = $("#exclamation").val();
      const verbInput = $("#verb").val();
      const nounInput = $("#noun").val();
  
      $(".person1").text(person1Input);
      $(".person2").text(person2Input);
      $(".animal").text(animalInput);
      $(".exclamation").text(exclamationInput);
      $(".verb").text(verbInput);
      $(".noun").text(nounInput);
  
      $("#story").show();
  
      event.preventDefault();
    });
});