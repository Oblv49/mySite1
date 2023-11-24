/*
AUDIO
*/
const backgroundAudio = document.getElementById('backgroundAudio');
backgroundAudio.volume = 0.10;

playIcon.style.display = 'none';

musicToggle.addEventListener('click', toggleMusic);

function toggleMusic() {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    if (backgroundAudio.paused) {
        backgroundAudio.play();
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline-block';
    } else {
        backgroundAudio.pause();
        playIcon.style.display = 'inline-block';
        pauseIcon.style.display = 'none';
    }
}
/*
 - HOMEPAGE -
*/
document.querySelectorAll('#navbar a.nav-link').forEach(item => {
    item.addEventListener('click', handleNavClick);
});

let animationExecuted = false;

function handleNavClick(event) {
    const windowWidth = window.innerWidth;
    const clickedLink = event.target;
    const toggleMusicPosition = document.getElementById('musicToggle');

    if (windowWidth <= 700) {
        toggleMusicPosition.classList.remove('togglePositionTop');
        toggleMusicPosition.classList.add('togglePositionBottom');

        document.querySelectorAll('#navbar a.nav-link').forEach(item => {
            item.classList.remove('navbar-item', 'active');
        });

        clickedLink.classList.add('navbar-item', 'active');

        document.getElementById('videoContainer').style.height = '21vw';
        document.getElementById('imageLogo').classList.add('d-none')
        document.getElementById('logo').classList.remove('d-none');

        const navLogoDiv = document.getElementById('navLogoDiv');

        if (!animationExecuted) {
            navLogoDiv.classList.remove('fixed-bottom');
            navLogoDiv.classList.add('fixed-top');
            navbar.style.fontSize = '0.6em';
            navbar.classList.remove('navbar-expand-lg');
            navbar.classList.add('navbar-expand');
            navLogoDiv.style.animationDuration = '500ms';
            navLogoDiv.classList.add('animate__animated', 'animate__slideInUp');

            navLogoDiv.addEventListener('animationend', () => {
                navLogoDiv.style.animationDuration = '';
                navLogoDiv.classList.remove('animate__slideInUp');
                animationExecuted = true;
            });
        }

    } else {
        toggleMusicPosition.classList.remove('togglePositionTop');
        toggleMusicPosition.classList.add('togglePositionBottom');

        document.querySelectorAll('#navbar a.nav-link').forEach(item => {
            item.classList.remove('navbar-item', 'active');
        });

        clickedLink.classList.add('navbar-item', 'active');

        document.getElementById('videoContainer').style.height = '7vw';
        document.getElementById('imageLogo').classList.add('d-none');
        document.getElementById('logo').classList.remove('d-none');

        const navLogoDiv = document.getElementById('navLogoDiv');

        if (!animationExecuted) {
            navLogoDiv.classList.remove('fixed-bottom');
            navLogoDiv.classList.add('fixed-top');
            navbar.style.fontSize = '2em';
            navLogoDiv.style.animationDuration = '500ms';
            navLogoDiv.classList.add('animate__animated', 'animate__slideInUp');

            navLogoDiv.addEventListener('animationend', () => {
                navLogoDiv.style.animationDuration = '';
                navLogoDiv.classList.remove('animate__slideInUp');
                animationExecuted = true;
            });
        }
    }

}

/*
RESET ANIMATION - HOMEPAGE
*/
document.getElementById('logo').addEventListener('click', resetAnimation);

function resetAnimation() {
    const videoContainer = document.getElementById('videoContainer');
    const imageLogo = document.getElementById('imageLogo');
    const navLogoDiv = document.getElementById('navLogoDiv');
    const whoIam = document.getElementById('whoIam');
    const expertise = document.getElementById('expertise');
    const skills = document.getElementById('skills');
    const faq = document.getElementById('faq');
    const project = document.getElementById('project');
    const toggleMusicPosition = document.getElementById('musicToggle');

    toggleMusicPosition.classList.remove('togglePositionBottom');
    toggleMusicPosition.classList.add('togglePositionTop');

    imageLogo.classList.remove('d-none');
    navLogoDiv.style.display = 'none';

    document.querySelectorAll('#navbar a.nav-link').forEach(item => {
        item.classList.remove('navbar-item', 'active');
    });

    if (!whoIam.classList.contains('d-none') || !expertise.classList.contains('d-none') || !skills.classList.contains('d-none') || !faq.classList.contains('d-none') || !project.classList.contains('d-none')) {
        if (!whoIam.classList.contains('d-none')) {
            whoIam.classList.add('d-none');
        } else if (!expertise.classList.contains('d-none')) {
            expertise.classList.add('d-none');
        } else if (!skills.classList.contains('d-none')) {
            skills.classList.add('d-none');
        } else if (!faq.classList.contains('d-none')) {
            faq.classList.add('d-none')
        } else if (!project.classList.contains('d-none')) {
            project.classList.add('d-none')
        }
    }

    navbar.classList.remove('navbar-expand');
    navbar.classList.add('navbar-expand-lg');
    
    navbar.style.fontSize = '';
    document.getElementById('logo').classList.add('d-none');

    animationExecuted = false;

    const videoAnimationDuration = 4000;

    videoContainer.addEventListener('transitionend', function handleTransitionEnd() {
        videoContainer.removeEventListener('transitionend', handleTransitionEnd);

        imageLogo.style.display = 'block';
        navLogoDiv.style.display = 'block';
        navLogoDiv.classList.remove('fixed-top');
        navLogoDiv.classList.add('fixed-bottom');
    }, false);

    videoContainer.offsetHeight;
    videoContainer.style.height = '';
}
function activateAnimation(element) {
    element.classList.add('animate__animated', 'animate__flip');
}

