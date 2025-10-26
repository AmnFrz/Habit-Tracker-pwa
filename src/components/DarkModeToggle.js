export default function DarkModeToggle({ isDark, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 shadow-md hover:shadow-lg transition-all duration-300 z-10"
      aria-label="Toggle dark mode"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}