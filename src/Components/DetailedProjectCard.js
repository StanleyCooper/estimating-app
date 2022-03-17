import React from 'react';
import ScopeList from './ScopeList';
import MaterialList from './MaterialList';

function DetailedProjectCard() {
    return (
    <a href='#' class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Detailed Project Card!</h5>
        <ScopeList />
        <MaterialList />
    </a>
    )
}
export default DetailedProjectCard;