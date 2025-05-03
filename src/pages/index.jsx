import { render } from '@czechitas/render';
import { Header } from '../components/Header/header';
import { Banner } from '../components/Banner/banner';
import { Menu } from '../components/Menu/menu';
import { Gallery } from '../components/Gallery/gallery';
import { Contact } from '../components/Contact/contact';
import { Footer } from '../components/Footer/footer';

import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>,
);
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
