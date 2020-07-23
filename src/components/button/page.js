import $ from 'jquery'

let init = [
  function (){
    const vsCarousel = this
    const { element, className, config } = vsCarousel

    vsCarousel.button.pageHover = (pageNum)=>{
      $(element).find(className.page).removeClass('hover')
      $(element).find(className.page + `[data-index=${pageNum}]`).addClass('hover')
    }
    
    vsCarousel.button.removePageHover = ()=>{
      $(element).find(className.page).removeClass('hover')
    }

  },
]

export default function (){
  init.forEach(v=>{v.call(this)})
}