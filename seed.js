use cookMasterV2;

db.users.insertMany([
  {
    _id: ObjectId("5f1937f7f0f8ac59ba0c607e"),
    name: "Felipe Lima",
    email: "lipe@gmail.com",
    password: "123456",
    role: "user",
  },
  {
    _id: ObjectId("5f0cb22a6d3c8a379034fa4c"),
    name: "Roz",
    email: "root@email.com",
    password: "admin",
    role: "admin",
  },
]);

db.recipes.insertMany([
  {
    _id: ObjectId("5f1ac2606658c24f1c23e9b1"),
    name: "Batata",
    ingredients: "Batata",
    preparation: "mexe a batata",
    url: "",
    authorId: "5f1937f7f0f8ac59ba0c607e",
  },
  {
    _id: ObjectId("5f1ae7571568e4219a0f69fb"),
    name: "Chuchu",
    ingredients: "Chuchu",
    preparation: "Cozinha o Chuchu, depois serve",
    url: "",
    authorId: "5f1937f7f0f8ac59ba0c607e",
  },
  {
    _id: ObjectId("5f1af646ce13552b19331f0e"),
    name: "Carne de Panela",
    ingredients: "Carne",
    preparation: "Joga a carne na panela e espera a magia acontecer",
    url: "https://localhost:3000/images/5f1af646ce13552b19331f0e.jpeg",
    authorId: "5f1937f7f0f8ac59ba0c607e",
  },
  {
    _id: ObjectId("5f1afa79c5d8a72c853f4d96"),
    name: "Frango na panela",
    ingredients: "Frango",
    preparation: "Cozinha o frango, depois serve",
    url: "",
    authorId: "5f0cb22a6d3c8a379034fa4c",
  },
  {
    _id: ObjectId("5f1afc0296bc302df4f951da"),
    name: "Frango na panela",
    ingredients: "Frango",
    preparation: "Cozinha o frango, depois serve",
    url: "",
    authorId: "5f1937f7f0f8ac59ba0c607e",
  },
  {
    _id: ObjectId("5f1afc0596bc302df4f951dc"),
    name: "Carne",
    ingredients: "Chuchu",
    preparation: "Cozinha o Chuchu, depois serve",
    url: "",
    authorId: "5f0cb22a6d3c8a379034fa4c",
  },
]);
