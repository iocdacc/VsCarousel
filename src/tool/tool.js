let timer = {
  cycle(callback, time){
    let seconds = 0
    return setInterval(() => {
      seconds++
      // console.log(seconds)
      seconds == time && !function (){
        callback()
        seconds = 0
      }()
    }, 1000);
  }
}

export {
  timer
}