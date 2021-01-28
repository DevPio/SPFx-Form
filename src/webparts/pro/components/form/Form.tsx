import * as React from 'react';



import {dateHelper} from './date';
import {EventEmmiter} from './insert';

import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';




import {getAll} from './getService';

import NomeDocumento from './NomeDocumento';

import CheckNome from './NomeDocCheck';


interface PorpsComponent{
    context: any
}



const Form : React.FunctionComponent<PorpsComponent> = props => {
    const [docpublicado, setDocpublicado] = React.useState([]);
    const [abrange, setAbrange ] = React.useState([]);
    const [novasolic, setNovasolic] = React.useState([]);
    const [clasific, setClassifc] = React.useState([]);
    const [taxinomi, setTaxinomi] = React.useState([]);
    const [codific, setCodific] = React.useState([]);
    const [nameDoc, setNameDoc] = React.useState('');
    const [disableButton, setdisableButton] = React.useState(false);
    const [revisaodoc, setRevisaodoc] = React.useState([]);
    const [namedocrev, setNamedocrev] = React.useState('');
    const [revisao, setRevisao] = React.useState('');
    const [estado, setEstado] = React.useState([]);
    
    const [stateChange, setstateChange] = React.useState({
        codeAbrange:'',
        codeClass: '',
        codeProcess:{
            code:'',
            AreaProcesso:'',
            MacroProcesso:''
        },
        CodeUnidade:{
            SD:'',
            SU:''
        }
        
    });
   
  

    const [objectForm, setForm] = React.useState({
        TipoSolicitacao:'',
        Abrangencia:'',
        classificao:'',
        processo:'',
        unidade:'',
        usoDocumento:'',
        disponivelParceira:'',
        justificativa:'',
        impacto:'',
        nomeDoc: '',
        treinamento:''
        
    });
    const SetFormAbrang = (event)=> {
        setForm({...objectForm,['Abrangencia']:event.target.value});
       
       
        
      const item = abrange.filter(item=> item['Abrang_x00ea_ncia']  === event.target.value);

      if(item.length > 0){

          setstateChange({...stateChange,codeAbrange:item[0]['Title']});
      }else{
      setstateChange({...stateChange,codeAbrange:''});

      };




    };


    const SetFormClass = (event)=> {
        setForm({...objectForm,['classificao']:event.target.value});
        
      const item = clasific.filter(item=> item['Classifica_x00e7__x00e3_o']  === event.target.value);


      if(item.length > 0){
        setstateChange({...stateChange,codeClass:item[0]['Title'] });
      }else{
        setstateChange({...stateChange,codeClass:''});

      };



    }


    const SetFormProcess = (event)=> {
        setForm({...objectForm,['processo']:event.target.value});
        
      const item = taxinomi.filter(item=> item['Title']  === event.target.value);

      if(item.length > 0 ){
        setstateChange({...stateChange,codeProcess:{
            code:item[0]['C_x00f3_digo_x0020_Processo'] ,
            AreaProcesso:item[0]['OData__x00c1_rea_x0020_de_x0020_Proces'] ,
            MacroProcesso:item[0]['Macro_x002d_Processo']
          }
      });
          
      }else{
        setstateChange({...stateChange,codeProcess:{
            code:'',
            AreaProcesso:'',
            MacroProcesso:''
          }

      });




        


      };
     

      



    };
    


    const SetFormUnidade = (event)=> {
        setForm({...objectForm,['unidade']:event.target.value});
        
      const item = codific.filter(item=> item['Unidade']  === event.target.value);


      if(item.length > 0){
        setstateChange({...stateChange,CodeUnidade:{
            SD:item[0]['Title'],
            SU:item[0]['sigla_x0020_unidade']
        }});
      }else{
        setstateChange({...stateChange,CodeUnidade:{
            SD:'',
            SU:''
        }});
      };

     

      



    };



    const setFormTipo = event=> {
        setNameDoc('')
        setForm({...objectForm,['TipoSolicitacao']:event.target.value})
    };

    const setAplication = (event: React.FormEvent<HTMLInputElement>) => {
        
        

        if(event.currentTarget.checked){
            setEstado([...estado,event.currentTarget.value])
           
            
        }else{
            setEstado(estado.filter(item => item != event.currentTarget.value))
            
        }

        
    }


    React.useEffect(()=>{
        setForm({
            ...objectForm,
            ...stateChange
        });
        

    },[stateChange]);


    React.useEffect(()=>{

        if(objectForm.Abrangencia && objectForm.classificao && objectForm.processo && objectForm.unidade){
            const respo = docpublicado.filter(item=> {
                if(item['Abrang_x00ea_ncia'] == objectForm.Abrangencia && item["Classifica_x00e7__x00e3_o"] == objectForm.classificao && item['Processo'] == objectForm.processo && item["Unidade"] == objectForm.unidade ){

                    return item


                }
            }).map(item=> item['Title']);
        
            setRevisaodoc(respo);

            
        }else{
            setRevisaodoc([]);
        }

      
           
       





    },[objectForm]);
    
    React.useEffect(()=>{
        const docEspe = docpublicado.filter(item=>{
            if(item['Title']==namedocrev) return item
        })

        // .map(item=> item['Revis_x00e3_o']);
        if(docEspe[0]){
           
            setRevisao(docEspe[0]['Revis_x00e3_o']);
        }
            
       
        

    },[namedocrev]);



    
    React.useEffect(()=>{
        Promise.all([
            getAll('Abrangência')
            .then(response=> setAbrange(response['d']['results'])),

            getAll('Classificação Doc.')
            .then(response => setClassifc(response['d']['results'])),

            getAll('Taxonomia')
            .then(response => setTaxinomi(response['d']['results'])),


            getAll('Codificação Doc')
            .then(response => setCodific(response['d']['results'])),


            getAll('Add',3000)
            .then(response => setNovasolic(response['d']['results'])),

            getAll('Documentos publicados',3000)
            .then(response => setDocpublicado(response['d']['results'])),
            getAll('Add',3000)
            .then(response => console.log(response['d']['results']))
        ])
        
    },[]);

   React.useEffect(()=>{
       if(objectForm.TipoSolicitacao === 'Revisão' ||objectForm.TipoSolicitacao === 'Exclusão'){
        setForm({...objectForm,['nomeDoc']:''});
        setForm({...objectForm,['nomeDoc']:nameDoc});
       }else{
        setForm({...objectForm,['nomeDoc']:''});
        setForm({...objectForm,['nomeDoc']:`${stateChange['codeClass']}-${stateChange['CodeUnidade']['SD']}-${stateChange['CodeUnidade']['SU']}-${20}-XXXX-${stateChange['codeAbrange']}-${nameDoc}`})
       }
    
    
    
   },[stateChange,nameDoc])
   
  
    

   async function senSmall(){
        
       
          

            EventEmmiter.emit('insert', {...objectForm,...stateChange,estadoSet: estado, nomeDocumento:nameDoc})





       

        
    }

    return (

        <>
    
        <form >
            <div className="form-row">
                <div className="col">
                <label >Tipo solicitação</label>
                <select  className={objectForm.TipoSolicitacao === '' ? 'form-control is-invalid' : 'form-control is-valid'} onChange={setFormTipo}>
                    <option></option>
                    <option>Exclusão</option>
                    <option>Inclusão</option>
                    <option>Revisão</option>
                </select>
                </div>
           
          
                <div className="col">
                  <label>Data</label>
                    <input type="date" className="form-control" value={dateHelper(new Date())}  readOnly={true} />
                </div> 


           
            </div>

            <div className="form-group">
                <label >Abrangência</label>
                <select className={objectForm.Abrangencia === '' ? 'form-control is-invalid' : 'form-control is-valid'} onChange={SetFormAbrang}>
                    <option></option>
                    {abrange.length > 0 &&
                        abrange.map(item=>(
                            <option>{item['Abrang_x00ea_ncia']}</option>
                        ))
                    }
                </select>
            </div>


           {objectForm.Abrangencia === "I&N Brasil" || objectForm.Abrangencia === "I&N na Operação de Distribuição" ?
                <div className="form-group">
                <label>Aplicação</label>
                <div className="custom-control custom-checkbox">
                    <input onChange={setAplication} type="checkbox" value={'Rio de Janeiro'}
                    
                    className="custom-control-input" id="RJ" />
                    <label className="custom-control-label" htmlFor="RJ">Rio de Janeiro</label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input onChange={setAplication} type="checkbox" value={'Ceará'}
                    
                    className="custom-control-input" id="CE" />
                    <label className="custom-control-label" htmlFor="CE">Ceará</label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input onChange={setAplication} type="checkbox" value={'Goiás'}
                   
                    className="custom-control-input" id="GO" />
                    <label className="custom-control-label" htmlFor="GO">Goiás</label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input onChange={setAplication} type="checkbox" value={'CIEN'}
                
                    className="custom-control-input" id="CI" />
                    <label className="custom-control-label" htmlFor="CI">CIEN</label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input onChange={setAplication} type="checkbox" value={'São Paulo'}
                 
                    className="custom-control-input" id="SP" />
                    <label className="custom-control-label" htmlFor="SP">São Paulo</label>
                </div>
                
               
            </div> : ''
           }



            <div className="form-group">
                <label >Classificação</label>
                <select className={objectForm.classificao === '' ? 'form-control is-invalid' : 'form-control is-valid'} onChange={SetFormClass}>
                    <option></option>
                     {clasific.length > 0 &&

                    
                        clasific.map(item=>(
                            <option>{item['Classifica_x00e7__x00e3_o']}</option>
                        ))
                    } 
                </select>

                
            </div>
           

            <div className="form-group">
                <label >Processo</label>
                <select className={objectForm.processo === '' ? 'form-control is-invalid' : 'form-control is-valid'}

                    onChange={SetFormProcess}
                
                >
                    <option></option>
                     {taxinomi.length > 0 &&

                    
                    taxinomi.map(item=>(
                            <option>{item['Title']}</option>
                        ))
                    } 
                </select>
            </div>


            <div className="form-group">
                <label >Unidade</label>
                <select 
                onChange={SetFormUnidade}
                className={objectForm.unidade === '' ? 'form-control is-invalid' : 'form-control is-valid'}
                >
                    <option></option>
                     {codific.length > 0 &&

                    
                        codific.map(item=>(
                            <option>{item['Unidade']}</option>
                        ))
                    } 
                </select>
            </div>
            
           




            <div className="form-row">
                <div className="col">
                    <label >Uso documento</label>
                        <select className={objectForm.usoDocumento === '' ? 'form-control is-invalid' : 'form-control is-valid'} 
                        onChange={(event)=> setForm({...objectForm,['usoDocumento']:event.target.value})}>
                            <option></option>
                            <option>Interno</option>
                            <option>Externo</option>
                            <option>Ambos</option>
                        </select>
                </div>
           
          
                <div className="col">
                        <label>Disponível para Parceira</label>
                        <select 
                        className={objectForm.disponivelParceira === '' ? 'form-control is-invalid' : 'form-control is-valid'} 
                        onChange={(event)=> setForm({...objectForm,['disponivelParceira']:event.target.value})}
                        >
                            <option></option>
                            <option>Sim</option>
                            <option>Não</option>
                            
                        </select>
                </div>


            </div>
            <div className="form-group">
                <label >Treinamento</label>
                <select 
               onChange={(event)=> setForm({...objectForm,['treinamento']:event.target.value})}
                className={objectForm.treinamento === '' ? 'form-control is-invalid' : 'form-control is-valid'}
                >
                    <option></option>
                    <option>Sim</option>
                    <option>Não</option>
                    
                </select>
            </div>





            <div className="form-row">
                <div className="col">
                    <label >Área do Processo</label>
                    <input type="text" className="form-control"
                    onChange={(event) => setstateChange({...stateChange,['codeProcess']:{
                            ...stateChange.codeProcess,
                            AreaProcesso:event.target.value
                        }}) 
                    }
                    value={stateChange['codeProcess']['AreaProcesso']}
                    disabled={true}/>
                </div>
           
          
                <div className="col">
                        <label>Macro-Processo</label>
                        <input type="text" className="form-control" 
                        
                        value={stateChange['codeProcess']['MacroProcesso']}
                        disabled={true}/>
                </div>


            </div>



            <div className="form-row">
                <div className="col">
                    <label >Código Processo</label>
                    <input type="text" className="form-control" 
                    value={stateChange['codeProcess']['code']} disabled={true}/>
                </div>
           
          
                <div className="col">
                        <label>Impacto</label>
                        <select className={objectForm.impacto === '' ? 'form-control is-invalid' : 'form-control is-valid'}  onChange={(event)=> setForm({...objectForm,['impacto']:event.target.value})}>
                            <option></option>
                            <option>Outros</option>
                            <option>Financeiros</option>
                            <option>Segurança</option>
                            <option>Regulatório</option>
                        </select>   
                </div>


            </div>

            {objectForm.TipoSolicitacao === 'Inclusão'  ?

                <>



                
                    <>

                    <div className="form-row">
                        <div className="col">
                            <label >Código Classificação</label>
                            <input type="text" className="form-control"
                            
                            value={stateChange['codeClass']}
                            readOnly={true} />
                        </div>


                        <div className="col">
                            <label>Sigla Diretoria</label>
                            <input type="text" className="form-control"
                            
                            value={stateChange['CodeUnidade']['SD']}
                            readOnly={true} />
                        </div>

                        </div>


                        <div className="form-row">
                        <div className="col">
                            <label >Código Abrangência</label>
                            <input type="text" className="form-control"  value={stateChange['codeAbrange']}  readOnly={true} />
                        </div>


                        <div className="col">
                            <label>Sigla Unidade</label>
                            <input type="text" className="form-control" 
                            
                            value={stateChange['CodeUnidade']['SU']}
                            readOnly={true} />
                        </div>

                        </div>

                        <div className="form-group">
                            <label >Documento</label>
                            <input type="text" className="form-control"
                            value={`${stateChange['codeClass']}-${stateChange['CodeUnidade']['SD']}-${stateChange['CodeUnidade']['SU']}-${20}-XXXX-${stateChange['codeAbrange']}-${nameDoc}`}
                            readOnly={true}
                            
                            
                            />
                    </div>

                    <NomeDocumento value={[]}  rules={nameDoc === '' ? 'form-control is-invalid' : 'form-control is-valid'}  block={false} name={(name)=>{setNameDoc(name)}} />

                    </>
              

                    
            
                </>    

                

                


                
            : objectForm.TipoSolicitacao === 'Exclusão' ? <CheckNome rules={nameDoc === '' ? 'form-control is-invalid' : 'form-control is-valid'} value={revisaodoc} block={false}  name={function(name){
                setNamedocrev(name)
                setNameDoc('') 
                setNameDoc(name)
                }} /> : objectForm.TipoSolicitacao === 'Revisão' ? <CheckNome value={revisaodoc} rules={nameDoc === '' ? 'form-control is-invalid' : 'form-control is-valid'} block={false}  name={function(name){
                setNamedocrev(name)
                setNameDoc('') 
                setNameDoc(name)
                }} /> : '' }


                {objectForm.TipoSolicitacao === 'Revisão' &&
                    <div className="form-row">
                        <div className="col">
                                <label>Revisão Atual</label>
                                <input type="text" className="form-control" 
                                
                                value={revisao}
                                disabled={true}/>
                        </div>
                        <div className="col">
                                <label>Revisão em fluxo</label>
                                <input type="text" className="form-control" 
                                
                                value={revisao ? revisao + 1: ''}
                                disabled={true}/>
                        </div>
                    </div>
                    
                }

           
            <div className="form-group">
                <label >Justificativa</label>
                <textarea 
                
                className={objectForm.justificativa === '' ? 'form-control is-invalid' : 'form-control is-valid'}
                
                onChange={(event)=>{
                
                    setForm({...objectForm,['justificativa']:event.target['value']})
                }
                } value={objectForm.justificativa}   rows={3}/>
            </div>
          


















    
        
    
            <div className="custom-control custom-checkbox mb-3">
                <input type="checkbox" onChange={event=> setdisableButton(event.target.checked)}   className={ !disableButton ? "custom-control-input is-invalid" : "custom-control-input is-valid" } id="customControlValidation1" required/>
                <label className="custom-control-label" htmlFor="customControlValidation1" >Declaro que conheço sobre formatação de documentos</label>
                <div className="invalid-feedback">Possuir conhecimento sobre a formatação do documento é fundamental para a inserção do item</div>
            </div>    

                

            <button type="button" disabled={!disableButton} style={{marginTop:'10px',cursor:!disableButton ? 'not-allowed': 'pointer'}}  className="btn btn-primary btn-lg btn-block" 
            
            onClick={senSmall}
            >Enviar</button> 
        </form>


        </>

    )


}

export default Form
