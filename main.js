// main.js

document.addEventListener('DOMContentLoaded', function() {
    const foodCards = document.querySelectorAll('.food-card');

    foodCards.forEach(card => {
        card.addEventListener('click', function() {
            const restaurantName = this.querySelector('.restaurant-name').textContent;
            console.log(`你點擊了：${restaurantName}`);
            // 在這裡可以添加更複雜的互動，例如顯示更多資訊
        });
    });

    const uploadButton = document.querySelector('button');
    if (uploadButton) {
        uploadButton.addEventListener('click', function() {
            alert('「新增檔案」功能尚未實作。');
            // 在這裡可以添加實際的檔案上傳邏輯
        });
    }
});