import { Pagination } from "@mui/material";
import { useState } from "react";



const Paginations = () => {

    const [page, setPage] = useState(1);

    return (
        <>

            <div>
                {page}. Sayfa görüntüleniyor
            </div>

            <Pagination count={10} page={page} onChange={(event, value) => setPage(value)} />


        </>
    );
}

export default Paginations;
