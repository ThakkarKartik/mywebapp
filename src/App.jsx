export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-4">
      <header className="text-2xl md:text-4xl font-bold mb-4">
        <h1 className="text-xl md:text-3xl lg:text-5xl">INVEST WITH US</h1>
        Investment Advisory WebApp
      </header>

      <p className="text-gray-600 max-w-md mb-6">
        Welcome! This is a simple responsive web app that works on mobile and desktop.
      </p>

      <image src="./assets/dare_logo.png" alt="Investment" className="mb-6 rounded-lg shadow-md" />

      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}