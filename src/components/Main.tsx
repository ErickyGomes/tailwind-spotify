import {ChevronLeft, ChevronRight, PlayIcon} from 'lucide-react'
export function Main() {
    return (
        <main className="flex-1 p-6">
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft/>
          </button>
          <button className="rounded-full bg-black/40 p-1">
            <ChevronRight/>
          </button>
        </div>
        <h2 className="font-semibold text-2xl mt-10">Good Afternoon</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src="/album.jpg" width={104} height={104} alt="Capa do álbum sangue camersim, artista Kami-kam" />
            <strong>Sangue Camersim</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <PlayIcon />
            </button>
          </a>
          <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src="/album.jpg" width={104} height={104} alt="Capa do álbum sangue camersim, artista Kami-kam" />
            <strong>Sangue Camersim</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <PlayIcon />
            </button>
          </a>
          <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src="/album.jpg" width={104} height={104} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong>Sangue Camersim</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <PlayIcon />
            </button>
          </a>
          <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src="/album.jpg" width={104} height={104} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong>Sangue Camersim</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <PlayIcon />
            </button>
          </a>
          <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src="/album.jpg" width={104} height={104} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong>Sangue Camersim</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <PlayIcon />
            </button>
          </a>
          <a href='#' className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src="/album.jpg" width={104} height={104} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong>Sangue Camersim</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
              <PlayIcon />
            </button>
          </a>
          
        </div>
        <h1 className="font-semibold text-3xl mt-10">Made for Ericky Gomes</h1>
        <div className="grid grid-cols-8 gap-4 mt-4">
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Trip Lee, Lecrae, Da`T.R.U.T.H and more</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Trip Lee, Lecrae, Da`T.R.U.T.H and more</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Trip Lee, Lecrae, Da`T.R.U.T.H and more</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Trip Lee, Lecrae, Da`T.R.U.T.H and more</span>
          </a>
          <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
            <img src="/album.jpg" className='w-full' width={120} height={120} alt="Capa do álbum sangue Carmesim, artista Kami-kam" />
            <strong className='font-semibold'>Daily Mix 1</strong>
            <span className='text-sm text-zinc-400'>Trip Lee, Lecrae, Da`T.R.U.T.H and more</span>
          </a>
        </div>
      </main>
    )
}