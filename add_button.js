
const list1 = document.querySelector('.recipes6 ol');



const button = document.querySelector('.show-more-history');
button.style.backgroundColor = 'rgb(107, 142, 35)';
button.style.color = 'white';
button.style.width = '150px';
button.style.height = '30px';

button.style.borderColor = 'red';
button.style.borderWidth = '0px';
button.style.borderStyle = 'dashed';


let clickCount = 0;

document.querySelector('.show-more-history').addEventListener('click', () => {
    
    clickCount++;
  
    
    const newItem = document.createElement('li');
  
    if (clickCount === 1) 
    {
        newItem.textContent = 'Banana(yesterday)';
        list2.appendChild(newItem);
    } 
    else if (clickCount === 2) {
        newItem.textContent = 'Potato(3 days ago)';
        list2.appendChild(newItem);
    } 
    else if (clickCount === 3) {
        newItem.textContent = 'Tomato(6 days ago)';
        list2.appendChild(newItem);
    }
});

