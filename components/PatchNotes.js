import React from 'react'
import axios from 'axios'

export default function PatchNotes() {
    async function fetchdata() {
        const url = "http://127.0.0.1:8000/patch-notes/"
        const data = await axios.get(url)
        console.log(data)
        return data
    }
    const htmlresponse = fetchdata()

    return (
        // <div dangerouslySetInnerHTML={{ __html: htmlresponse }} />
    )
}
