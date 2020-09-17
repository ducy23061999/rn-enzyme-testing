
const dumpList = [
    {
        id: 1,
        name: 'do laudary',
        isCheck: false
    }, 
    {
        id: 2,
        name: 'do homework',
        isCheck: true
    },
    {
        id: 3,
        name: 'have dinner',
        isCheck: false
    },
    {
        id: 4,
        name: 'gather with the gang',
        isCheck: false
    }
]

module.exports = {
    get: (url) => {
        return Promise.resolve({
            data: dumpList
        })
    },
    dumpList
}