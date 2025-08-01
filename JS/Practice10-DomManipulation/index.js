let element = document.querySelector('#fdiv');
console.log(element);
console.log(element.textContent);
console.log(element.innerText);

let fHeading = document.createElement('H1');
console.log(fHeading);
fHeading.textContent = "My name is Akshat";
let bodyTag = document.querySelector('body');
bodyTag.append(fHeading);
bodyTag.insertAdjacentElement('beforebegin', fHeading);
// bodyTag.removeChild(element);