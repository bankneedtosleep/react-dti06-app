import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './views/home'
import MyPageA from './views/MyPageA'
import MyPageB from './views/MyPageB'
import MyPageC from './views/MyPageC'
import MyPageD from './views/MyPageD'
import NotFound from './views/NotFound'
export default function App() {
  return (
    <>
      <BrowserRouter >
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypageA" element={<MyPageA />} />
      <Route path="/mypageB" element={<MyPageB />} />
      <Route path="/mypageC" element={<MyPageC />} />
      <Route path="/mypageD" element={<MyPageD />} />
      <Route path="*" element={<NotFound />} key='NotFound'/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
