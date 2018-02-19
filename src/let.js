let buttons = document.querySelectorAll('#let button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = i;
    buttons[i].onclick = (e) => {console.log(i)};
}