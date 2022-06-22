const buttonEl = document.querySelector('.change-color');
let spanColorEl = document.querySelector(".color");


        const changeBodyColorEl = color => document.body.style.backgroundColor = color;
        const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
        const changeButtonColorRandom = () => {
            const randomColor = getRandomHexColor();
            changeBodyColorEl(randomColor);
             spanColorEl.innerHTML = randomColor;
          console.log(randomColor);
        };

        buttonEl.addEventListener('click', changeButtonColorRandom);
      




