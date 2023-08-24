'use client'

import { useChat } from 'ai/react'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col max-w-xl px-8 m-auto">
      {
        messages.map(m => {
          const isUser = m.role === 'user'
          return (
            <div key={m.id}>
              <p>
                {m.role === 'user' ? '🧑🏻‍💻 => ' : '🤖 => '}
                <span className={`${isUser ? 'text-blue-400' : 'text-red-400'}`}>{m.content}</span>
              </p>
            </div>
          )
        })
      }
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          className="fixed w-full max-w-xl px-4 py-2 m-auto mb-8 text-sm border
          border-gray-400 rounded-full shadow-2xl bottom-4"
          type='text'
          name='content'
          placeholder='Chat with Darth Vader...'
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  )
}
