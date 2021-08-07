

import '../scss/style.scss';


// [value.name,value.owner.login,value.stargazers_count]
const input = document.getElementById('mySearch');
const body = document.querySelector('body');
let wrap = document.createElement('div');
wrap.className = 'autocomplite-wrap';
input.parentNode.insertBefore(wrap, input);
wrap.appendChild(input);

let list = document.querySelector('.autocomplite-list');
wrap.appendChild(list)

let rep;

function clear() {
    list.innerHTML = ''
}

function removeItem() {
    addedblock.innerHTML = ''
}

const AutoComplite = function (items) {   
    items.forEach(({name,owner,stargazers_count}) => {
        let item = document.createElement('div');

        item.className = 'autocomplite-item';
        item.innerText = name;
        item.addEventListener('click', (e) => {
            let repItem = document.createElement('div');
            let images = document.createElement('div');

            images.className = 'images-block';
            repItem.className = 'added-block';

            repItem.appendChild(images);

            let itemInner = document.createElement('div');

            let crossImgLeftToRight = document.createElement('IMG');
            let crossImgRightToLeft = document.createElement('IMG');
            
            crossImgLeftToRight.src = "../../img/Vector_7.png";
            crossImgRightToLeft.src = "../../img/Vector_8.png";
            crossImgLeftToRight.className = 'crossRight';
            crossImgRightToLeft.className = 'crossLeft';
            images.appendChild(crossImgLeftToRight);
            images.appendChild(crossImgRightToLeft);

            images.addEventListener('click', (e) => {
                repItem.remove()
            })

            itemInner.className = 'inner-block';
            repItem.appendChild(itemInner);

            let textBlock = `Name: ${name}` + '<br \>' + `Owner: ${owner.login}` + '<br \>' + `Stars: ${stargazers_count}`
            itemInner.innerHTML +=  textBlock;
            body.appendChild(repItem);
            input.value = '';
            list.setAttribute('style','display:none')
            clear()
        })
        list.appendChild(item);
    })
}

const debounce = (fn, debounceTime) => {
    let deb;
    return function ()  {
        clearTimeout (deb);
        deb = setTimeout(() => fn.apply(this, arguments), debounceTime)
    }
};

const getResponse = debounce(getUser, 200)

// const AutoComplite = function (obj) {
//     
// } 

async function getUser(event) {
    clear()
    list.setAttribute('style','display:block')
    let value = event.target.value;
    
    if (value.trim() === '') {
        return
    }

    const response = await fetch(`https://api.github.com/search/repositories?q=${value}in:name&per_page=5&sort=stars`)
    rep = (await response.json()).items
    AutoComplite(rep)
}



input.addEventListener('input', getResponse)




