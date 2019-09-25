import React from 'react'
import { Header, Card } from 'semantic-ui-react'
// const width = screen.width

const BasicCard = (props) => {
  const _onClick = () => {
    let response = window.prompt("Please fill out a card")
    props.updateData(response, props.idx)
  }

  return(
    <div style={{margin:25/2, width: '25%', overflow:'auto'}}>
      <div style={{display:'flex', backgroundColor: props.titleColor, color: 'white', justifyContent:'center', alignItems:'center', height:30}}>{props.title}</div>

      {props.data.map((x,i)=>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          {props.idx !=0 && <div onClick={()=>props.moveLeft(i, props.idx)} style={{margin:10}}>{"<"}</div>}
          {x}
          {props.idx != 3 && <div onClick={()=>props.moveRight(i, props.idx)} style={{margin:10}}>{">"}</div>}
        </div>
      )}

      <div onClick={_onClick}>
        + Add A Card
      </div>
    </div>
  )
}

export default BasicCard
