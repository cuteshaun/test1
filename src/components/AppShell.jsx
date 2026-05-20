import Sidebar from './Sidebar.jsx'
import MainHeader from './MainHeader.jsx'
import EventSetupGuide from './EventSetupGuide.jsx'
import AttendeeModule from './AttendeeModule.jsx'

export default function AppShell() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <MainHeader />
        <EventSetupGuide />
        <AttendeeModule />
      </main>
    </div>
  )
}
