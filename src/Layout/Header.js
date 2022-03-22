import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div class="flex justify-between items-center bg-sky-900 px-10">
      <Link to="/">
        <h1 class="text-slate-100">Estimator Helper</h1> 
      </Link>
      <Link to="/">
        <img class="scale-50" src="/companyLogo.png" alt="company logo" />
      </Link>
    </div>
  )
}
