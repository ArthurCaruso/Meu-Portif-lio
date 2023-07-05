
// buttons
const whoBtn = document.querySelector('#whoBtn')
const skillBtn = document.querySelector('#skillBtn')
const projectBtn = document.querySelector('#projectBtn')
const eduBtn = document.querySelector('#eduBtn')
const infoBtn = document.querySelector('#infoBtn')

// layers
const switchWho = document.querySelector('#switchWho')
const switchProject = document.querySelector('#switchProject')
const switchSkill = document.querySelector('#switchSkill')
const switchEdu = document.querySelector('#switchEdu')
const switchInfo = document.querySelector('#switchInfo')

// parent container
const switchContainer = document.querySelector('#switchContainer')


// functions

function hideLayers(){
    switchWho.style.display = 'none'
    switchProject.style.display = 'none'
    switchSkill.style.display = 'none'
    switchEdu.style.display = 'none'
    switchInfo.style.display = 'none'
}

function listening(){
    whoBtn.addEventListener('click', function(){
        hideLayers()
        switchWho.style.display = 'flex'
    })
    
    skillBtn.addEventListener('click', function(){
        hideLayers()
        switchSkill.style.display = 'flex'
    })
    
    projectBtn.addEventListener('click', function(){
        hideLayers()
        switchProject.style.display = 'flex'
    })
    
    eduBtn.addEventListener('click', function(){
        hideLayers()
        switchEdu.style.display = 'flex'
    })
    
    infoBtn.addEventListener('click', function(){
        hideLayers()
        switchInfo.style.display = 'flex'
    })
}



function init(){
    hideLayers()
    listening()
}

init()
