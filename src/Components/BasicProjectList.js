import React from 'react'
import BasicProjectCard from './BasicProjectCard';

export default function BasicProjectList() {
  return (
    <div class="flex flex-wrap mx-10 my-5">
        <div class="px-2 py-2">
            <BasicProjectCard />
        </div>
        <div class="px-2 py-2">
            <BasicProjectCard />
        </div>
        <div class="px-2 py-2">
            <BasicProjectCard />
        </div>
        <div class="px-2 py-2">
            <BasicProjectCard />
        </div>
        <div class="px-2 py-2">
            <BasicProjectCard />
        </div>
        <div class="px-2 py-2">
            <BasicProjectCard />
        </div>
    </div>
  )
}
