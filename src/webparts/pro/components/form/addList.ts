import {EventEmmiter} from './insert';

import {sp} from '@pnp/sp';
import {verifica} from './verifica';

import swal from 'sweetalert';


import {obj} from '../../../../../src/interfaces/insertDoc';







function addList(data:obj ): Promise<any>{


    return new Promise((resolve, reject)=>{
        sp.web.lists.getByTitle('Add').items.add({
            Abrang_x00ea_ncia:data['Abrangencia'],
            Abrang_x00ea_ncia_x0020_COD_x002:data['codeAbrange'],
            C_x00f3_d_x002e__x0020_Classific:data['codeClass'],
            C_x00f3_digo_x0020_Processo:data['codeProcess']['code'] || '',
            Classifica_x00e7__x00e3_o:data['classificao'],
            Coment_x00e1_rio:data['justificativa'],
            Coment_x00e1_rios_x0020_avalia_x:'',
            Macro_x002d_Processo:data['codeProcess']['MacroProcesso'],
            Nueva_x0020_columna1:data['processo'],
            Nueva_x0020_columna3:data['impacto'],
            Nueva_x0020_columna30:'',
            OData__UIVersionString:'',
            OData__x00c1_rea_x0020_do_x0020_Proces:data['codeProcess']['MacroProcesso'],
            Sigla_x0020_Diretoria:data['CodeUnidade']['SD'],
            Sigla_x0020_Unidade:data['CodeUnidade']['SU'],
            Tipo_x0020_solicita_x00e7__x00e3:data['TipoSolicitacao'],
            Title:data['nomeDoc'],
            Treinamento:data['treinamento'],
            Unidade:data['unidade'],
            field2:data['TipoSolicitacao'] == 'Inclusão' ? data['nomeDocumento']  : '',
            field8:data['TipoSolicitacao'] == 'Inclusão' ? ''  : data['nomeDoc'],
            Disp_x002e__x0020_p_x002f__x0020:data['disponivelParceira'],
            Uso_x0020_documento:data['usoDocumento'],
            Aplica_x00e7__x00e3_o:{
                results:data['estadoSet']    
            }
            
            

        }).then(r=> {
            resolve(r)
        })
        .catch(error=>{
            reject(error)
        })
    })
}



EventEmmiter.on('insert', async (data:obj) => {
    
    
    
    if(!verifica(data)){
        return
    }else{
   
    addList(data).then(r =>{
        

        if(r){
            swal({
                title: "Documento adicionado com Sucesso.",
                text: "Sera enviado um e-mail com os QSP's em cópia indicando a inclusão.",
                icon: "success",
                buttons: [false, "Ok"],
                dangerMode: false,
            })
        }
    
    console.log(r)
    
    })
    .catch(error=>{
        swal({
            title: "Por favor, entre em contato com equipe QSP",
            text: "Esse documento já está em andamento e não pode iniciar um novo fluxo.",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })
    })
}
})





