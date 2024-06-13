'use strict';

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const modal = document.querySelector('.modal');
        modal.style.display = 'flex';

        const closeBtn = modal.querySelector('#banner-close-btn');
        closeBtn.addEventListener('click', e => e.target.closest('.modal').remove());
    }, 15000);
});
