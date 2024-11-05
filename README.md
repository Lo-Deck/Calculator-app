# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme`

### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Calculator-app/blob/main/screenshot/Calculator%20app-mobile.png).
![screenshot desktop-dark](https://github.com/Lo-Deck/Calculator-app/blob/main/screenshot/Calculator%20app-desktop-dark.png).
![screenshot desktop-light](https://github.com/Lo-Deck/Calculator-app/blob/main/screenshot/Calculator%20app-desktop-light.png).
![screenshot desktop-purple](https://github.com/Lo-Deck/Calculator-app/blob/main/screenshot/Calculator%20app-desktop-purple.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Calculator-app).
- Live Site URL: [Website](https://lo-deck.github.io/Calculator-app/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learned how to check the color-mode using `if(window.matchMedia("(prefers-color-scheme: light)").matches)` and set color and background related to the mode.


Do some calculation, I turned a `string` into an `array` `array = input.split(regex).filter( (element) => element !== undefined );`.

Then I pass through the array with 2 loops, the first for multiply and divide and the second for add and substract.

```js

for(let i = 0; i < array.length; i++){ /*MULTIPLY AND DIVIDE  FIRST*/

   if(array[i] === 'x'){
     total = array[i-1] * array[i+1];
     array.splice(i-1, 3, Number(total).toFixed(2));
     i = 0;
   }
   ...

```

### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.
