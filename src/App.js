import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.css';

const slideItems = [
  {
    id: 'slide-1',
    contentText: 'Algum conteudo 1',
    contentImage: 'alguma imagem',
  },
  {
    id: 'slide-2',
    contentText: 'Algum conteudo 2',
    contentImage: 'alguma imagem',
  },
  {
    id: 'slide-3',
    contentText: 'Algum conteudo 3',
    contentImage: 'alguma imagem',
  },
];

const App = () => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function handlePrev() {
    if (active > 0) setActive(active - 1);
  }

  function handleNext() {
    if (active < slideItems.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.containerItems}
        style={{ transform: `translate(${position}px)` }}
      >
        {slideItems.map((item) => (
          <div className={styles.item} key={item.id}>
            <p>{item.contentText}</p>
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </nav>
    </section>
  );
};

export default App;
