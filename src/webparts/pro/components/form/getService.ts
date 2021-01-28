





export async function getAll(list:string,top = null){
    let url;
    let myHeaders = new Headers({
        'Accept': 'application/json; odata=verbose'
    });
    if(!top){
        url = `https://enelcom.sharepoint.com/sites/DocumentosSGI/_api/web/lists/getByTitle('${list}')/items` 
    }else{
        url = `https://enelcom.sharepoint.com/sites/DocumentosSGI/_api/web/lists/getByTitle('${list}')/items?$top=${top}`
    }



    const items = await fetch(url,{ 
        method: 'GET',
        headers: myHeaders,
        credentials: 'include'
    });


    const responseJson = await items.json();
  
    return responseJson;
}


