/*
  Warnings:

  - A unique constraint covering the columns `[dev_email]` on the table `Developer` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Developer_dev_email_key" ON "Developer"("dev_email");
