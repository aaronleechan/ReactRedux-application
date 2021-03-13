import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Footer from './Footer'

const mapStateToProps = (state) =>{}

const mapDispatchToProps = dispatch => bindActionCreators({},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Footer);