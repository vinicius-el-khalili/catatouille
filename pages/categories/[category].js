import style from '@/styles/Home.module.css'
import { createClient } from 'contentful'
import RecipeCard from '@/components/RecipeCard'



export default function CategoryPage({category,categoryTag}){
    return(
        <div className={style.gridContainer}>
        
            <div className={style.titleContainer}>
                {categoryTags[categoryTag]}
            </div>
        
            {category.map(recipe=>{
                return(
                    <RecipeCard
                      key={recipe.sys.id+"RC"}
                      title={recipe.fields.title}
                      slug={recipe.fields.slug}
                      thumbnail={recipe.fields.thumbnail.fields.file.url}
                    />
                )
            })}
    
        
        </div>
    )
}

const categories = ["main-dish","side-dish","dissert"]
const categoryTags = {
    "main-dish":"Main dishes",
    "side-dish":"Side dishes",
    "dissert":"Disserts"
}
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function getStaticPaths(){
    const paths = categories.map(category=>{
        return{
            params:{category:category}
        }
    })
    return{
        paths,
        fallback:false
    }    
}

export async function getStaticProps(context){
    const response = await client.getEntries({
        content_type:"recipe"
    })
    let recipes = response.items.filter(entry=>{
        return entry.fields.category===context.params.category
    })
    return{
        props:{
            category:recipes,
            categoryTag:context.params.category
        }
    }
}