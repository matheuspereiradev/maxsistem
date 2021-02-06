export default {
    getFormatDateBR(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
        today = dd + '/' + mm + '/' + yyyy
          
        return today;
    },

    getFormatDateUS(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        
        today = yyyy + '/' + mm + '/' +  dd
          
        return today;
    },

    formatDateBR(valor){
        let dt = new Date(valor)

        let year = dt.getFullYear()
        let month = dt.getMonth()+1
        let day = dt.getDate()

        const data = `${day}/${month}/${year}`

        return data;
    },

    formatDateUS(valor){
        let dt = new Date(valor)

        let year = dt.getFullYear()
        let month = dt.getMonth()+1
        let day = dt.getDate()

        const data = `${year}/${month}/${day}`

        return data;
    }
}