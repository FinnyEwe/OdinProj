

let i = 0
function fncs() {
    i++
}


async function debounce(fnc, x){
    const call = setTimeout(fnc, x)
    
}


const debouncedIncrement = debounce(increment, 100)