function deactivateAnimation(element) {
    element.classList.remove('animate__animated', 'animate__flip');
}

/*
SHOW WHO I AM? - WHO I AM?
*/
document.getElementById('whoIamLink').addEventListener('click', showWhoIam);

function showWhoIam() {
    const whoIam = document.getElementById('whoIam');
    const whoIamDiv = document.getElementById('whoIamDiv');
    const expertise = document.getElementById('expertise');
    const bgImageWhoIam = document.getElementById('bgImageWhoIam')
    const skills = document.getElementById('skills');
    const faq = document.getElementById('faq');
    const project = document.getElementById('project');
    const windowWidth = window.innerWidth;
    const imageWhoIamLogo = document.getElementById('imageWhoIamLogo');

    if (!expertise.classList.contains('d-none') || !skills.classList.contains('d-none') || !faq.classList.contains('d-none') || !project.classList.contains('d-none')) {
        if (!expertise.classList.contains('d-none')) {
            expertise.classList.add('d-none');
        } else if (!skills.classList.contains('d-none')) {
            skills.classList.add('d-none');
        } else if (!faq.classList.contains('d-none')) {
            faq.classList.add('d-none');
        } else if (!project.classList.contains('d-none')) {
            project.classList.add('d-none');
        }
    }

    if (windowWidth <= 700) {
        imageWhoIamLogo.classList.add('d-none')
    }

    whoIam.classList.remove('d-none');
    whoIamDiv.classList.add('animate__animated', 'animate__zoomIn')
    //bgImageWhoIam.classList.add('animate__animated', 'animate__fadeInUp')
    //bgImageWhoIam.style.animationDuration = '500ms';

}

/*
SHOW EXPERTISE - EXPERTISE
*/
document.getElementById('expertiseLink').addEventListener('click', showExpertise);

function showExpertise() {
    const expertise = document.getElementById('expertise');
    const expertiseDiv = document.getElementById('expertiseDiv');
    const divBadge = document.getElementById('divBadge');
    const whoIam = document.getElementById('whoIam');
    const bgImageExpertise = document.getElementById('bgImageExpertise');
    const skills = document.getElementById('skills');
    const faq = document.getElementById('faq');
    const project = document.getElementById('project');

    if (!whoIam.classList.contains('d-none') || !skills.classList.contains('d-none') || !faq.classList.contains('d-none') || !project.classList.contains('d-none')) {
        if (!whoIam.classList.contains('d-none')) {
            whoIam.classList.add('d-none');
        } else if (!skills.classList.contains('d-none')) {
            skills.classList.add('d-none');
        } else if (!faq.classList.contains('d-none')) {
            faq.classList.add('d-none');
        } else if (!project.classList.contains('d-none')) {
            project.classList.add('d-none');
        }
    }

    expertise.classList.remove('d-none');
    expertiseDiv.classList.add('animate__animated', 'animate__zoomIn');
    divBadge.classList.add('animate__animated', 'animate__zoomIn');
    //bgImageExpertise.classList.add('animate__animated', 'animate__fadeInUp');
    //bgImageExpertise.style.animationDuration = '500ms';

}

/*
TOGGGLE BADGE - EXPERTISE
*/
document.querySelectorAll('.badge-container').forEach(badgeContainer => {
    badgeContainer.addEventListener('click', togglePbadge);
});

function togglePbadge(event) {
    const clickedBadgeContainer = event.currentTarget;
    const pBadgeDiv = clickedBadgeContainer.querySelector('.pBadge');

    document.querySelectorAll('.pBadge').forEach(pBadge => {
        if (pBadge !== pBadgeDiv) {
            pBadge.classList.add('d-none');
        }
    });

    pBadgeDiv.classList.toggle('d-none');
}

/*
SKILLS
*/
document.getElementById('skillsLink').addEventListener('click', showSkills);

