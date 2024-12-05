// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";  // Firebase Storageをインポート

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk5rDBFG_IMTpgG8MPuGkXfa5vT-zixZY",
  authDomain: "minecraftnbshub.firebaseapp.com",
  projectId: "minecraftnbshub",
  storageBucket: "minecraftnbshub.firebasestorage.app",
  messagingSenderId: "845703628160",
  appId: "1:845703628160:web:4ec832624fcbcc04d02d65",
  measurementId: "G-DTZWRW29QK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Storageの初期化
const storage = getStorage(app);

// これでFirebase Storageが使用できるようになりました
export { storage };  // 他のファイルでも使えるようにStorageをエクスポート
