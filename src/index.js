
import { consoleTest } from "./2.js"
import './style.css'


const WORLD_WIDTH = 100
const WORLD_HEIGHT = 30

console.log(consoleTest)

const worldElem = document.querySelector('[data-world]')

setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale)


let lastTime
function update(time){
    if(lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime

    lastTime = time
}
window.requestAnimationFrame(update)


function setPixelToWorldScale(){
    let worldToPixelScale
    if(window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }

    worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}