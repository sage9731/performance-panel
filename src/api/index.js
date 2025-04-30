import axios from "axios";

export const getGoldPrice = () => {
    return axios.get("https://free.xwteam.cn/api/gold/trade");
}