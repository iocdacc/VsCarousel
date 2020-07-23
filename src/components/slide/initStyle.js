import $ from 'jquery'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'slide') return

    vsCarousel.slide.initStyle = ()=>{
      $(element).find(className.wrapper).css({
        width: element.clientWidth * $(element).find(className.slide).length,
        height: element.clientHeight,
        left: -element.clientWidth * vsCarousel.slide.pageNum(),
        transition: 'all 0s'
      })
      $(element).find(className.slide).css({
        width: element.clientWidth,
        height: element.clientHeight,
      })
      $(element).find(className.box).css({
        height: element.clientHeight,
      })
      $(element).css({
        opacity: 1,
      })
      vsCarousel.slide.left = -element.offsetWidth * vsCarousel.slide.pageNum()
    }

    vsCarousel.slide.initStyle()

  },
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'fade') return

    vsCarousel.slide.initStyle = ()=>{
      $(element).find(className.wrapper).css({
        height: element.clientHeight,
      })
      $(element).find(className.slide).css({
        width: element.clientWidth,
        height: element.clientHeight,
        float: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 0,
        transition: 'all 0s'
      })
      $(element).find(className.slide).eq(0).css({
        opacity: 1
      })
      $(element).find(className.box).css({
        height: element.clientHeight,
      })
      $(element).css({
        opacity: 1,
      })
    }

    vsCarousel.slide.initStyle()

  },
]

export default function (){
  init.forEach(v=>{v.call(this)})
}