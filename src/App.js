import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import LoadingBar from 'react-top-loading-bar'

import React from 'react'

export default function App() {
  let apikey = "9007c3762a2c4532875e2cfbdc8e59c2"

  // const [progress, setProgress] = useState(0)

  return (
    <>

      <BrowserRouter>
        {/* <LoadingBar
          height="4"
          color='#f11946'
          progress={progress}
        /> */}
        <NavBar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={9} category="general" apikey={apikey} />} />
          <Route path="/business" element={<News key="business" pageSize={9} category="business" apikey={apikey} />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={9} category="entertainment" apikey={apikey} />} />
          <Route path="/health" element={<News key="health" pageSize={9} category="health" apikey={apikey} />} />
          <Route path="/science" element={<News key="science" pageSize={9} category="science" apikey={apikey} />} />
          <Route path="/sports" element={<News key="sports" pageSize={9} category="sports" apikey={apikey} />} />
          <Route path="/technology" element={<News key="technology" pageSize={9} category="technology" apikey={apikey} />} />
        </Routes>
      </BrowserRouter>

    </>

  )

}
