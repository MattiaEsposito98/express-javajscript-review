const list = document.getElementById('list')
let names = []

axios
  .get(`http://localhost:3000/api/names`)
  .then(res => {
    names = res.data
    for (let i = 0; i < names.length; i++) {

      const li = document.createElement('li')
      li.textContent = names[i]
      list.appendChild(li)
    }
  }
  )
  .catch(err => console.error(err))


const button = document.createElement('button')
button.textContent = 'Sorteggia'
list.append(button)

button.addEventListener('click', () => random(names, list))

function random(array, nodo) {
  let element = array[Math.floor(Math.random() * array.length)]
  console.log(element)
  const p = document.createElement('p')
  p.textContent = element
  return nodo.appendChild(p)
}


