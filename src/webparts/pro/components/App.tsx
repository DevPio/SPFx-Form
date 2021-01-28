// import * as React from 'react';
// import * as jquery from 'jquery';
// import * as moment from 'moment';
// import DataTable from 'react-bs-datatable';

// import {Dropdown, Label, TextField, Button, Checkbox} from "office-ui-fabric-react";

// import '../../../../node_modules/bootstrap-4-required/src/css/bootstrap.css';
// require('../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
// import { WebPartContext } from '@microsoft/sp-webpart-base';

// import apiFetc from './apiFet';

// export interface IControlsProps {
//     description: string;
//     context: WebPartContext;  
// }
// export interface IControlsState {  
//     users: any[];  
// }
  

// import './styles/card.css';

// const conditionalRowStyles = [
//     {
//       when: row => row.title === 'Cancelado',
//       style: {
//         backgroundColor: 'green',
//         color: 'white',
//         '&:hover': {
//           cursor: 'pointer',
//         },
//       },
//     },
//     // You can also pass a callback to style for additional customization
//     {
//       when: row => row.title === 'Cancelado',
//       style: row => ({
//         backgroundColor: 'red' ,
//       }),
//     },
//   ];
  
// const App : React.FunctionComponent  = ()=>{
//   const [classificao, Setclassificao] = React.useState([]);
//   const [puplicados, setpuplicados] = React.useState([]);
//   const [puplicadosImuta, setpuplicadosImuta] = React.useState([]);
//   const [espe, setespe] = React.useState([]);
//   const [checkvalue, setcheck] = React.useState('');
//   const [filter, setfilter] = React.useState({
//       filterUm:'',
//       filterDois:'',
     
//   });
  

  

//   async function processoRequest(){
       
//       let myHeaders = new Headers({
//           'Accept': 'application/json; odata=verbose'
//       });

//       const items = await fetch("https://enelcom.sharepoint.com/sites/DocumentosSGI/_api/web/lists/getByTitle('Abrangência')/items",{ 
//           method: 'GET',
//           headers: myHeaders,
//           credentials: 'include'
//       });


//      const responseJson = await items.json();
    
//       return responseJson;

//     }

//     function filterDiv(filtro,filtroUnidade){
        
//         let filterResponse;
            
//             if(filtroUnidade != '' && filtro != ''){
//                 filterResponse = puplicados.filter(item=>{
//                     return item['Documentos_x0020_T_x00e9_cnicos'] === filtro && item['C_x00f3_digo_x0020_abrang_x00ea_'] === filtroUnidade
//                 })
//                 setpuplicados(filterResponse)
//             }else if(filtro != ''){
//                 filterResponse = puplicados.filter(item=>{
//                     return item['Documentos_x0020_T_x00e9_cnicos'] === filtro
//                 })
//                 setpuplicados(filterResponse)

//             }else if(filtroUnidade != ''){
//                 filterResponse = puplicados.filter(item=>{
//                     return item['C_x00f3_digo_x0020_abrang_x00ea_'] === filtroUnidade
//                 })

//                 setpuplicados(filterResponse)
//             }

             
    
           
        
//     }

//     React.useEffect(()=>{
//         console.log(filter)
        
//             if(filter['filterUm']==='' && filter['filterDois']===''){
           
               
//                 setpuplicados(puplicadosImuta)
//             }else if(filter['filterUm'] !== '' || filter['filterDois'] !== ''){
                
//                 filterDiv(filter['filterUm'],filter['filterDois'])
    
//             }
     
//     },[filter['filterDois'],filter['filterUm']])




//     async function getallPublicados(){
//         let myHeaders = new Headers({
//             'Accept': 'application/json; odata=verbose'
//         });
  
//         const items = await fetch("https://enelcom.sharepoint.com/sites/DocumentosSGI/_api/web/lists/getByTitle('Documentos publicados')/items?$top=4999",{ 
//             method: 'GET',
//             headers: myHeaders,
//             credentials: 'include'
//         });
       
//         const responseJson = await items.json();
      
