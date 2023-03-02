import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import style from "@/styles/RecipePage.module.css"
import Image from "next/image";

const RecipePage = ({thumbnail,title,ingredients,method}) => {
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
                {ingredients}
            </div>

        </div>
    );
}
 
export default RecipePage;