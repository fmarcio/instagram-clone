//select elements
const toggle = document.getElementById('toggle');
const getAppText = document.querySelector('.get-app span');

toggle.addEventListener('change', (e) => {
    //the toggle will be conditioned to e.target.checked
    document.body.classList.toggle('dark', e.target.checked);
    getAppText.classList.toggle('light-span', e.target.checked);
});

