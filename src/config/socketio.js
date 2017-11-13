import Vue from 'vue';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';
import store from '../store/index';


const apiRoot = process.env.API_ROOT;

export default function () {
  const socketInstance = socketio(apiRoot, {
    transports: ['websocket'],
  });
  Vue.use(VueSocketIO, socketInstance, store);
}
