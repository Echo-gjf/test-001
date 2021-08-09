import mockjs from 'mockjs';
import moment from 'moment';
import { delay } from 'roadhog-api-doc';
import defaultSettings from '../src/defaultSettings';

const proxy = {

  'GET /gjf/demo':(req, res) => {
    res.status(200).send({
      data:{
        total:8,
        records:[
          {
            id: 1,
            readStatus: false,
            messageTitle: 'a',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试一',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 2,
            readStatus: false,
            messageTitle: 'b',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试一',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 3,
            readStatus: false,
            messageTitle: 'c',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试一',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 4,
            readStatus: false,
            messageTitle: 'd',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试二',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 5,
            readStatus: false,
            messageTitle: 'e',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试二',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 6,
            readStatus: false,
            messageTitle: 'f',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试二',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 7,
            readStatus: false,
            messageTitle: 'f',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试三',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 8,
            readStatus: false,
            messageTitle: 'g',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试三',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
        ]
      }
    })
  },

  'GET /gjf/demo/test01':(req, res) => {
    res.status(200).send({
      data:{
        total:3,
        records:[
          {
            id: 1,
            readStatus: false,
            messageTitle: 'a',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试一',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 2,
            readStatus: false,
            messageTitle: 'b',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试一',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 3,
            readStatus: false,
            messageTitle: 'c',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试一',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
        ]
      }
    })
  },
  'GET /gjf/demo/test02':(req, res) => {
    res.status(200).send({
      data:{
        total:3,
        records:[
          {
            id: 4,
            readStatus: false,
            messageTitle: 'd',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试二',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 5,
            readStatus: false,
            messageTitle: 'e',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试二',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 6,
            readStatus: false,
            messageTitle: 'f',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试二',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
        ]
      }
    })
  },
  'GET /gjf/demo/test03':(req, res) => {
    res.status(200).send({
      data:{
        total:2,
        records:[
          {
            id: 7,
            readStatus: false,
            messageTitle: 'f',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试三',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
          {
            id: 8,
            readStatus: false,
            messageTitle: 'g',
            messageContent:
              '您有新的标准商机流程工单已超时，任务单号：DD20210705150851345，请及时处理。',
            messageType: '测试三',
            Time: moment().format('YYYY-MM-DD HH:mm:ss'),
            disabled: false,
          },
        ]
      }
    })
  },
};




export default delay(proxy, defaultSettings.delay);
