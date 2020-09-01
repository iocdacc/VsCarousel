export default function (){
  const VsCarousel = this

  let defaultConfig = {
    name: 'vsCarousel',
    rootName: 'vsCarousel',
    effect: ['slide', 'fade'],
    time: 5,
    bar: true,
    pege: 'right',
    autoPlay: true
  }

  VsCarousel.config.effect = defaultConfig.effect.indexOf(VsCarousel.config.effect) !== -1 ? VsCarousel.config.effect : defaultConfig.effect[0]
  VsCarousel.config.time <= 1 && (VsCarousel.config.time = 1)

  Object.assign(defaultConfig, VsCarousel.config)
  VsCarousel.config = defaultConfig

  if (!document.getElementById(VsCarousel.config.name)) return
  VsCarousel.element = document.getElementById(VsCarousel.config.name)

  return true
}