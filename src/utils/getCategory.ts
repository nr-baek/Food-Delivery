export default function getCategory(storeId: string) {
  const id = +storeId;
  if (id >= 0 && id <= 4) {
    return "fastFood";
  } else if (id >= 5 && id <= 9) {
    return "dessert";
  } else if (id >= 10 && id <= 14) {
    return "chicken";
  } else if (id >= 15 && id <= 19) {
    return "pizza";
  } else if (id >= 20 && id <= 24) {
    return "schoolFood";
  } else if (id >= 25 && id <= 29) {
    return "dish";
  } else if (id >= 30 && id <= 34) {
    return "koreanFood";
  } else if (id >= 35 && id <= 39) {
    return "chineseFood";
  } else if (id >= 40 && id <= 44) {
    return "japaneseFood";
  }
}
