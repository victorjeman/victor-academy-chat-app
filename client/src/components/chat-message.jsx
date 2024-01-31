import { useAtom } from 'jotai'

import { userAtom } from '../store/store'
import clsx from 'clsx'

export function ChatMessage({ message }) {
  const [user] = useAtom(userAtom)
  const isCurrentUser = user.name === message.author

  return (
    <div
      className={clsx(
        isCurrentUser ? 'flex flex-row-reverse pr-[20%]' : 'pl-[20%]'
      )}
    >
      <div className="w-full max-w-[55%]">
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
