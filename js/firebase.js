// Конфиг Firebase (замените на свой!)
const firebaseConfig = {
  apiKey: "AIzaSyCyGrSQpCz8liu-gzJGvCEqs6W2ylmAL9A",
  authDomain: "digital-office-a63f0.firebaseapp.com",
  databaseURL: "https://digital-office-a63f0-default-rtdb.firebaseio.com",
  projectId: "digital-office-a63f0",
  storageBucket: "digital-office-a63f0.firebasestorage.app",
  messagingSenderId: "402399037378",
  appId: "1:402399037378:web:e5cf6263e27ba7d3e9b85b"
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Отправка сообщения
function sendMessage() {
    const message = document.getElementById('messageInput').value;
    database.ref('messages').push().set({
        text: message,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    });
    document.getElementById('messageInput').value = "";
}

// Получение сообщений
database.ref('messages').on('child_added', (snapshot) => {
    const msg = snapshot.val().text;
    const li = document.createElement('li');
    li.textContent = msg;
    document.getElementById('messages').appendChild(li);
});