function showSkills() {
    const skills = document.getElementById('skills');
    const skillsDiv = document.getElementById('skillsDiv');
    const videoBgSkills = document.getElementById('videoBgSkills');
    const whoIam = document.getElementById('whoIam');
    const expertise = document.getElementById('expertise');
    const faq = document.getElementById('faq');
    const project = document.getElementById('project');

    if (!whoIam.classList.contains('d-none') || !expertise.classList.contains('d-none') || !faq.classList.contains('d-none') || !project.classList.contains('d-none')) {
        if (!whoIam.classList.contains('d-none')) {
            whoIam.classList.add('d-none');
        } else if (!expertise.classList.contains('d-none')) {
            expertise.classList.add('d-none');
        } else if (!faq.classList.contains('d-none')) {
            faq.classList.add('d-none');
        } else if (!project.classList.contains('d-none')) {
            project.classList.add('d-none');
        }
    }

    skills.classList.remove('d-none');
    skillsDiv.classList.add('animate__animated', 'animate__zoomIn')
    //videoBgSkills.classList.add('animate__animated', 'animate__zoomIn');
    //videoBgSkills.style.animationDuration = '500ms';

}


document.getElementById('frontEnd').addEventListener('click', () => showBadgeSkills('frontEnd'));
document.getElementById('backEnd').addEventListener('click', () => showBadgeSkills('backEnd'));
document.getElementById('tooling').addEventListener('click', () => showBadgeSkills('tooling'));
document.getElementById('database').addEventListener('click', () => showBadgeSkills('database'));

function showBadgeSkills(clickedId) {
    const allBadges = ['frontEnd', 'backEnd', 'tooling', 'database'];

    allBadges.forEach(badge => {
        const badgeElement = document.getElementById(badge + 'Badge');
        const listItem = document.getElementById(badge);

        if (badge === clickedId) {
            badgeElement.classList.remove('d-none');
            listItem.classList.add('active');
        } else {
            badgeElement.classList.add('d-none');
            listItem.classList.remove('active');
        }
    });
}

/*
PROJECT
*/
document.getElementById('projectLink').addEventListener('click', showProject);

function showProject() {
    const project = document.getElementById('project');
    const projectDiv = document.getElementById('projectDiv');
    const dicCard = document.getElementById('divCard');
    const whoIam = document.getElementById('whoIam');
    const bgImageProject = document.getElementById('bgImageExpertise');
    const skills = document.getElementById('skills');
    const faq = document.getElementById('faq');
    const expertise = document.getElementById('expertise');

    if (!whoIam.classList.contains('d-none') || !skills.classList.contains('d-none') || !faq.classList.contains('d-none') || !expertise.classList.contains('d-none')) {
        if (!whoIam.classList.contains('d-none')) {
            whoIam.classList.add('d-none');
        } else if (!skills.classList.contains('d-none')) {
            skills.classList.add('d-none');
        } else if (!faq.classList.contains('d-none')) {
            faq.classList.add('d-none');
        } else if (!expertise.classList.contains('d-none')) {
            expertise.classList.add('d-none');
        }
    }

    project.classList.remove('d-none');
    projectDiv.classList.add('animate__animated', 'animate__zoomIn');
    dicCard.classList.add('animate__animated', 'animate__zoomIn');
    //bgImageProject.classList.add('animate__animated', 'animate__fadeInUp');
    //bgImageProject.style.animationDuration = '500ms';

}

document.getElementById('project1').addEventListener('click', showProject1);

function showProject1() {
    const project2 = document.getElementById('project2');
    const project1 = document.getElementById('project1');
    const projectCard1 = document.getElementById('projectCard1');
    const elementsWithAnimateCard = projectCard1.querySelectorAll('.animateCard');

    project2.classList.add('d-none');
    project1.classList.add('d-none');
    projectCard1.classList.remove('d-none');


    elementsWithAnimateCard.forEach(element => {
        element.classList.remove('animate__animated', 'animate__fadeOutTopRight')
        element.classList.add('animate__animated', 'animate__fadeInTopLeft');
    });

}

document.getElementById('returnCardP1').addEventListener('click', closeProject1);
document.getElementById('return').addEventListener('click', closeProject1);

function closeProject1() {
    const projectCard1 = document.getElementById('projectCard1');
    const project2 = document.getElementById('project2');
    const project1 = document.getElementById('project1');
    const elementsWithAnimateCard = projectCard1.querySelectorAll('.animateCard');


    elementsWithAnimateCard.forEach(element => {
        element.classList.remove('animate__fadeInTopLeft');
        element.classList.add('animate__animated', 'animate__fadeOutTopRight');
    });

    project2.classList.add('animate__animated', 'animate__zoomIn');
    project1.classList.add('animate__animated', 'animate__zoomIn');


    setTimeout(() => {
        projectCard1.classList.add('d-none');
        project2.classList.remove('d-none');
        project1.classList.remove('d-none');

    }, 600);
}

