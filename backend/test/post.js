const chai = require("chai");
const chathttp = require("chai-http");
const server = require("../server");

chai.should();
// chaihttp middleware to send the request to the server
chai.use(chathttp);

describe("Test Api to fetch product", () => {
  describe("Get the product name", () => {
    it("it should give all product list", (done) => {
      chai
        .request(server)
        .get("/Product/getproduct")
        .end((err, response) => {
          response.should.have.status(201);
          done();
        });
    });
  });
});

describe("Test api to create the product", () => {
  describe("Create the product", () => {
    it("It creates the new product", (done) => {

        let product={"productname":"Laptop",
        "description":"Predator Helios 300 ",
        "price":"93000",
        "rating":"5",
        "images":
            {
        "public_id":"0001",  
            "url":"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT7DiMlnKLbthai3duMq_2a2qO0ymAKpBWIul_abwqbywFPPStalSDVwo1u1LzTSQDWfZzHhufDlvyL_9NpziQiq0o0BKyW1Q"
            
    },
        "category":"SmartPhone",
        "Stock":"4",
        " numofReviews":50,
        "reviews":[
            {
                "name":"Shubham Pitliya",
            "rating":"3.5",
            "comment":"Great Performamce !"
            }
        ],
            
        "created":""}
      chai
        .request(server)
        .post("/Product/registration")
        .send(product)
        .end((err, response) => {
          response.should.have.status(200);
          done();
        });
    });
  });
});
