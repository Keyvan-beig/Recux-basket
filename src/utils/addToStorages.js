
const addToStorages = (name, item) => {

    localStorage.setItem(name, JSON.stringify(item))

}

export default addToStorages