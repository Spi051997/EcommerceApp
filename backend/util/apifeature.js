class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  // serching prodcut
  search() {
    const keyword = this.queryStr.keyword
      ? {
          $or: [{ productname: { $regex: this.queryStr.keyword, $options: "i" } }],
        }
      : {};

      this.query=this.query.find({...keyword})
      return this;
  }
}

module.exports = ApiFeatures;
