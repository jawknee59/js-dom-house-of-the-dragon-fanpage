const bioBtn = document.querySelector('.bio')
const statusBtn = document.querySelector('.status')
const p = document.querySelector('p')

const showBio = () => {
    p.style.display = 'block'
    p.style.backgroundColor = 'white'
    p.style.color = 'black'
}

bioBtn.addEventListener('click', (e) => {
    // console.log('btn clicked')
    showBio()
})