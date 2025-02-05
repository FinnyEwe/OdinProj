const arr = [1,2,3,4,5,6,7,8]

const [one, two, ...wewe] = arr

console.log(`${one} and ${two} and ${wewe}`)

const person  = {
    name: 'Finian',
    website: 'Coolio'
}

const { name: firstName } = person

console.log(firstName)

const add = (x,y) => {
    return x + y
}

console.log(add(...arr))


const shouldRunCode = true

const logWorld = () => {
    console.log('sup Gang')
}

shouldRunCode && logWorld()
