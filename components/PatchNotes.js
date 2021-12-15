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
        patch ? <div dangerouslySetInnerHTML={{ __html: patch.replace("\n", "") }} /> : <div> Loading. . .</div>
    )


}
