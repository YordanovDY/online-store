import { Transition } from "@headlessui/react";
import { XMarkIcon, CheckCircleIcon, XCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

export default function NotificationAlert({ message, type }) {
  const [show, setShow] = useState(true);
  let icon = '';
  let background = "bg-white shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200";
  let color = "text-gray-800 flex-1";

  useEffect(() => {
    setShow(true);
  }, []);

  if (type === 'success') {
    icon = <CheckCircleIcon className="w-15 h-15 text-green-800" />
    background = "bg-green-100 shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200";
    color = "text-green-800 flex-1";
  }

  if (type === 'error') {
    icon = <XCircleIcon className="w-15 h-15 text-red-800" />
    background = "bg-red-100 shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200";
    color = "text-red-800 flex-1";
  }

  if (type === 'warning') {
    icon = <ExclamationCircleIcon className="w-15 h-15 text-yellow-800" />
    background = "bg-yellow-100 shadow-lg rounded-lg p-4 flex items-center space-x-4 border border-gray-200";
    color = "text-yellow-800 flex-1";
  }

  return (
    <div className="flex justify-center">
      <Transition
        show={show}
        enter="transition ease-out duration-300 transform"
        enterFrom="-translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
        className="fixed top-5 left-1/2 -translate-x-1/2 w-full max-w-md"
      >
        <div className={background}>
          {icon}
          <p className={color}>{message}</p>
          <button onClick={() => setShow(false)} className="text-gray-400 hover:text-gray-600">
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
      </Transition>
    </div>
  );
}
