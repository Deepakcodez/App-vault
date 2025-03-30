"use client"
import { FormData } from '@/types/types';
import React, { createContext, useContext, useState } from 'react';





export type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  resetForm: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialFormData: FormData = {
  appName: "",
  description: "",
  images:[],
  stack: [""],
  features: [""],
  repo: "",
  link: "",
  tutorial: "",
};

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};