import { PostContent } from './post.jsx'
import { Sidebar } from './Sidebar.jsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <div id="content">
        {/* Post */}
        <PostContent/>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  )
}

export default App
