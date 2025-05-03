import { render } from '@czechitas/render';
import { useEffect, useState } from 'react';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

import '../global.css';
import './index.css';

const IndexPage = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/drinks');
        const data = await response.json();
        setDrinks(data);
      } catch (error) {
        console.error('Chyba při načítání nápojů:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu drinks={drinks} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

document.querySelector('#root').innerHTML = render(<IndexPage />);

requestAnimationFrame(() => {
  const navBtn = document.querySelector('.nav-btn');
  const navEl = document.querySelector('.rollout-nav');

  navBtn.addEventListener('click', () => {
    navEl.classList.toggle('nav-closed');
  });

  navEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navEl.classList.add('nav-closed');
    }
  });
});
