# 完整python调用代码

import time
import execjs
import asyncio
from pyppeteer import launch
from urllib.parse import quote


def get_js():
    f = open("sign.js", 'r', encoding='utf-8')  # 打开JS文件
    htmlstr = f.read()
    return htmlstr


def get_des_psswd(e, c):
    js_str = get_js()
    ctx = execjs.compile(js_str)  # 加载JS文件
    return (ctx.call('get_page', e[0], c))  # 调用js方法  第一个参数是JS的方法名，后面的e和c是js方法的参数


async def main(key):
    browser = await launch(
        # headless=False
    )  # 将headless参数设为False，则变成有头模式
    page = await browser.newPage()

    # 设置页面视图大小
    await page.setViewport(viewport={'width': 1280, 'height': 800})

    # 是否启用JS，enabled设为False，则无渲染效果
    await page.setJavaScriptEnabled(enabled=True)
    await page.goto('https://www.toutiao.com/search/?keyword={}'.format(quote(key)))
    itmes = await page.cookies()
    cookie = ''
    for itme in itmes:
        name = itme['name']
        value = itme['value']
        cookie = cookie + name + '=' + value + ';'
    # 关闭浏览器
    await browser.close()
    return cookie[:-1]


def get_cookie(key):
    print('正在获取cookie...')
    return asyncio.get_event_loop().run_until_complete(main(key))


if __name__ == '__main__':
    key = '搜索关键字'
    cookie = get_cookie(key)
    url = [
        'https://www.toutiao.com/api/search/content/?aid=24&app_name=web_search&offset=0&format=json&keyword={}&autoloa'
        'd=true&count=20&en_qc=1&cur_tab=1&from=search_tab&pd=synthesis&timestamp={}'.format(quote(key),time.time())
    ]

    url.append(get_des_psswd(e=url, c=cookie))  # 生成signature
    iurl = '&_signature='.join(url)  # 合成带sign的api接口
    print('api_url:', url[1]) # 完整的api接口
    print('signature:', iurl) # signature加密串
    print('cookie:', cookie)  # 模拟用户cookie

