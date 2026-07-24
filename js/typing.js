const message = `

Dear Samia,

Happy Birthday to the most special person in my life. ❤️

Today is your day, and I hope every moment of it brings you happiness.

You deserve endless smiles, success, peace, and all the beautiful things this world has to offer.

Thank you for every memory, every smile, every laugh and every conversation.

You will always have a special place in my heart.

May Allah bless you with good health, happiness, and a beautiful future.

Happy Birthday Once Again.

❤️
- Imtiaz

`;

const typingText = document.getElementById("typingText");

let index = 0;

function typeLetter(){

    if(index < message.length){

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeLetter,40);

    }

}