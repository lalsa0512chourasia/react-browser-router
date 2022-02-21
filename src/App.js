import './App.css';
import {Header} from './Components/Header'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Components/Home';
import {About} from './Components/About'
import {Contact} from './Components/Contact'
import {Support} from './Components/Support'
import {Team} from './Components/Team'
import { PageNotFound } from './Components/PageNotFound';
import {Student} from './Components/Student'

function App() {
  return (
    <div className="App">
     <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path='/student/:stuId' element={<Student/>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>

    </div>
  );
}

export default App;

// In this application we will be understanding how to add routing in the application : 

// Routing is a way of moving from one component to another component, it makes sure that your application is a single page application. In this case if you are broswer router then your page will never be reloaded and still you will be able to move from one component to another.

// REACT-ROUTER is the master library to acheive routing in react.
// This contains two small libraries : 
// react-router-dom : this is for web application
// react-router-native : this is for mobile application


// **************VERY IMPORTANT********************

// When you are starting with routing in your application, you have to make sure that your complete application is wrapped with the **Browswer Router**.


// When you are defining routes or all the paths then you have to make sure that all of them are wrapped with **Routes** 

// Then to define any route  we will be using **Route**