//         return responseJson;
//     }






//     async function getEspe() {
//         let myHeaders = new Headers({
//             'Accept': 'application/json; odata=verbose'
//         });
  
//         const items = await fetch("https://enelcom.sharepoint.com/sites/DocumentosSGI/_api/web/lists/getByTitle('Classificação Doc.')/items",{ 
//             method: 'GET',
//             headers: myHeaders,
//             credentials: 'include'
//         });
       
//         const responseJson = await items.json();
      
//         return responseJson;
//     }





//     React.useEffect(()=>{
//         console.log(filter)
//     },[filter['filterTres']])





//   React.useEffect(()=>{
//      Promise.all([
//         processoRequest()
//         .then(r=> {
//             let items: Array<apiFetc> = r.d.results;
        
      
//            Setclassificao(items);
  
//         }),
//         getallPublicados()
//         .then(response=>{
//             let itemsPublicado: Array<apiFetc> = response.d.results;

//            const filterItems =  itemsPublicado.map(item=>{
//                 if(item['Status_x0020_de_x0020_publica_x0'] != 'Pendente'){
//                     return item
//                 } 
//             }).filter(item=>{
//                 return item != undefined
//             })
           
//             setpuplicados(filterItems)
//             setpuplicadosImuta(filterItems)
//         }),
//         getEspe().then(responseDoc=>{
//             let itemsPublicadoDoc: Array<apiFetc> = responseDoc.d.results;
            
//             setespe(itemsPublicadoDoc)
//         })
//      ])

//   },[]);


  

//   function activate(event){
//     setpuplicados(puplicadosImuta)
//     let dois = 'filterDois'
//     const cards = document.querySelectorAll('.card_item');

//     const elementSelecionado : HTMLDivElement= event.target;

//     if(elementSelecionado.classList.contains('ativo')){
        
//         elementSelecionado.classList.remove('ativo');
        
//         setfilter({...filter,[dois]:''})
        
        

//     }else{
        
//         cards.forEach(item=>{
//             item.classList.remove('ativo');
            
//         });
//         elementSelecionado.classList.add('ativo');
       
        


//         setfilter({...filter,[dois]:elementSelecionado.textContent})
        
        
//     }


    

//   }
//   function activateUnidade(event){
//     setpuplicados(puplicadosImuta)
//     let Um = 'filterUm'
//     const cards = document.querySelectorAll('.card_item_unidade');

//     const elementSelecionado : HTMLElement= event.target;

    
 
//             if(elementSelecionado.classList.contains('ativo')){
               
//                 elementSelecionado.classList.remove('ativo');
               
                

                
//                 setfilter({...filter,[Um]:''})
                
                
//             }else{
                
//                 cards.forEach(item=>{
//                     item.classList.remove('ativo');
                    
//                 });
//                 elementSelecionado.classList.add('ativo');
                
//                 setfilter({...filter,[Um]:elementSelecionado.textContent})
//             }
            
//   }

//   function getValue(event){
//     let fil = 'filterTres'
//     const checkds = document.querySelectorAll('.items_check')
//     checkds.forEach(item=>{
//         if(item['value'] != event.target.value){
//             item['checked'] = false
//         }
//     })
    
    
//     if(event.target.checked){
        
//         setfilter({...filter,[fil]:event.target.value})

        
        
//     }else{
       
//         setfilter({...filter,[fil]:''})
//     }

//   }

//   function dateTran(date: Date){
//       let month = date.getMonth() + 1
//       let day  = date.getDate()
//       let full = date.getFullYear()

//       return `${day}/${month}/${full}`
//   }

//   function clickLink(element){
      


   
//   }
  

//   let header = [
//     { title: 'Título', prop: 'Title' , sortable: true, filterable: true},
//     { title: 'Revisão', prop: 'Revis_x00e3_o', sortable: true },

//     { title: 'Numero', prop: 'N_x00fa_mero_x0020_documento', sortable: true, filterable: true },

