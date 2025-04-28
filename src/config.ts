import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCRjzYQ5U67izh7RsHWRxjaedqS3UxobTo',
  authDomain: 'memoapp-2b3fc.firebaseapp.com',
  projectId: 'memoapp-2b3fc',
  storageBucket: 'memoapp-2b3fc.firebasestorage.app',
  messagingSenderId: '593602891175',
  appId: '1:593602891175:web:3e8241e646529548867a82'
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }
