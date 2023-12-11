import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const SockJs = new SockJS('http://localhost:4444/', {
  cors: {
    origin: '*',
  },
});

export const StompClient = Stomp.over(SockJs);
