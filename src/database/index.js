import  Sequelize  from "sequelize";

import  configDatabase from "../config/database";

import User from "../App/models/User";
import Product from "../App/models/Product";

const models = [User,Product];

class Databese {
    constructor() {
        this.init();
    }

    init(){
        this.connection = new Sequelize(configDatabase)
        models.map(model => model.init(this.connection))
    }
}

export default new Databese();
