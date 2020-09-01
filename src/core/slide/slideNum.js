import $ from 'jquery'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    vsCarousel.slide.NowNum = 1

    vsCarousel.slide.slideNumSet = (NowNum)=>{
      vsCarousel.slide.NowNum = NowNum
    }

    vsCarousel.slide.slideNumAdd = ()=>{
      vsCarousel.slide.NowNum++
    }

    vsCarousel.slide.slideNumSub = ()=>{
      vsCarousel.slide.NowNum--
    }

    vsCarousel.slide.leftEnd = ()=>{
      if (vsCarousel.slide.NowNum >= ($(element).find(className.slide).length - 1)) {
        vsCarousel.slide.NowNum = 1
        return true
      }else{
        return false
      }
    }

    vsCarousel.slide.rightEnd = ()=>{
      if (vsCarousel.slide.NowNum <= 0) {
        vsCarousel.slide.NowNum = $(element).find(className.slide).length - 2
        return true
      }else{
        return false
      }
    }

    vsCarousel.slide.pageNum = ()=>{
      if (vsCarousel.slide.NowNum + 1 == $(element).find(className.slide).length){
        return 1
      }else if (vsCarousel.slide.NowNum == 0){
        return 3
      }else{
        return vsCarousel.slide.NowNum
      }
    }
  },
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    if(config.effect !== 'fade') return

    vsCarousel.slide.leftEnd = ()=>{
      if (vsCarousel.slide.NowNum >= $(element).find(className.slide).length) {
        vsCarousel.slide.NowNum = 0
        return true
      }else{
        return false
      }
    }

    vsCarousel.slide.rightEnd = ()=>{
      if (vsCarousel.slide.NowNum <= 1) {
        vsCarousel.slide.NowNum = $(element).find(className.slide).length + 1
        return true
      }else{
        return false
      }
    }

    vsCarousel.slide.pageNum = ()=>{
      return vsCarousel.slide.NowNum
    }
  }
]

export default function (){
  init.forEach(v=>{v.call(this)})
}