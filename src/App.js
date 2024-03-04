import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './utils/appStore';

const currYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                Copyright &copy; {currYear}, Made with 💗 by <strong>Vasu</strong>
            </p>
        </footer>
    );
};

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                <Header />
                <Outlet />
                <Footer />

            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                }, {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/restaurants/:resId",
                    element: <RestaurantMenu />
                },
                {
                    path: "/cart",
                    element: <Cart />
                }
            ],
            errorElement: <Error />
        },
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
