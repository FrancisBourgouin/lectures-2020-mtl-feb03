const bobMaker = () => {
    return () => {console.log('bob')}
}

console.log(bobMaker())

const helloBob = bobMaker()

helloBob()