import React from 'react'
import { Table, Tag } from 'antd';

const columns = [{
  title: 'Name',
  key:'Name',
  render: text => text.profile.first_name
},{
    title: 'LastName',
    key:'LastName',
    render: text => text.profile.last_name
  },{
    title: 'Npi',
    key:'Npi',
    render: text => text.npi
  },{
    title: 'Languages',
    key:'Languages',
    render: text => text.profile.languages.map((e,i)=>(<Tag color="blue" key={i}>{e.name}</Tag>))
  }];
const List =(props)=>{
    return (
        <Table columns={columns} rowKey="uid" pagination={{'pageSize':20,'hideOnSinglePage':true}} dataSource={props.peoples} />
    )
}
export default List 