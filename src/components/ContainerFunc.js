import ShopItemFunc from './ShopItemFunc'
import ShopItemClass from './ShopItemClass'

/*******************************************
*  Контейнер для задачи №1 и №2            *
*  Что бы не дублировать код               *
********************************************/
const ContainerFunc = ({item, type}) => {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {type === 'Class' ? <ShopItemClass item={item} /> : <ShopItemFunc item={item} />}
      </div>
    </div>
  );
}

export default ContainerFunc;