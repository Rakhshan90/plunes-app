/*
  Warnings:

  - You are about to drop the column `comments` on the `Reviewer` table. All the data in the column will be lost.
  - Added the required column `reviewer_comments` to the `ConnectionRequest` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ConnectionRequest" ADD COLUMN     "reviewer_comments" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reviewer" DROP COLUMN "comments";
