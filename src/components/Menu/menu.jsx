import './menu.css';
import { Drink } from '../Drink/drink';

export const Menu = ({ drinks }) => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Naše nabídka</h2>
        <p className="menu__bistro">
          Vyberte si z naší nabídky kvalitních nápojů.
        </p>
        <div className="drinks-list">
          {drinks.map((drink) => (
            <Drink
              key={drink.id}
              id={drink.id}
              name={drink.name}
              ordered={drink.ordered}
              image={`http://localhost:4000${drink.image}`}
              layers={drink.layers}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
