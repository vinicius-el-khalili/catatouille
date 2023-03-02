import style from "@/styles/RecipeCard.module.css"
import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({title,slug,thumbnail}) => {
    return (
        <div className={style.recipeCardContainer}>
            
            <div className={style.cardHeading}>
                <Link href={'/recipes/'+slug} className={style.link}>
                    <h1>{title}</h1>
                    </Link>
            </div>

            <h1>{thumbnail}</h1>
        </div>
    );
}

export default RecipeCard;
