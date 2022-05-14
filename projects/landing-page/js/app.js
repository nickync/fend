/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//get section nodes
const section = document.querySelectorAll('section')


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// create navbar menu button
function createButton() {
    
    return section.forEach(item => {
        // create li element
        const navList = document.createElement('li')

        // get li's parent element ul
        const navBar = document.getElementById('navbar__list')

        // get menu button's names
        const textNode = document.createTextNode(item.dataset.nav)
    
        // create anchor tag
        const aLinks = document.createElement('a')

        // set anchor tag's name
        aLinks.appendChild(textNode)

// add scrollTo events to anchor
        //aLinks.href = `#${item.id}`
        aLinks.addEventListener('click', ()=> {
            document.querySelector(`#${item.id}`).scrollIntoView({
                behavior:"smooth"
            })
        })

        // append anchor tag to li
        navList.appendChild(aLinks)

        // append li to ul
        navBar.appendChild(navList)
    })
}

createButton()
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Check if element is in viewport

function isActive(elem) {

        // get corodinates of element
        let position = elem.getBoundingClientRect()

        // return true if in viewport
        return (position.top + window.innerHeight >= 0 &&
            position.left >= 0 &&
            position.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            position.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) 
}

// filter section and add class

function addClass() {

    return section.forEach(item => {

        // add class when true and remove when false
        if (isActive(item)) {
            item.classList.add('your-active-class')
        } else if (isActive(item) === false) {
            item.classList.remove('your-active-class')
        }
    })
}

// Add active class when scrolling
window.addEventListener('scroll', addClass)

// Display scroll to top button
let button = document.getElementById('btn')

// display button when scroll over section 1
window.onscroll = () => {
    if (document.body.scrollTop > document.getElementById('section1').clientHeight) {
        button.style.display = 'block'
    } else {
        button.style.display = 'none'
    }
}

// return to top
function toTop() {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}