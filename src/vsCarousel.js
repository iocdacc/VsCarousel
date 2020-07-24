import './css/vsCarousel.scss'
import config from './components/config'
import slide from './components/slide'
import effect from './components/effect'
import event from './components/event'
import button from './components/button'
import autoPlay from './components/autoPlay'

let init = [slide, effect, button, event, autoPlay]

export default function VsCarousel(...arg){
  this.config = {}
  if (arg.length === 1) {
    typeof(arg[0]) === 'string' && (this.config.name = arg[0])
  }else if (arg.length === 2) {
    typeof(arg[1]) === 'object' && (this.config = arg[1])
    typeof(arg[0]) === 'string' && (this.config.name = arg[0])
  }

  if (!config.call(this)) return

  init.forEach(v=>{v.call(this)})
}

console.log('vsCarousel by https://blog.iocdacc.com')