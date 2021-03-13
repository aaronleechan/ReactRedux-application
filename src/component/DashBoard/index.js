import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import DashBoard from './DashBoard'

const mapStateToProps = (state) =>{}

const mapDispatchToProps = dispatch => bindActionCreators({},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);