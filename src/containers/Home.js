import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Home = (props) => {
  return(
    <div>
      Hello how are you :)
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
