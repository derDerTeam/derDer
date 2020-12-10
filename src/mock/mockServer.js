import Mock from 'mockjs'
import news from '@/mock/news'

Mock.mock('/mock/product/news',{code:200,data:news})