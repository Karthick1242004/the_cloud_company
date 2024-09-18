import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Table() {
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const api = async () => {
      try {
        const res = await axios.get("https://www.mockachino.com/5db99bd2-28c5-46/ipl/table")
        setData(res.data.points) 
      } catch (error) {
        setError(error.message)
      }
    }
    api()
  }, [])

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div>
      <h1 className='text-3xl font-[600] mt-6 text-center'>We welcome you all to The Cloud Company Placement Drive - September 2024 Chapter !</h1>
      </div>
      <div className='ml-[1%] mt-8'>
        <div>
          <lable className='font-medium'>Gender : </lable>
          <select className='px-2 py-2 font-light text-gray-800 rounded-[5px] ml-[5%] w-[13%] border-[1px] border-slate-200' >
            <option >Men</option>
            <option >Women</option>
          </select>
        </div>
        <div>
          <lable className='font-medium'>Year : </lable>
          <select className='px-2 py-2 font-light text-gray-800 rounded-[5px] ml-[6.4%] w-[13%] border-[1px] border-slate-200' >
            <option >2020</option>
            <option >2021</option>
            <option >2022</option>
            <option >2023</option>
          </select>
        </div>
        <button className='bg-black text-white mt-7 px-4 py-2 rounded-[6px] active:bg-slate-800'>Add Filter</button>
      </div>
      
    </div>
      <table className='w-[95%] mx-auto h-auto mt-10'>
        <thead>
          <tr className='text-slate-600 border-slate-250 border-b-[1px]'>
            <th className='font-medium py-4 text-[14px]'>Logo</th>
            <th className='font-medium py-4 text-[14px]'>Team Name</th>
            <th className='font-medium py-4 text-[14px]'>Matches</th>
            <th className='font-medium py-4 text-[14px]'>Wins</th>
            <th className='font-medium py-4 text-[14px]'>Loss</th>
            <th className='font-medium py-4 text-[14px]'>Tied</th>
            <th className='font-medium py-4 text-[14px]'>No Result</th>
            <th className='font-medium py-4 text-[14px]'>Points</th>
            <th className='font-medium py-4 text-[14px]'>Net Run Rate</th>
            <th className='font-medium py-4 text-[14px]'>For Teams</th>
            <th className='font-medium py-4 text-[14px]'>Against Teams</th>
            <th className='font-medium py-4 text-[14px]'>Performance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((team, index) => (
            <tr key={index} className='w-[90%]'>
              <td><img src={team.TeamLogo} alt="Team Logo" width="50" /></td>
              <td>{team.TeamName}</td>
              <td>{team.Matches}</td>
              <td>{team.Wins}</td>
              <td>{team.Loss}</td>
              <td>{team.Tied}</td>
              <td>{team.NoResult}</td>
              <td>{team.Points}</td>
              <td>{team.NetRunRate}</td>
              <td>{team.ForTeams}</td>
              <td>{team.AgainstTeam}</td>
              <td>{team.Performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
