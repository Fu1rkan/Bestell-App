let mainCoursesObj = { 
  mainMeal : [
    {
      "name": "Ramen-Bowl",
      "price": 12.50,
      "ingredients": ["Nudeln", "Miso-Brühe", "Eier", "Frühlingszwiebeln", "Noriblätter"],
      "allergens": ["Gluten", "Eier", "Soja"],
    }, 
    {
      "name": "Chicken Teriyaki",
      "price": 10.90,
      "ingredients": ["Hähnchen", "Teriyakisauce", "Reis", "eingelegtes Gemüse"],
      "allergens": ["Soja", "Gluten"],
    },
    {
      "name": "Beef Yakiniku",
      "price": 13.20,
      "ingredients": ["Rindfleisch", "Sojasauce", "Gemüse", "Reis"],
      "allergens": ["Soja", "Gluten"],
    },
    {
      "name": "Vegetarisches Curry",
      "price": 9.50,
      "ingredients": ["Karotten", "Kartoffeln", "Kürbis", "Curry", "Reis", "Udon-Nudeln"],
      "allergens": ["Gluten"],
    },
    {
      "name": "Tonkatsu-Don",
      "price": 11.80,
      "ingredients": ["Putenschnitzel", "Reis", "Eier", "Frühlingszwiebeln"],
      "allergens": ["Gluten", "Eier"],
    },
    {
      "name": "Sushi-Platte (Mix)",
      "price": 15.00,
      "ingredients": ["Nigiri", "Maki", "Sashimi", "Wasabi", "Ingwer", "Sojasauce"],
      "allergens": ["Fisch", "Soja", "Gluten"],
    },
    {
      "name": "Tempura-Box",
      "price": 10.50,
      "ingredients": ["Garnelen", "Süßkartoffeln", "Zucchini", "Reis", "Tempura-Dip"],
      "allergens": ["Gluten", "Krebstiere"],
    },
    {
      "name": "Yakitori-Spieße",
      "price": 9.90,
      "ingredients": ["Hähnchen", "Marinade", "Edamame", "Reis"],
      "allergens": ["Soja"],
    },
    {
      "name": "Donburi mit Lachs",
      "price": 12.00,
      "ingredients": ["Lachs", "Reis", "Avocado", "Noristreifen", "würzige Mayo"],
      "allergens": ["Fisch", "Eier"],
    }
  ], 
  supplements : [
    {
      "name": "Gyoza (vegetarisch)",
      "price": 4.50,
      "ingredients": ["Weizenmehl", "Tofu", "Kohl", "Frühlingszwiebeln", "Knoblauch", "Sojasauce"],
      "allergens": ["Gluten", "Soja"]
    },
    {
      "name": "Gyoza (Huhn)",
      "price": 4.90,
      "ingredients": ["Weizenmehl", "Hühnerfleisch", "Kohl", "Frühlingszwiebeln", "Knoblauch", "Sojasauce"],
      "allergens": ["Gluten", "Soja"]
    },
    {
      "name": "Misosuppe",
      "price": 2.90,
      "ingredients": ["Misopaste", "Tofu", "Seetang", "Frühlingszwiebeln", "Dashi"],
      "allergens": ["Soja", "Fisch"]
    },
    {
      "name": "Onigiri (Lachs)",
      "price": 3.20,
      "ingredients": ["Reis", "Lachs", "Nori-Algen", "Sesam"],
      "allergens": ["Fisch", "Sesam"]
    },
    {
      "name": "Takoyaki",
      "price": 5.50,
      "ingredients": ["Weizenmehl", "Tintenfisch", "Ei", "Bonitoflocken", "Sojasauce", "Mayonnaise"],
      "allergens": ["Gluten", "Fisch", "Ei", "Soja"]
    },
    {
      "name": "Wakame-Salat",
      "price": 3.80,
      "ingredients": ["Wakame-Algen", "Sesam", "Sojasauce", "Reisessig"],
      "allergens": ["Sesam", "Soja"]
    },
    {
      "name": "Reisschale",
      "price": 2.50,
      "ingredients": ["Japanischer Reis"],
      "allergens": []
    },
    {
      "name": "Kimchi",
      "price": 3.50,
      "ingredients": ["Chinakohl", "Chili", "Knoblauch", "Ingwer", "Fischsauce"],
      "allergens": ["Fisch"]
    }
  ],
  drinks : [
    {
      "name": "Grüner Tee (heiß)",
      "price": 2.50,
      "ingredients": ["Grüner Tee", "Wasser"],
      "allergens": []
    },
    {
      "name": "Matcha Latte",
      "price": 4.00,
      "ingredients": ["Matcha", "Milch", "Zucker"],
      "allergens": ["Milch"]
    },
    {
      "name": "Ramune",
      "price": 3.00,
      "ingredients": ["Kohlensäurehaltiges Wasser", "Zucker", "Zitronensäure", "Aromen"],
      "allergens": []
    },
    {
      "name": "Melon Soda",
      "price": 3.50,
      "ingredients": ["Kohlensäurehaltiges Wasser", "Zucker", "Melonenaroma"],
      "allergens": []
    },
    {
      "name": "Oolong Tee (kalt)",
      "price": 2.80,
      "ingredients": ["Oolong Tee", "Wasser"],
      "allergens": []
    },
    {
      "name": "Lychee-Saft",
      "price": 3.50,
      "ingredients": ["Lychee", "Wasser", "Zucker"],
      "allergens": []
    },
    {
      "name": "Pfirsich Eistee",
      "price": 3.20,
      "ingredients": ["Schwarzer Tee", "Pfirsichsirup", "Zucker", "Wasser"],
      "allergens": []
    },
    {
      "name": "Cola",
      "price": 2.80,
      "ingredients": ["Kohlensäurehaltiges Wasser", "Zucker", "Koffein", "Aromen"],
      "allergens": []
    },
    {
      "name": "Fanta",
      "price": 2.80,
      "ingredients": ["Kohlensäurehaltiges Wasser", "Zucker", "Orangensaftkonzentrat", "Aromen"],
      "allergens": []
    },
    {
      "name": "Mineralwasser",
      "price": 2.00,
      "ingredients": ["Natürliches Mineralwasser"],
      "allergens": []
    }
  ]
}

let basket = {
  'names' : [],
  'prices' : [],
  'newPrices' : [],
  'counter' : [],
}
  