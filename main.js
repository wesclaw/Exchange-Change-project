///if 5$ is clicked...would you like 5 x 1?
///if 10$ is clicked...would you like 10 ones or 2 fives,
///if 20$ is clicked..would you like 20 ones, 2 tens, or 4 fives
///if 50$ is clicked..would you like 5 tens, 50 ones, or 10 fives
///if 100$ is clicked..would you like 5 twenties, 2 fifties, 100 ones, 20 fives or 20 fives?

//machine should shake a litle bit when money and before money comes out
///cant enter money when money is in process. alert(your money is already in process)

const screen = document.querySelector('.screen');
const container = document.querySelector('.container');

function getBodyBtnClick(e) {
  const getTarget = e.target.tagName;
  const getText = e.target.textContent;
  if (getTarget === 'BUTTON') {
    changeBills(getText);
  }
}

function changeBills(getText) {
  if (getText === '1$') {
    screen.innerHTML = `
   <p>Exchange to:</p>
   <button>100 pennies</button>
   <button>4 quarters</button>
   <button>10 dimes</button>
   <button>20 nickels</button>
    `;
  } else if (getText === '5$') {
    screen.innerHTML = ` 
    <p>Exchange To:</p>
   <button>5 ones</button> `;
  } else if (getText === '10$') {
    screen.innerHTML = ` 
    <p>Exchange To:</p>
   <button>10 ones</button> 
   <button>2 fives</button> 
    `;
  } else if (getText === '20$') {
    screen.innerHTML = ` 
    <p>Exchange To:</p>
   <button>20 ones</button> 
   <button>2 tens</button> 
   <button>2 fives</button> 
    `;
  } else if (getText === '50$') {
    screen.innerHTML = ` 
    <p>Exchange To:</p>
   <button>50 ones</button> 
   <button>5 tens</button> 
   <button>10 fives</button> 
    `;
  } else if (getText === '100$') {
    screen.innerHTML = ` 
    <p>Exchange To:</p>
   <button>100 ones</button> 
   <button>2 fifties</button> 
   <button>5 twenties</button> 
   <button>10 tens</button> 
   <button>20 fives</button> 
    `;
  }
}

function getScreenClick(e) {
  const getScreenTag = e.target.tagName;
  const getText = e.target.textContent;
  if (getScreenTag === 'BUTTON') {
    giveCoins(getText);
  }
}

function giveCoins(getText) {
  screen.innerHTML = `<h1>Please wait for your change...</h1>`;
  if (getText === '100 pennies') {
    ////shoot out 100 pennies
  } else if (getText === '4 quarters') {
    ///shoot out 4 quarters
  } else if (getText === '10 dimes') {
    ///shoot out 4 dimes
  } else if (getText === '20 nickels') {
    ////shoot out 20 nickels
  }
}

screen.addEventListener('click', getScreenClick);
container.addEventListener('click', getBodyBtnClick);
