import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className='logo'>CodeSpark</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <p className="title">LIST</p>
                <li>
                    <PersonOutlineIcon className='icon' />
                    <span>Users</span>
                </li>
                <li>
                    <InventoryIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <ProductionQuantityLimitsIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <p className="title">USEFULL LINKS</p>
                <li>
                    <InsertChartIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <HealthAndSafetyIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>

        </div>
    </div>
  )
}

export default Sidebar