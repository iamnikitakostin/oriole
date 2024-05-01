import React from 'react'
import "./Menu.css";

function Menu() {
  const menuRef = React.useRef(null);
  let hasScrolled = false;

  const triggerScrollEffect = (element) => {
    const initialScrollX = element.scrollLeft;
    const scrollAmount = 500;

    element.scrollTo({ left: initialScrollX + scrollAmount, behavior: 'smooth' });

    setTimeout(() => {
      element.scrollTo({ left: initialScrollX, behavior: 'smooth' });
    }, 1000);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasScrolled) {
          triggerScrollEffect(menuRef.current);
          hasScrolled = true;
        }
      },
      { threshold: 0.5 }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, [menuRef.current]);

  return (
    <div className="app__menu section__padding app__bg" id="menu">
        <h1 className='headtext__base'>
            Menu
        </h1>
        <div className="app__menu-categories" ref={menuRef}>
          <div className="app__menu-category">
            <h2 className="p__base">
              SANDWICH
            </h2>
            <div className="menu__category-content">
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>D Rose</p>
                  <div className="menu__item-description p__alt">chicken breast, salami, tomato, lettuce, spring mix, cheddar cheese, whole grain mustard, mayo</div>
                </div>
                <p className='menu__item-price p__base'>
                  $11
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Ham & Swiss</p>
                  <div className="menu__item-description p__alt">lean ham, Swiss cheese, tomato, greens, butter & mayo</div>
                </div>
                <p className='menu__item-price p__base'>
                  $10
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Chicken & Bacon</p>
                  <div className="menu__item-description p__alt">chicken breast, bacon, pico de lettuce, tomato, Sriracha mayo & cranberry may</div>
                </div>
                <p className='menu__item-price p__base'>
                  $10
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Kurtis' Sandwich</p>
                  <div className="menu__item-description p__alt">chicken breast, Canadian bacon, avocado, over-easy egg, lettuce, tomato, cheddar cheese, Sriracha mayo, sandwich bread</div>
                </div>
                <p className='menu__item-price p__base'>
                  $14
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Egg Sando</p>
                  <div className="menu__item-description p__alt">Japanese style egg salad in white bread</div>
                </div>
                <p className='menu__item-price p__base'>
                  $6
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Tuna</p>
                  <div className="menu__item-description p__alt">tuna, tomato, lettuce, red onion in white bread</div>
                </div>
                <p className='menu__item-price p__base'>
                  $6
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Grilled Cheese</p>
                  <div className="menu__item-description p__alt">cheddar cheese, mayo, butter and bread</div>
                </div>
                <p className='menu__item-price p__base'>
                  $6
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Vegetarian</p>
                  <div className="menu__item-description p__alt">Soy ham, tomato, cucumber, cheddar cheese, red onion</div>
                </div>
                <p className='menu__item-price p__base'>
                  $10
                </p>
              </div>
            </div>
          </div>
          <div className="app__menu-category">
            <h2 className="p__base">
              BREAKFAST (until 11am)
            </h2>
            <div className="menu__category-content">
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Classic Breakfast</p>
                  <div className="menu__item-description p__alt">2 eggs, bacon or ham or sausage, 2 toast</div>
                </div>
                <p className='menu__item-price p__base'>
                  $7
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Bigger Breakfast</p>
                  <div className="menu__item-description p__alt">2 eggs, bacon or ham or sausage, 2 toast, greens</div>
                </div>
                <p className='menu__item-price p__base'>
                  $8
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Vegan Breakfast</p>
                  <div className="menu__item-description p__alt">2 eggs, soy ham, 2 toast</div>
                </div>
                <p className='menu__item-price p__base'>
                  $7
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Breakfast Croissant</p>
                  <div className="menu__item-description p__alt">All butter croissant, scrambled eggs, ham, cheddar cheese</div>
                </div>
                <p className='menu__item-price p__base'>
                  $8
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Breakfast Sandwich</p>
                  <div className="menu__item-description p__alt">Scrambled eggs, ham or bacon or sausage, sandwich bread</div>
                </div>
                <p className='menu__item-price p__base'>
                  $7
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Grilled Cheese</p>
                  <div className="menu__item-description p__alt">Cheddar cheese, mayo, butter and sandwich bread</div>
                </div>
                <p className='menu__item-price p__base'>
                  $6
                </p>
              </div>
            </div>
          </div>
          <div className="app__menu-category">
            <h2 className="p__base">
              SOUP & NOODLE
            </h2>
            <div className="menu__category-content">
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Wonton Soup</p>
                  <div className="menu__item-description p__alt">pork & shanghai bak choy in chicken broth</div>
                </div>
                <p className='menu__item-price p__base'>
                  $12
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Beef Noodle Soup</p>
                  <div className="menu__item-description p__alt">slow braised beef shank in beef broth</div>
                </div>
                <p className='menu__item-price p__base'>
                  $12
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Wonton in Chilly Oil</p>
                  <div className="menu__item-description p__alt">10 pcs of pork wonton in chilly oil, cilantro, peanuts</div>
                </div>
                <p className='menu__item-price p__base'>
                  $12
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Dan Dan Wonton Noodle</p>
                  <div className="menu__item-description p__alt">noodle in chilly sauce and sesame paste, 5 pcs wonton, veggies</div>
                </div>
                <p className='menu__item-price p__base'>
                  $12
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Everything Bowl</p>
                  <div className="menu__item-description p__alt">3 pcs chicken wonton, 3 pcs pork wonton, beef shank, house made noodle, pickled cabbage, veggies in beef broth</div>
                  </div>
                <p className='menu__item-price p__base'>
                  $15
                </p>
              </div>
              <div className="menu__category-item">
                <div className="menu__item-details">
                  <p className="menu__item-title p__base" style={{fontFamily: "var(--font-alt)"}}>Extra Veggies/Noodle</p>
                </div>
                <p className='menu__item-price p__base'>
                  $2
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu