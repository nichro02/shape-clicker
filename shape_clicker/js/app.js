console.log("shape clicker js file is connected");

//make sure to write plenty of comments!
//remember to set up your window onload!

console.log("shape clicker js file is connected");

//make sure to write plenty of comments!
//remember to set up your window onload!

//First, clicking on any shape turns the shape you clicked on into a circle:

//add event listener for clicking on div
//when clicked, change class of div to circle


const changeToCircle = (event) => {
    event.target.className = 'circle'
    console.log(event.target)
}

const changeToSquare = (event) => {
    event.target.className = 'square'
    console.log(event.target)
}


const upsideDownTriangle = (event) => {
    event.target.className = 'triangle-down'
    console.log(event.target)
}

const changeToOctagon = (event) => {
    event.target.className = 'octagon'
    console.log(event.target)
}

const changeToHeart = (event) => {
    event.target.className = 'heart'
    console.log(event.target)
}

document.addEventListener('DOMContentLoaded', () => {
    
    document.addEventListener('click',() => {
        console.log(event)
        //conditional needed
        
        
        if(event.target.className === 'triangle') {
            changeToCircle(event)
        } else if (event.target.className === 'circle') {
            changeToSquare(event)
        } else if (event.target.className === 'square') {
            upsideDownTriangle(event)
        } else if(event.target.className === 'triangle-down') {
            changeToOctagon(event)
        } else if (event.target.className === 'octagon') {
            changeToHeart(event)
        } else {
            event.target.className = 'triangle'
        }

        
    })

    //document.addEventListener('click',changeToSquare)
})