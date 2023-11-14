function changeContent(newContent) {
    var container = document.getElementById('content-container');
    container.style.opacity = 0;
    setTimeout(function() {
        container.innerHTML = newContent;
        container.style.opacity = 1;
    }, 500);
}

var navLinks = document.querySelectorAll('nav a');
var body = document.querySelector('body');

navLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        body.classList.add('blur-effect');
    });

    link.addEventListener('mouseout', function() {
        body.classList.remove('blur-effect');
    });
});

function changeContent(page) {
    var container = document.getElementById('content-container');
    var currentPageDisplay = document.getElementById('currentPageDisplay');

    container.style.opacity = 0;

    
}

navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        var contentId = link.textContent.trim();
        changeContent('<h2>git ' + contentId + '</h2><p>New content for git ' + contentId + '</p>', contentId);
    });

    link.addEventListener('mouseover', function() {
        body.classList.add('blur-effect');
    });

    link.addEventListener('mouseout', function() {
        body.classList.remove('blur-effect');
    });
});

var currentPage = 0; // 当前页码

function changeContent(page) {
var container = document.getElementById('content-container');
// 淡出效果
container.style.opacity = 0;
setTimeout(function() {
    // 更新内容
    container.innerHTML = pages[page];
    // 淡入效果
    container.style.opacity = 1;
}, 500); // 设置一个延时，确保淡出效果完成
}

document.getElementById('prevPage').addEventListener('click', function() {
    if (currentPage > 0) {
        currentPage -= 1;
        changeContent(currentPage);
        document.getElementById('currentPageDisplay').textContent = 'Current Page: ' + (currentPage + 1);
    }
});

document.getElementById('nextPage').addEventListener('click', function() {
    if (currentPage < pages.length - 1) {
        currentPage += 1;
        changeContent(currentPage);
        document.getElementById('currentPageDisplay').textContent = 'Current Page: ' + (currentPage + 1);
    }
});
