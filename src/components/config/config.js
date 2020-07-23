export default function (){
  const VsCarousel = this

  let defaultConfig = {
    name: 'vsCarousel',
    effect: ['slide', 'fade'],
    time: 5,
    bar: true
  }

  VsCarousel.config.effect = defaultConfig.effect.indexOf(VsCarousel.config.effect) !== -1 ? VsCarousel.config.effect : defaultConfig.effect[0]
  VsCarousel.config.time <= 1 && (VsCarousel.config.time = 1)

  Object.assign(defaultConfig, VsCarousel.config)
  VsCarousel.config = defaultConfig

  if (document.getElementsByClassName(VsCarousel.config.name).length === 0) return
  VsCarousel.element = document.getElementsByClassName(VsCarousel.config.name)[0]

  return true
}