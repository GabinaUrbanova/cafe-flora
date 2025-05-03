import './drink.css';
import { Layer } from '../Layer/layer';

export const Drink = ({ id, name, ordered, image, layers }) => {
  return (
    <div className="drink">
      <div className="drink__product">
        <div
          className="drink__cup"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="drink__info">
          <div className="drink__layers">
            {layers.map((layer, index) => (
              <Layer key={index} color={layer.color} label={layer.label} />
            ))}
          </div>
          <h3>{name}</h3>
        </div>
      </div>
      <div className="drink__controls">
        <button className="order-btn">Objednat</button>
      </div>
    </div>
  );
};
