# メニューの追加方法
## master.jsonを編集する
マスターのJSONファイル => `public/js/master.json`

### 料理を追加する場合
マスターJSONのfoods配列に以下の形式で追加してください。

* は必須項目

```javascript
  "foods": [
    {
      "id": 1, // * ユニークな番号
      "name": "レバニラ", // * 名前
      "description": "レバニラ炒め（レバニラいため）とは、レバーとニラを炒めた中華料理である。ニラレバ炒めとも言う。 概要[編集]. 牛または豚のレバーを血抜きしたのち、ニラ・ショウガとともに炒め、塩・コショウ・醤油・酒で味をととのえるのが一般的な作り方である。 ", // * 料理の説明
      "image_url": "/public/images/menu3.jpg", // * ホームページなどに表示される画像
      "food_category_id": 1, // * food_categoriesのidをいれる。ない場合は作成
      "rating": 0, // * 作成時は0で作成してください
      "price": 700, // 販売予定価格
      "recipe_url": "https://cookpad.com/recipe/1921117" // * レシピのURL
      "ingredients": [
        {
          "ingredient_id": 1,
          "grams": 200,
          "note": ""
        },
        {
          "ingredient_id": 2,
          "grams": 200,
          "note": ""
        },
        ...
      ]
    }
  ],
  "ingredients": [
    {
      "id": 1,
      "name": "豚レバー",
      "cost_per_100g": 98,　// * 100gあたりの値段
      "nutorition_per_100g": {　// 100gあたりの栄養素。もしわかる場合は入力。
        "fat_gram": 12.5, 
        "protein": 10.2
      },
    },
    {
      "id": 2,
      "name": "もやし",
      "cost_per_100g": 10,　// * 100gあたりの値段
      "nutorition_per_100g": {　// 100gあたりの栄養素。もしわかる場合は入力。
        "fat_gram": 0.5, 
        "protein": 0.8
      },
    },
    ...
  ]
```

### お酒を追加する場合
マスターJSONのdrinks配列に以下の形式で追加してください。

```javascript
  "drinks": [
    {
      "id": 1, // * ユニークな番号
      "name": "キューバリブレ", // * 名前
      "description": "キューバ・リブレとは、冷たいタイプのロングドリンクに分類される、ラム酒をベースとするカクテルの1つである。瓶詰のコーラを用いるカクテルとしては極めて古いものの一つ", // * 説明
      "image_url": "/public/images/menu1.jpg", // * 画像
      "drink_category_id": 3, // * drink_categoryのID、ない場合は作成
      "serving_size_ml": 400, // * 1サーブあたりの量
      "price": 600, // 販売予定価格
      "mix": [
        {
          "ingredient_id": 3,
          "grams": 200,
          "note": ""
        },
        {
          "ingredient_id": 4,
          "grams": 200,
          "note": ""
        }
      ]
    },
  ],
```