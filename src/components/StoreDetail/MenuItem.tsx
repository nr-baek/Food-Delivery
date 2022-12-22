import { IMenuItem } from "types/responseTypes";

interface Props {
  key: string;
  menuInfo: IMenuItem;
}

function MenuItem({ menuInfo }: Props) {
  const { foodName, foodPrice, foodImage } = menuInfo;
  return (
    <label htmlFor={foodName}>
      <div className="menu-item">
        <input type="checkbox" id={foodName} value="교촌시그니처순살세트" />
        <div>
          <p className="menu-name">{foodName}</p>
          <p className="menu-price">{foodPrice.toLocaleString()}원</p>
        </div>
        <img
          src={require(`../../assets/images/menuImages/${foodImage}`)}
          alt={foodImage}
        />
      </div>
    </label>
  );
}

export default MenuItem;
