import { useEffect, useState } from 'react'

const A = '/assets/'

const decorations = [
  ['af15d.svg', '6%', '3%'],
  ['b652c.svg', '11%', '13%'],
  ['7e7db.svg', '5%', '91%'],
  ['ebaab.svg', '16%', '86%'],
  ['065fe.svg', '27%', '3%'],
  ['700c4.svg', '27%', '91%'],
  ['a4e60.svg', '39%', '3%'],
  ['4526d.svg', '39%', '92%'],
  ['2280d.svg', '52%', '3%'],
  ['88ea8.svg', '53%', '91%'],
  ['57c9d.svg', '65%', '3%'],
  ['80741.svg', '65%', '92%'],
  ['bfcc7.svg', '77%', '3%'],
  ['7a47d.svg', '79%', '91%'],
  ['0a512.svg', '89%', '3%'],
  ['20d88.svg', '89%', '92%'],
]

function Action({ children, onClick, secondary = false }: { children: React.ReactNode; onClick?: () => void; secondary?: boolean }) {
  return (
    <button className={secondary ? 'pill pill-outline' : 'pill'} onClick={onClick}>
      {children}
    </button>
  )
}

export default function App() {
  const [dialog, setDialog] = useState<'join' | 'feedback' | null>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    if (!dialog) setSent(false)
  }, [dialog])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })

  return (
    <div className="site">
      <header className="header">
        <div className="utility">
          <button onClick={() => document.body.classList.toggle('accessible')}>Версия для слабовидящих</button>
          <button onClick={() => setDialog('feedback')}>Вход</button>
          <button onClick={() => setDialog('join')}>Регистрация</button>
        </div>
        <nav className="nav" aria-label="Основное меню">
          <button onClick={() => scrollTo('top')}>Главная</button>
          <button onClick={() => scrollTo('welcome')}>Сведения об образовательной организации</button>
          <img src={`${A}ac720.png`} alt="Логотип Дома детского творчества" />
          <button onClick={() => scrollTo('services')}>Сервисы</button>
          <button onClick={() => scrollTo('announcements')}>Информация</button>
          <button onClick={() => scrollTo('footer')}>Контакты</button>
        </nav>
      </header>

      <main id="top">
        <img className="dot-field" src={`${A}530c4.svg`} alt="" />
        {decorations.map(([src, top, left]) => (
          <img className="decoration" key={src} src={`${A}${src}`} alt="" style={{ top, left }} />
        ))}

        <section className="hero">
          <h1>МБУ ДО «Дом детского творчества»</h1>
          <p>Муниципальное бюджетное учреждение дополнительного образования Муниципального округа Среднеуральск</p>
          <div className="actions">
            <Action onClick={() => setDialog('join')}>Записаться в объединение</Action>
            <Action secondary onClick={() => setDialog('feedback')}>Обратная связь</Action>
          </div>
        </section>

        <section className="two-column feature">
          <article className="card news">
            <img className="mascot top-right" src={`${A}363bc.png`} alt="" />
            <span className="eyebrow red">Новости · 15 сентября 2026</span>
            <h2>Открытая линия психологической помощи</h2>
            <div className="placeholder">[ИЛЛЮСТРАЦИЯ К НОВОСТИ]</div>
            <div className="card-actions">
              <Action onClick={() => setDialog('feedback')}>Читать новость</Action>
              <button className="text-link" onClick={() => scrollTo('announcements')}>Все новости</button>
            </div>
          </article>
          <aside className="card together">
            <span className="eyebrow">Госуслуги</span>
            <h2>Решаем вместе</h2>
            <p>Есть проблемы с дополнительным образованием детей? С записью в кружки и секции? Расскажите об этом.</p>
            <Action onClick={() => setDialog('feedback')}>Написать</Action>
            <img className="mascot bottom-right" src={`${A}0fbd8.png`} alt="" />
          </aside>
        </section>

        <section className="building" aria-label="Здание Дома детского творчества">
          <img src={`${A}7b7f2.png`} alt="Здание Дома детского творчества" />
        </section>

        <section className="welcome card" id="welcome">
          <img className="mascot welcome-left" src={`${A}94f47.png`} alt="" />
          <img className="mascot welcome-right" src={`${A}bf758.png`} alt="" />
          <h2>Добро пожаловать в Дом детского творчества</h2>
          <p>
            Уважаемые родители и гости нашего сайта! Мы живём увлекательной и насыщенной жизнью. Наше образовательное
            учреждение — особое место, где ребёнка окружают красота, игра фантазии и вдохновение. Это содружество детей и
            взрослых: воспитанников, педагогов, родителей. Это мастерская, где осваиваются богатства народной культуры и традиций.
          </p>
          <div className="actions">
            {['Противодействие коррупции', 'Безопасность', 'Независимая оценка качества'].map((label) => (
              <Action secondary key={label} onClick={() => setDialog('feedback')}>{label}</Action>
            ))}
          </div>
        </section>

        <section className="two-column lower" id="announcements">
          <article className="card announcement">
            <img className="mascot top-right" src={`${A}11fd4.png`} alt="" />
            <span className="eyebrow green">Объявления</span>
            <h2>Зачисления в объединения на 2025–2026 учебный год</h2>
            <p>Записать ребёнка в объединение можно двумя способами:</p>
            <ol>
              <li>Через личный кабинет родителей на сайте Навигатор дополнительного образования.</li>
              <li>При личном посещении ДДТ: чт., пт. 08:00–16:00, обед 12:00–13:00.</li>
            </ol>
          </article>
          <article className="card services" id="services">
            <h2>Полезные сервисы</h2>
            <button onClick={() => setDialog('join')}>Выбор кружка через ВКонтакте</button>
            <button onClick={() => setDialog('join')}>Госуслуги: запись в кружки и секции</button>
            <button onClick={() => setDialog('join')}>Загородная среда</button>
          </article>
        </section>

        <section className="resources">
          <h2>Официальные ресурсы</h2>
          <div className="resource-grid">
            {[
              ['Министерство просвещения РФ', 'edu.gov.ru'],
              ['Минобрнауки России', 'minobrnauki.gov.ru'],
              ['Федеральный портал', 'edu.ru'],
              ['Профсоюз образования', 'eseur.ru'],
            ].map(([title, url]) => (
              <a key={url} href={`https://${url}`} target="_blank" rel="noreferrer">
                <strong>{title}</strong><span>{url}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer id="footer">
        <strong>МБУ ДО «Дом детского творчества»</strong>
        <button onClick={() => setDialog('feedback')}>Политика конфиденциальности</button>
      </footer>

      {dialog && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setDialog(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" onMouseDown={(e) => e.stopPropagation()}>
            <button className="close" aria-label="Закрыть" onClick={() => setDialog(null)}>×</button>
            {sent ? (
              <>
                <h2 id="dialog-title">Спасибо!</h2>
                <p>Ваше обращение принято. Мы свяжемся с вами в ближайшее время.</p>
                <Action onClick={() => setDialog(null)}>Готово</Action>
              </>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <h2 id="dialog-title">{dialog === 'join' ? 'Записаться в объединение' : 'Обратная связь'}</h2>
                <label>Ваше имя<input required name="name" /></label>
                <label>Телефон или email<input required name="contact" /></label>
                <label>{dialog === 'join' ? 'Желаемое направление' : 'Сообщение'}<textarea required name="message" rows={3} /></label>
                <Action>Отправить</Action>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
