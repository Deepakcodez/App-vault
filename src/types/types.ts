type Developer = {
    dev_id: string; // UUID
    dev_name: string;
    dev_email: string;
    dev_password:string;
    dev_phone: string;
    dev_resume: string;
    dev_avatar: string;
    dev_projects?: Project[]; // Array of Project objects
    createdAt: Date;
    updatedAt?: Date;
  };

  type Project = {
    project_id: string; // UUID
    project_name: string;
    project_description: string;
    tech_stack: string[]; // Array of strings
    project_icon: string;
    project_features: string[]; // Array of strings
    project_images: string[]; // Array of strings
    project_repo: string | null; // Optional field
    project_link: string;
    project_tutorial_link: string;
    comments: string[]; // Array of strings
    Project_views: bigint; // BigInt
    project_rating: number; // Int
    project_developer: Developer; // Related Developer object
    project_developer_id: string; // Foreign key to Developer
    createdAt: Date;
    updatedAt?: Date;
  };


  type ImageType = {
    name: string;
    url: string;
  };


  type FormData = {
    appName: string;
    description: string;
    images : ImageType[];
    stack: string[];
    features: string[];
    repo: string;
    link: string;
    tutorial: string;
  };

  export type {
    Developer,
    Project,
    ImageType,
    FormData
  }