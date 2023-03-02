import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import style from "@/styles/RecipePage.module.css"
import Image from "next/image";

const RecipePage = ({thumbnail,title,ingredients,method}) => {
    console.log(ingredients)
    return (
        <div className={style.recipePageContainer}>
            
            <div className={style.thumbnail}>
                <Image 
                src={thumbnail}
                alt={title}
                fill
                style={{objectFit:"cover"}}
                priority={true}
                />
            </div>

            <div className={style.title}>{title}</div>
            
            <div className={style.ingredients}>
                <h2>Ingredients</h2>
                {ingredients.map(ing=>{return(
                    <p key={ing}>{ing}</p>
                )})}
            </div>

        </div>
    );
}
 
export default RecipePage;