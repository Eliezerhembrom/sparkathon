import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

import './Widgets.scss';

const Widgets = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">USER</span>
            <span className="counter">21312</span>
            <span className="link">See all user</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                20 %
            </div>
            <PersonOutlineOutlinedIcon className='icon' />
        </div>
    </div>
  )
}

export default Widgets;