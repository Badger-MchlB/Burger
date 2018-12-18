const orm = require("../config/orm.js");

let burger = {
    all: function(cb){
        orm.all("", (res) => {
            cb(res);
        });
    },
    create: (cols, vals, cb) => {
    orm.create("", cols, vals, (res) => {
        cb(res);
        });
    },
update: (objColVals, condition, cb) => {
    orm.update("burger", objColVals, condition, (res) => {
    cb(res);
        });
    },
delete: (condition, cb) => {
    orm.delete('',condition, (res) => {
        if (typeof cb === 'function') cb(res);
        });
    }
};
module.exports = burger;