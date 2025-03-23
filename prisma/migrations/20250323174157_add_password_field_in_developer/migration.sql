/*
  Warnings:

  - Added the required column `dev_password` to the `Developer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Developer" ADD COLUMN     "dev_password" TEXT NOT NULL;
