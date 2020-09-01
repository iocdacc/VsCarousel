import initDom from './initDom'
import initStyle from './initStyle'
import slideNum from './slideNum'

let init = [slideNum, initDom, initStyle]


export default function (){
  const vsCarousel = this
  const { element, className, config } = vsCarousel
  vsCarousel.slide = {}
  init.forEach(v=>{v.call(this)})

}
