

module.exports ={
    getRandomKey(){
        return Math.random().toString(36).slice(-10);
    }
}