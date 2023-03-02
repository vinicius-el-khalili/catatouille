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

            <div className={style.thumbnail}>
                <Link href={'/recipes/'+slug} className={style.link}>
                    <Image
                        src={"https:"+thumbnail}
                        fill
                        style={{objectFit:"cover"}}
                        alt={title}
                        priority={true}
                        sizes="(max-width: 1200px) 100vw,
                                (min-width: 1200px) 80vw,
                                "
                        />
                    </Link>
            </div>
        </div>
    );
}

export default RecipeCard;
