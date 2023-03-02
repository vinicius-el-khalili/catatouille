import { createClient } from 'contentful'
import Image from 'next/image'

export default function NotFound({notFound}){
    console.log(notFound.items[0].fields.image.fields.file.url)
    return (
        <div className="NotFound">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Redirecting to home page...</p>
            <div style={{
                position:"relative",
                width:"300px",
                height:"300px",
                border:"1px solid black"
                }}>
                <Image
                    style={{objectFit:"cover"}}
                    fill
                    src={"https:"+
                    notFound.items[0].fields.image.fields.file.url}
                    alt={"404: Page not Found"}
                />
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })
    const response = await client.getEntries({
        content_type: "notFound"
    })

    return {
        props:{
            notFound:response
        }
    }
}