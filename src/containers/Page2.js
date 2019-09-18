import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Page2 = (props) => {
  return(
    <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
