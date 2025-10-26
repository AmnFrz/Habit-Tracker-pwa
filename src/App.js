import { useState, useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitList from './components/HabitList';

function App() {
  const [habits, setHabits] = useState([]);
  const [isDark, setIsDark] = useState(false);

  // 🌟 DAILY QUOTES - ADD THIS SECTION
  const dailyQuotes = [
    "🌟 Small habits make big differences!",
    "🔥 Consistency is the key to mastery!",
    "💪 You're one step closer to your goals!",
    "🎯 Every day is a new opportunity!",
    "🚀 Progress, not perfection!",
    "🌈 Your future self will thank you!",
    "⭐ Great things never come from comfort zones!",
    "🌱 Grow 1% better every day!",
    "🎉 Celebrate small wins!",
    "⚡ Momentum builds motivation!"
  ];

  const [dailyQuote] = useState(() => 
    dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)]
  );

  // Dark mode effect
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Load habits from localStorage
  useEffect(() => {
    const savedHabits = localStorage.getItem('habits');
    if (savedHabits) setHabits(JSON.parse(savedHabits));
  }, []);

  // Save habits to localStorage
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits([...habits, habit]);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const today = new Date().toDateString();
        const wasCompletedToday = habit.dates.includes(today);
        
        if (wasCompletedToday) {
          return { ...habit, completed: false, dates: habit.dates.filter(date => date !== today), streak: Math.max(0, habit.streak - 1) };
        } else {
          return { ...habit, completed: true, dates: [...habit.dates, today], streak: habit.streak + 1 };
        }
      }
      return habit;
    }));
  };

  const deleteHabit = (id) => setHabits(habits.filter(habit => habit.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-emerald-100 dark:from-gray-900 dark:to-teal-900 py-8 transition-colors duration-300">
      
      {/* DARK MODE TOGGLE BUTTON */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full z-50 shadow-lg hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-110"
      >
        {isDark ? '☀️' : '🌙'}
      </button>
      
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent dark:from-teal-300 dark:to-blue-300 text-center mb-2">
          🚀 Daily Habit Tracker
        </h1>
        
        {/* 🌟 DAILY QUOTE */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6 italic text-lg font-medium">
          "{dailyQuote}"
        </p>
        
        <HabitForm onAddHabit={addHabit} />
        <HabitList habits={habits} onToggleHabit={toggleHabit} onDeleteHabit={deleteHabit} />
        
        {habits.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-300 mt-12">
            <p className="text-lg">🌟 Start your journey - add your first habit!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;