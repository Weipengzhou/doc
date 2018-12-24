import React,{Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions';
import styles from './Index.module.css' 
import Lists from '../../Components/List/List'
import CardLists from '../../Components/CardList/CardList'
import {Breadcrumb,Divider, Row, Col, Button,Input,Spin } from 'antd'

const Search = Input.Search;
class Index extends Component{
    constructor(props){
        super(props)
        this.state={
            way : 0,
            search:false
        }
    }
    componentWillMount(){
        this.props.GetDoctorList({limit:236,user_key:'2d90accf45edb19e93e1b50a009d5a62'})
    }
    
    wayOnclick(e){
        this.setState({way : e})
    }
    onSearchClick(e){
        if(e===''){
            this.props.GetDoctorList({limit:236,user_key:'2d90accf45edb19e93e1b50a009d5a62'})
            this.setState({search:false})
        }else{
            this.props.GetSearchList({value:e,list:this.props.list})
            this.setState({search:true})
        }
    }
   
   render(){
       const {list,search_list} = this.props
       return (
           list?<div className={styles.Index}>
           <Row>
               <Col span={4}>
                    <Breadcrumb>
                       <Breadcrumb.Item style={{'lineHeight':'30px'}}>医生名单</Breadcrumb.Item>
                    </Breadcrumb>
               </Col>
               <Col span={5}>
                   <Button type={this.state.way===0?'primary':''} className={styles.Button} onClick={this.wayOnclick.bind(this,0)} >列表展示</Button>
                   <Button type={this.state.way===1?'primary':''} className={styles.Button} onClick={this.wayOnclick.bind(this,1)}>卡片展示</Button>
               </Col>
               <Col span={4}>
                   <Search placeholder=""  enterButton onSearch={this.onSearchClick.bind(this)} />
               </Col>
              
           </Row>
           <Divider/>
           {this.state.search? (this.state.way===0? <Lists peoples={search_list.data}/>:<CardLists peoples={search_list.data}/>):this.state.way===0? <Lists peoples={list.data}/>:<CardLists peoples={list.data}/>}
           
          
       </div>:<div className={styles.loading}> <Spin size="large"/></div>
       )
   }
}

function mapStateToProps(state) {
    return {list:state.doctor_list,search_list:state.search_list}
}
  
function mapDispatchToProps(dispatch) {
    return {
       ...bindActionCreators(actions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);