-- AlterTable
ALTER TABLE "Developer" ALTER COLUMN "dev_phone" DROP NOT NULL,
ALTER COLUMN "dev_resume" DROP NOT NULL,
ALTER COLUMN "dev_avatar" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL,
ALTER COLUMN "dev_password" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "project_tutorial_link" DROP NOT NULL,
ALTER COLUMN "Project_views" DROP NOT NULL,
ALTER COLUMN "project_rating" DROP NOT NULL,
ALTER COLUMN "updatedAt" DROP NOT NULL;
