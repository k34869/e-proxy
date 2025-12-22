// 点击显示大纲
function showCC1() {
  var paragraphs = document.querySelectorAll("body > p");
  for (var i = 0; i < paragraphs.length; i++) {
    if (
      paragraphs[i].classList.contains("CC1") ||
      paragraphs[i].classList.contains("AA2") ||
      paragraphs[i].classList.contains("AA5") ||
      paragraphs[i].classList.contains("AA1")
    ) {
      paragraphs[i].style.display = "block";
    } else {
      paragraphs[i].style.display = "none";
    }
  }
}
// 点击显示大中纲
function showCC1AndCC2() {
  var paragraphs = document.querySelectorAll("body > p");
  for (var i = 0; i < paragraphs.length; i++) {
    if (
      paragraphs[i].classList.contains("CC1") ||
      paragraphs[i].classList.contains("CC2") ||
      paragraphs[i].classList.contains("AA2") ||
      paragraphs[i].classList.contains("AA5") ||
      paragraphs[i].classList.contains("AA1")
    ) {
      paragraphs[i].style.display = "block";
    } else {
      paragraphs[i].style.display = "none";
    }
  }
}
// 点击显示所有纲目
function showAll() {
  var paragraphs = document.querySelectorAll("body > p");
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = "block";
  }
}
function showDialog(event) {
  const dialogId = event.target.getAttribute("data-dialog");
  const dialog = document.getElementById(dialogId);
  dialog.showModal();
  // dialog.scrollTo(0, 0);

  // 添加类名到 body 元素，禁止网页内容滚动
  document.body.classList.add("modal-open");
}

function closeDialog(event) {
  if (!event.target.id) return;
  const dialogId = event.target.id;
  const dialog = document.getElementById(dialogId);
  dialog.close();

  // 移除类名，恢复网页内容的滚动
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("show-dialog")) {
    showDialog(event);
  } else {
    closeDialog(event);
  }
});

// 晨兴跳转
document.addEventListener("DOMContentLoaded", (event) => {
  function getDayOfWeek() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    return days[today.getDay()];
  }

  function handleClick(event) {
    event.preventDefault(); // 阻止默认的跳转行为
    const dayOfWeek = getDayOfWeek();
    const linkIndex = this.dataset.index; // 获取链接的索引
    let url;
    if (dayOfWeek === "Monday") {
      url = `./mr/${linkIndex}/1.html`;
    } else if (dayOfWeek === "Tuesday") {
      url = `./mr/${linkIndex}/2.html`;
    } else if (dayOfWeek === "Wednesday") {
      url = `./mr/${linkIndex}/3.html`;
    } else if (dayOfWeek === "Thursday") {
      url = `./mr/${linkIndex}/4.html`;
    } else if (dayOfWeek === "Friday") {
      url = `./mr/${linkIndex}/5.html`;
    } else if (dayOfWeek === "Saturday") {
      url = `./mr/${linkIndex}/6.html`;
    } else if (dayOfWeek === "Sunday") {
      url = `./mr/${linkIndex}/7.html`;
    }
    window.location.href = url; // 跳转到指定的URL
  }

  const links = document.querySelectorAll("a[data-index]");
  links.forEach((link) => {
    link.addEventListener("click", handleClick);
  });
});

// 按钮设置
function scrollToTop() {
    // 页面滚动的动画效果
    window.scrollTo({
        top: 0, // 滚动到页面顶部
        behavior: 'smooth' // 平滑滚动
    });
}
function goToHome() {
    let currentUrl = window.location.pathname;
    let homePath = '../index.html';

    // 根据当前页面的URL决定使用哪个路径
    if (currentUrl.includes('mr')) {
        homePath = '../../index.html';
    }
    window.location.href = homePath;
}
window.addEventListener('scroll', function () {
    var scrollTopButton = document.getElementById('top');

    // 如果页面滚动超过100px，显示按钮；否则隐藏按钮
    if (window.scrollY > 100) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});
// 页面加载时隐藏按钮
document.addEventListener('DOMContentLoaded', function () {
    var scrollTopButton = document.getElementById('top');
    scrollTopButton.style.display = 'none';
});

