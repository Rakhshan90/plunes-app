/*
  Warnings:

  - You are about to drop the column `reviewerId` on the `ConnectionRequest` table. All the data in the column will be lost.
  - You are about to drop the column `reviewer_comments` on the `ConnectionRequest` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ConnectionRequest" DROP CONSTRAINT "ConnectionRequest_reviewerId_fkey";

-- AlterTable
ALTER TABLE "ConnectionRequest" DROP COLUMN "reviewerId",
DROP COLUMN "reviewer_comments",
ALTER COLUMN "approvalDate" DROP NOT NULL,
ALTER COLUMN "modifiedDate" DROP NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "reviewConnectionRequest" (
    "id" SERIAL NOT NULL,
    "reviewerId" INTEGER NOT NULL,
    "connectionReqId" INTEGER NOT NULL,
    "reviewer_comments" TEXT NOT NULL,

    CONSTRAINT "reviewConnectionRequest_pkey" PRIMARY KEY ("id")
);
