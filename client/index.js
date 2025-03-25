const list = document.getElementById('list')

axios
  .get(`http://localhost:3000/api/names`)
  .then(res => {
    const names = res.data
    for (let i = 0; i < names.length; i++) {

      const li = document.createElement('li')
      li.textContent = names[i]
      list.appendChild(li)
    }
  }
  )
  .catch(err => console.error(err))


