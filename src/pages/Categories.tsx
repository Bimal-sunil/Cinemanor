import React from "react";
import "../styles/Categories.css";
import CategoryCard from "../components/CategoryCard";
import { movieGenres, tvGenres } from "../utils/data";
import Divider from "../components/Divider";
import { NavLink } from "react-router-dom";
import { ContentType } from "../utils/enum";

type CustomLinkProps = {
  to: string;
  children: React.ReactNode;
};

type Props = {
  type: `${ContentType}`;
};

function Categories(props: Props) {
  const { type } = props;
  const CustomNavLink = ({ to, children }: CustomLinkProps) => (
    <NavLink to={to} className="category-nav-item" end>
      {children}
    </NavLink>
  );
  const genreList = {
    [ContentType.Movie]: movieGenres,
    [ContentType.Tv]: tvGenres,
  };

  return (
    <div className="category-page">
      <header className="category-header">
        <div className="category-types">
          <CustomNavLink to="/categories">
            Movies<div className="active-nav-highlight"></div>
          </CustomNavLink>
          <CustomNavLink to="/categories/tv">
            Tv Shows<div className="active-nav-highlight"></div>
          </CustomNavLink>
        </div>
        <Divider style={{ width: "100%" }} />
      </header>
      <div className="category-list">
        {genreList[type].map((genre, index) => (
          <CategoryCard
            iconClasses={genre.iconClass}
            categoryName={genre.name}
            categoryId={genre.id}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
