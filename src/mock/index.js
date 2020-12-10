import Mock from 'mockjs'
import recommend from './recommend.json'
Mock.mock('/mock/recommend',{code:200,data:recommend})