document.getElementById('project2').addEventListener('click', showProject2);

function showProject2() {
    const project2 = document.getElementById('project2');
    const project1 = document.getElementById('project1');
    const projectCard2 = document.getElementById('projectCard2');
    const elementsWithAnimateCard = projectCard2.querySelectorAll('.animateCard');

    project2.classList.add('d-none');
    project1.classList.add('d-none');
    projectCard2.classList.remove('d-none');


    elementsWithAnimateCard.forEach(element => {
        element.classList.remove('animate__animated', 'animate__fadeOutTopRight')
        element.classList.add('animate__animated', 'animate__fadeInTopLeft');
    });
}

document.getElementById('returnCardP2').addEventListener('click', closeProject2);
document.getElementById('returnP2').addEventListener('click', closeProject2);

function closeProject2() {
    const projectCard2 = document.getElementById('projectCard2');
    const project2 = document.getElementById('project2');
    const project1 = document.getElementById('project1');
    const elementsWithAnimateCard = projectCard2.querySelectorAll('.animateCard');


    elementsWithAnimateCard.forEach(element => {
        element.classList.remove('animate__fadeInTopLeft');
        element.classList.add('animate__animated', 'animate__fadeOutTopRight');
    });

    project2.classList.add('animate__animated', 'animate__zoomIn');
    project1.classList.add('animate__animated', 'animate__zoomIn');


    setTimeout(() => {
        projectCard2.classList.add('d-none');
        project2.classList.remove('d-none');
        project1.classList.remove('d-none');

    }, 600);
}

/*
FAQ
*/
document.getElementById('faqLink').addEventListener('click', showFaq);

function showFaq() {
    const faq = document.getElementById('faq');
    const faqDiv = document.getElementById('faqDiv')
    const videoBgFaq = document.getElementById('videoBgFaq');
    const expertise = document.getElementById('expertise');
    const whoIam = document.getElementById('whoIam');
    const skills = document.getElementById('skills');
    const project = document.getElementById('project');

    if (!whoIam.classList.contains('d-none') || !skills.classList.contains('d-none') || !expertise.classList.contains('d-none') || !project.classList.contains('d-none')) {
        if (!whoIam.classList.contains('d-none')) {
            whoIam.classList.add('d-none');
        } else if (!skills.classList.contains('d-none')) {
            skills.classList.add('d-none');
        } else if (!expertise.classList.contains('d-none')) {
            expertise.classList.add('d-none');
        } else if (!project.classList.contains('d-none')) {
            project.classList.add('d-none');
        }
    }

    faq.classList.remove('d-none');
    faqDiv.classList.add('animate__animated', 'animate__zoomIn');
    //videoBgFaq.classList.add('animate__animated', 'animate__zoomIn');
    //videoBgFaq.style.animationDuration = '500ms';

}

document.getElementById('d1').addEventListener('click', () => showR('d1'));
document.getElementById('d2').addEventListener('click', () => showR('d2'));
document.getElementById('d3').addEventListener('click', () => showR('d3'));

function showR(clickedId) {
    const allD = ['d1', 'd2', 'd3'];

    allD.forEach(r => {
        const rElement = document.getElementById(r + 'r');
        const listD = document.getElementById(r);

        if (r === clickedId) {
            rElement.classList.remove('d-none');
            listD.classList.add('active');
        } else {
            rElement.classList.add('d-none'); // Fixed variable name from badgeElement to rElement
            listD.classList.remove('active');
        }
    });
}



// Aggiorna la funzione load
window.addEventListener('load', function () {
    var loader = document.getElementById('loader-container');
    var mainContainer = document.getElementById('pageContainer');


    setTimeout(function () {

        loader.style.display = 'none';


        mainContainer.classList.remove('d-none');


        document.body.style.overflow = 'auto';
    }, 2500);
});

document.addEventListener('DOMContentLoaded', function () {
    var loadingBar = document.getElementById('loading-bar');


    function updateLoadingBar() {
        loadingBar.style.width = '100%';
    }


    var animationInterval = setInterval(updateLoadingBar, 33.3);


    setTimeout(function () {
        clearInterval(animationInterval);
    }, 2500);
});

document.addEventListener('DOMContentLoaded', function () {
    var loadingText = document.getElementById('loading-text');

    var startTime;
    var totalTime = 2500;

    function updateLoadingText(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }

        var currentTime = timestamp - startTime;
        var percentage = (currentTime / totalTime) * 100;

        loadingText.textContent = Math.min(Math.floor(percentage), 100) + '%';

        if (currentTime < totalTime) {
            requestAnimationFrame(updateLoadingText);
        }
    }

    requestAnimationFrame(updateLoadingText);
});