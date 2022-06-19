const input = document.querySelector("#validation-input");


const inputLength = input.dataset.length;
console.log(inputLength);

input.addEventListener('change', event => {
    const text = event.target.value;
    console.log(event);
 console.log(text.length);
    if (text.length == inputLength) {
      input.classList.add('valid');
      input.classList.remove('invalid');
     
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });
  