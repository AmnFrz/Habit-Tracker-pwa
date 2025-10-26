import { useState } from 'react';

export default function HabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitName.trim()) {
      onAddHabit({
        id: Date.now(),
        name: habitName,
        completed: false,
        streak: 0,
        dates: []
      });
      setHabitName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="What habit do you want to build? "
          className="flex-1 px-4 py-3 border-2 border-teal-300 dark:border-teal-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 text-lg shadow-sm"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold"
        >
          Add +
        </button>
      </div>
    </form>
  );
}