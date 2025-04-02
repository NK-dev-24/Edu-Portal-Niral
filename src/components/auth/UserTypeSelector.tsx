
import React from 'react';
import { User, BookOpen } from 'lucide-react';
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export type UserType = 'student' | 'instructor';

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
    }
  ];

  return (
    <div className="space-y-3">
      <h3 className="font-medium text-lg text-gray-900">I am a...</h3>
      <RadioGroup 
        value={selectedType} 
        onValueChange={(value) => onChange(value as UserType)}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {userTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <div key={type.id} className="relative">
              <RadioGroupItem 
                value={type.id} 
                id={`user-type-${type.id}`} 
                className="peer sr-only" 
              />
              <Label
                htmlFor={`user-type-${type.id}`}
                className={`
                  flex cursor-pointer rounded-lg border-2 p-4 transition-all
                  hover:bg-gray-50 shadow-sm hover:shadow
                  ${isSelected 
                    ? 'border-edu-blue-600 bg-edu-blue-50 ring-2 ring-edu-blue-100 ring-opacity-60' 
                    : 'border-gray-200 hover:border-edu-blue-200'
                  }
                  peer-focus-visible:ring-2 peer-focus-visible:ring-edu-blue-500 peer-focus-visible:ring-offset-2
                `}
              >
                <div className="flex w-full items-start gap-4">
                  <div className={`
                    mt-0.5 rounded-full p-2.5
                    ${isSelected ? 'bg-edu-blue-600 text-white' : 'bg-gray-100 text-gray-600'}
                    transition-colors duration-200
                  `}>
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">{type.title}</p>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                </div>
              </Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default UserTypeSelector;
