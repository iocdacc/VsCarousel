import '../css/reset.css'
import '../css/index.scss'
import $ from 'jquery'

let carouselName = 'vsCarousel'
function vsCarousel(config = {}){
  this.carousel = []
  let dom = [...document.getElementsByClassName(carouselName)]

  dom.forEach((element, key)=>{

    let item = $(element).find(`.${carouselName}_item`)
    element.insertBefore(item[item.length - 1].cloneNode(true), item[0])
    element.appendChild(item[0].cloneNode(true))
    element.itemArray = []

    $(element).find(`.${carouselName}_item`).each(function (key){
      //$(this).attr('index', key)
      element.itemArray.push(this)
    })

    $(element.itemArray).wrapAll(()=>{
      return `
        <div class='vsCarousel_itembox'>
        </div>
      `
    })

    // element.itemArray.push($(element).find('.item')[$(element).find('.item').length - 1])
    // element.itemArray.unshift($(element).find('.item')[0])

    carouselStyle(element)
    carouselTime(element)
    carouselEvent(element)

    this.carousel[key] = element
  })

  $(window).resize('resize', function(){

    dom.forEach((element)=>{
      carouselStyle(element)
      carouselPause(element)
    })
  })
  
  vsCarousel.prototype.prev = carouselEventFun.prev
  vsCarousel.prototype.next = carouselEventFun.next
  vsCarousel.prototype.page = carouselEventFun.page
}

function carouselStyle(carouselBox) {
  let carouselBoxWidth = carouselBox.offsetWidth

  carouselBox.itemArray.forEach((itemElement, key)=>{
    $(itemElement).css({
      width: carouselBoxWidth,
      //left: (carouselBoxWidth * key) + 'px',
    })
  })
  
  $(carouselBox).find(`.${carouselName}_itembox`).css({
    width: carouselBoxWidth * carouselBox.itemArray.length,
    left: -carouselBoxWidth,
  })

}

function carouselTime(carouselBox, time = 500){
  let seconds = 0
  if (!carouselBox.showTime) {
    carouselBox.showTime = setInterval(() => {
      seconds++
      //console.log(seconds)
      seconds == time && !function (){
        carouselShow(carouselBox)
        seconds = 0
      }()
    }, 1000);
  }else if (carouselBox.showTime) {
    clearInterval(carouselBox.showTime)
    carouselBox.showTime = false
  }
}

function carouselShow(carouselBox, direction = 'left'){
  parseInt(carouselBox.children[0].style.left) == 0 && !function(){
    $(carouselBox).find(`.${carouselName}_itembox`).css({
      left: -(carouselBox.offsetWidth * (carouselBox.itemArray.length -2))
    })
  }()

  parseInt(carouselBox.children[0].style.left) == -(carouselBox.offsetWidth * (carouselBox.itemArray.length -1)) && !function(){
    $(carouselBox).find(`.${carouselName}_itembox`).css({
      left: -carouselBox.offsetWidth
    })
  }()
  
  parseInt(carouselBox.children[0].style.left) > -(carouselBox.offsetWidth * (carouselBox.itemArray.length -1)) && !function(){
    direction == 'left' && !function(){
      $(carouselBox).find(`.${carouselName}_itembox`).css({
        left: parseInt(carouselBox.children[0].style.left) - carouselBox.offsetWidth,
        transition: 'all 2s'
      })
    }()

    direction == 'right' && !function(){
      $(carouselBox).find(`.${carouselName}_itembox`).css({
        left: parseInt(carouselBox.children[0].style.left) + carouselBox.offsetWidth,
        transition: 'all 2s'
      })
    }()
    
    typeof(direction) == 'number' || typeof(direction) == 'string' && !function(){
      direction > carouselBox.itemArray.length && !function(){
        throw new Error('超出最大页码')
        return false
      }()
      $(carouselBox).find(`.${carouselName}_itembox`).css({
        left: -(carouselBox.offsetWidth * direction),
        transition: 'all 2s'
      })
    }()

  }()
}

let carouselEventFun = {
  prev: (carouselBox)=>{
    carouselShow(carouselBox, 'right')
    carouselPause(carouselBox)
  },
  next: (carouselBox)=>{
    carouselShow(carouselBox)
    carouselPause(carouselBox)
  },
  page: function(carouselBox){
    carouselShow(carouselBox, $(this).attr('index'))
    carouselPause(carouselBox)
  },
}

function carouselEvent(carouselBox){
  $(carouselBox).find(`.${carouselName}_button .${carouselName}_button-prev`).length > 0 && $(carouselBox).find(`.${carouselName}_button .${carouselName}_button-prev`).on('click', function (){
    carouselEventFun.prev(carouselBox)
  })
  $(carouselBox).find(`.${carouselName}_button .${carouselName}_button-next`).length > 0 && $(carouselBox).find(`.${carouselName}_button .${carouselName}_button-next`).on('click', function (){
    carouselEventFun.next(carouselBox)
  })

  $(carouselBox).find(`.${carouselName}_page .${carouselName}_page-button`).length > 0 && $(carouselBox).find(`.${carouselName}_page .${carouselName}_page-button`).on('click', function (){
    carouselEventFun.page.apply(this, [carouselBox])
  })

  $(carouselBox).find(`.${carouselName}_itembox`).on('transitionend', function (){
    $(carouselBox).find(`.${carouselName}_itembox`).css({
      transition: 'none'
    })
  })
}

//暂停轮播图自动滚动
function carouselPause(carouselBox){
  carouselBox.showTime && carouselTime(carouselBox)
  //暂停时间
  carouselBox.pauseTime = 5
  carouselBox.pauseSeconds = 0
  !carouselBox.pauseFun && !function(){
    carouselBox.pauseFun = setInterval(() => {
      carouselBox.pauseSeconds++
      carouselBox.pauseSeconds == carouselBox.pauseTime && !function(){
        !carouselBox.showTime && carouselTime(carouselBox)
        carouselBox.pauseSeconds = 0
        clearInterval(carouselBox.pauseFun)
        carouselBox.pauseFun = false
      }()
    }, 1000);
  }()

}

export {
  vsCarousel
}