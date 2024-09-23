import {catsData} from "./data.js"

const emotionRadiosEl = document.getElementById("emotion-radios-el")
const getImageBtn = document.getElementById("get-image-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")

// function getEmotionsArr(cats){    //catsData will be taken in as cats
//     let newArr = []
//     for (let i=0;i<cats.length;i++){   //the outer forloop will just iterate over cats
//         for(let j=0;j<cats[i].emotionTags.length;j++){ //the inner forloop will iterate over Each cat's emotions
//             newArr.push(cats[i].emotionTags[j]) //Each emotion tag will be pushed One by One to the newArr
//         }
//     }
//     console.log(newArr)
// }

// getEmotionsArr(catsData) //the real name of the array


function getEmotionsArr(cats){ //THIS FUNCTION IS TO GENERATE AN ARRAY OF EMOTIONS, ALSO AN INTERESTING DETAIL, NOTICE HOW THE REAL NAME CATSDATA IS NOT EVEN USED IN THIS FUNCTION, WE ARE JUST PASSING OUT OWN ARGUMENT NICKNAME AND IT IS PASSED OVER THIS FUNCTION TO THE RENDEREMOTIONRADIOS WHERE IT IS FINALLY CALLED UPON
    const emotionsArr = []

    for(let cat of cats){  //FOR OF one | JS name(here my own argument name)
        for(let emotion of cat.emotionTags){ //one of oneFromPrevious.the real property name on object
            if(!emotionsArr.includes(emotion)){
                emotionsArr.push(emotion)
            }
        }
    }

    return emotionsArr
}

function renderEmotionRadios(cats){ //THIS FUNCTION IS TO CREATE AN HTML WITH EMOTIONS
    const emotionsForRadios = getEmotionsArr(cats) // []
    let radioBtns = ""
    for(let i=0; i< emotionsForRadios.length;i++){ //name must be the same for all radios so they are grupped, id is used for screenreaders
        radioBtns += `<div class="radio">
                        <label for="${emotionsForRadios[i]}">${emotionsForRadios[i]}</label>
                        <input 
                        type="radio" 
                        id="${emotionsForRadios[i]}" 
                        name="emotion" 
                        value="${emotionsForRadios[i]}"/> 
                      </div>
                     `
    }
    emotionRadiosEl.innerHTML = radioBtns
}

renderEmotionRadios(catsData)

emotionRadiosEl.addEventListener("change", highlightChecked) //CSS TO HIGHLIGHT CHECKED

function highlightChecked(e){
const checkedCollection = document.getElementsByClassName("radio") //you need to target a static class, here you looped through data.js, created the html and never touched it again so this class can be used. But not a class that has been manipulated through .add or .remove as the dom makes the loop through collection and then before it is changed another loop so the behavior is unpredictable skipping some checked.
for (let oneChecked of checkedCollection){
    oneChecked.classList.remove("highlight") //you remove all the "highlight" added to "radio" if there, if none, nothing happens
}

    document.getElementById(e.target.id).parentElement.classList.add("highlight") //highlight only the last one and you do it on where you click as it is input and it's parent is "radio" since it colors the entire line
}

getImageBtn.addEventListener("click", () => { //when getting image, find which emotion was checked and if gif is wanted
    // getCheckedRadio() //not needed, invoking the function in getMatchingCat()
    wantGif()
    getMatchingCat()
})

function getCheckedRadio(){
   if(document.querySelector('input[type="radio"]:checked')){
   const checkedRadio = document.querySelector("input[type=radio]:checked").value
   return checkedRadio
   }
}

function wantGif(){
    const isGif = gifsOnlyOption.checked
    console.log(isGif)
}

function getMatchingCat(){
    let checkedRadio = getCheckedRadio()
    const catFromMatchingArray = catsData.filter(function(oneMatchingCat){
        return oneMatchingCat.emotionTags.includes(checkedRadio)
    })
    console.log(catFromMatchingArray)
}
