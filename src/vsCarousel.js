import './css/vsCarousel.scss'
import config from './core/config'
import slide from './core/slide'
import effect from './core/effect'
import event from './core/event'
import button from './core/button'
import autoPlay from './core/autoPlay'

let init = [slide, effect, button, event, autoPlay]

console.log(
  '\n%c VsCarousel by%c https://blog.iocdacc.com \n',
  'color: #fff;background-image: linear-gradient(90deg, rgb(47, 172, 178) 0%, rgb(45, 190, 96) 100%);padding:5px 1px;',
  'color: #fff;background-image: linear-gradient(90deg, rgb(45, 190, 96) 0%, rgb(255, 255, 255) 100%);padding:5px 0;width: 200px;display: inline-block;'
); 

export default function VsCarousel(...arg){
  this.config = {}
  if (arg.length === 1) {
    this.config.name = arg[0]
  }else if (arg.length === 2) {
    this.config = arg[1]
    this.config.name = arg[0]
  }

  if (!config.call(this)) return

  init.forEach(v=>{v.call(this)})
}