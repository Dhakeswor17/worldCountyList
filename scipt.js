const container = document.getElementById('container')
fetch('https://restcountries.com/v2/all')
.then(res=>res.json())
.then(data=>{
    let name = data.map((item)=>{
        let name = item.name
        let flag = item.flag
        let nameCountry = document.createElement('span')
        let flagCountry = document.createElement('img')
        nameCountry.className = 'countriesList'
        flagCountry.className = 'countriesList'
        flagCountry.src = flag
    flagCountry.innerHTML = flag
    nameCountry.innerHTML = name

    container.appendChild(flagCountry)

    container.appendChild(nameCountry)
   
    })
})
let input  = document.getElementById('text')
  input.addEventListener('input', (e)=>{
    console.log(e.target.value)
})
 