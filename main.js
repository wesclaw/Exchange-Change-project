const screen = document.querySelector('.screen');
const container = document.querySelector('.container');
const moneyOut = document.querySelector('.moneyout')
const wrapper = document.querySelector('.wrapper')
const buttons = document.querySelectorAll("button")

// 
const atm = document.querySelector('.atm')
const cash = document.querySelector('.cash')
let isDragging = false;

document.addEventListener('mousedown', function (event) {
  let dragElement = event.target.closest('.dollar');

  if (!dragElement) return;

  event.preventDefault();

  dragElement.ondragstart = function () {
    return false;
  };

  let coords, shiftX, shiftY;

  startDrag(dragElement, event.clientX, event.clientY);

  function onMouseUp() {
    finishDrag();
  }

  function onMouseMove(event) {
    moveAt(event.clientX, event.clientY);
  }

  function startDrag(element, clientX, clientY) {
    if (isDragging) {
      return;
    }

    isDragging = true;

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', onMouseUp);

    shiftX = clientX - element.getBoundingClientRect().left;
    shiftY = clientY - element.getBoundingClientRect().top;

    element.style.position = 'absolute';

    moveAt(clientX, clientY);
  }

  function finishDrag() {
    isDragging = false;

    dragElement.style.top =
      parseInt(dragElement.style.top) + window.pageYOffset + 'px';
    dragElement.style.position = 'absolute';

    document.removeEventListener('mousemove', onMouseMove);
    dragElement.removeEventListener('mouseup', onMouseUp);
    console.log(isDragging)
  }

  function moveAt(clientX, clientY) {
    let newX = clientX - shiftX;
    let newY = clientY - shiftY;

    let newBottom = newY + dragElement.offsetHeight;

    if (newBottom > document.documentElement.clientHeight) {
      let docBottom = document.documentElement.getBoundingClientRect().bottom;

      let scrollY = Math.min(docBottom - newBottom, 10);

      if (scrollY < 0) scrollY = 0;

      window.scrollBy(0, scrollY);
    }

    dragElement.style.left = newX + 'px';
    dragElement.style.top = newY + 'px';

   
  }
});

// 

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
    for (let i = 0; i <= 100; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const penny = document.createElement('img');
        penny.src = 'images/penny.png';
        penny.classList.add('coin');
        wrapper.append(penny);
        if (i === 100) {
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
      }, i * 150); 
    }
    
  } else if (getText === '4 quarters') {
    ///shoot out 4 quarters
    moneyOut.classList.remove('addToBend')
    moneyOut.classList.add('addThisForMoneyOut')
    for (let i = 0; i <= 4; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const quarter = document.createElement('img');
        quarter.src = 'images/quarter2.png';
        quarter.classList.add('quarter');
        wrapper.append(quarter);
        if (i === 4) { 
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
    for (let i = 0; i <= 10; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const dime = document.createElement('img');
        dime.src = 'images/dime.png';
        dime.classList.add('dime');
        wrapper.append(dime);
        if (i === 10) { 
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
    for (let i = 0; i <= 20; i++) {
      buttons.forEach((btn)=>{
        btn.disabled = true
      })
      setTimeout(() => {
        const nickel = document.createElement('img');
        nickel.src = 'images/nickel.png';
        nickel.classList.add('nickel');
        wrapper.append(nickel);
        if (i === 20) { 
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

