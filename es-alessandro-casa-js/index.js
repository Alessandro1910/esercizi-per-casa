let $title = document.querySelectorAll(".box__title")

$title.forEach(function(event){
    event.addEventListener("click", function(){
        if(event.classList.contains("active")){
            event.classList.remove("active")
        }else{
            const $titleIsOpen = document.querySelectorAll(".active")
            $titleIsOpen.forEach(function(accordionTitleIsOpen){
                accordionTitleIsOpen.classList.remove("active")
            })
            event.classList.add("active")
        }
    })
})