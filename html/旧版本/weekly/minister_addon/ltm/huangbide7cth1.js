function showDialog(event) {
  const dialogId = event.target.getAttribute("data-dialog");
  document.getElementById(dialogId).showModal();
}

function closeDialog(event) {
  const dialogId = event.target.getAttribute("data-dialog");
  document.getElementById(dialogId).close();
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("show-dialog")) {
    showDialog(event);
  } else if (event.target.classList.contains("close-dialog")) {
    closeDialog(event);
  }
});
// 点击 "show-dialog" 类的元素打开相应的弹出窗口，并将滚动条置于顶部
function showDialog(event) {
  const dialogId = event.target.getAttribute("data-dialog");
  const dialog = document.getElementById(dialogId);
  dialog.showModal();
  dialog.scrollTo(0, 0);
}

// 点击 "close-dialog" 类的元素关闭相应的弹出窗口
function closeDialog(event) {
  const dialogId = event.target.getAttribute("data-dialog");
  const dialog = document.getElementById(dialogId);
  dialog.close();
}

// 将点击事件委托给整个文档对象，根据目标元素的类名调用指定的函数
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("show-dialog")) {
    showDialog(event);
  } else if (event.target.classList.contains("close-dialog")) {
    closeDialog(event);
  }
});
// 点击显示大纲
function showCC1() {
  var paragraphs = document.querySelectorAll('p');
  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].classList.contains('CC1') || paragraphs[i].classList.contains('AA2')|| paragraphs[i].classList.contains('AA22')|| paragraphs[i].classList.contains('AAA')) {
      paragraphs[i].style.display = 'block';
    } else {
      paragraphs[i].style.display = 'none';
    }
  }
  var buttons = document.querySelectorAll('[class^="CC"] button');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].style.visibility = 'hidden';
  }
}
// 点击显示大中纲
function showCC1AndCC2() {
  var paragraphs = document.querySelectorAll('p');
  for (var i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].classList.contains('CC1') || paragraphs[i].classList.contains('CC2') || paragraphs[i].classList.contains('AA2')|| paragraphs[i].classList.contains('AA22')|| paragraphs[i].classList.contains('AAA')) {
      paragraphs[i].style.display = 'block';
    } else {
      paragraphs[i].style.display = 'none';
    }
  }
  var buttons = document.querySelectorAll('[class^="CC"] button');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].style.visibility = 'hidden';
  }
}
// 点击显示所有纲目
function showAll() {
  var paragraphs = document.querySelectorAll('p');
  for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.display = 'block';
  }
  var buttons = document.querySelectorAll('[class^="CC"] button');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].style.visibility = 'visible';
  }
}

