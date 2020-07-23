import $ from 'jquery'

export default function (){
  let vsCarousel = this
  const { element, className, event } = vsCarousel
  this.event = {}
  this.event.init = ()=>{
    $(element).find(className.next).on('click', vsCarousel.event.next)
    $(element).find(className.prev).on('click', vsCarousel.event.prev)
    $(element).find(className.page).on('click', function (){vsCarousel.event.page(this)})
    $(element).find(className.play).on('click', function (){vsCarousel.event.play(this)})
    $(window).on('resize', vsCarousel.event.resize)
    $(element).on('mouseenter', vsCarousel.event.mouseenter)
  }
  
  vsCarousel.event.next = ()=>{
    vsCarousel.autoPlay.stop()
    vsCarousel.effect.left()
  }
  vsCarousel.event.prev = ()=>{
    vsCarousel.autoPlay.stop()
    vsCarousel.effect.right()
  }
  vsCarousel.event.page = (e)=>{
    if ($(e).attr('class').indexOf('hover') > 0) return
    vsCarousel.autoPlay.stop()
    vsCarousel.effect.page($(e).attr('data-index'))
  }
  vsCarousel.event.play = (e)=>{
    if ($(e).attr('data-play') === 'pause') {
      vsCarousel.autoPlay.stop()
    }else if ($(e).attr('data-play') === 'start') {
      vsCarousel.autoPlay.play()
    }
  }
  vsCarousel.event.resize = ()=>{
    vsCarousel.autoPlay.stop()
    vsCarousel.slide.initStyle()
  }
  vsCarousel.event.mouseenter = ()=>{
    //vsCarousel.autoPlay.stop()
  }

  vsCarousel.event.init()
}