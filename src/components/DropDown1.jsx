import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDown1() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 border-white bg-none  text-medium font-bold text-gray-900 ">
          Services
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700 font-bold',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  AI Visual Inspection
                </a>
              )}
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700 font-bold',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  AI Infrastructure Inspection
                </a>
              )}
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700 font-bold',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  AI People Tracking
                </a>
              )}
            </Menu.Item>
            <hr />
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-700 font-bold',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    AI Data Analytics
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
