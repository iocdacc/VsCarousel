import config from './config'
import className from './className'

let init = [config, className]

export default function (){
  return init.every(v=>{return v.call(this)})
}