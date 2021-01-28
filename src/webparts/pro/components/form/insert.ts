const events = new Map();



export const EventEmmiter = {
    on(event, listners){
        if(!events.has(events)){
            events.set(event,[])
        }

        events.get(event).push(listners)
    },
    emit(event, data){
        const listners = events.get(event)
        if(listners){
        listners.forEach(item=>item(data))


        }
    }
}

