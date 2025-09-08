// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化基本功能
    initBackToTop();
});

// 返回顶部按钮
function initBackToTop() {
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', '返回顶部');
    document.body.appendChild(backToTopBtn);
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            background: #3498db;
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
            z-index: 1000;
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
    `;
    document.head.appendChild(style);
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}