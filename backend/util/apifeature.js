const { remove } = require("winston");

class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // serching prodcut
  search() {
    const keyword = this.queryStr.keyword
      ? {
          $or: [
            { productname: { $regex: this.queryStr.keyword, $options: "i" } },
          ],
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const CopyStr = { ...this.queryStr};

    console.log(CopyStr);

    const removekeyword = ["keyword", "limit", "page"];

    removekeyword.forEach((key) => delete CopyStr[key]);

    console.log(CopyStr);
  }
}

module.exports = ApiFeatures;
