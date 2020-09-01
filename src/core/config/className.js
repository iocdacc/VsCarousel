export default function (){
  const VsCarousel = this
  const { config } = VsCarousel
  
  VsCarousel.className = {
    root: config.rootName,
    wrapper: `.${config.rootName}-wrapper`,
    slide: `.${config.rootName}-slide`,
    box: `.${config.rootName}-box`,
    next: `.${config.rootName}-button-next`,
    prev: `.${config.rootName}-button-prev`,
    pagebox: `.${config.rootName}-page`,
    page: `.${config.rootName}-page-button`,
    play: `.${config.rootName}-page-play`,
    playStop: `.${config.rootName}-page-play[data-play="stop"]`,
    playStart: `.${config.rootName}-page-play[data-play="start"]`,
  }

  return true
}