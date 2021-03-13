import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Header from './Header'

const mapStateToProps = (state) =>{}

const mapDispatchToProps = dispatch => bindActionCreators({},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Header);