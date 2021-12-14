import axios from "axios";

import { useState } from "react";

export default function PatchNotes() {
    const [test, setTest] = useState(null)

    async function getData() {
        const response = await axios.get('http://127.0.0.1:8000/patch-notes/')
        setTest(response.data)
        console.log(response.data);

    }
    getData()


    return (

        <>
            {
                test ?
                    <div>
                        < div dangerouslySetInnerHTML={{ __html: test.replace("/n", "") }} />
                    </div > : <> </>}
        </>
    )
}
