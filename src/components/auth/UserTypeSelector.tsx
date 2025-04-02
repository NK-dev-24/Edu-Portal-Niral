
import React from 'react';
import { User, BookOpen, ShieldCheck } from 'lucide-react';

export type UserType = 'student' | 'instructor' | 'admin';

interface UserTypeSelectorProps {
  selectedType: UserType;
  onChange: (type: UserType) => void;
}

const UserTypeSelector: React.FC<UserTypeSelectorProps> = ({ 
  selectedType, 
  onChange 
}) => {
  const userTypes = [
    {
      id: 'student',
      title: 'Student',
      description: 'Take courses and learn new skills',
      icon: User,
    },
    {
      id: 'instructor',
      title: 'Instructor',
      description: 'Create and manage courses',
      icon: BookOpen,
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'Manage the platform',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {userTypes.map((type) => {
        const isSelected = selectedType === type.id;
        const Icon = type.icon;
        
        return (
          <button
            key={type.id}
            type="button"
            onClick={() => onChange(type.id as UserType)}
            className={`
              relative rounded-lg border p-4 text-left transition-all
              ${isSelected 
                ? 'border-edu-blue-600 bg-edu-blue-50 ring-2 ring-edu-blue-600' 
                : 'border-gray-200 bg-white hover:border-edu-blue-400'
              }
            `}
          >
            <div className="flex items-start gap-4">
              <div className={`
                p-2 rounded-full 
                ${isSelected ? 'bg-edu-blue-100 text-edu-blue-600' : 'bg-gray-100 text-gray-600'}
              `}>
                <Icon size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{type.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{type.description}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default UserTypeSelector;
