import React from 'react'
import Navlinks from '../Navbar/Navlinks'
import Blog from '../Blog/Blog'

const Dashboard = () => {
  return (
    <div>
        {/* titleContainer */}
      <div className='titleContainer'>
        <div id='title'>
          Community Blog
        </div> 

        <div className='titleDescript'>
          Explore My Insights and Perspectives: Stay Informed with the Latest News and Upcoming Events in their respective field. Reach Out for Further Details!
        </div>

        {/* menu button */}
        <Navlinks/>
      </div>

      {/* blog container */}
      <div className='blogContainer'>
        <Blog/>
      </div>
    </div>
  )
}

export default Dashboard