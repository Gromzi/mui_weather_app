import './styles/main.scss'
import TodayView from './views/TodayView'
import WeekView from './views/WeekView'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="appContainer">
      <TodayView />
      <WeekView />

      <NavigationBar />
    </div>
  )
}

export default App
