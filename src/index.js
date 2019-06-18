'use strict'

let root = document.getElementById('root');
let ele = document.createElement('ul');
root.appendChild(ele);

for (let i = 0; i < 10; i++) {
    let content = document.createTextNode('Row ' + i);
    let listItem = document.createElement('li');
    listItem.appendChild(content);
    ele.appendChild(listItem);
}

for (let i = 0; i < 10; i++) {
    let content = document.createTextNode('New Row ' + i);
    let listItem = document.createElement('li');
    listItem.appendChild(content);
    ele.appendChild(listItem);
}

let testPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
});

testPromise.then(value => {
    let sentence = document.createElement('div');
    sentence.appendChild(document.createTextNode(`Promise solved: ${value}`));
    root.appendChild(sentence);
})


