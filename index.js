import {catsData} from "./data.js"

const emotionRadiosEl = document.getElementById("emotion-radios-el")

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

function renderEmotionRadios(cats){
    const emotionsForRadios = getEmotionsArr(cats) // []
    let radioBtns = ""
    for(let i=0; i< emotionsForRadios.length;i++){ //name must be the same for all radios so they are grupped, id is used for screenreaders
        radioBtns += `<div class="radio">
                        <label for="${emotionsForRadios[i]-i}">${emotionsForRadios[i]}</label>
                        <input 
                        type="radio" 
                        id="${emotionsForRadios[i]-i}" 
                        name="emotion" 
                        value="${emotionsForRadios[i]}"/> 
                      </div>
                     `
    }
    emotionRadiosEl.innerHTML = radioBtns
}

renderEmotionRadios(catsData)

