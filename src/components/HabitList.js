export default function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  return (
    <div className="space-y-4">
      {habits.map(habit => (
        <div key={habit.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border-2 border-teal-100 dark:border-teal-900 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => onToggleHabit(habit.id)}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-white font-bold transition-all duration-300 ${
                  habit.completed 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-500 shadow-lg' 
                    : 'border-teal-400 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 hover:from-teal-200 hover:to-blue-200 dark:hover:from-teal-700 dark:hover:to-blue-700'
                }`}
              >
                {habit.completed && '✓'}
              </button>
              <span className={`text-xl font-medium ${habit.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-100'}`}>
                {habit.name}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                 {habit.streak} days
              </span>
              <button
                onClick={() => onDeleteHabit(habit.id)}
                className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200 text-xl"
              >
                🗑️
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}