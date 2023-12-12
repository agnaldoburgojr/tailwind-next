import { LogOut } from 'lucide-react'
import Image from 'next/image'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <Image
        src="https://github.com/agnaldoburgojr.png"
        alt="Agnaldo Burgo Junior"
        className="h-10 w-10 rounded-full"
        width={40}
        height={40}
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Agnaldo Burgo Júnior
        </span>
        <span className="truncate text-sm text-zinc-500 ">
          agnaldoburgojr@gmail.com
        </span>
      </div>
      <button type="button" className="bg--zinc-50 ml-auto rounded-t-md p-2">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
