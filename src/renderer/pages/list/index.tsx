import React, { Component, Fragment } from 'react';
// 路由跳转-umi插件
import Link from 'umi/link';
// 状态管理-dvajs
import { connect } from 'dva';


import {
  Card,
  Row,
  Col,
  Icon,
  Button,
  List,
  Modal,
  Tabs,
  Table,
  Form,
  Input,
  Select,
  Radio,
  Switch,
  Upload,
  Descriptions,
  Skeleton,
  Spin,
  message,
  Popover,
  Statistic,
} from 'antd';

// Antd子组件注册
const { TabPane } = Tabs;
const { TextArea } = Input;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const FormItem = Form.Item;
const { Option } = Select;
const { ColumnGroup, Column } = Table;
/* Antd的UI组件-end */

import styles from './index.less';


class demoList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: '我是列表页'
    }
  }

  render(){
    const {
      title
    } = this.state;

    return (
      <div className={styles.g_box}>
        <h2>列表页</h2>
        <Row gutter={16}>
          <Col>标题:{title}</Col>
        </Row>
        <Row gutter={16}>
            <Link to="/">回首页</Link>
        </Row>
      </div>
    )
  }
  
}

export default demoList;
