"use client"

import { Category, Gender, Ownership, Status } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ConnectionReqDetails = {
    id: number;
    name: string;
    gender: Gender;
    state: string | null;
    district: string | null;
    pincode: number | null;
    governmentIdType: string | null;
    governmentId: string | null;
}

export const applicantColumns: ColumnDef<ConnectionReqDetails>[] = [
    {
        accessorKey: "name",
        header: "Applicant name",
    },
    {
        accessorKey: "gender",
        header: "Gender",
    },
    {
        accessorKey: "state",
        header: "State",
    },
    {
        accessorKey: "district",
        header: "District",
    },
    {
        accessorKey: "pincode",
        header: "Pincode",
    },
    {
        accessorKey: "governmentIdType",
        header: "Government Id Type",
    },
    {
        accessorKey: "governmentId",
        header: "Government Id",
    },
]
