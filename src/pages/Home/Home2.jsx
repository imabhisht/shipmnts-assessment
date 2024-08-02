/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flex h-screen border-black border-2 bg-white text-black-300">
      {/* Left sidebar */}
      <div className="w-64 border-r border-gray-700">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Files</h2>
          <div className="flex items-center mb-4">
            <span className="mr-2">main</span>
            <button className="ml-auto">+</button>
            <button className="ml-2">Q</button>
          </div>
          {/* File tree structure */}
          <ul>
            <li>
              <details open>
                <summary>api</summary>
                <ul className="ml-4">
                  <li>prisma</li>
                  <li>src</li>
                  <li>.dockerignore</li>
                  <li>.gitignore</li>
                  <li>Dockerfile</li>
                  <li>package-lock.json</li>
                  <li>package.json</li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>core</summary>
                <ul className="ml-4">
                  <li>.gitignore</li>
                  <li>control.sh</li>
                  <li>docker-compose.yml</li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold">cloudghost-engine / api /</h2>
            <button className="ml-auto">Add file</button>
            <button className="ml-2">...</button>
          </div>
          <div className="mb-4">
            <span className="text-sm">imabhisht Major Changes</span>
            <span className="text-sm text-gray-500 ml-4">b76068a • 9 months ago</span>
            <button className="ml-2 text-sm">History</button>
          </div>
          {/* File list */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm">
                <th>Name</th>
                <th>Last commit message</th>
                <th>Last commit date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>..</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>prisma</td>
                <td>Alpha Test</td>
                <td>last year</td>
              </tr>
              <tr>
                <td>src</td>
                <td>Major Changes</td>
                <td>9 months ago</td>
              </tr>
              {/* Add more rows for other files */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}