import React,{Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import styles from './Analysis.module.css' 
import Num from '../../Components/Num'
import {Spin,Row, Col,Breadcrumb,Divider} from 'antd'
import PieChart from '../../Components/PieChart/PieChart'
class Analysis extends Component{
    componentWillMount(){
        this.props.GetDoctorList({limit:236,user_key:'2d90accf45edb19e93e1b50a009d5a62'})
    }
    render(){
        const numb = this.props.list? Num(this.props.list.data):null
        return(
            numb?<div style={{"minHeight":'100%'}}>
                <Row>
                <Col span={6}>
                        <Breadcrumb>
                        <Breadcrumb.Item style={{'lineHeight':'30px'}}>医生性别分析</Breadcrumb.Item>
                        </Breadcrumb>
                </Col>
            
           </Row>
           <Divider/>
           <Row>
            <Col span={16} offset={4}>
            <PieChart data={numb}/>
            　<p>总结：一共有{this.props.list.meta.total}名医生，其中男性(male){numb.male}人，女性(female){numb.female}人</p>
            </Col>
            </Row>
            </div>:<div className={styles.loading}> <Spin size="large"/></div>
        )
    }
}

function mapStateToProps(state){
    return{list:state.doctor_list}
}
function mapDispatchToProps(dispatch){
    return {
        ...bindActionCreators(actions, dispatch)
     }
}

export default connect(mapStateToProps,mapDispatchToProps)(Analysis)