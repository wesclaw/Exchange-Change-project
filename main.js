const screen = document.querySelector('.screen');
const container = document.querySelector('.container');
const moneyOut = document.querySelector('.coinmoneyout')
const cashmoneyout = document.querySelector('.cashmoneyout')
const atm = document.querySelector('.atm')
const buttons = document.querySelectorAll("button")

// get the 50s, 20s, 10s, and 5s cash images and then just paste into place


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
    moneyOut.classList.remove('addToBend')
    moneyOut.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 99; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const penny = document.createElement('img');
        penny.src = 'images/penny.png';
        penny.classList.add('penny');
        // wrapper.append(penny);
        atm.append(penny)
        if (i === 99) {
          setTimeout(()=>{
            moneyOut.classList.remove('addThisForMoneyOut')
            moneyOut.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 150); ///speed of the coin
    }
    
  } else if (getText === '4 quarters') {
    ///shoot out 4 quarters
    moneyOut.classList.remove('addToBend')
    moneyOut.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 3; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const quarter = document.createElement('img');
        quarter.src = 'images/quarter2.png';
        quarter.classList.add('quarter');
        atm.append(quarter);
        if (i === 3) { 
          setTimeout(()=>{ 
            moneyOut.classList.remove('addThisForMoneyOut')
            moneyOut.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 200); 
    }
  } else if (getText === '10 dimes') {
    ///shoot out 10 dimes
    moneyOut.classList.remove('addToBend')
    moneyOut.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 9; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const dime = document.createElement('img');
        dime.src = 'images/dime.png';
        dime.classList.add('dime');
        atm.append(dime);
        if (i === 9) { 
          setTimeout(()=>{ 
            moneyOut.classList.remove('addThisForMoneyOut')
            moneyOut.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 200); 
    }
  } else if (getText === '20 nickels') {
    ////shoot out 20 nickels
    moneyOut.classList.remove('addToBend')
    moneyOut.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 19; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const nickel = document.createElement('img');
        nickel.src = 'images/nickel.png';
        nickel.classList.add('nickel');
        atm.append(nickel);
        if (i === 19) { 
          setTimeout(()=>{ 
            moneyOut.classList.remove('addThisForMoneyOut')
            moneyOut.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 200); 
    }
  } else if (getText === '5 ones') {
    ///shoot out 5 bills
    cashmoneyout.classList.remove('addToBend')
    cashmoneyout.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 4; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => { 
        const cash = document.createElement('img');
        cash.src = 'images/one_dollar.png';
        cash.classList.add('cash');
        atm.append(cash);
        if (i === 4) { 
          setTimeout(()=>{ 
            cashmoneyout.classList.remove('addThisForMoneyOut')
            cashmoneyout.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 500); 
    }
  } else if (getText === '10 ones') {
    ///shoot out 10 one bills
    cashmoneyout.classList.remove('addToBend')
    cashmoneyout.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 9; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => { 
        const cash = document.createElement('img');
        cash.src = 'images/one_dollar.png';
        cash.classList.add('cash');
        atm.append(cash);
        if (i === 9) { 
          setTimeout(()=>{ 
            cashmoneyout.classList.remove('addThisForMoneyOut')
            cashmoneyout.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 400); 
    }
  } else if (getText === '2 fives') { 
    ///shoot out 2 fives
  } else if (getText === '20 ones') {
    ///shoot out 2 fives
    cashmoneyout.classList.remove('addToBend')
    cashmoneyout.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 19; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => { 
        const cash = document.createElement('img');
        cash.src = 'images/one_dollar.png';
        cash.classList.add('cash');
        atm.append(cash);
        if (i === 19) { 
          setTimeout(()=>{ 
            cashmoneyout.classList.remove('addThisForMoneyOut')
            cashmoneyout.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 500); 
    }
  } else if (getText === '2 tens') {
    ///shoot out 2 tens
  } else if (getText === '4 fives') {
    ///shoot out 4 fives
  } else if (getText === '50 ones') {
    ///shoot out 50 ones
    cashmoneyout.classList.remove('addToBend')
    cashmoneyout.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 49; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => { 
        const cash = document.createElement('img');
        cash.src = 'images/one_dollar.png';
        cash.classList.add('cash');
        atm.append(cash);
        if (i === 49) { 
          setTimeout(()=>{ 
            cashmoneyout.classList.remove('addThisForMoneyOut')
            cashmoneyout.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 200); 
    }
  } else if (getText === '5 tens') {
    ///shoot out 5 tens
  } else if (getText === '10 fives') {
    ///shoot out 10 fives
  }else if(getText === '100 ones') {
    ///shoot out 100 ones
    cashmoneyout.classList.remove('addToBend')
    cashmoneyout.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 99; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => { 
        const cash = document.createElement('img');
        cash.src = 'images/one_dollar.png';
        cash.classList.add('cash');
        atm.append(cash);
        if (i === 99) { 
          setTimeout(()=>{ 
            cashmoneyout.classList.remove('addThisForMoneyOut')
            cashmoneyout.classList.add('addToBend')
            screen.innerHTML = `<h1>Thank you!</h1>`;
            setTimeout(()=>{
              screen.innerHTML = ``; 
              buttons.forEach((btn)=>{
                btn.disabled = false
              })
            },2000)
          },2000)
        }
      }, i * 100); 
    }
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

