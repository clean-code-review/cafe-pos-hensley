import { PosPage } from '@/PosPage'
import { OverlayProvider } from '@toss/use-overlay'

function App() {
  return (
    <OverlayProvider>
      <PosPage />
    </OverlayProvider>
  )
}

export default App
