import { createClient } from 'contentful'
import Image from 'next/image'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import style from "@/styles/NotFound.module.css"

export default function NotFound({notFound}){
    const router = useRouter()
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },4000)
    },[])
    return (
        <div className={style.NotFound}>
            <span>
                <h1>404</h1>
                <h2>Page not found</h2>
            </span>
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
            <h2>Redirecting to home page...</h2>
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