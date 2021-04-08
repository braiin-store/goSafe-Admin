import 'firebase/database'

import firebase from 'firebase/app'
import config from './firebase.json'

firebase.initializeApp(config)

export default firebase.database()