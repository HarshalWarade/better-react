import './App.css'
import Page from './components/Page'
import UserContextProvider from './contextProviders/UserContextProvider'

function App() {

  return (
    <>
      <UserContextProvider>
        <Page />
      </UserContextProvider>
    </>
  )
}

export default App
