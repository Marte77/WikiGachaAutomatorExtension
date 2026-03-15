// Source - https://stackoverflow.com/a/47480429
// Posted by Etienne Martin, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-15, License - CC BY-SA 4.0

const delay = ms => new Promise(res => setTimeout(res, ms));



async function run() {
  while (true) {
    let num_of_packs = 0//parseInt(document.getElementsByClassName("mb-6 text-center relative z-20 min-h-[64px]")[0].innerText.split("/")[0].split(":")[1].trim())
    let spans = document.getElementsByTagName("span")
    for (const span of spans) {
      if (span.innerText.indexOf("DAILY PACKS") > -1) {
        num_of_packs = parseInt(span.innerText.split("DAILY PACKS:")[1].split("/")[0].trim())
        break
      }
    }
    await delay(500)
    if (num_of_packs > 0){ 
      let imgs = document.getElementsByTagName("img")
      for (const img of imgs) {
        if (img.src.indexOf("wikipedia_pack_") > -1) {
          img.click()
          break
        }
      }
      await delay(3000)
      // let button_back = document.getElementsByClassName("mx-auto block w-full max-w-[240px] sm:max-w-[260px] px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black text-sm sm:text-base font-bold rounded-full shadow-lg hover:bg-gray-200 transition-colors whitespace-nowrap")[0]
      // button_back.click()
      let btns = document.getElementsByTagName("button")
      for (const btn of btns) {
        if (btn.innerText === "BACK TO PACKS") {
          btn.click()
          break
        }
      }
      await delay(500)
    } else {
      for(let btn of document.getElementsByTagName("button")) {
        if(btn.innerText === "📺 Watch Ad to Refill") {
          btn.click()
          break
        }
      }
        
      await delay(11000)
      for(let btn of document.getElementsByTagName("button")) {
          if(btn.innerText === "Close Ad") {
            btn.click()
            break
          }
        }
      await delay(100)
    }
  }
}

run()
