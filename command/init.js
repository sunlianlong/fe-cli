'use strict'
const exec = require('child_process').exec
const co = require('co')
const prompt = require('co-prompt')
const config = require('../bin/templates')
const chalk = require('chalk')

module.exports = () => {
 co(function *() {
    // 处理用户输入
      let tplName = yield prompt('模板名称: ')
      let projectName = yield prompt('项目名称: ')
      let gitUrl
      let branch

    if (!config.tpl[tplName]) {
        console.log(chalk.red('\n × 模板不存在!'))
        process.exit()
    }
    gitUrl = config.tpl[tplName].url
    branch = config.tpl[tplName].branch
    if(gitUrl.indexOf(".git") > 0){
      // git命令，远程拉取项目并自定义项目名
      let cmdStr = `git clone ${gitUrl} ${projectName} && cd ${projectName} && git checkout ${branch}`
      console.log(chalk.white('\n 正在建立项目...'))
      exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
          console.log(error)
          process.exit()
        }
        console.log(chalk.green('\n √ 项目建立成功!'))
        console.log(`\n cd ${projectName} && npm install \n`)
        process.exit()
      })
    }else{
      console.log(chalk.red('\n × 模板的url不是git地址,请重新添加!'))
      process.exit()
    }
    
  })
}