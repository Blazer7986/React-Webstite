import Footer from "./components/Footer.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import RouteLayout from "./layout/RouteLayout.jsx";
import ContactLayout from "./layout/ContactLayout.jsx";
import ContactInfo from "./components/ContactInfo.jsx";
import ContactForm from "./components/ContactForm.jsx";

// How to style React components with CSS
// -----------------------------------------
// Not including frameworks or preprocessors
// 1. External - CSS files like index.CSS
// Pros: Great for small scale projects
// 2. modules - Create a folder and module file
// Pros: Used for individual components with unique styles
// 3. inline - Using style variable
// Pros: Good for small components with minimal styling.

// props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         <Component key=value />

// React hook = Special feature that allows functional components to use
//              React features without writing class components (useState,
//              useEffect, useContext, useReducer, useCallback, and more.

// useState() = React hook that allows the creation of a stateful variable
//              AND a setter function to update its value in the Viritual
//              DOM.        EX) [name, setName]

// useEffect() = React hook that tells React DO SOME CODE WHEN (pick one):
//               This component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})             // Runs after every re-render
// 2. useEffect(() => {}, [])         // Runs only on mount
// 3. useEffect(() => {}, [values])   // Runs only on mount + when value changes

// USES
// 1) Event Listensers    2) DOM manipulation   3) Subscription (real-time updates)
// 4) Fetching Data from APIs   5) Clean up with a component unmounts

// useContext() - React hook that allows you to share values between multiple
//                levels of components without passing props through each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext();
// 3. <MyComponent.Provider value={value}>
//    <Child/>
//    </MyComponent.Provider>

// CONSUMER COMPONENT
// 1. import React, {useContext} from 'react';
//    import {MyContext} from './ComponentA';
// 2. const value = useContext(MyContext);

// useRef() - "use Reference" Does not cause re-renders when its value changes.
//            When you want a component to "remember" some information, but you
//            don't want that information to trigger new renders.
//
//            1. Accessing/ Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
