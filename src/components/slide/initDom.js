import $ from 'jquery'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'slide') return

    vsCarousel.slide.initDom = ()=>{
      let first = $(element).find(className.slide).eq(0)
      let last = $(element).find(className.slide).eq($(element).find(className.slide).length - 1)
      $(element).find(className.wrapper).append(first.clone(true))
      $(element).find(className.wrapper).prepend(last.clone(true))
    
      $(element).find(className.slide).each(function (){
        $(this).children().wrapAll(()=>{
          return `
            <div class='vsCarousel-box'>
            </div>
          `
        })
      })
    }

    vsCarousel.slide.initDom()

  },
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'fade') return

    vsCarousel.slide.initDom = ()=>{
      $(element).find(className.slide).each(function (){
        $(this).children().wrapAll(()=>{
          return `
            <div class='vsCarousel-box'>
            </div>
          `
        })
      })
    }

    vsCarousel.slide.initDom()

  },
]

export default function (){
  init.forEach(v=>{v.call(this)})
}