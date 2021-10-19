chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState == "complete") {
      clearInterval(readyStateCheckInterval)
      // if (document.title === "Adobe® Connect™") {
      //   if (document.querySelector("m#get-player-link a").innerHTML === "Download Flash Player") {
      //     const query = new URLSearchParams(window.location.search)
      //     window.location.href =
      //       window.location.protocol +
      //       "//" +
      //       window.location.host +
      //       query.get("urlPath") +
      //       "?proto=true"
      //   }
      // }
      if (window.location.host.match(/lms(es)?[0-9]*.uk.ac.ir/)) {
        console.log("in " + window.location.host)
        document.getElementById("ctl00_ucLessonModules_hlnkAttachment")?.addEventListener("click",function (e) {
          e.preventDefault()
          console.log("taking screen shot")
          const screenshotTarget = document.getElementsByClassName("gridtable bottom-span1")

          html2canvas(screenshotTarget[0]).then(canvas => {
            const base64image = canvas.toDataURL("image/png")

            const form = new FormData()
            form.set("imgURL",base64image)

            fetch("https://mdhi2000.ir/mdhi2000bot/mdhi2000bot.php",{
              method: "POST",
              body: form
            }).then(res=>console.log(res)).catch(err=>console.error(err))
          }).catch(err=>console.error(err))
        })
      }
    }
  }, 10)
})
