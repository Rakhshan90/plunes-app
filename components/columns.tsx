"use client"

import { Category, Ownership, Status } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ConnectionReqDetails = {
    id: number;
    ownership: Ownership;
    category: Category;
    status: Status;
    load: number;
    applicationDate: String;
    approvalDate: String | undefined,
    modifiedDate: String | undefined,
    applicantId: number[];
    reviewerId: number | null;
    reviewer_comments: string | null;
    reviewer_name: string | null;
}

export const columns: ColumnDef<ConnectionReqDetails>[] = [
    {
        accessorKey: "applicantId",
        header: "ID",
        cell: ({ row }) => (
            // Render the array as a comma-separated string
            <div>{row.original.applicantId.join(", ")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "ownership",
        header: "Ownership",
    },
    {
        accessorKey: "category",
        header: "Category",
    },
    {
        accessorKey: "load",
        header: "Load",
    },
    {
        accessorKey: "applicationDate",
        header: "Application Date",
    },
    {
        accessorKey: "approvalDate",
        header: "Approval Date",
    },
    {
        accessorKey: "modifiedDate",
        header: "Modified Date",
    },
    {
        accessorKey: "reviewerId",
        header: "Reviewer Id",
    },
    {
        accessorKey: "reviewer_name",
        header: "Reviewer Name",
    },
    {
        accessorKey: "reviewer_comments",
        header: "Reviewer Comments",
    },
    {
        id: "applicants",
        header: "Applicants",
        cell: ({ row }) => {
            const router = useRouter(); // Access the Next.js router
            return (
                <Button
                    onClick={() => router.push(`/records/${row.original.id}/applicants`)}
                    variant="secondary"
                >
                    View
                </Button>
            );
        },
    },
    {
        id: "updateConnectionReq",
        header: "Update",
        cell: ({ row }) => {
            const router = useRouter(); // Access the Next.js router
            return (
                <Button
                    onClick={() => router.push(`/records/${row.original.id}/update-connection-req`)}
                    variant="secondary"
                >
                    Edit
                </Button>
            );
        },
    },
]
