import $ from 'jquery'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'slide') return

    vsCarousel.effect.page = (pageNum)=>{
      vsCarousel.button.pageHover(pageNum)
      vsCarousel.slide.slideNumSet(pageNum)
      vsCarousel.slide.left = -element.offsetWidth * pageNum
      $(element).find(className.wrapper).css({
        left: -(element.clientWidth * pageNum),
        transition: 'all .5s'
      })
    }
  },
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'fade') return

    vsCarousel.effect.page = (pageNum)=>{
      vsCarousel.button.pageHover(pageNum)
      vsCarousel.slide.slideNumSet(pageNum)
      $(element).find(className.slide).css({
        transition: 'all .5s',
        opacity: 0
      })
      $(element).find(className.slide).eq(pageNum-1).css({
        transition: 'all .5s',
        opacity: 1,
      })
    }

  },
]

export default function (){
  init.forEach(v=>{v.call(this)})
}