import swal from 'sweetalert';

import {obj} from '../../../../../src/interfaces/insertDoc';

export const verifica = (data:obj) =>{
    

    if(!data.TipoSolicitacao && !data.Abrangencia && !data.classificao && !data.processo && !data.unidade
        && !data.usoDocumento && !data.disponivelParceira && !data.treinamento && !data.justificativa){
            swal({
                title: "Por favor, preencha todos os campos obrigatórios",
                text: "",
                icon: "error",
                buttons: [false, "Ok"],
                dangerMode: false,
            })
    
            return false


    }

    else if(!data.TipoSolicitacao){
        swal({
            title: "Por favor, preencha o campo tipo de solicitação",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.Abrangencia){
        swal({
            title: "Por favor, preencha o campo abrangência",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.classificao){
        swal({
            title: "Por favor, preencha o campo classificação",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.processo){
        swal({
            title: "Por favor, preencha o campo processo",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.unidade){
        swal({
            title: "Por favor, preencha o campo unidade",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.usoDocumento){
        swal({
            title: "Por favor, preencha o campo uso documento",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.disponivelParceira){
        swal({
            title: "Por favor, preencha o campo Disponível para Parceira",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.treinamento){
        swal({
            title: "Por favor, preencha o campo treinamento",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.justificativa){
        swal({
            title: "Por favor, preencha o campo justificativa",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }
    else if(!data.impacto){
        swal({
            title: "Por favor, preencha o campo impacto",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else if(!data.nomeDocumento){
        swal({
            title: "Por favor, preencha o campo nome documento",
            text: "",
            icon: "error",
            buttons: [false, "Ok"],
            dangerMode: false,
        })

        return false

    }else {
        return true
    }




}



