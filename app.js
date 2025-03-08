document.addEventListener('DOMContentLoaded', () => {
    let btns = document.querySelectorAll('.fa-plus');

    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let outerText = e.target.parentElement.parentElement.children[0];
            let innerText = e.target.parentElement.parentElement.children[1];
            if (innerText.style.display == 'none') {
                innerText.style.display = 'block';
                innerText.style.maxHeight = '0';
                innerText.style.overflow = 'hidden';
                setTimeout(() => {
                    innerText.style.transition = 'max-height 0.5s ease-in-out';
                    innerText.style.maxHeight = innerText.scrollHeight + 'px';
                }, 10);
                outerText.style.paddingBottom = '20px';
                outerText.style.borderBottom = '3px solid rgb(58, 58, 58)';
            } else {
                innerText.style.transition = 'max-height 0.5s ease-in-out';
                innerText.style.maxHeight = '0';
                setTimeout(() => {
                    innerText.style.display = 'none';
                }, 500);
                outerText.style.paddingBottom = '0px';
                outerText.style.borderBottom = '0px solid #d1d1d1';
            }
        });
    });
});