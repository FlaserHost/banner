'use strict';

document.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.bannerWatched) {
        setTimeout(() => {
            const modal = document.querySelector('.modal');
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';

            const closeBtn = modal.querySelector('#banner-close-btn');
            closeBtn.addEventListener('click', e => {
                e.target.closest('.modal').remove();
                sessionStorage.bannerWatched = true;
                document.body.style.overflow = 'visible';
            });
        }, 15000);
    }
});
