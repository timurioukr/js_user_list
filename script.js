var url = 'https://randomuser.me/api/?page=3&results=10&seed=abc&inc=gender,name,nat,picture,location'

fetch(url)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        //console.log(data)
        render(data)
    })
function render (data){
    var root = document.querySelector ('#root')
    data.results.map(function(elem, iter){
        var div = document.createElement('div')
        var h2 = document.createElement('h2')
        var p = document.createElement('p')
        var img = document.createElement('img')
        var hidden = document.createElement("div")
        
        hidden.className = "hidden"
        h2.addEventListener('click', function(){
            var active = document.querySelector('.active')
            if (active && active !==this.nextSibling) {   
                active.classList.toggle ("active")
            }
            this.nextSibling.classList.toggle ("active")
        })

        img.src = elem.picture.medium;
        h2.innerHTML = iter + 1 + "." + " " + elem.name.title + " " + elem.name.first + " " + elem.name.last;
        p.innerHTML = elem.location.city + " " + elem.location.country + " " + elem.location.postcode;

        hidden.append(p);
        hidden.append(img);
        
        div.append(h2)
        div.append(hidden)
        root.append(div)
    })
}   