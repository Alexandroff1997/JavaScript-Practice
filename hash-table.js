function HashTable() {
    const store = new Array(13)

    const hash = (key) => {
        let res = 0
        for (let i = 0; i < key.length; i++) {
            res += key.charCodeAt(i)
        }
        return res % 13
    }

    return {
        setHashValue(key, value) {
            const index = hash(key)
            store[index] = value
        },
        getHashValue(key) {
            const index = hash(key)
            console.log(store[index])
            return store[index]
        }
    }
}

const newInst = new HashTable()

newInst.setHashValue('first', 'This is Value')
newInst.getHashValue('first')