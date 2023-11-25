const screen = document.querySelector('.screen');
const container = document.querySelector('.container');

const wrapper = document.querySelector('.wrapper')


// make this a for loop inside the if statement. create 100 pennies set timout for each coin so they go out seperatly
function createCoin() {
  const coin = document.createElement('img')
  coin.src = 'images/penny.png'
  coin.classList.add('coin')
  wrapper.append(coin)
}


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
  } else if (getText === '5 ones') {
    ///shoot out 5 bills
  } else if (getText === '10 ones') {
    ///shoot out 10 one bills
  } else if (getText === '2 fives') { 
    ///shoot out 2 fives
  } else if (getText === '20 ones') {
    ///shoot out 2 fives
  } else if (getText === '2 tens') {
    ///shoot out 2 tens
  } else if (getText === '4 fives') {
    ///shoot out 4 fives
  } else if (getText === '50 ones') {
    ///shoot out 50 ones
  } else if (getText === '5 tens') {
    ///shoot out 5 tens
  } else if (getText === '10 fives') {
    ///shoot out 10 fives
  }else if(getText === '100 ones') {
    ///shoot out 100 ones
  }else if(getText === '2 fifties') {
    ///shoot out 2 fifties
  }else if(getText ==='5 twenties'){
    ///shoot out 5 twenties
  }else if(getText==='10 tens'){
    ///shoot out 10 tens
  }else if(getText==='20 fives') {
    ///shoot out 20 fives
  }
}

screen.addEventListener('click', getScreenClick);
container.addEventListener('click', getBodyBtnClick);



createCoin()