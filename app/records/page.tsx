import { getConnectionRecords } from "@/actions"
import { columns } from "@/components/columns";
import { DataTable } from "@/components/ui/data-table";


const page = async() => {

    const {records} = await getConnectionRecords();

    return (
        <div className='container mx-auto py-10'>
            <DataTable columns={columns} data={records} />
        </div>
    )
}

export default page