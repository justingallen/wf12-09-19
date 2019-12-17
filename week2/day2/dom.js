document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  console.log("Loaded!")
  var title = document.getElementById("title")
  console.log(title)

  setTimeout(() => {
    title.style.backgroundColor = "pink"
  }, 2000)

  var btn = document.getElementsByClassName("btn")[0]
  console.log(btn)

  // function doStuff() {
  //   console.log("clicked")
  //   // send event to some other system or db
  // }
  // btn.addEventListener("click", doStuff)

  btn.addEventListener("click", function() {
    console.log("clicked")
    // send event to some other system or db

    if (title.style.display === "none") {
      title.style.display = "block"
    } else {
      title.style.display = "none"
    }
  })

  function doHomework(subject, finishedCallBack) {
    console.log(`Working on ${subject} homework...`)
    finishedCallBack(subject)
  }

  function homeworkFinished(subject) {
    console.log(`Finished ${subject} homework`)
  }

  doHomework("Coding", homeworkFinished)
})
