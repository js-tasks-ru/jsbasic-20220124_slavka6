function toggleText() {
    const toggleBtn = document.querySelector('.toggle-text-button');
    const hiddenDiv = document.querySelector('#text');
    toggleBtn.addEventListener('click', () =>  hiddenDiv.toggleAttribute('hidden')); 
}
