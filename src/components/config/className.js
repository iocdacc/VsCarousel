export default function (){
  const VsCarousel = this
  const { config } = VsCarousel
  
  VsCarousel.className = {
    root: config.name,
    wrapper: `.${config.name}-wrapper`,
    slide: `.${config.name}-slide`,
    box: `.${config.name}-box`,
    next: `.${config.name}-button-next`,
    prev: `.${config.name}-button-prev`,
    page: `.${config.name}-page-button`,
    play: `.${config.name}-page-play`,
    playStop: `.${config.name}-page-play[data-play="stop"]`,
    playStart: `.${config.name}-page-play[data-play="start"]`,
  }

  return true
}