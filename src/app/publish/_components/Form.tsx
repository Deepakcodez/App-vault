"use client";
import Input from "@/app/_components/ui/common/Input";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { z } from "zod";

// Define the form data type
type FormDataType = {
  appName: string;
  description: string;
  stack: string[];
  features: string[];
  repo: string;
  link: string;
  tutorial: string;
};

// Define the Zod schema for validation
const formSchema = z.object({
  appName: z.string().min(1, "App Name is required"),
  description: z.string().min(1, "Description is required"),
  stack: z.array(z.string().min(1, "Tech stack item cannot be empty")),
  features: z.array(z.string().min(1, "Feature cannot be empty")),
  repo: z.string().url("Invalid repository URL").optional(),
  link: z.string().url("Invalid project link"),
  tutorial: z.string().url("Invalid tutorial URL").optional(),
});

const Form: React.FC = () => {
  const [formData, setFormData] = React.useState<FormDataType>({
    appName: "",
    description: "",
    stack: [""],
    features: [""],
    repo: "",
    link: "",
    tutorial: "",
  });

  const [validationErrors, setValidationErrors] = React.useState<Record<string, string>>({});

  // Track which inputs are editable
  const [editableIndices, setEditableIndices] = React.useState<Set<number>>(new Set([0]));
  const [featEditableIndices, setFeatEditableIndices] = React.useState<Set<number>>(new Set([0]));

  // Refs to manage focus
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);
  const featureInputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleStackChange = (i: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      stack: prev.stack.map((tech, index) => (index === i ? value : tech)),
    }));
  };

  const handleFeatureChange = (i: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.map((feat, index) => (index === i ? value : feat)),
    }));
  };

  const handleStackEnter = (i: number) => {
    if (formData.stack[i] === "") return;

    setEditableIndices((prev) => {
      const newEditableIndices = new Set(prev);
      newEditableIndices.delete(i);
      return newEditableIndices;
    });

    if (i === formData.stack.length - 1) {
      setFormData((prev) => ({
        ...prev,
        stack: [...prev.stack, ""],
      }));
      setEditableIndices((prev) => new Set(prev).add(i + 1));
    }
  };

  const handleFeatureEnter = (i: number) => {
    if (formData.features[i] === "") return;

    setFeatEditableIndices((prev) => {
      const newFeatEditableIndices = new Set(prev);
      newFeatEditableIndices.delete(i);
      return newFeatEditableIndices;
    });

    if (i === formData.features.length - 1) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, ""],
      }));
      setFeatEditableIndices((prev) => new Set(prev).add(i + 1));
    }
  };

  const handleRemoveStack = (i: number) => {
    setFormData((prev) => ({
      ...prev,
      stack: prev.stack.filter((_, index) => index !== i),
    }));
    setEditableIndices((prev) => {
      const newEditableIndices = new Set(prev);
      newEditableIndices.delete(i);
      return newEditableIndices;
    });
  };

  const handleRemoveFeature = (i: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, index) => index !== i),
    }));
    setFeatEditableIndices((prev) => {
      const newFeatEditableIndices = new Set(prev);
      newFeatEditableIndices.delete(i);
      return newFeatEditableIndices;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Validate the form data using Zod
      formSchema.parse(formData);
      setValidationErrors({}); // Clear validation errors
      console.log("Form submitted successfully", formData);
      // Add your form submission logic here
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a validation error object
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            errors[err.path.join(".")] = err.message;
          }
        });
        setValidationErrors(errors);
      }
    }
  };

  React.useEffect(() => {
    const lastIndex = formData.stack.length - 1;
    if (inputRefs.current[lastIndex]) {
      inputRefs.current[lastIndex]?.focus();
    }
  }, [formData.stack.length]);

  React.useEffect(() => {
    const lastIndex = formData.features.length - 1;
    if (featureInputRefs.current[lastIndex]) {
      featureInputRefs.current[lastIndex]?.focus();
    }
  }, [formData.features.length]);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="md:text-6xl text-4xl font-bold text-center bg-gradient-to-b from-neutral-600 to-transparent text-transparent bg-clip-text">
        Register Your App
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          value={formData.appName}
          placeholder="Enter App Name"
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              appName: e.target.value,
            }));
          }}
          label="App Name"
          error={validationErrors.appName}
        />
        <Input
          value={formData.description}
          placeholder="Enter App Description"
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
          label="App Description"
          error={validationErrors.description}
        />
        <div>
          <p>Tech Stack</p>
          <div className=" flex flex-wrap gap-4">
            {formData.stack.map((tech, i) => (
              <div key={`STACK_${i}`} className="w-40 relative">
                <Input
                  value={tech}
                  ref={(el) => {
                    inputRefs.current[i] = el;
                  }}
                  onChange={(e) => handleStackChange(i, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleStackEnter(i);
                    }
                  }}
                  placeholder="Tech"
                  readOnly={!editableIndices.has(i)}
                  error={validationErrors[`stack.${i}`]}
                />
                {!editableIndices.has(i) && (
                  <RxCross2
                    onClick={() => handleRemoveStack(i)}
                    className="absolute top-1 right-1 hover:bg-neutral-500 duration-300 p-[2px]"
                  />
                )}
              </div>
            ))}
          </div>
          {validationErrors.stack && (
            <p className="text-red-500 text-sm">{validationErrors.stack}</p>
          )}
        </div>

        <div>
          <p>Features</p>
          <div className=" flex flex-wrap gap-4">
            {formData.features.map((feature, i) => (
              <div key={`FEATURE_${i}`} className="w-full relative">
                <Input
                  value={feature}
                  ref={(el) => {
                    featureInputRefs.current[i] = el;
                  }}
                  onChange={(e) => handleFeatureChange(i, e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleFeatureEnter(i);
                    }
                  }}
                  placeholder="Features in Your App"
                  readOnly={!featEditableIndices.has(i)}
                  error={validationErrors[`features.${i}`]}
                />
                {!featEditableIndices.has(i) && (
                  <RxCross2
                    onClick={() => handleRemoveFeature(i)}
                    className="absolute top-1 right-1 hover:bg-neutral-500 duration-300 p-[2px]"
                  />
                )}
              </div>
            ))}
          </div>
          {validationErrors.features && (
            <p className="text-red-500 text-sm">{validationErrors.features}</p>
          )}
        </div>

        <Input
          value={formData.repo}
          placeholder="Project Repository Link"
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              repo: e.target.value,
            }));
          }}
          label="Repo"
          error={validationErrors.repo}
        />
        <Input
          value={formData.link}
          placeholder="Apk Link (google drive/ Mega or other link)"
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              link: e.target.value,
            }));
          }}
          label="Project Link"
          error={validationErrors.link}
        />
        <Input
          value={formData.tutorial}
          placeholder="Project Youtube Video link (Optional)"
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              tutorial: e.target.value,
            }));
          }}
          label="Tutorial link"
          error={validationErrors.tutorial}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;