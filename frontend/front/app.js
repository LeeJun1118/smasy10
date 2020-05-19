// const express = require('express')
// var app = express()
// const socket = require('socket.io')
// const server = require('http').createServer(app)
// const portNo = 8080
//
// server.listen(portNo, () => {
//     console.log('server is running on port ' + portNo)
// })
//
// app.use('/public',express.static('./public'))
// app.get('/', (req, res) => {
//     res.redirect(302, '/public')
// })
//
// const socketio = require('socket.io')
// const io = socketio.listen(server)
//
// io.on('connection', (socket) => {
//     console.log('u: '+ socket.client.id);
//
//     socket.on('chat_msg', (msg) => {
//         console.log('m: ' + msg)
//         io.emit('chat_msg', msg)
//     })
// });
//
//
//
// import socketio from 'socket.io-client'
// const socket = socketio.connect('http://localhost:8080')
//
// class ChatForm extends Component{
//     constructor(props){
//         super(props);
//
//         this.state = {
//             username: '',
//             message: '',
//         };
//     }
//
//     nameChanged(e){
//         this.setState({name:e.target.value})
//     }
//     messageChanged(e){
//         this.setState({message:e.target.value})
//     }
//     send(){
//         socket.emit('chat_msg',{
//             name : this.state.name,
//             message : this.state.message
//         })
//         this.setState({message : ''})
//     }
// }
//
// class ChatApp extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             logs: []
//         };
//     }
//
//     componentDidMount() {
//         socket.on('chat_msg',(obj) =>{
//             const logs2 = this.state.logs
//             obj.key = 'key_' + (this.state.logs.length + 1)
//             console.log(obj)
//             logs2.unshift(obj)
//             this.setState({logs: logs2})
//         })
//     }
//
//     render() {
//         const messages = this.state.logs.map(e =>(
//             <div key={e.key} >
//                 <span>{e.username}</span>
//                 <span>{e.message}</span>
//             </div>
//         ))
//         return(
//             <div>
//                 <h1>실시간 채팅</h1>
//                 <ChartForm/>
//                 <div>{messages}</div>
//             </div>
//         )
//     }
// }