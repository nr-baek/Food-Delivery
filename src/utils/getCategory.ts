export default function getCategory(storeId: string) {
  if (storeId >= "0" && storeId <= "4") {
    return "fastFood";
  } else if (storeId >= "5" && storeId <= "9") {
    return "dessert";
  } else if (storeId >= "10" && storeId <= "14") {
    return "chicken";
  } else if (storeId >= "15" && storeId <= "19") {
    return "pizza";
  } else if (storeId >= "20" && storeId <= "24") {
    return "schoolFood";
  } else if (storeId >= "25" && storeId <= "29") {
    return "dish";
  } else if (storeId >= "30" && storeId <= "34") {
    return "koreanFood";
  } else if (storeId >= "35" && storeId <= "39") {
    return "chineseFood";
  } else if (storeId >= "40" && storeId <= "44") {
    return "japaneseFood";
  }
}
