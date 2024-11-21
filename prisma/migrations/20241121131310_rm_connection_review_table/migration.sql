/*
  Warnings:

  - You are about to drop the `reviewConnectionRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "ConnectionRequest" ADD COLUMN     "reviewerId" INTEGER,
ADD COLUMN     "reviewer_comments" TEXT;

-- DropTable
DROP TABLE "reviewConnectionRequest";
