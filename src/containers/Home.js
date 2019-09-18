import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Container } from 'semantic-ui-react'
import Menu from './Menu'

const Home = (props) => {
  return(
    <Container>
      <Menu {...props}/>
      Hello how are you :)
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
