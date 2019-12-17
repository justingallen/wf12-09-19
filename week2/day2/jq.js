console.log($)

$(document).ready(function() {
  var title = $("#title")
  console.log(title)

  $(".btn").click(function(event) {
    console.log("Clicked!")
    console.log(event)

    var title = $("#title")

    if (title.css("display") === "none") {
      title.css("display", "block")
    } else {
      title.css("display", "none")
    }
  })
})
