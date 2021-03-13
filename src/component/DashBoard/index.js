import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import DashBoard from './DashBoard'
//import {getDashBoardList} from '../../store/generic-operation/generic-operation-actions'

const mapStateToProps = (state) =>{
    // console.log(state)
}

const mapDispatchToProps = dispatch => bindActionCreators({
    //getDashBoardList
},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);