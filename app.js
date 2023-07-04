// second section elements
const switchContainer = document.querySelector("#switchContainer")
const switchWho = document.querySelector("#switchWho")
const switchSkill = document.querySelector("#switchSkill")
const switchProject = document.querySelector("#switchProject")
const switchEdu = document.querySelector("#switchEdu")
const switchInfo = document.querySelector("#switchInfo")

// nav buttons
const whoBtn = document.querySelector("#whoBtn")
const skillBtn = document.querySelector("#skillBtn")
const projectBtn = document.querySelector("#projectBtn")
const eduBtn = document.querySelector("#eduBtn")
const infoBtn = document.querySelector("#infoBtn")


// initial settings
function initFunc(){
    switchContainer.removeChild(switchWho)
    switchContainer.removeChild(switchSkill)
    switchContainer.removeChild(switchProject)
    switchContainer.removeChild(switchEdu)
    switchContainer.removeChild(switchInfo)
}

initFunc()

// buttons functions
whoBtn.addEventListener('click', function(){
    if(skillBtn.classList.contains('active')){
        switchContainer.removeChild(switchSkill)
        skillBtn.classList.remove('active')
    } else if(projectBtn.classList.contains('active')){
        switchContainer.removeChild(switchProject)
        projectBtn.classList.remove('active')
    } else if(eduBtn.classList.contains('active')){
        switchContainer.removeChild(switchEdu)
        eduBtn.classList.remove('active')
    } else if(infoBtn.classList.contains('active')){
        switchContainer.removeChild(switchInfo)
        infoBtn.classList.remove('active')
    }
    switchContainer.appendChild(switchWho)
    whoBtn.classList.add('active')
})