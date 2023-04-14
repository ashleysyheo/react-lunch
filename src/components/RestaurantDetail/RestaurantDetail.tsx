import { Restaurant } from '../../types';
import { RESTAURANT_IMAGE } from '../../constants/images';
import Button from '../common/Button/Button';

interface RestaurantDetailProps {
  restaurant: Restaurant;
}

function RestaurantDetail({ restaurant }: RestaurantDetailProps) {
  return (
    <>
      <div className="restaurant__information">
        <div className="restaurant__category">
          <img
            src={RESTAURANT_IMAGE[restaurant.category]}
            alt={restaurant.category}
            className="category-icon"
          />
        </div>
        <div className="restaurant-detail__info-text">
          <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
          <span className="restaurant__distance text-body">
            캠퍼스부터 {restaurant.distance}분 내
          </span>
        </div>
      </div>
      <p className="restaurant-detail__description text-body">{restaurant.description ?? ''}</p>
      {restaurant.link && (
        <a href={restaurant.link} className="restaurant__link" target="_blank">
          웹사이트 방문하기
        </a>
      )}
      <Button className="button--primary modal-close-button">닫기</Button>
    </>
  );
}

export default RestaurantDetail;
