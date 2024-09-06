const catsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad.gif",
        alt: "A cat looking sad",
    }
]

const emotionRadiosEl = document.getElementById("emotion-radios-el")

// function getEmotionsArr(cats){    //catsData will be taken in as cats
//     let newArr = []
//     for (let i=0;i<cats.length;i++){   //the outer forloop will just iterate over cats
//         for(let j=0;j<cats[i].emotionTags.length;j++){ //the inner forloop will iterate over emotions of Each cat
//             newArr.push(cats[i].emotionTags[j]) //Each emotion tag will be pushed One by One to the newArr
//         }
//     }
//     console.log(newArr)
// }

// getEmotionsArr(catsData) //the real name of the array


function getEmotionsArr(cats){ 
    const emotionsArr = []

    for(let cat of cats){  //FOR OF one | JS name(here my own argument name)
        for(let emotion of cat.emotionTags){ //one of oneFromPrevious.the real property name on object
            emotionsArr.push(emotion)
        }
    }

    return emotionsArr
}

function renderEmotionRadios(cats){
    const emotionsForRadios = getEmotionsArr(cats) // []
    let radioBtns = ""
    for(let i=0; i< emotionsForRadios.length;i++){ //name must be the same for all radios so they are grupped
        radioBtns += `<label>
                      ${emotionsForRadios[i]}
                      <input type="radio" id="${i}" for="${i}" name="emotion" value="${emotionsForRadios[i]}"/> 
                      </label>
                     `
    }
    emotionRadiosEl.innerHTML = radioBtns
}

renderEmotionRadios(catsData)

