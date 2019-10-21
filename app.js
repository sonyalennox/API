const url = 'https://swapi.co/api/planets/'
const button = document.querySelector('button');

// IO

button.addEventListener('click', event => {
  button.innerHTML = `Click`;
})

function writeToPage(data) {
  
  const el = document.createElement('div')
  el.id = 'display'
  document.body.appendChild(el)
    
  const name = document.createElement('h1')
  name.id = 'name' 
  name.textContent = data.name
  el.appendChild(name)

  const climate = document.createElement('h2')
  climate.id = 'climate'
  climate.textContent = data.climate
  el.appendChild(climate)

  const orbitalPeriod = document.createElement('h2')
  orbitalPeriod.id = 'orbitalPeriod'
  orbitalPeriod.textContent = data.orbitalPeriod
  el.appendChild(orbitalPeriod)

  const rotationPeriod = document.createElement('h2')
  rotationPeriod.id = 'rotationPeriod'
  rotationPeriod.textContent = data.roatationPeriod
  el.appendChild(rotationPeriod)

  const terrain = document.createElement('h2')
  terrain.id = 'terrain'
  terrain.textContent = data.terrain
  el.appendChild(terrain)
}

function updateDisplay (text) {
  const el = document.getElementsByClassName('#display')  
  el.textContent = text}

  


// MAIN
function main() {
 // writeToPage()

  fetch(url).then(x => {
    return x.json()
  })

  .then(x => {
    if (x.detail === 'Not found') {
      throw new Error('not found')
    }

    x.results.forEach(writeToPage)

    

  })

  .catch(err => {
    console.log(err || 'server not available')
  })

}