import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { fetchData } from '../components/helpers'

//loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const Dashboard = () => {

  const { userName } = useLoaderData
  return (
    <div>
       Dashboard</div>
  )
}

export default Dashboard