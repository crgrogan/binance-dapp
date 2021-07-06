const DBCToken = artifacts.require("DBCToken");
require("chai").should();

contract("DBCToken", async () => {
  const _name = "DBC Token";

  beforeEach(async function () {
    this.token = await DBCToken.deployed();
  });

  describe("token attributes", function () {});
});
