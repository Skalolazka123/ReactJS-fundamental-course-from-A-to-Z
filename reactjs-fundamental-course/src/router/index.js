import { About } from '../pages/About'
import Login from '../pages/Login'
import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'
import Page4 from '../pages/Page4'
import Page5 from '../pages/Page5'
import PostIdPage from '../pages/PostIdPage'

export const privateRoutes = [
    { path: '/', component: About, exact: true },
    { path: '/page1', component: Page1, exact: true },
    { path: '/page2', component: Page2, exact: true },
    { path: '/page3', component: Page3, exact: true },
    { path: '/page4', component: Page4, exact: true },
    { path: '/page5', component: Page5, exact: true },
    { path: '/posts/:id', component: PostIdPage, exact: true },
]

export const publicRoutes = [{ path: '/login', component: Login, exact: true }]
