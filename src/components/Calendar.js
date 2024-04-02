/*******************************************
*  Функциональный компонент для задачи №3  *
********************************************/

function CalendarBodyTableTbody(props) {
  const { date: currentDay  } = props;
  const dates = [];

  const start = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1);
  start.setDate(1 - ((start.getDay() + 6) % 7)); // Устанавливаем начало первой недели

  const end = new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 0);
  end.setDate(end.getDate() + (7 - end.getDay())); // Устанавливаем конец последней недели

  for (let date = new Date(start); date <= end; date = new Date(date.getTime() + 24 * 60 * 60 * 1000)) {
    dates.push({
      date,
      isInCurrentMonth: date.getMonth() === currentDay.getMonth(),
      isCurrentDay: date.toDateString() === currentDay.toDateString(),
    });
  }

  // Разбиваем массив дат на недели
  const daysInWeek = 7;
  const weeks = Array.from({ length: Math.ceil(dates.length / daysInWeek) }, (_, i) =>
    dates.slice(i * daysInWeek, i * daysInWeek + daysInWeek)
  );

  return (
    <tbody>
      {weeks.map((week, i) => (
        <tr key={i}>
          {week.map(({ date, isInCurrentMonth, isCurrentDay }) => (
            <td
              className={`${isInCurrentMonth ? '' : 'ui-datepicker-other-month'} ${
                isCurrentDay ? 'ui-datepicker-today' : ''
              }`}
              key={date.toISOString()}
            >
              {date.getDate()}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

/* Функция делает первый символ заглавным */
function firstCharToUpperCase(string) {
  return string.replace(/^./, string[0].toUpperCase());
}

export default function Calendar(props) {
  const { date } = props;
  const day = date.toLocaleDateString('ru-RU', { weekday: 'long' });
  const dayNum = date.getDate();
  const month = date.toLocaleDateString('ru-RU', { month: 'long' });
  const year = date.getFullYear();
    
  return (
    <div className="container"> {/* Обёртка, класс из задачи 1 и 2 */}
      <div className="background-element"></div> {/* Фон в виде полосы, класс из задачи 1 и 2 */}
      <div className="calendar"> {/* Добавил класс, для корректной работы */}
        <div className="ui-datepicker">
          <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{firstCharToUpperCase(day)}</div>
            <div className="ui-datepicker-material-date">
              <div className="ui-datepicker-material-day-num">{dayNum}</div>
              <div className="ui-datepicker-material-month">{month}</div>
              <div className="ui-datepicker-material-year">{year}</div>
            </div>
          </div>

          <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
              <span className="ui-datepicker-month">{firstCharToUpperCase(month)}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
            </div>
          </div>

          <table className="ui-datepicker-calendar">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="ui-datepicker-week-end" />
              <col className="ui-datepicker-week-end" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
              </tr>
            </thead>
            <CalendarBodyTableTbody date={date} />
          </table>
        </div>
      </div>
    </div>
  );
}
