document.addEventListener('DOMContentLoaded', function () {
    var description = document.getElementById('phraseMooveWorld');

    function updateDescription() {
        if (window.innerWidth <= 900) {
            description.innerHTML = '<p>move the world with your hands</p>';
        } else {
            description.innerHTML = '<p>move the world with your mouse</p>';
        }
    }
    updateDescription();
    window.addEventListener('resize', updateDescription);
});