import { connect } from 'dva';
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Card,Table, Button,Tag ,Modal ,Input ,Select} from 'antd';
import request from '@/utils/request';

class App extends React.Component {
  state = {
    data:[],
    selectedRowKeys: [], // Check here to configure the default column
    modaltitle: false,
    modalcontent: false,
    modaltime: false,
    visible: false,
  };

  componentDidMount() {
    request('/gjf/demo', { method: 'get' }).then(response => {
      console.log(response.data)
      const listArr = response.data.records.slice();
      console.log(listArr)
      this.setState({ data: listArr });
    });
  };

  handcanle  = () => {
    this.setState({
      visible: false,
    });
  };

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  classChange = (value) => {

    let classtype = 'demo';
    if(value === '测试一'){
      classtype += '/test01';
    }else if(value === '测试二'){
      classtype += '/test02';
    }else if(value === '测试三'){
      classtype += '/test03';
    }
    request(`/gjf/${classtype}`, { method: 'get' }).then(response => {
      console.log(response.data)
      const listArr = response.data.records.slice();
      console.log(listArr)
      this.setState({ data: listArr });
    });
    console.log(`${value} +testclass`);
  }

  start = (selectedRowKeys) => {
    console.log(selectedRowKeys);
    // data[index].readStatus = true;
    // console.log(data[index].readStatus);
    // console.log(data)
  }

  render() {
    const { data } = this.state;
    const columns = [
      {
        title: '阅读状态',
        dataIndex: 'readStatus',
        width:80,
        align:'center',
        render: (readStatus) => {
          const color = readStatus ? 'gray' : 'blue';
          const tagContent = readStatus ? '已读' : '未读';
          return <Tag
            onClick={()=>{
              console.log(data[0].readStatus);
              console.log(data);
              }
            }
            color={color}>{tagContent}</Tag>;
        },
      },
      {
        title: '消息标题',
        dataIndex: 'messageTitle',
        width:240,
        render:(text ,record ,index ) => {
          return(
            <div>
              <a onClick={()=>{
                this.setState({
                  visible: true,
                  // 修改modal中的状态：消息标题，消息内容
                  modaltitle: record.messageTitle,
                  modalcontent: record.messageContent,
                  modaltime: record.Time,
                });
                console.log(index);
                data[index].readStatus = true;
                console.log(data[index].readStatus);
                console.log(data)
              }}
              >
                {record.messageTitle}
              </a>
            </div>
          )
          }
      },
      {
        title: '消息内容',
        dataIndex: 'messageContent',
        ellipsis:true,
      },
      {
        title:'消息类型',
        dataIndex:'messageType',
        width:140,
        align:'center',
      },
      {
        title:'时间',
        dataIndex:'Time',
        width:160,
        align:'center',
      }
    ];
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      columnWidth:40,
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <Card
        size='default'
        title="消息列表"
        extra={
          <Input.Group compact=' '>
            <Select
              allowClear
              placeholder="请选择"
              style={{ width: '40%' }}
              onChange={value => {
                this.classChange(value);
                console.log(`ggg${value}`);

              }}
            >
              <Select.Option key='测试一'>测试一</Select.Option>
              <Select.Option key='测试二'>测试二</Select.Option>
              <Select.Option key='测试三'>测试三</Select.Option>
            </Select>
            <Input.Search
              allowClear
              style={{ width: '60%' }}
              placeholder="消息标题搜索"
              onSearch={value => {
                // this.searchData(value);
                console.log(data[0].messageTitle);
                const a = value;
                const str = ['',...a,''].join('.*');
                const reg = new RegExp(str);
                const searchArr = [];
                for(let i=0; i < data.length; i++){
                  console.log(reg.test(data[i].messageTitle));
                  if(reg.test(data[i].messageTitle)){
                    searchArr.push(data[i]);
                  }
                }
                console.log(searchArr);
                this.setState({ data: searchArr });
                console.log(data);
                console.log(`gggsearch ${value}`);
              }}
            />
          </Input.Group>
        }
      >
        <div>
          <Table
            rowKey={record=> record.id}
            bordered
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            size='small'
            pagination={{
              pageSize:6,
              showQuickJumper:true,
              showTotal:() => `共计 ${data.length} 条`,
            }}
          />
          <div style={{ marginBottom: 16 }}>
            <Button
              type="primary"
              onClick={() => {
                console.log(selectedRowKeys);
                for(let i = 0; i < selectedRowKeys.length; i++){
                  console.log(selectedRowKeys[i]);
                  for(let j = 0; j < data.length; j++){
                    if(data[j].id === selectedRowKeys[i]){
                      console.log(data[j].readStatus);
                      data[j].readStatus = true;
                      console.log(data[j].readStatus);
                    }
                  }
                }
                console.log(data);
                this.setState({
                  visible:false
                })
              }
                // console.log(selectedRowKeys)
                // this.start
            }
              hidden={!hasSelected}
              loading={loading}
            >
              标记已读
            </Button>
            <span style={{ marginLeft: 8 }}>
              {hasSelected ? `已选择 ${selectedRowKeys.length} 项` : ''}
            </span>
          </div>
          <Modal
            width='50%'
            visible={this.state.visible}
            title={this.state.modaltitle}
            footer={this.state.modaltime}
            onCancel={this.handcanle}
          >
            {this.state.modalcontent}
          </Modal>
        </div>
      </Card>

    );
  }
}
export default connect(({ setting }) => ({
  size: setting.size,
}))(App);
