const button = document.getElementById('janela')
const popup = document.querySelector('.popup-wrapper')


button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classNameOfClickedElement = event.target.classList[0]
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldClosepopup = classNames.some(classNames => classNames === classNameOfClickedElement)

if (shouldClosepopup) {
  popup.style.display ='none'
}
})