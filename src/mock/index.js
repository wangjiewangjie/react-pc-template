import Mock from "mockjs";
import api from "./mock.js"; //引入mock模拟的数据

Mock.mock("/api/dataApi", "get", api.dataApi);

export default Mock;
