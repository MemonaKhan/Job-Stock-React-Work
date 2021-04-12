import React from 'react';
import {Link} from 'react-router-dom';

import Profile from '../sections/Profile'
import ProfileDetail from '../sections/EmpProfileDetail'

export default function EmployerProfile() {
  return (
    <>
    <Profile />
    <ProfileDetail />
    </>
  )
}