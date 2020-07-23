import $ from 'jquery'
import { VsBar } from 'vsbar/src/index'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if (!config.bar) return

    let bar = ()=>{
      $(element).find(className.page).each(function (){
        let canvas = document.createElement('canvas')
        canvas.className = 'vsBar'
        this.appendChild(canvas)
        this.pageBar = new VsBar({
          cvslineWidth: 4,
          cvsDom: canvas,
          millisecond: config.time * 1000,
          color: '#fff'
        })
      })
    }

    vsCarousel.button.barPlayer = (index)=>{
      $(element).find(className.page).each(function (){
        cancelAnimationFrame(this.pageBar.stepID)
        this.pageBar.ctx = this.pageBar.config.cvsDom.getContext('2d')
        this.pageBar.ctx.clearRect(0, 0, this.pageBar.config.cvsDom.clientWidth, this.pageBar.config.cvsDom.clientHeight);
      })
      
      $(element).find(className.page + `[data-index=${index}]`)[0] && $(element).find(className.page + `[data-index=${index}]`)[0].pageBar.reset({
        barBeforeEnd: 0
      })
    }

    vsCarousel.button.barStop = ()=>{
      $(element).find(className.page).each(function (){
        cancelAnimationFrame(this.pageBar.stepID)
        this.pageBar.ctx = this.pageBar.config.cvsDom.getContext('2d')
        this.pageBar.ctx.clearRect(0, 0, this.pageBar.config.cvsDom.clientWidth, this.pageBar.config.cvsDom.clientHeight);
      })
    }

    bar()

  },
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if (config.bar) return

    vsCarousel.button.barPlayer = ()=>{}
    vsCarousel.button.barStop = ()=>{}
  }
]

export default function (){
  init.forEach(v=>{v.call(this)})
}