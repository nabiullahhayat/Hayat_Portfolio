import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import {
  About,
  Awards,
  Certificates,
  Contact,
  Experience,
  Home,
  Projects,
} from '../pages'
import { ROUTES } from '../constants/routes'

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.ABOUT.slice(1), element: <About /> },
      { path: ROUTES.PROJECTS.slice(1), element: <Projects /> },
      { path: ROUTES.EXPERIENCE.slice(1), element: <Experience /> },
      { path: ROUTES.AWARDS.slice(1), element: <Awards /> },
      { path: ROUTES.CERTIFICATES.slice(1), element: <Certificates /> },
      { path: ROUTES.CONTACT.slice(1), element: <Contact /> },
    ],
  },
])

export default appRouter
