import React from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Trending from './components/trending/Trending'
import Creators from './components/creator/Creators'
import Category from './components/categories/Category'
import Discover from './components/discover/Discover'
import Mashrooms from './components/mashrooms/Mashrooms'
import Works from './components/works/Works'
import Digest from './components/digest/Digest'
import Footer from './components/footer/Footer'

const App = () => {
//   const fruits = ["Olma", "Banan", "Uzum", "Nok"];
//   const colors = ["Qizil", "Yashil", "Ko'k"];
//   const students = [
//   { id: 1, name: "Ali", grade: 5 },
//   { id: 2, name: "Vali", grade: 4 },
//   { id: 3, name: "Aziza", grade: 3 },
//   ];


  return (
    <div>
      <Header/>
      <Hero/>
      <Trending/>
      <Creators/>
      <Category/>
      <Discover/>
      <Mashrooms/>
      <Works/>
      <Digest/>
      <Footer/>
      {/* {fruits.map((item, index) => (
        <li>{item}</li>
      ))}

      {colors.map((item,index)=>(
        <li>{index}{item}</li>
      ))}

      {students.map((student)=>(
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Grade: {student.grade}</p>
        </div>
      ))}
      {students.filter(student => student.grade >= 4).map((student)=>(
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>Grade: {student.grade}</p>
        </div>
      ))} */}
    </div>
  )
}

export default App
