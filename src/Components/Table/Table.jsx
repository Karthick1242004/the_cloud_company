import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import PieChartWithCenterLabel from '../BarChart/PieChartWithCenterLabel';

function Table() {
  const [data, setData] = useState([])
  const [error, setError] = useState("")
  const [filteredData, setFilteredData] = useState([])
  const [gender, setGender] = useState("Men")
  const [point, setPoint] = useState(1)
  const [year, setYear] = useState("2022")
  const [tname, setTname] = useState("Chennai Super Kings")
  const [teamOptions, setTeamOptions] = useState([]) 
  useEffect(() => {
    const api = async () => {
      try {
        const res = await axios.get("https://www.mockachino.com/5db99bd2-28c5-46/ipl/table")
        setData(res.data.points) 
        setFilteredData(res.data.points) 
      } catch (error) {
        setError(error.message)
      }
    }
    api()
  }, [])

  useEffect(() => {
    const teamsForGender = data
      .filter(ipl => ipl.Gender.toLowerCase() === gender.toLowerCase() && ipl.IPLYear === Number(year)).map(ipl => ipl.TeamName)

    setTeamOptions(teamsForGender)
    setTname(teamsForGender[0] || "") 
  }, [gender, data])

  const handleFilter = () => {
    const filtered = data.filter(ipl=>
      ipl.Gender.toLowerCase() === gender.toLowerCase() &&
      ipl.IPLYear === Number(year)
    )
    setFilteredData(filtered)
  }

  const displayAdd =()=>{
  }

  const teamNames = filteredData.map(ipl => ipl.TeamName)
  const teamPoints = filteredData.map(ipl => ipl.Points)

  return (
    <div>
      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div>
          <h1 className='text-3xl font-[600] mt-6 text-center'>We welcome you all to The Cloud Company Placement Drive - September 2024 Chapter!</h1>
        </div>
        <div className='ml-[1%] mt-8'>
          <div>
            <label className='font-medium'>Gender: </label>
            <select className='px-2 py-2 font-light text-gray-800 rounded-[5px] ml-[5%] w-[13%] border-[1px] border-slate-200'
              value={gender}
              onChange={(e) => setGender(e.target.value)}>
              <option>Men</option>
              <option>Women</option>
            </select>
          </div>
          <div>
            <label className='font-medium'>Year: </label>
            <select className='px-2 py-2 font-light text-gray-800 rounded-[5px] ml-[6.4%] w-[13%] border-[1px] border-slate-200'
              value={year}
              onChange={(e) => setYear(e.target.value)}>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </div>
          <div>
            <label className='font-medium'>Team Name: </label>
            <select className='px-2 py-2 font-light text-gray-800 rounded-[5px] ml-[2.67%] w-[13%] border-[1px] border-slate-200'
              value={tname}
              onChange={(e) => setTname(e.target.value)}>
              {teamOptions.map((team, index) => (
                <option key={index}>{team}</option>
              ))}
            </select>
          </div>
          {/* <div>
            <label className='font-medium'>Team Points: </label>
            <select className='px-2 py-2 font-light text-gray-800 rounded-[5px] ml-[2.55%] w-[13%] border-[1px] border-slate-200'
              value={tname}
              onChange={(e) => setPoint(e.target.value)}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
          </div> */}
          <div className='flex flex-row gap-2'>
          <button className='bg-black text-white mt-7 px-4 py-2 rounded-[6px] active:bg-slate-800' onClick={handleFilter}>Apply Filter</button>
          <button className='bg-black text-white mt-7 px-4 py-2 rounded-[6px] active:bg-slate-800' onClick={displayAdd}>Add Filter</button>
          </div>
        </div>
      </div>

      {error ? <p className='text-center h-[100vh] my-auto'>Error: {error}</p> :
      <table className='w-[95%] mx-auto h-auto mt-10 '>
        <thead>
          <tr className='text-slate-600 border-slate-250 border-b-[1px] hover:bg-slate-100'>
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
          {filteredData.map((ipl, index) => (
            <tr key={index} className='w-[90%] font-light hover:bg-slate-100 gap-10'>
              <td><img src={ipl.TeamLogo} alt="Team Logo" width="50" /></td>
              <td>{ipl.TeamName}</td>
              <td>{ipl.Matches}</td>
              <td>{ipl.Wins}</td>
              <td>{ipl.Loss}</td>
              <td>{ipl.Tied}</td>
              <td>{ipl.NoResult}</td>
              <td>{ipl.Points}</td>
              <td>{ipl.NetRunRate}</td>
              <td>{ipl.ForTeams}</td>
              <td>{ipl.AgainstTeam}</td>
              <td>{ipl.Performance}</td>
            </tr>
          ))}
        </tbody>
      </table>}
      <div className='mt-10 px-10 flex flex-row justify-between mx-auto align-middle '>
        <div>
        <h1>Points Distribution</h1>
      <BarChart
        xAxis={[
          {
            id: 'teamNames',
            data: teamNames,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: teamPoints,
            label: 'Points',
          },
        ]}
        width={800}
        height={400}
      />
      </div>
      <div className='mt-[10%]'>
      <PieChartWithCenterLabel/>
      </div>
      </div>
    </div>
  )
}

export default Table
