import { createServer, Model } from "miragejs";

createServer({
  models: {
    properties: Model,
  },

  seeds(server) {
    server.create("property", {
      id: "1",
      name: "Equisite",
      price: 60000000,
      description:
        "House that suits your everyday taste. Good interior, well furnished, awesome materials with superb environment",
      imageUrl:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      type: "simple",
      hostId: "123",
    });
    server.create("property", {
      id: "2",
      name: "Luxury",
      price: 80000000,
      description:
        "What more do you want in a house. This nicely curated well furnished house is best for you It provides everything you need in a housing scheme",
      imageUrl:
        "https://images.unsplash.com/photo-1560184897-ae75f418493e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      type: "rugged",
      hostId: "123",
    });
    server.create("property", {
      id: "3",
      name: "Perfect",
      price: 100000000,
      description:
        "Get your dream home at no extralcost. You are only paying for the house. more like pay and enter because everything as being set up for you. Nicely spaced with nature as surrounding",
      imageUrl:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      type: "luxury",
      hostId: "456",
    });
    server.create("property", {
      id: "4",
      name: "Cost Effective",
      price: 65000000,
      description:
        "This is the perfect home for you. If you don't like stress or you are unsure on appliances to get, then this luxury is all you need. fully furnished with nothing to add to it. Easily customizable interior where you can change or add to it if you are not satisfy with the design",
      imageUrl:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      type: "simple",
      hostId: "789",
    });
    server.create("property", {
      id: "5",
      name: "Superb",
      price: 120000000,
      description:
        "Comfort is what we all strive for. With the hustling and buzzling will deal with everyday, Housing shouldn't be a concern for us. This Perfect house is quite affordable and unique you get value for your money and besides it comes modernized designs that can stand the test of time. So you don't need to worry about changing designs every year.",
      imageUrl:
        "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      type: "luxury",
      hostId: "789",
    });
    server.create("property", {
      id: "6",
      name: "Awesome",
      price: 70000000,
      description:
        "Fine beauty exotic. Just name it. It's what this house offer. This is one of fure houses that is bulletproof, waterproof and fireproof. You have a customizable office for those that love to work from home. Not to mention the swimming pool and gym facility to build healthy muscles and for you to stay and remain healthy.",
      imageUrl:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      type: "rugged",
      hostId: "123",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    this.timing = 1000;

    this.get("/properties", (schema, request) => {
      return new Response(400, {}, { error: "Error fetching data" });
      // return schema.vans.all()
    });

    this.get("/properties", (schema, request) => {
      return schema.properties.all();
    });

    this.get("/properties/:id", (schema, request) => {
      const id = request.params.id;
      return schema.properties.find(id);
    });
    this.get("/host/properties", (schema, request) => {
      // Hard-code the hostId for now
      return schema.properties.where({ hostId: "123" });
    });

    this.get("/host/properties/:id", (schema, request) => {
      // Hard-code the hostId for now
      const id = request.params.id;
      return schema.properties.findBy({ id, hostId: "123" });
    });
    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);
      // This is an extremely naive version of authentication. Please don't
      // do this in the real world, and never save raw text passwords
      // in your database 😇
      const foundUser = schema.users.findBy({ email, password });
      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "No user with those credentials found!" }
        );
      }

      // At the very least, don't send the password back to the client 😅
      foundUser.password = undefined;
      return {
        user: foundUser,
        token: "Enjoy your pizza, here's your tokens.",
      };
    });
  },
});
