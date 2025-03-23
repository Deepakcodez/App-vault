-- CreateTable
CREATE TABLE "Developer" (
    "dev_id" TEXT NOT NULL,
    "dev_name" TEXT NOT NULL,
    "dev_email" TEXT NOT NULL,
    "dev_phone" TEXT NOT NULL,
    "dev_resume" TEXT NOT NULL,
    "dev_avatar" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("dev_id")
);

-- CreateTable
CREATE TABLE "Project" (
    "project_id" TEXT NOT NULL,
    "project_name" TEXT NOT NULL,
    "project_description" TEXT NOT NULL,
    "tech_stack" TEXT[],
    "project_icon" TEXT NOT NULL,
    "project_features" TEXT[],
    "project_images" TEXT[],
    "project_repo" TEXT,
    "project_link" TEXT NOT NULL,
    "project_tutorial_link" TEXT NOT NULL,
    "comments" TEXT[],
    "Project_views" BIGINT NOT NULL DEFAULT 0,
    "project_rating" INTEGER NOT NULL DEFAULT 0,
    "project_developer_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("project_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Developer_dev_id_key" ON "Developer"("dev_id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_id_key" ON "Project"("project_id");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_project_developer_id_fkey" FOREIGN KEY ("project_developer_id") REFERENCES "Developer"("dev_id") ON DELETE RESTRICT ON UPDATE CASCADE;
