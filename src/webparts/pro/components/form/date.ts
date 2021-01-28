interface date{
    dateP: string
}


export function dateHelper(data: Date){

    let day = (data.getDate()).toLocaleString().length > 1 ?  (data.getDate()).toLocaleString() :  `0${(data.getDate() ).toLocaleString()}`
    
    let month = (data.getMonth() + 1).toLocaleString().length > 1 ?  (data.getMonth() + 1).toLocaleString().length :  `0${(data.getMonth() + 1).toLocaleString()}`
    let year = data.getFullYear();

    let complet = `${year}-${month}-${day}`

    return complet

}


console.log(dateHelper(new Date()))
