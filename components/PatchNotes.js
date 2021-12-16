import axios from "axios";

import { useState } from "react";

export default function PatchNotes() {
    const [patch, setPatch] = useState(null)

    const flag = false
    const patchNotesUrl = process.env.NEXT_PUBLIC_PATCH_NOTES_URL
    async function fetchPatch() {
        const response = await axios.get(`${patchNotesUrl}`)
        setPatch(response.data["patch-notes"])
        const flag = true
    }

    if (flag == false) {
        fetchPatch(patch)
    }
    console.log(patch);


    return (
        patch ?
            <div className="flex flex-col items-center justify-center pl-5 text-xl text-left text-white align-middle bg-gray-900 ">
                <div dangerouslySetInnerHTML={{ __html: patch.replace("\n", "") }} />
            </div>
            : <div data-testid="load" className="text-3xl font-bold"> Loading. . .</div>
    )


}
