const Sequelize = require("sequelize");
const db = require("../db");
const User = require("./user");

const BucketList = db.define("bucketList", {
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

const createAndAssignBucketList = async (bucketList) => {
  if (bucketList.complete) {
    const bucketListWithUser = await bucketList.findByPk(bucketlist.id, {
      include: User,
    });
    await bucketListWithUser.user.createBucketList();
  }
};

BucketList.afterUpdate(createAndAssignBucketList);

module.exports = BucketList;
