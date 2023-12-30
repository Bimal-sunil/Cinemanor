import React from "react";
import "../styles/CategoryCard.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../utils/hooks";
import { updateCurrentGenre } from "../redux/slices/currentGenre";

type Props = {
  iconClasses: string;
  categoryName: string;
  categoryId: number;
};

function CategoryCard(props: Props) {
  const { iconClasses, categoryName, categoryId } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div
      className="category-card"
      onClick={() => {
        dispatch(
          updateCurrentGenre({ genreId: categoryId, genreName: categoryName })
        );
        navigate(`${categoryName}`);
      }}>
      <i className={`category-icon fi ${iconClasses}`} />
      <span className="category-card-name">{categoryName}</span>
    </div>
  );
}

export default CategoryCard;
