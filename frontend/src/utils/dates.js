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
        
        today = yyyy + '-' + mm + '-' +  dd
          
        return today;
    },

    formatDateBR(valor){
        let dt = new Date(valor)

        let year = dt.getFullYear()
        let month = dt.getMonth()+1
        let day = dt.getDate()

        const data = `${("00" + day).slice(-2)}/${("00" + month).slice(-2)}/${("0000" + year).slice(-4)}`

        return data;
    },

    formatDateUS(valor){
        let dt = new Date(valor)

        let year = dt.getFullYear()
        let month = dt.getMonth()+1
        let day = dt.getDate()

        const data = `${("0000" + year).slice(-4)}-${("00" + month).slice(-2)}-${("00" + day).slice(-2)}`

        return data;
    },

    getHoursByMinuts(minuts){
        let horas = Math.trunc(minuts/60)
        let minutos = minuts-(horas*60)

        return(`${("00" + horas).slice(-2)}:${("00" + minutos).slice(-2)}`)
    }
}