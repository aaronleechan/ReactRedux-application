import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import RouteComponent from './RouteComponent'

const mapStateToProps = (state) =>{}

const mapDispatchToProps = dispatch => bindActionCreators({},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(RouteComponent);