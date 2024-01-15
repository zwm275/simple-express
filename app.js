const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
const port = 4747

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/api/projects', (req, res) => {
    let data = {
        code: 0,
        project_list: [{
            key: '1',
            projectName: '测试项目',
            section: '工程部',
            owner: '黄晓明',
            createTime: '2014-01-01',
        }]
    }
    res.send(data)
})
app.post('/api/login', (req, res) => {
    const reqBody = req.body
    let data = {}
    if (reqBody.username === '1') {
        data = {
            code: 0,
            msg: 'ok'
        }
        res.send(data)
        return
    }
    data = {
        code: 402,
        msg: '登陆失败'
    }
    res.send(data)
})

app.post('/api/register', (req, res) => {
    const reqBody = req.body
    let data = {}
    if (reqBody.username === '1') {
        data = {
            code: 0,
            msg: 'ok'
        }
        res.send(data)
        return
    }
    data = {
        code: 402,
        msg: '注册失败'
    }
    res.send(data)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})