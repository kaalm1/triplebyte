import React, {useState} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Card, Container } from 'semantic-ui-react'
import Menu from './Menu'
import BasicCard from '../components/BasicCard'
import _ from 'lodash'

const Home = (props) => {
  const [data1, setData1] = useState(['hello','hello'])
  const [data2, setData2] = useState(['hello','hello'])
  const [data3, setData3] = useState(['hello','hello'])
  const [data4, setData4] = useState(['hello','hello'])

  const [data, setData] = useState(
    [
      {title: 'Winnie', titleColor: '#8E6E95', data: ['hello','hello'] },
      {title: 'Bob', titleColor: '#39A59C', data: ['hello','hello'] },
      {title: 'Thomas', titleColor: '#344759', data: ['hello','hello'] },
      {title: 'George', titleColor: '#E8741E', data: ['hello','hello'] },
    ]
  )

  const _updateData = (newData, idx) => {
    let temp = _.clone(data)
    let nd = _.concat(temp[idx].data, newData)
    temp[idx] = Object.assign({}, temp[idx], {data: nd})
    setData(temp)
  }

  const moveLeft = (row, col) => {
    let temp = _.clone(data)
    let correctCol = temp[col]
    let movedData = correctCol.data.splice(row, 1)
    let movedCol = _.concat(_.clone(temp[col - 1].data), movedData[0])
    temp[col] = Object.assign({}, temp[col], correctCol)
    temp[col-1] = Object.assign({}, temp[col-1], {data: movedCol})
    setData(temp)
  }

  const moveRight = (row, col) => {
    let temp = _.clone(data)
    let correctCol = temp[col]
    let movedData = correctCol.data.splice(row, 1)
    let movedCol = _.concat(_.clone(temp[col + 1].data), movedData[0])
    temp[col] = Object.assign({}, temp[col], correctCol)
    temp[col+1] = Object.assign({}, temp[col+1], {data: movedCol})
    setData(temp)
  }



  return(
    <div style={{display:'flex', flexDirection:'row', marginLeft:25/2, marginRight:25/2}}>
      {
        data.map((x,i)=><BasicCard idx={i} title={x.title} titleColor={x.titleColor} data={x.data} updateData={_updateData} moveRight={moveRight} moveLeft={moveLeft}/>)
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