// 选中高亮代码
// function highlightSelection() {
//   var selection = window.getSelection();
//   if (selection.rangeCount > 0) {
//     var range = selection.getRangeAt(0);
//     if (range.commonAncestorContainer.nodeType !== Node.TEXT_NODE && range.commonAncestorContainer.nodeType !== Node.ELEMENT_NODE) {
//       return;
//     }
//     var newNode = document.createElement("span");
//     newNode.classList.add("highlight");
//     newNode.addEventListener('click', function(event) {
//       event.stopPropagation();
//       clearSingleHighlight(newNode);
//     });
//     range.surroundContents(newNode);
//     selection.removeAllRanges();
//   }
// }
//
// function clearSingleHighlight(element) {
//     var parent = element.parentNode;
//     while (element.firstChild) {
//         parent.insertBefore(element.firstChild, element);
//     }
//     parent.removeChild(element);
// }
//
// function clearHighlight() {
//     var highlights = document.querySelectorAll(".highlight");
//     for (var i = 0; i < highlights.length; i++) {
//         var parent = highlights[i].parentNode;
//         while (highlights[i].firstChild) {
//             parent.insertBefore(highlights[i].firstChild, highlights[i]);
//         }
//         parent.removeChild(highlights[i]);
//     }
// }
//
// 给 document 对象添加 mouseup 事件的监听器，当用户释放鼠标按键时，调用相应的函数
// document.addEventListener("touchend", highlightSelection);
// document.addEventListener("mouseup", highlightSelection);

// 选区添加<mark>标签
// <button id="saveButton">保存修改</button>
// document.addEventListener('mouseup', function(event) {
//     const selection = window.getSelection();
//     if (selection.rangeCount > 0) {
//         const range = selection.getRangeAt(0);
//         const selectedText = range.toString();
//         if (selectedText.length > 0) {
//             const mark = document.createElement('mark');
//             mark.textContent = selectedText;
//             range.deleteContents();
//             range.insertNode(mark);
//         }
//     }
// });
//
// document.addEventListener('click', function(event) {
//     if (event.target.tagName === 'MARK') {
//         const mark = event.target;
//         const textNode = document.createTextNode(mark.textContent);
//         mark.parentNode.replaceChild(textNode, mark);
//     }
// });
//
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('saveButton').addEventListener('click', function() {
//         // 移除保存按钮
//         const saveButton = document.getElementById('saveButton');
//         saveButton.parentNode.removeChild(saveButton);
//
//         const content = document.documentElement.outerHTML;
//         const blob = new Blob([content], { type: 'text/html' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//
//         // 获取当前页面的 URL 并提取文件名
//         const currentUrl = window.location.pathname;
//         const filename = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
//         a.download = filename;
//
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//         URL.revokeObjectURL(url);
//     });
// });
// 选中高亮代码
function highlightSelection() {
  var selection = window.getSelection();
  if (selection.rangeCount > 0) {
    var range = selection.getRangeAt(0);
    if (range.commonAncestorContainer.nodeType !== Node.TEXT_NODE && range.commonAncestorContainer.nodeType !== Node.ELEMENT_NODE) {
      return;
    }
    var newNode = document.createElement("span");
    newNode.classList.add("highlight");
    newNode.addEventListener('click', function(event) {
      event.stopPropagation();
      clearSingleHighlight(newNode);
    });
    range.surroundContents(newNode);
    selection.removeAllRanges();
  }
}


function clearSingleHighlight(element) {
    var parent = element.parentNode;
    while (element.firstChild) {
        parent.insertBefore(element.firstChild, element);
    }
    parent.removeChild(element);
}

function clearHighlight() {
    var highlights = document.querySelectorAll(".highlight");
    for (var i = 0; i < highlights.length; i++) {
        var parent = highlights[i].parentNode;
        while (highlights[i].firstChild) {
            parent.insertBefore(highlights[i].firstChild, highlights[i]);
        }
        parent.removeChild(highlights[i]);
    }
}

// 给 document 对象添加 mouseup 事件的监听器，当用户释放鼠标按键时，调用相应的函数
document.addEventListener("touchend", function () {
    highlightSelection();
});
document.addEventListener("mouseup", function () {
    highlightSelection();
});