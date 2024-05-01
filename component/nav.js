// 找到你的 .nav-item-2 元素
const navItem2 = document.querySelector('.nav-item-2');
// 找到你的 .overlay 元素
const overlay = document.querySelector('.overlay');

// 當 .nav-item-2 被點擊時，觸發事件
navItem2.addEventListener('click', function(){
    // 切換 .show-overlay 類的存在，以顯示/隱藏毛玻璃效果
    overlay.classList.toggle('show-overlay');
    
});
