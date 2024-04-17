import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Body from './component/Body'
import Cart from './page/Cart'
import ErrorPage from './page/ErrorPage'
import { Provider } from 'react-redux'
import AppStore from './redux/AppStore'
import ProductContainer from './component/ProductContainer'
import ContactPage from './page/ContactPage'
import AboutPage from './page/AboutPage'

const App = () => {

  const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Body/>,
          errorElement: <ErrorPage/>,
          children:[
              {
                path: '/',
                element: <ProductContainer/>
              },
              {
                path: "/cart",
                element: <Cart/>
              },
              {
                path: "/contact",
                element: <ContactPage/>
              },
              {
                path: "/about",
                element: <AboutPage/>
              }
            ] 
        }
])

  return (
    <div>
      <Provider store={AppStore}>
      <RouterProvider router={appRouter}/>
      </Provider>
</div>
  )
}

export default App