'use client'

import { useFileInput } from './root'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import FileItem from './file-item'

export const FileList = () => {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="complete"
        />
      ))}
    </div>
  )
}
