import { ReactNode } from 'react'

interface HeroSectionProps {
  children?: ReactNode
}

const BUTTONS = [
  {
    title: 'Join Our Discord',
    link: 'https://discord.gg/rGMCXfNkAK',
  },
  {
    title: 'Join Our Telegram',
    link: 'https://t.me/triganofficial',
  },
]

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <header className="hero relative flex h-full flex-col justify-end py-2 align-bottom md:py-6">
      <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2">
        <div className="xs:h-[500px] z-10 flex h-[400px] flex-col justify-center space-y-8 px-2 sm:space-y-5 sm:px-5 md:space-y-10 md:px-10">
          <h2 className="whitespace-nowrap text-2xl font-bold xl:text-6xl">
            Your real-world Utopia.
            <span className="block whitespace-normal">Beyond Metaverse</span>
          </h2>
          {/* Button Starts */}
          <div className="justify-start space-y-2 sm:flex sm:space-x-2 sm:space-y-0 md:flex-col md:space-y-2 md:space-x-0">
            {BUTTONS.map((button, i) => {
              return (
                <a
                  key={button.title}
                  target="_blank"
                  href={button.link}
                  className={`inline-block w-full cursor-pointer whitespace-nowrap rounded-xl px-2 py-1 text-center font-semibold transition duration-500 hover:bg-special md:px-4 md:py-2 lg:w-2/3 ${
                    i === 0 ? 'bg-primary' : 'bg-secondary'
                  }`}
                  rel="noreferrer"
                >
                  {button.title}
                </a>
              )
            })}
          </div>
          {/* Button Ends */}
        </div>

        {/* Video Starts */}
        <div className="z-10 p-5 opacity-100 md:p-10 lg:p-20">
          <div className="aspect-w-16 aspect-h-9 flex justify-center">
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="object-cover"
              src="https://www.youtube.com/embed/YYAZ1mnz3bM?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent"
            />
          </div>
        </div>
        {/* Video Ends */}
      </div>
    </header>
  )
}