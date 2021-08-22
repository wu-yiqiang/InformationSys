# -*- coding:utf-8 -*-
# import re

# from urllib.parse import urlencode
# import os
# from requests.exceptions import RequestException
# import json
# import pymongo
# from bs4 import BeautifulSoup
# from config import *
# from hashlib import md5
import pymysql
import requests
import random


# # 建立数据库的链接对象
# client = pymongo.MongoClient(MONGO_URL)
# # 数据库的名称
# db = client[MONGO_DB]


class request:
    ua_list = [
      'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1 Edg/93.0.4577.42',
    ]
    headers = {
        # 'Referer':'',
        'User-Agent':random.choice(ua_list),
    }
    # 初始化
    def __init__(self, baseUrl, requestItem):
        self.baseUrl = baseUrl
        self.url = baseUrl
        self.requestItem = requestItem
        for key, values in self.requestItem.items():
            middleValue = key + '=' + str(values) + '&'
            self.url += middleValue
        self.url = self.url[:-1]


    # send request
    def sendRequest(self):
        session = requests.Session()
        response = session.get(url=self.url,headers=self.headers)
        # html = html.content.decode('utf-8', 'ignore')
        print(response)

    # 接收数据
    def receiveResonse(self):
        return 0


class databases:
    cur = None
    conn = None

    # 初始化
    def __init__(self, db_config):
        self.db_config = db_config

    # 连接数据库
    def connect_DB(self):
        self.conn = pymysql.connect(host=self.db_config['host'], user=self.db_config['user'],
                                    password=self.db_config['password'], port=self.db_config['port'],
                                    db=self.db_config['db'], charset=self.db_config['charset'])
        self.cur = conn.cursor()

    # 插入数据
    def insertData(self, sql):
        self.cur.execute(sql)
        data = self.cur.fetchone()

    def save_Data():
        return 0

    def disconnetc_DB(self):
        self.con.close()


def main():
    # db_config= {'host':'127.0.0.1','user':'root','password':'root','port':3306,'db':'vite_app','charset':'utf8'}
    # db = databases(db_config)
    # db.connect_DB()
    Url = "https://m.toutiao.com/list/?"
    max_behot_time=1548840494
    data  =  get_params(max_behot_time)
    requestItem = {
        'tag': '__all__',
        'ac': 'wap',
        'count': 20,
        'format': 'json_raw',
        'as': data['as'],
        'cp': data['cp'],
        'max_behot_time': max_behot_time,
        '_signature': data['_signature'],
        'i': max_behot_time
    }
    # 发送数据请求
    req = request(Url, requestItem)
    req.sendRequest()
    # db.insertData('INSERT INTO news_tb ( news_title, news_author,news_picture,news_update_time ) VALUES (items.news_title,item.news_author,item.news_picture,item.news_update_time);)

def get_params():
    var
    e = Math.floor((new Date).getTime() / 1e3)
    , t = e.toString(16).toUpperCase()
    , n = o(e).toString().toUpperCase();


if (8 !== t.length)
    return {
    as: "479BB4B7254C150",
        cp: "7E0AC8874BB0985"
    };
    for (var r = n.slice(0, 5), i = n.slice(-5), a = "", s = 0; s < 5; s++)
    a += r[s] + t[s];
    for (var u = "", l = 0; l < 5; l++)
        u += t[l + 3] + i[l];
    return {
    as: "A1" + a + t.slice(-3),
        cp: t.slice(0, 3) + u + "E1"
    }
if __name__ == '__main__':
    main()
