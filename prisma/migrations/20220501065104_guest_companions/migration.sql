-- AlterTable
ALTER TABLE "User" ADD COLUMN     "guestId" INTEGER,
ADD COLUMN     "phone" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
