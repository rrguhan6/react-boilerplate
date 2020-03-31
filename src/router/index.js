import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

import { PrivateRoute } from './_private'
import { GuestRoute } from './_guest'

const Loading = () => <h1>Loading ...</h1>

const views = (path) => {
    return lazy(() => import(`../views/${path}`))
}
 
const routes = [
  {
    path: '/',
    component: 'index'
  },
  {
    path: '/login',
    component: 'login',
    guest: true
  },
  {
    path: '/secret',
    component: 'secret',
    private: true
  },
  {
    path: '404', // 404 fallback
    noExact: true, // every route is exact by default
    component: '404'
  }
]
 
const router = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map((route, index) => {
        if (route.path !== '404') {
          if (route.private) {
            return route.noExact ?
            <PrivateRoute key={index} path={route.path} component={views(route.component)} /> :
            <PrivateRoute key={index} exact path={route.path} component={views(route.component)} />
          }
          else if (route.guest) {
            return route.noExact ?
            <GuestRoute key={index} path={route.path} component={views(route.component)} /> :
            <GuestRoute key={index} exact path={route.path} component={views(route.component)} />
          }
          else {
            return route.noExact ?
            <Route key={index} path={route.path} component={views(route.component)} /> :
            <Route key={index} exact path={route.path} component={views(route.component)} />
          }
        } else {
          return <Route key={index} component={views(route.component)} />
        }
      })}
    </Switch>
  </Suspense>
)

export default router
