import '@/style.css'
import bgImage from '/assets/wallpaper-default.jpg'

function IndexNewTab() {
  return (
    <main
      className="  flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url('${bgImage}')`,
      }}
    >
      <div className="flex w-80 flex-col items-center rounded-lg bg-transparent p-4 backdrop-blur-sm hover:shadow-md hover:backdrop-blur">
        <h1 className="inline-block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-4xl font-bold text-transparent">AI OS</h1>
        <p className="inline-block bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-2xl  text-transparent">An OS with AI first.</p>
      </div>
    </main>
  )
}

export default IndexNewTab
