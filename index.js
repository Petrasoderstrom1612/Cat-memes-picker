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

// function displayOneArr(cats){    //make the argument generic so you can even use for new arguments
//     let newArr = []
//     for (let i=0;i<cats.length;i++){   //you loop through the outer array's length to get each individual object
//         for(let j=0;j<cats[i].emotionTags.length;j++){ //you go in each object on the forloop in its emotionTag's length
//             newArr.push(cats[i].emotionTags[j]) //you want to get each object and each emotion in it
//         }
//     }
//     console.log(newArr)
// }

// displayOneArr(catsData) //the real name of the array

function displayOneArr(cats){ 
    for(let cat of cats){  //FOR OF one | JS name(here my own argument name)
        for(let emotionTag of cat.emotionTags){ //one of oneFromPrevious . the real object name
            console.log(emotionTag)
        }
    }
}

displayOneArr(catsData)