//     { title: 'Status', prop: 'Status_x0020_de_x0020_publica_x0', cell : n => (
//         n['Status_x0020_de_x0020_publica_x0'] == 'Cancelado' ? <td className='cancelado'>{n['Status_x0020_de_x0020_publica_x0']}</td> : <>{n['Status_x0020_de_x0020_publica_x0']}</> 
//         )},

//     { title: 'Tipo de Documento', prop: 'Classifica_x00e7__x00e3_o' , sortable: true, filterable: true},

//     { title: 'Abrangencia', prop: 'C_x00f3_digo_x0020_abrang_x00ea_', sortable: true },

//     { title: 'Data Emissão', prop: 'Data_x0020_emiss_x00e3_o', sortable: true, cell : n => (
//         <> {dateTran(new Date(n['Data_x0020_emiss_x00e3_o']))}</>
//     ) },

//     { title: 'Data Revisão', prop: 'Data_x0020_revis_x00e3_o', sortable: true , cell : n => (
//         <> {dateTran(new Date(n['Data_x0020_revis_x00e3_o']))}</>
//     ) },

//     { title: 'Unidade', prop: 'C_x00f3_digo_x0020_unidade', sortable: true },

//     { title: 'Código Diretoria', prop: 'C_x00f3_digo_x0020_diretoria', sortable: true },

//     { title: 'Link', prop: 'Documentos_x0020_T_x00e9_cnicos', sortable: true , ignoreRowClick: true, cell: (n) => (
//         <a href={`https://enelcom.sharepoint.com/sites/DocumentosSGI/Lists/Documentos%20publicados/Item/displayifs.aspx?List=5addcc0d%2Dc796%2D4d42%2D99b5%2D0b40c079187b&ID=${n['ID']}&ContentTypeId=${n['ContentTypeId']}` }
//         target="_blank"
//         rel="noopener noreferrer" >
//         <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
//         </a>
//     )
//     },
//     { title: 'Unidade', prop: 'Documentos_x0020_T_x00e9_cnicos', sortable: true },
//   ];
   
//   const unidades = [
//       'HSEQ',
//       'Materiais',
//       'NCO',
//       'ND',
//       'O&M CIEN',
//       'O&M Distribuição'
//   ]
  

//   console.log(puplicados)
//     return(
//         <>
//         <div className='container'>
//             <h2>Unidade</h2>
//             <div className="containerCard" >
//                 {
//                 unidades.map(item=>{
//                     return(
//                         <div className="card_item_unidade" onClick={activateUnidade}>
//                             {item}
//                         </div>
//                     );
//                 })
                    
//                 }
//             </div>
//         </div>
   
//         <div className='container'>
//             <h2>Abrangência</h2>
//             <div className="containerCard" >
//                 {classificao && 
//                 classificao.map(item=>{
//                     return(
//                         <div className="card_item" onClick={activate}>
//                             {item['Title']}
//                         </div>
//                     );
//                 })
                    
//                 }
//             </div>
//         </div>

//         {/* <h6 className='meu_titulo'>Tipo de Documento</h6> */}
//         {/* <div className="especificao">


//             {espe &&

//                 espe.map(item=>{

//                     return(
//                         <>  
//                          <div className="item_select">
//                             <label className='label_edit'>
//                                 {item['Classifica_x00e7__x00e3_o']}
//                             </label>
//                         <input type='checkbox'  className='items_check' value={item['Classifica_x00e7__x00e3_o']}   onChange={getValue}/>



             
//                         </div> 
 


//                         </>

                       
//                     )

//                 })


//             } 
            
//         </div> */}
//        <div  className="containerDs" style={{marginTop:'20px'}}>
//             <DataTable tableHeaders={header} tableClass="striped hover responsive"
//                         rowsPerPage={50}
//                         rowsPerPageOption={[20, 50, 100]}
//                         tableBody={puplicados && puplicados}
//                         initialSort={{ prop: 'ID', isAscending: true }}
//                         expandOnRowDoubleClicked={(event)=>{console.log(event)}}
                        
                        
//                 /> 
//        </div>
                

        

//         </>
//     );
// };


// export default App;