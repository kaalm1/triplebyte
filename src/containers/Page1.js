import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Container } from 'semantic-ui-react'
import Menu from './Menu'

const Page1 = (props) => {
  return(
    <Container>
      <Menu {...props}/>
    </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
