import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchData } from '../components/helpers'

//loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Main = () => {

  const { userName } = useLoaderData
  return (
    <div>
      <h1>main</h1>
      <Outlet />
      <h1>main</h1>

    </div>
  )
}

export default Main