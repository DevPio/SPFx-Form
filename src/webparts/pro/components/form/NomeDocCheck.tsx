import * as React from 'react';




interface propsNameCheck{
  name: any,
  block: boolean,
  value: Array<any>,
  rules: any
}

  
const CheckNome : React.FunctionComponent<propsNameCheck>  = ({name, block, value, rules})=>{

  

    return (
      <>
    
      
      <div className="form-group">
          <label >Nome documento</label>

          <select className={rules} onChange={(event)=> name(event.target['value'])}>
            <option></option>
            {
              value.map(item=>(
                <option>{item}</option>
              ))
            }
          </select>   
      </div>
      
     
  
      </>
    )

  

};


export default CheckNome;