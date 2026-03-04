/* ============================================
   САЙТ ЗАМОВЛЕННЯ СУШІ - JAVASCRIPT
   ============================================ */

// (Animation removed) Background pizza is static now.

// ============ ДАНІ ============

// Масив з меню: розділено на категорії 'sushi' та 'pizza'
const menu = [
  { id: 1, name: 'Сет Класичний', desc: '8 ролів, соєвий соус, імбир', price: 299, category: 'sushi', img: 'https://roll-club.ua/wp-content/uploads/2025/12/smachne-trio-900h600-1.jpg.webp', ingredients: ['лосось', 'авокадо', 'огірок', 'крем-сир'] },
  { id: 2, name: 'Філадельфія', desc: 'лосось, сир, авокадо', price: 199, category: 'sushi', img: 'https://roll-club.ua/wp-content/uploads/2025/10/3289.jpg.webp', ingredients: ['лосось', 'крем-сир', 'авокадо'] },
  { id: 3, name: 'Каліфорнія', desc: 'краб, авокадо, огірок', price: 179, category: 'sushi', img: 'https://cdn.egersund.ua/124593b3-6c99-45c6-1042-dc77a92d0500/600x450/600x450', ingredients: ['краб', 'авокадо', 'огірок', 'рис'] },
  { id: 4, name: 'Якудза рол', desc: 'гострий соус, вугор', price: 249, category: 'sushi', img: 'https://menu2go.ru/images/food/407/407_596_20220428133616_1769.jpg', ingredients: ['вугор', 'гострий соус', 'рис', 'норі'] },
  { id: 5, name: 'Еверест', desc: 'лосось, авокадо, крем-сир', price: 229, category: 'sushi', img: 'https://ce6e1bcc-e329-4500-b965-54d06a22bcc8.selstorage.ru/8094768/3a1f2924-7e42-4655-8440-0f103c461e7b.jpg', ingredients: ['лосось', 'авокадо', 'крем-сир', 'рис'] },
  { id: 6, name: 'Дракон', desc: 'вугор, крем-сир, ікра летючої риби', price: 289, category: 'sushi', img: 'https://i.evrasia.in.ua/data/1400_0/products/54wJtl1FOAh4jcBKNNKsHAgjy2I2deqMpd5VjbfK.webp', ingredients: ['вугор', 'крем-сир', 'ікра', 'авокадо'] },
  { id: 7, name: 'Манхеттен', desc: 'креветка, авокадо, манго', price: 219, category: 'sushi', img: 'https://sushimax.com.ua/image/cachewebp/catalog/%D0%9C%D0%B0%D0%BD%D1%85%D0%B5%D1%82%D1%82%D0%B5%D0%BD-500x500.webp', ingredients: ['креветка', 'авокадо', 'манго', 'рис'] },
  { id: 8, name: 'Біла Фея', desc: 'білий сир, лосось, інжир', price: 259, category: 'sushi', img: 'https://sushipizza.com.ua/image/cache/catalog/slider/desktop/%D0%A0%D0%BE%D0%BB%20%D0%91%D1%96%D0%BB%D0%B0%20%D0%BF%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D0%B0-400x400.PNG', ingredients: ['білий сир', 'лосось', 'інжир', 'авокадо'] },
  { id: 9, name: 'Золотой Храм', desc: 'краб, манго, кунжут', price: 189, category: 'sushi', img: 'https://cdn.sushi-master.ua/sm-ua/products/0003-rol-zolotij-drakon-new.jpg?&w=600&h=330&format=webp&mode=fit&q=10', ingredients: ['краб', 'манго', 'кунжут', 'рис'] },
  { id: 10, name: 'Екзотика', desc: 'паслін, манго, крем-сир', price: 209, category: 'sushi', img: 'https://yakuzalviv.com/wp-content/uploads/2024/03/ekzotyka-veb-2.webp', ingredients: ['паслін', 'манго', 'крем-сир', 'авокадо'] },

  // ПІЦИ (відокремлені категорією 'pizza')
  { id: 11, name: 'Піца Маргарита', desc: 'томатний соус, моцарела, базилік (30 см)', price: 249, category: 'pizza', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Margherita_Originale.JPG', ingredients: ['томатний соус', 'моцарела', 'базилік', 'оливкова олія'] },
  { id: 12, name: 'Піца Пепероні', desc: 'томатний соус, пепероні, моцарела (30 см)', price: 279, category: 'pizza', img: 'https://adriano.com.ua/wp-content/uploads/2022/08/%D0%9F%D1%96%D1%86%D0%B0-%D0%BF%D0%B5%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D1%96-%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82-%D0%B2%D1%96%D0%B4-%D0%BF%D1%96%D1%86%D0%B5%D1%80%D1%96%D1%96%CC%88-22Adriano22.jpg', ingredients: ['томатний соус', 'пепероні', 'моцарела', 'базилік'] },
  { id: 13, name: 'Піца Чотири Сири', desc: 'моцарела, горгонзола, пармезан, сулугуні (30 см)', price: 319, category: 'pizza', img: 'https://uzetut.com/image/cache/catalog/pica4siri-500x500.jpg', ingredients: ['моцарела', 'горгонзола', 'пармезан', 'сулугуні'] },
  { id: 14, name: 'Піца з Куркою та Авокадо', desc: 'курка, авокадо, крем-сир, салатна заправка (30 см)', price: 339, category: 'pizza', img: 'https://img.postershop.me/cdn-cgi/image/width=1024,format=webp/https://img.postershop.me/13986/45863639-7286-4541-a853-719a77b22800_image.jpeg', ingredients: ['курка', 'авокадо', 'крем-сир', 'салат'] },
  { id: 15, name: 'Піца Барбекю', desc: 'соус барбекю, курка, цибуля, моцарела (30 см)', price: 329, category: 'pizza', img: 'https://cipollino.ua/content/uploads/images/pytstsa-barbekiu-sostav-kaloryinost-y-retsept-s-foto-20135791090339_75c09437f3.jpg', ingredients: ['соус барбекю', 'курка', 'цибуля', 'моцарела'] },
  { id: 16, name: 'Піца Вегетаріанська', desc: 'помідори, болгарський перець, гриби, оливки (30 см)', price: 289, category: 'pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60', ingredients: ['помідори', 'болгарський перець', 'гриби', 'оливки'] },
  { id: 17, name: 'Піца Морська', desc: 'лосось, креветки, кальмари, моцарела (30 см)', price: 359, category: 'pizza', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=60', ingredients: ['лосось', 'креветки', 'кальмари', 'моцарела'] },
  { id: 18, name: 'Піца Понзу', desc: 'вугор, соус понзу, сир, зелень (30 см)', price: 369, category: 'pizza', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60', ingredients: ['вугор', 'соус понзу', 'сир', 'зелень'] }
];

// Масив з відгуками клієнтів (6 відгуків)
const reviews = [
  { name: 'Марія К.', stars: 5, text: 'Найсмачніша суш яку я коли-небудь пробувала! Доставка була швидка.' },
  { name: 'Іван П.', stars: 5, text: 'Виявився на день народження. Усім дуже сподобалось. Рекомендую!' },
  { name: 'Олена З.', stars: 4, text: 'Дуже свіжа та якісна суш. Ціни справедливі. Один мінус - можна більше імбиру.' },
  { name: 'Петро М.', stars: 5, text: 'Замовляю постійно. Завжди смачно і гарячо. Класна команда!' },
  { name: 'Анна В.', stars: 5, text: 'Набір Еверест - просто вулканус! Кремовий смак, ідеальне поєднання.' },
  { name: 'Дмитро Л.', stars: 4, text: 'Гарна пропозиція. Доставка приходит в обід, як обіцяно. Спасибо!' }
];

// Масив зі спеціальними пропозиціями/акціями (4 акції)
const promos = [
  { title: '🎁 Купи 2 - отримай знижку 15%', desc: 'На замовлення від 2 ролів', valid: 'до 28.02.2026' },
  { title: '🚚 Безплатна доставка', desc: 'При замовленні від 500 ₴', valid: 'постійно' },
  { title: '⏰ Ранній обід', desc: '-20% на замовлення з 11:00 до 13:00', valid: 'кожен день' },
  { title: '👥 Дружній тиск', desc: 'Третій набір за половину ціни', valid: 'до 25.02.2026' }
];

// Map для зберігання товарів у кошику {id: {назва, ціна, кількість}}
const cart = new Map();

// ============ ДОПОМІЖНІ ФУНКЦІЇ ============

// Форматування числа без десяткових чисел
function format(n){return n.toFixed(0)}

// Завантаження відгуків з localStorage
function loadReviews(){
  const saved = localStorage.getItem('reviews');
  if(saved){
    const saved_reviews = JSON.parse(saved);
    // Додаємо збережені відгуки в початок масиву
    reviews.unshift(...saved_reviews);
  }
}

// Збереження відгуків у localStorage
function saveReviews(){
  const saved_reviews = reviews.slice(0, 10);  // Зберігаємо тільки нові відгуки
  localStorage.setItem('reviews', JSON.stringify(saved_reviews));
}

// ============ МОДАЛЬНЕ ВІКНО ДЛЯ ЗОБРАЖЕНЬ ============
function openImageModal(imageSrc, name, ingredients){
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalName = document.getElementById('modalName');
  const modalIngredients = document.getElementById('modalIngredients');
  
  modalImage.src = imageSrc;
  modalName.textContent = name;
  
  // Показуємо інгредієнти
  if(ingredients && ingredients.length > 0){
    modalIngredients.innerHTML = '<strong>🥘 Інгредієнти:</strong><br>' + ingredients.join(', ');
  } else {
    modalIngredients.innerHTML = '';
  }
  
  modal.classList.remove('hidden');
}

function closeImageModal(){
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
}

// ============ ВІДОБРАЖЕННЯ МЕНЮ ============
// Генерує HTML картки для кожного товару з меню
function renderMenu(){
  const container = document.getElementById('menuItems');
  container.innerHTML = '';  // Очищення попередніх картак
  menu.forEach(item=>{
    const card = document.createElement('div'); card.className='menu-card';  // Картка товару
    let img;
    if(item.img){
      // Якщо є посилання на картину
      img = document.createElement('img');
      img.src = item.img;
      img.alt = item.name;
      img.className = 'menu-img';
      img.style.height = '120px';
      img.style.borderRadius = '8px';
      img.style.objectFit = 'cover';
      img.style.cursor = 'zoom-in';
      img.onclick = ()=>{ openImageModal(item.img, item.name, item.ingredients); };  // При кліку - показуємо в модальному вікні
      img.onerror = ()=>{
        // Якщо картина не завантажилась - показуємо замість неї емодзі 🍣 або 🍕
        const emoji = item.category==='pizza' ? '🍕' : '🍣';
        const f = document.createElement('div'); f.style.background='#f6f6f6'; f.style.height='120px'; f.style.borderRadius='8px'; f.style.display='flex'; f.style.alignItems='center'; f.style.justifyContent='center'; f.textContent=emoji;
        if(img.parentNode) img.parentNode.replaceChild(f, img);
      }
    } else {
      // Якщо немає посилання - одразу емодзі
      const emoji = item.category==='pizza' ? '🍕' : '🍣';
      img = document.createElement('div'); img.style.background='#f6f6f6'; img.style.height='120px'; img.style.borderRadius='8px'; img.style.display='flex'; img.style.alignItems='center'; img.style.justifyContent='center'; img.textContent=emoji;
    }
    const h = document.createElement('h3'); h.textContent = item.name;  // Назва
    const p = document.createElement('p'); p.textContent = item.desc;  // Опис
    
    // Інгредієнти
    const ingredientsDiv = document.createElement('div'); ingredientsDiv.className='ingredients-section';
    const ingredientsLabel = document.createElement('label'); ingredientsLabel.textContent='🥘 Інгредієнти:';
    const ingredientsList = document.createElement('div'); ingredientsList.className='ingredients-list';
    
    item.ingredients.forEach(ing=>{
      const checkbox = document.createElement('input'); checkbox.type='checkbox'; checkbox.value=ing; checkbox.className='ingredient-checkbox'; checkbox.checked=true;
      const label = document.createElement('label'); label.style.display='flex'; label.style.alignItems='center'; label.style.gap='6px'; label.style.fontSize='0.9rem'; label.style.marginBottom='6px'; label.style.cursor='pointer';
      label.appendChild(checkbox); label.appendChild(document.createTextNode(ing));
      ingredientsList.appendChild(label);
    });
    
    ingredientsDiv.appendChild(ingredientsLabel);
    ingredientsDiv.appendChild(ingredientsList);
    
    const meta = document.createElement('div'); meta.className='meta';  // Контейнер ціни та кнопки
    const price = document.createElement('div'); price.textContent = item.price + ' ₴';  // Ціна
    const add = document.createElement('button'); add.className='btn slide'; add.textContent='Додати';  // Кнопка додавання
    add.onclick = ()=>{ 
      const selectedIngredients = Array.from(ingredientsList.querySelectorAll('input[type="checkbox"]:checked')).map(cb=>cb.value);
      addToCart(item.id, selectedIngredients); 
    };
    meta.appendChild(price); meta.appendChild(add);
    card.appendChild(img); card.appendChild(h); card.appendChild(p); card.appendChild(ingredientsDiv); card.appendChild(meta);
    container.appendChild(card);
  })
}


// ============ ВІДОБРАЖЕННЯ ВІДГУКІВ ============
// Генерує HTML картки для кожного відгуку
function renderReviews(){
  const container = document.getElementById('reviewsList');
  container.innerHTML = '';  // Очищення попередніх відгуків
  reviews.forEach(review=>{
    const card = document.createElement('div'); card.className='review-card';
    const stars = document.createElement('div'); stars.className='stars'; stars.textContent='★'.repeat(review.stars);  // Зірки
    const text = document.createElement('div'); text.className='review-text'; text.textContent=review.text;  // Текст відгуку
    const name = document.createElement('div'); name.className='reviewer-name'; name.textContent=review.name;  // Ім'я
    card.appendChild(stars); card.appendChild(text); card.appendChild(name);
    container.appendChild(card);
  })
}

// ============ ВІДОБРАЖЕННЯ АКЦІЙ ============
// Генерує HTML картки для кожної акції
function renderPromos(){
  const container = document.getElementById('promosList');
  container.innerHTML = '';  // Очищення попередніх акцій
  promos.forEach(promo=>{
    const card = document.createElement('div'); card.className='promo-card';
    const title = document.createElement('h3'); title.textContent=promo.title;  // Назва акції
    const desc = document.createElement('p'); desc.className='promo-desc'; desc.textContent=promo.desc;  // Опис
    const valid = document.createElement('p'); valid.className='promo-valid'; valid.textContent='⏳ '+promo.valid;  // Період дії
    card.appendChild(title); card.appendChild(desc); card.appendChild(valid);
    container.appendChild(card);
  })
}

// ============ УПРАВЛІННЯ КОШИКОМ ============

// Додавання товару в кошик
function addToCart(id, selectedIngredients=[]){
  const item = menu.find(m=>m.id===id);  // Знаходимо товар за ID
  if(!item) return;
  
  // Створюємо унікальний ключ для товару з його інгредієнтами
  const key = id + '_' + selectedIngredients.sort().join(',');
  
  const prev = cart.get(key) || { ...item, qty:0, ingredients:selectedIngredients };  // Отримуємо товар з кошика або створюємо новий
  prev.qty++;  // Збільшуємо кількість
  prev.ingredients = selectedIngredients;  // Зберігаємо вибрані інгредієнти
  cart.set(key, prev);  // Зберігаємо в Map
  renderCart();  // Оновлюємо відображення кошика
}

// Видалення товару з кошика
function removeFromCart(key){
  if(!cart.has(key)) return;
  const it = cart.get(key);
  it.qty--;  // Зменшуємо кількість
  if(it.qty<=0) cart.delete(key);  // Видаляємо товар якщо кількість 0
  else cart.set(key,it);  // Зберігаємо змінений товар
  renderCart();  // Оновлюємо відображення кошика
}

// Відображення кошика та обновлення суми
function renderCart(){
  const list = document.getElementById('cartList');
  const totalEl = document.getElementById('total');
  const checkoutBtn = document.getElementById('checkoutBtn');
  list.innerHTML='';
  let total = 0;
  
  if(cart.size===0){
    // Кошик порожній
    list.textContent='Порожній кошик';
    checkoutBtn.disabled=true;
    document.getElementById('orderForm').classList.add('hidden');
  }
  else{
    // Кошик має товари
    cart.forEach((it, key)=>{
      const row = document.createElement('div'); row.className='cart-item';
      const left = document.createElement('div');
      const ingredientsText = it.ingredients && it.ingredients.length > 0 ? `<div style="color:var(--muted);font-size:0.8rem">🥘 ${it.ingredients.join(', ')}</div>` : '';
      left.innerHTML=`${it.name} <div style="color:var(--muted);font-size:0.85rem">${it.qty} × ${it.price} ₴</div>${ingredientsText}`;  // Назва, кількість, ціна, інгредієнти
      const right = document.createElement('div');
      const minus = document.createElement('button'); minus.className='btn slide'; minus.textContent='−'; minus.onclick=()=>removeFromCart(key);  // Кнопка мінус
      const plus = document.createElement('button'); plus.className='btn slide'; plus.textContent='+'; plus.onclick=()=>{ 
        const item = menu.find(m=>m.id===it.id);
        addToCart(it.id, it.ingredients); 
      };  // Кнопка плюс
      right.appendChild(minus); right.appendChild(plus);
      row.appendChild(left); row.appendChild(right);
      list.appendChild(row);
      total += it.qty * it.price;  // Підраховуємо загальну суму
    })
    checkoutBtn.disabled=false;  // Активуємо кнопку оформлення
  }
  totalEl.textContent = format(total);  // Показуємо суму
}

// ============ ІНІЦІАЛІЗАЦІЯ ============
// Запускається при завантаженні сторінки
document.addEventListener('DOMContentLoaded', ()=>{
  // Фонова анімація вимкнена
  
  // Завантажуємо збережені відгуки з localStorage
  loadReviews();
  
  // Генеруємо все вміст
  renderMenu();
  renderPromos();
  renderReviews();
  renderCart();
  
  // Обробка форми відгуків
  document.getElementById('reviewForm').addEventListener('submit', (e)=>{
    e.preventDefault();  // Запобігаємо перезавантаженню сторінки
    
    const name = document.getElementById('reviewName').value.trim();
    const rating = parseInt(document.querySelector('input[name="rating"]:checked').value);
    const text = document.getElementById('reviewText').value.trim();
    
    // Перевіряємо валідність
    if(!name || !text){
      alert('Будь ласка, заповніть всі поля!');
      return;
    }
    
    // Створюємо новий відгук
    const newReview = {
      name: name,
      stars: rating,
      text: text
    };
    
    // Додаємо на початок масиву (новіший спочатку)
    reviews.unshift(newReview);
    
    // Зберігаємо у localStorage
    saveReviews();
    
    // Оновлюємо відображення
    renderReviews();
    
    // Очищуємо форму
    document.getElementById('reviewForm').reset();
    document.getElementById('star5').checked = true;  // Встановлюємо рейтинг на 5 зірок за замовчуванням
    
    // Показуємо повідомлення
    alert('Дякуємо за ваш відгук!');
  });
  
  // Показ/приховання форми доставки при кліку на кнопку
  document.getElementById('checkoutBtn').addEventListener('click', ()=>{
    document.getElementById('orderForm').classList.toggle('hidden');
  });

  // Обробка відправлення форми замовлення
  document.getElementById('orderForm').addEventListener('submit', (e)=>{
    e.preventDefault();  // Запобігаємо перезавантаженню сторінки
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    
    // Перевіряємо, чи заповнені всі поля
    if(!name||!phone||!address){
      alert('Будь ласка, заповніть всі поля.');
      return;
    }
    
    // Складаємо список замовлених товарів
    const items = Array.from(cart.values()).map(i=>`${i.name} x${i.qty}`).join(', ');
    const total = document.getElementById('total').textContent;
    
    // Показуємо підтвердження замовлення
    alert(
      `Дякуємо, ${name}!\nЗамовлення: ${items}\nСума: ${total} ₴\nДоставка на: ${address}\nМи зв'яжемося за номером ${phone}`
    );
    
    // Очищуємо кошик та форму
    cart.clear();
    renderCart();
    document.getElementById('orderForm').classList.add('hidden');
    document.getElementById('orderForm').reset();
  })
  
  // ============ ОБРОБНИКИ МОДАЛЬНОГО ВІКНА ============
  // Закривання при кліку на кнопку X
  document.querySelector('.modal-close').addEventListener('click', closeImageModal);
  
  // Закривання при кліку на фон (темну область)
  document.getElementById('imageModal').addEventListener('click', (e)=>{
    if(e.target.id === 'imageModal') closeImageModal();
  });
  
  // Закривання при натисканні на ESC
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') closeImageModal();
  });});