/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Identity` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[governmentId]` on the table `Applicant` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_applicantId_fkey";

-- DropForeignKey
ALTER TABLE "Identity" DROP CONSTRAINT "Identity_applicantId_fkey";

-- AlterTable
ALTER TABLE "Applicant" ADD COLUMN     "district" TEXT,
ADD COLUMN     "governmentId" TEXT,
ADD COLUMN     "governmentIdType" TEXT,
ADD COLUMN     "pincode" INTEGER,
ADD COLUMN     "state" TEXT;

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Identity";

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_governmentId_key" ON "Applicant"("governmentId");
