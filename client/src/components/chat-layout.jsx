export function ChatLayout({ controls, aside, main }) {
  return (
    <div className="p-4 flex flex-col h-full">
      {controls}

      <div className="mt-4 flex flex-col flex-grow padding-4 gap-4 border-2 p-4 lg:flex-row overflow-y-auto">
        <div className="border-2 p-4 basis-80">{aside}</div>
        <div className="border-2 p-4 flex-grow flex flex-col overflow-y-auto">
          {main}
        </div>
      </div>
    </div>
  )
}
