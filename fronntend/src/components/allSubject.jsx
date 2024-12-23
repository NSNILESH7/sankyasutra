import { ActivityIcon as Function, Coins, PieChart, Magnet, FlaskRoundIcon as Flask, Dna, BarChart2, BookOpen, Monitor, PenTool, Brain, MoreHorizontal } from 'lucide-react'



function SubjectIcon({ icon, name }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-4 bg-blue-50 rounded-full">
        {icon}
      </div>
      <span className="text-sm text-gray-500">{name}</span>
    </div>
  )
}

export default function SubjectGrid() {
  const subjects = [
    { icon: <Function className="w-6 h-6 text-blue-600" />, name: "Math" },
    { icon: <Coins className="w-6 h-6 text-blue-600" />, name: "Statistics" },
    { icon: <PieChart className="w-6 h-6 text-blue-600" />, name: "Calculus" },
    { icon: <Magnet className="w-6 h-6 text-blue-600" />, name: "Physics" },
    { icon: <Flask className="w-6 h-6 text-blue-600" />, name: "Chemistry" },
    { icon: <Dna className="w-6 h-6 text-blue-600" />, name: "Biology" },
    { icon: <BarChart2 className="w-6 h-6 text-blue-600" />, name: "Economics" },
    { icon: <BookOpen className="w-6 h-6 text-blue-600" />, name: "Literature" },
    { icon: <Monitor className="w-6 h-6 text-blue-600" />, name: "Business" },
    { icon: <PenTool className="w-6 h-6 text-blue-600" />, name: "Writing" },
    { icon: <Brain className="w-6 h-6 text-blue-600" />, name: "Social Science" },
    { icon: <MoreHorizontal className="w-6 h-6 text-blue-600" />, name: "Others" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-white">
        Solve all subjects
      </h1>
      <p className="text-xl text-gray-500 text-center mb-12">
        Unleash the power of Gauth AI to conquer all questions
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {subjects.map((subject, index) => (
          <SubjectIcon key={index} {...subject} />
        ))}
      </div>
    </div>
  )
}

