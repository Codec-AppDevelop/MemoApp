import { Stack } from 'expo-router'

const Layout = ():JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: '#5065ED'
    },
    headerTintColor: '#FFFFFF',
    headerTitle: 'Memo App',
    headerBackTitle: 'Back',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    headerTitleAlign: 'center'
  }} />
}

export default Layout
