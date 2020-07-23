import bar from './bar'
import play from './play'
import page from './page'

let init = [bar, play, page]

export default function (){
  const vsCarousel = this
  
  vsCarousel.button = {}

  init.forEach(v=>{v.call(this)})
}