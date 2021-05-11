const { SyncHook } = require('tapable')

const hook = new SyncHook(['age'])

hook.tap('年龄18', (age) => {
    console.log('年龄18 貌美如花', age)
})

hook.call(20)