import $ from 'jquery'
import { VsBar } from 'vsbar/src/index'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    vsCarousel.button.playStart = ()=>{
      $(element).find(className.play).attr('data-play', 'pause')
    }

    vsCarousel.button.playPause = ()=>{
      $(element).find(className.play).attr('data-play', 'start')
    }

  },
]

export default function (){
  init.forEach(v=>{v.call(this)})
}