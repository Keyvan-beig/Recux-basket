
const getStorage = (name)=>{

    const storage = localStorage.getItem(name)

    return JSON.parse(storage)
}

export default getStorage