'use strict'
const co = require('co')
const prompt = require('co-prompt')
const config = require('../bin/templates')
const chalk = require('chalk')
const fs = require('fs')

module.exports = () => {
 co(function *() {

   // 分步接收用户输入的参数
   let tplName = yield prompt('模板名称: ')
   let gitUrl = yield prompt('Git https 地址: ')
   let branch = yield prompt('分支(默认为master): ')
	// 避免重复添加
   if (!config.tpl[tplName]) {
     config.tpl[tplName] = {}
     branch==""?branch="master":branch
     config.tpl[tplName]['url'] = gitUrl.replace(/[\u0000-\u0019]/g, '') // 过滤unicode字符
     config.tpl[tplName]['branch'] = branch
   } else {
     console.log(chalk.red('模板名称已存在!'))
     process.exit()
   }
   
   // 把模板信息写入templates.json
   fs.writeFile(__dirname + '/../bin/templates.json', JSON.stringify(config), 'utf-8', (err) => {
     if (err) console.log(err)
     console.log(chalk.green('增加新模板成功!\n'))
     console.log(chalk.grey('当前模板列表为: \n'))
     console.log(config.tpl)
     console.log('\n')
     process.exit()
    })
   
 })
}