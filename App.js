import React, { useState } from 'react';
import { Building2, ChevronRight, FileText, HandshakeIcon, Key } from 'lucide-react';

const LeasingJourney = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: 'Property Selection',
      icon: Building2,
      description: 'Browse available retail spaces and select your ideal location'
    },
    {
      id: 2,
      title: 'Application',
      icon: FileText,
      description: 'Submit your leasing application and required documentation'
    },
    {
      id: 3,
      title: 'Negotiation',
      icon: HandshakeIcon,
      description: 'Review and negotiate lease terms'
    },
    {
      id: 4,
      title: 'Move In',
      icon: Key,
      description: 'Sign the lease and receive your keys'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Retail Leasing Journey</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-8">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-start ${
                    activeStep === step.id ? 'opacity-100' : 'opacity-60'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className="flex-shrink-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        activeStep === step.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      {step.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {step.description}
                    </p>
                  </div>
                  {step.id !== steps.length && (
                    <ChevronRight className="ml-auto w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LeasingJourney;
