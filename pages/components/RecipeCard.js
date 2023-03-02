import style from "@/styles/RecipeCard.module.css"
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({title,slug}) => {
    return (
        <div className={style.recipeCardContainer}>
            
            <div className={style.cardHeading}>
                <Link href={'/recipes/'+slug} className={style.link}>
                    <h1>{title}</h1>
                    </Link>
            </div>
        </div>
    );
}

export default RecipeCard;
