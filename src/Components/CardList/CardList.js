import React from 'react'
import { List, Card,Avatar,Tag} from 'antd'
const CardList =(props)=>{
    return (
       <div>
            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={props.peoples}
                pagination={{
                    pageSize: 20,
                    hideOnSinglePage:true
                  }}
                renderItem={(item,i) => (
                <List.Item key={i} style={{'textAlign':'center'}}>
                
                    <Card title={item.profile.first_name} extra={<Avatar src={item.profile.image_url} />}>
                    <div>Npi : {item.npi}</div>
                    <div>languages : {item.profile.languages.map((e,i)=>(<Tag color="blue" key={i}>{e.name}</Tag>))}</div>
                    <div>LastName : {item.profile.last_name}</div>
                    </Card>
                </List.Item>
                )}
            />
       </div>
    )
}
export default CardList 