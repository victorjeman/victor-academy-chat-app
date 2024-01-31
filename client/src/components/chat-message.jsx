import { useAtom } from 'jotai'
import clsx from 'clsx'

import { userAtom } from '../store/store'

export function ChatMessage({ message }) {
  const [user] = useAtom(userAtom)
  const isCurrentUser = user.name === message.author

  return (
    <div
      className={clsx(
        isCurrentUser
          ? 'flex flex-row-reverse pr-[5%] md:pr-[10%] lg:pr-[15%]'
          : 'pl-[5%] md:pl-[10%] lg:pl-[15%]'
      )}
    >
      <div className="w-full max-w-[80%] md:max-w-[70%] lg:max-w-[65%]">
        <div
          className={clsx(
            'leading-1.5 rounded-md mt-8 p-4',
            isCurrentUser ? 'bg-blue-200' : 'bg-green-200'
          )}
        >
          <p>{message.value}</p>
        </div>
        <div className="flex justify-between text-sm mt-1 text-gray-400 px-2">
          <p
            className={clsx(
              isCurrentUser ? 'text-blue-500' : 'text-green-500',
              'font-semibold'
            )}
          >
            {isCurrentUser ? 'Me' : message.author}
          </p>
          <p>{message.date}</p>
        </div>
      </div>
    </div>
  )
}
