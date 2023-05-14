import { Maximize2, Volume1 } from 'lucide-react'
import { PlayIcon, Shuffle, SkipBack, SkipForward, Repeat, Mic2Icon, LayoutListIcon, Laptop2Icon } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className='flex items-center gap-3'>
                <img src="/album.jpg" width={56} height={56} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
                <div className='flex flex-col'>
                    <strong className='font-normal text-zinc-300 hover:text-white/100'>Sangue Carmesim</strong>
                    <span className='text-xs text-zinc-400  hover:text-white/100'>Kami-Kam</span>
                </div>

            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} className='text-zinc-200' />
                    <SkipBack size={20} className='text-zinc-200' />
                    <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                        <PlayIcon />
                    </button>
                    <SkipForward size={20} className='text-zinc-200' />
                    <Repeat size={20} className='text-zinc-200' />
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-xs text-zinc-400'>0:31</span>
                    <div className="h-1 rounded-full w-96 bg-zinc-600">
                        <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
                    </div>
                    <span className='text-xs text-zinc-400'>2:14</span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <Mic2Icon size={20} />
                <LayoutListIcon size={20} />
                <Laptop2Icon size={20} />
                <div className='flex items-center gap-4'>
                    <Volume1 size={20} />
                    <div className="h-1 rounded-full w-24 bg-zinc-600">
                        <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
        </footer>
    )
}