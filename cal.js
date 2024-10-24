const result = document.querySelector('.input-place');
      
      
      let specialChar; 

      const specials = document.querySelectorAll('.orange');
      specials.forEach((character, index) => {
        character.addEventListener('click', () => {
          specialChar = character.innerText;
          //console.log(specialChar);
        });
      });


      const btn = document.querySelectorAll('.btn');
      btn.forEach((singleButton, index) => {
        singleButton.addEventListener('click', () => {
          if (singleButton.innerText === 'c') {
            clearResult(singleButton.innerText);
          } else if (singleButton.innerText === '=') {
            getResult(singleButton.innerText);
          } else if (singleButton.innerText === '%') {
            getPercent(singleButton.innerText);
            //getResult(singleButton.innerText);
          } else if (singleButton.innerText === specialChar) {
            checkValidation();
          }  else {
            getResult(singleButton.innerText);
          }
          console.log(singleButton.innerText);
        });
      });

      
      function getResult(value) {
        if (value === '=') {
          result.value = eval(result.value);
        } else {
            result.value += value;
        }
      }

      function clearResult(value) {
        result.value = '';
        result.placeholder = 'Asme-calculator';

      }

      function getPercent(value) {
        if (result.value === '') {
          checkValidation();
        } else {
          result.value = result.value / 100 ;
        }
      }

      function checkValidation() {
        if(result.value === '') {
          result.placeholder = 'invalid input';
        } else {
          result.value += specialChar;
        }
      }

      console.log(result.placeholder);
