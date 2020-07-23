import $ from 'jquery'
import left from './left'
import right from './right'
import page from './page'

let init = [left, right, page]

export default function (){
  const vsCarousel = this
  vsCarousel.effect = {}
  init.forEach(v=>{v.call(this)})
}
