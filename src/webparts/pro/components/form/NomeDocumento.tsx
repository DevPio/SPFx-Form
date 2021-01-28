import * as React from 'react';



interface propsName{
  name: any,
  block: boolean,
  value: Array<any>,
  rules: any
}

  
const NomeDocumento : React.FunctionComponent<propsName>  = ({name, block, value ,rules})=>{

  

    return (
      <>
    
      
      <div className="form-group">
          <label >Nome documento</label>
          <input type="text" className={rules}  disabled={block} onKeyUp={(event)=> name(event.target['value']) }  />
      </div>
      
     
  
      </>
    )
  

};


export default NomeDocumento;