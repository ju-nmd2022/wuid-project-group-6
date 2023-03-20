// 获取列表元素
const list1 = document.querySelector('.recipe6 ol');
const list2 = document.querySelector('.listbox2 ol');


// 获取要插入按钮的元素
const container = document.querySelector('.container');

const button = document.querySelector('.show-more-history');
button.style.backgroundColor = 'rgb(107, 142, 35)';
button.style.color = 'white';
button.style.width = '150px';
button.style.height = '30px';

button.style.borderColor = 'red';
button.style.borderWidth = '0px';
button.style.borderStyle = 'dashed';

// 添加计数器变量
let clickCount = 0;

document.querySelector('.show-more-history').addEventListener('click', () => {
    // 增加计数器的值
    clickCount++;
  
    // 创建新的列表项元素
    const newItem = document.createElement('li');
  
    // 根据计数器的值设置新列表项的内容
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

