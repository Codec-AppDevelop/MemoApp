import { View, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import LogOutButton from '../../components/logOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
  const navigation = useNavigation()
  useEffect(() => {
      navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy('updateAt', 'desc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        console.log('memo', doc.data())
        const{ bodyText, updateAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updateAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <View>
        {memos.map((memo) => {
          return <MemoListItem memo={memo} />
        })}
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='Plus' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffffff'
  }
})

export default List
