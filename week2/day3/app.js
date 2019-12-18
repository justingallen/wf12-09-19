$(document).ready(function() {
  console.log("Page loaded")
  // Add listener to tr
  $("#contact-table").on("click", "tr", function() {
    alert("row clicked")
  })

  $("#contact-form").submit(function(e) {
    // alert("form submitted")
    // console.log($("#contact-form"))
    console.log($("#contact-form").serializeArray())
    // console.log($("#contact-table").serializeArray())

    // What is the data in the form?
    var fullName = $("#full-name")
    var email = $("#email")
    console.log("fullName: ", fullName.val())
    console.log("email: ", email.val())

    // Add the values to the table
    var tableRow = `<tr>
      <td>${fullName.val()}</td>
      <td>${email.val()}</td>
    </tr>`

    console.log(tableRow)

    $("#contact-table tbody").append(tableRow)

    // Clear the input
    $("#full-name").val("")
    $("#email").val("")

    // e.preventDefault()
    return false
  })
})
