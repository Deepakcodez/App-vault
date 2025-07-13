"use client"
// import { FormContextType, FormData } from '@/types/types';   its not available
import React, { createContext, useContext, useState } from 'react';
type FormImage = {
  url: string;
  file?: File;
};
type FormData = {
  appName: string;
  description: string;
  images: FormImage[];
  stack: string[];
  features: string[];
  repo: string;
  link: string;
  tutorial: string;
};

type FormContextType = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  resetForm: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

const initialFormData = {
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