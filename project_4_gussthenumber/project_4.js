let Randomnumber = parseInt(Math.round(Math.random() * 100 + 1));
let Userinput = document.querySelector('#inputguessfield');
let Submitbtn = document.querySelector('#submitbtn');
let Allguessclass = document.querySelector('.Allguessclass');
let PreviousGuessShow = document.querySelector('.PreviousGuessShow');
let Guessramaincounter = document.querySelector('.Guessremaincounter');
let ShowDisplaymessageone = document.querySelector('.Displaymessage');
let Numberguess = 1;
let Arraypush = [];
let Playgame = true; 
let P = document.createElement('p');


if(Playgame)
{
   Submitbtn.addEventListener('click',function(e){

   
        e.preventDefault();
        let Guess = parseInt(Userinput.value);
        Validate(Guess);

   });
}



function Validate(Guess)
{

    if(isNaN(Guess))
    {
        alert('Do not enter Alphabets');
    }
    else if(0 > Guess)
    {
        alert('Do enter minus numebr');
    }
    else if(100 < Guess)
    {
        alert('Do not enter morethan 100 values');
    }
    else
    {
        Arraypush.push(Guess);
        
        if(Numberguess === 3)
        {
            ShowDisplaymessage(`Gameover and Random Number is ${Randomnumber}`);
            Endgame();
        }
        else
        {
            Cleanup(Guess);
            Checkvalidate(Guess);
        }
    }
}



function Checkvalidate(Guess)
{
    if(Guess === Randomnumber)
    {
        ShowDisplaymessage(`You guessed rigth ${Randomnumber}`);
        Endgame();
    }
    else if(Guess < Randomnumber)
    {
        ShowDisplaymessage(`Low Number`);
    }
    else if(Guess > Randomnumber)
    {
        ShowDisplaymessage(`High Number`);
    }
}


function Cleanup(Guess)
{
    Userinput.value = '';
    PreviousGuessShow.innerHTML += ` ${Guess}, `
    Guessramaincounter.innerHTML = `${3 - Numberguess}`;
    Numberguess++;
}


function ShowDisplaymessage(message)
{
    ShowDisplaymessageone.innerHTML = `${message}`;
}



function Endgame()
{
    
    Userinput.value = '';
    Userinput.setAttribute('disabled','');
    Submitbtn.setAttribute('disabled','');
    PreviousGuessShow.innerHTML = '';
    Guessramaincounter.innerHTML = '';
    P.classList.add('button');
    P.innerHTML = `<h2 class="NewgameOne"> Start NewGame </h2>`;    
    Allguessclass.appendChild(P);
    Playgame = false;
    Newgame();
}



function Newgame()
{
    let NewgameOne = document.querySelector('.NewgameOne');

    NewgameOne.addEventListener('click',function(){

        Randomnumber = parseInt(Math.round(Math.random() * 100 + 1));
        Userinput.value = '';
        Userinput.removeAttribute('disabled');
        Submitbtn.removeAttribute('disabled');
        Guessramaincounter = (3 - Numberguess)
        PreviousGuessShow.innerHTML  = '';
        ShowDisplaymessageone.innerHTML = '';
        Numberguess = 1;
        Arraypush = [];
        Playgame = true;

    });
    
}