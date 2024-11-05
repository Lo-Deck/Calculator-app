const btnKey = document.querySelectorAll('.button-key');
const result = document.querySelector('.result');
const theme = document.querySelector('.theme-button');


let total = 0;
let input = '';
let array = [];
const regex = /(\+)|(-)|(\/)|(x)/g;

let positionThemeButton = 1;
let upOrDown = 0;


/*LIGHT-THEME*/

if(window.matchMedia("(prefers-color-scheme: light)").matches){

    console.log('light');

    positionThemeButton = 2;

    document.querySelector('.cursor').style.transform = 'translateX(1.4rem)';

    document.querySelector('body').style.background = '#E6E6E6';
    result.style.background = '#EEEEEE';
    result.style.color = '#36362C';
    document.querySelector('.list').style.background = '#D2CDCD';

    document.querySelector('.header-container').style.color = '#36362C';
    
    document.querySelectorAll('.grey-key').forEach( (item) => {

        item.style.background = '#378187';
        item.style.color = '#fff';

    } );

    document.querySelector('.red-key .button-key').style.background = '#C85402';
    document.querySelector('.red-key .button-key').style.color = '#fff';
    document.querySelector('.red-key .button-key').style.borderBottom = '0.25rem solid #982417';

    document.querySelectorAll('.white-key').forEach( (item) => {

        item.style.background = '#E5E4E1';
        item.style.color = '#36362C';

    } );

}


/*CALCULATION*/

btnKey.forEach( (item) => {

    item.addEventListener('click', () => {

        console.log(item.innerText);

        if(item.innerText === '='){

            array = input.split(regex).filter( (element) => element !== undefined );

            for(let i = 0; i < array.length; i++){ /*MULTIPLY AND DIVIDE  FIRST*/

                console.log('i : ' + array[i]);

                if(array[i] === 'x'){
                    total = array[i-1] * array[i+1];
                    array.splice(i-1, 3, Number(total).toFixed(2));
                    i = 0;
                }

                if(array[i] === '/'){
                    total = array[i-1] / array[i+1];
                    array.splice(i-1, 3, Number(total).toFixed(2));
                    i = 0;
                }

            } 

            for(let i = 0; i < array.length; i++){  /*ADD AND SUBSTRACT  THEN*/

                if(array[i] === '+'){
                    total = Number(array[i-1]) + Number(array[i+1]);
                    array.splice(i-1, 3, Number(total).toFixed(2));
                }

                if(array[i] === '-'){
                    total = Number(array[i-1]) - Number(array[i+1]);
                    array.splice(i-1, 3, Number(total).toFixed(2));
                }

            }

            input = '';
            array = [];
            result.textContent = total;

        } 

        else if(item.innerText === 'RESET'){
            input = '';
            array = [];
            total = 0;
            result.textContent = 0;
        }

        else if(item.innerText === 'DEL'){
            array = input.split('');
            array.pop();
            input = array.join('');
            result.textContent = input !== '' ? input : '0';
        }
        
        else{
            input += item.innerText;
            result.textContent = input;
            console.log(`input : ${input}`);            
        }    
     
    });

});


/*THEME-COLOR*/

theme.addEventListener('click', () => {

    if(upOrDown === 0){
        positionThemeButton++;     
    }
    else if(upOrDown === 3){
        positionThemeButton--;
    }

    switch(positionThemeButton){

        case 1:

            document.querySelector('.cursor').style.transform = 'translateX(0)';
            upOrDown = 0;

            document.querySelector('body').style.background = '#3A4663';
            result.style.background = '#181F33';
            result.style.color = '#FFF';
            document.querySelector('.list').style.background = '#242D44';
            document.querySelector('.header-container').style.color = '#FFF';
            
            document.querySelectorAll('.grey-key').forEach( (item) => {

                item.style.background = '#647198';
                item.style.color = '#fff';

            } );

            document.querySelector('.red-key .button-key').style.background = '#D03F2F';
            document.querySelector('.red-key .button-key').style.color = '#fff';
            document.querySelector('.red-key .button-key').style.borderBottom = '0.25rem solid #982417';

            document.querySelectorAll('.white-key').forEach( (item) => {

                item.style.background = '#EAE3DC';
                item.style.color = '#434A59';

            } );


            break;

        case 2:

            document.querySelector('.cursor').style.transform = 'translateX(1.4rem)';

            document.querySelector('body').style.background = '#E6E6E6';
            result.style.background = '#EEEEEE';
            result.style.color = '#36362C';
            document.querySelector('.list').style.background = '#D2CDCD';

            document.querySelector('.header-container').style.color = '#36362C';
            
            document.querySelectorAll('.grey-key').forEach( (item) => {

                item.style.background = '#378187';
                item.style.color = '#fff';

            } );

            document.querySelector('.red-key .button-key').style.background = '#C85402';
            document.querySelector('.red-key .button-key').style.color = '#fff';
            document.querySelector('.red-key .button-key').style.borderBottom = '0.25rem solid #982417';

            document.querySelectorAll('.white-key').forEach( (item) => {

                item.style.background = '#E5E4E1';
                item.style.color = '#36362C';

            } );

            break;

        case 3:

            document.querySelector('.cursor').style.transform = 'translateX(2.6rem)';
            upOrDown = 3;

            document.querySelector('body').style.background = '#17062A';

            result.style.background = '#1E0936';
            result.style.color = '#FFE53D';

            document.querySelector('.list').style.background = '#331C4D';
            document.querySelector('.header-container').style.color = '#FFE53D';
            
            document.querySelectorAll('.grey-key').forEach( (item) => {

                item.style.background = '#56077C';
                item.style.color = '#fff';

            } );

            document.querySelector('.red-key .button-key').style.background = '#00DED0';
            document.querySelector('.red-key .button-key').style.color = '#1A2327';
            document.querySelector('.red-key .button-key').style.borderBottom = '0.25rem solid rgb(137, 255, 249)';

            document.querySelectorAll('.white-key').forEach( (item) => {

                item.style.background = '#1E0936';
                item.style.color = '#FFE53D';

            } );

            break;

    }

});

