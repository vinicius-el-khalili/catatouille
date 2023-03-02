import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import RecipePage from '../components/RecipePage';

const Recipe = ({recipe}) => {
        if (!recipe){
            return (
                <div>Loading...</div>
            )
        }
        return (
            <RecipePage
            thumbnail={"https:"+recipe.fields.thumbnail.fields.file.url}
            title={recipe.fields.title}
            ingredients={recipe.fields.ingredients.map(ing=>{return(
                <p key={recipe.fields.title+ing}>{ing}</p>
            )})}
            method={documentToReactComponents(recipe.fields.method)}
            />
    );
}

// 
const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
})

export async function getStaticPaths(){
    const response = await client.getEntries({
        content_type:"recipe"
    })
    const paths = response.items.map(item=>{
        return {
            params:{recipe:item.fields.slug}
        }
    })
    return {
        paths,
        fallback:true
    }

}

export async function getStaticProps(context){
    const response = await client.getEntries({
        content_type:"recipe"
    })
    let recipe = response.items.filter(entry=>{
        return entry.fields.slug===context.params.recipe
    })
    if (!recipe.lenght){
        return {
            redirect:{
                destination:"/",
                permanent:false
            }
        }
    }
    return{
        props:{
            recipe: recipe[0]
        },
        revalidate: 2
    }
}

export default Recipe;