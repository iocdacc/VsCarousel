
let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    vsCarousel.autoPlay = {}
    vsCarousel.autoPlay.pauseValve = false

    vsCarousel.button.playPause()
    vsCarousel.button.pageHover(vsCarousel.slide.pageNum())

    vsCarousel.autoPlay.play = ()=>{
      vsCarousel.button.playStart()

      vsCarousel.button.barPlayer(vsCarousel.slide.pageNum())

      vsCarousel.button.pageHover(vsCarousel.slide.pageNum())

      if (vsCarousel.autoPlay.intervalId) {
        clearInterval(vsCarousel.autoPlay.intervalId)
      }
      vsCarousel.autoPlay.intervalId = setInterval(() => {
        vsCarousel.effect.left()
        vsCarousel.button.barPlayer(vsCarousel.slide.pageNum())
      }, 1000 * config.time);
    }

    vsCarousel.autoPlay.pause = ()=>{
      if (!vsCarousel.autoPlay.pauseValve) {
        vsCarousel.button.barStop()
        vsCarousel.autoPlay.pauseValve = true
        clearInterval(vsCarousel.autoPlay.intervalId)
        setTimeout(() => {
          vsCarousel.autoPlay.pauseValve = false
          vsCarousel.autoPlay.play()
        }, 1000 * config.time);
      }
    }

    vsCarousel.autoPlay.stop = ()=>{
      vsCarousel.button.playPause()
      vsCarousel.button.barStop()
      clearInterval(vsCarousel.autoPlay.intervalId)
    }

    config.autoPlay && vsCarousel.autoPlay.play()

  },
]

export default function (){
  init.forEach(v=>{v.call(this)})
}