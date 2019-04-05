const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

// const users = {
//   data: [{
//       id: 0,
//       name: 'user1',
//       email: 'user1@test.com',
//       address: '123 street'
//     },
//     {
//       id: 1,
//       name: 'user2',
//       email: 'user2@test.com',
//       address: '123 street'
//     }, {
//       id: 2,
//       name: 'user3',
//       email: 'user3@test.com',
//       address: '123 street'
//     }
//   ]
// };


const users = {
  "data": [{
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "jayden",
        "last": "gordon"
      },
      "location": {
        "street": "2984 pecan acres ln",
        "city": "bunbury",
        "state": "queensland",
        "postcode": 3432,
        "coordinates": {
          "latitude": "-81.6490",
          "longitude": "-11.5535"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "jayden.gordon@example.com",
      "login": {
        "uuid": "75a0937a-5532-41fe-bbec-daf3143f7e24",
        "username": "tinysnake871",
        "password": "portugal",
        "salt": "vvolh05T",
        "md5": "98191aebf3977f9610e47ae7d6c3cb17",
        "sha1": "8e5b12eb2e2627e50252e8d89880669e9c9f8fe4",
        "sha256": "7d595febb17c2454b7ddb545a4b6025a470a12964b5bae7fe3a5b4cd5f864cd8"
      },
      "dob": {
        "date": "1980-07-05T05:42:36Z",
        "age": 38
      },
      "registered": {
        "date": "2017-08-03T13:55:09Z",
        "age": 1
      },
      "phone": "00-2294-9121",
      "cell": "0467-801-535",
      "id": {
        "name": "TFN",
        "value": "632098377"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/20.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "hailey",
        "last": "harris"
      },
      "location": {
        "street": "5926 dundas rd",
        "city": "belmont",
        "state": "ontario",
        "postcode": "D7F 5C1",
        "coordinates": {
          "latitude": "-59.3615",
          "longitude": "56.6091"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "hailey.harris@example.com",
      "login": {
        "uuid": "bd11968a-630e-4d6c-8542-f7675971a90e",
        "username": "purplewolf698",
        "password": "capecod",
        "salt": "b49ax4KV",
        "md5": "fe38b824d671c2d0a128f1be133cd494",
        "sha1": "f7624fefbeed618ddf062161bca06ee16253af53",
        "sha256": "3b8c7f4a05e92721a0680daacd82efc631c7dc14963a8be40fa14c3b5b7edf54"
      },
      "dob": {
        "date": "1967-03-21T16:58:56Z",
        "age": 52
      },
      "registered": {
        "date": "2017-10-14T02:01:27Z",
        "age": 1
      },
      "phone": "126-520-7246",
      "cell": "746-714-3562",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "sofia",
        "last": "simmmons"
      },
      "location": {
        "street": "4400 the drive",
        "city": "liverpool",
        "state": "cornwall",
        "postcode": "CK48 6QS",
        "coordinates": {
          "latitude": "84.6679",
          "longitude": "-177.6045"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "sofia.simmmons@example.com",
      "login": {
        "uuid": "6e9c3afa-6f32-44a9-b0b4-69c69b2758a4",
        "username": "beautifulbear421",
        "password": "stock",
        "salt": "xgS0gLm1",
        "md5": "2df47a8b42559835934a6a6be10a2213",
        "sha1": "393fd0424ea6459c545c9fdb97b2e64f04fd9123",
        "sha256": "1b6ad35e1e5d0c3bbd08c3c7beeb710bd531c6a2ffe26e06f2055204420fff7e"
      },
      "dob": {
        "date": "1946-07-27T23:49:40Z",
        "age": 72
      },
      "registered": {
        "date": "2003-12-16T14:08:08Z",
        "age": 15
      },
      "phone": "016977 36835",
      "cell": "0746-036-119",
      "id": {
        "name": "NINO",
        "value": "GS 92 10 41 I"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/54.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/54.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "jacob",
        "last": "kennedy"
      },
      "location": {
        "street": "8845 woodland st",
        "city": "hialeah",
        "state": "texas",
        "postcode": 38721,
        "coordinates": {
          "latitude": "-63.1894",
          "longitude": "78.6490"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "jacob.kennedy@example.com",
      "login": {
        "uuid": "38129cdd-ee7d-4828-a1bf-193dd005019d",
        "username": "orangeostrich340",
        "password": "7777777",
        "salt": "FfFxRQFV",
        "md5": "5b4818af3a58ee7f3e43a84ff8fea00f",
        "sha1": "b3aabf80a2372d1f6b87063d6482b096100023f9",
        "sha256": "ffdc2b027c6ef343807435e0638d6a520d950dcc4684e10b6ab66227624dd697"
      },
      "dob": {
        "date": "1986-04-17T00:21:46Z",
        "age": 32
      },
      "registered": {
        "date": "2012-03-15T13:02:20Z",
        "age": 7
      },
      "phone": "(096)-844-2854",
      "cell": "(303)-619-4800",
      "id": {
        "name": "SSN",
        "value": "100-92-6428"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/22.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "gloria",
        "last": "ibañez"
      },
      "location": {
        "street": "159 calle de la democracia",
        "city": "torrejón de ardoz",
        "state": "extremadura",
        "postcode": 15609,
        "coordinates": {
          "latitude": "65.8156",
          "longitude": "-61.7722"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "gloria.ibañez@example.com",
      "login": {
        "uuid": "6c2d1da0-68fa-4710-a0bf-7805bc393b8a",
        "username": "lazywolf255",
        "password": "iiiii",
        "salt": "mrlPaoAt",
        "md5": "0a8d7e1993b79bcd3707182a07fd3cf2",
        "sha1": "210fb49f36d7f09d1a48dadaa6bcf73d439fae0c",
        "sha256": "c6be0624b0ad39d27db40f2de9ac997651544200ecf7a4a594d9817502b5729f"
      },
      "dob": {
        "date": "1969-04-26T04:44:13Z",
        "age": 49
      },
      "registered": {
        "date": "2018-02-14T07:17:10Z",
        "age": 1
      },
      "phone": "990-614-848",
      "cell": "630-472-931",
      "id": {
        "name": "DNI",
        "value": "78052279-V"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "joel",
        "last": "holland"
      },
      "location": {
        "street": "2030 marsh ln",
        "city": "coppell",
        "state": "oklahoma",
        "postcode": 11074,
        "coordinates": {
          "latitude": "32.2348",
          "longitude": "-73.3345"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "joel.holland@example.com",
      "login": {
        "uuid": "342c1efb-b9d8-49c2-9d0a-c44a31a3af30",
        "username": "organicgoose936",
        "password": "edge",
        "salt": "IVIVbRBL",
        "md5": "71ccd077f10f276150bb286777a135f7",
        "sha1": "4927130ebd9382a50e58fa51cfa88f8107526b70",
        "sha256": "9bab48072f6fbb1050d13fe4466e21f6305de16ac6a6db4cb90cdb0e8eafe786"
      },
      "dob": {
        "date": "1992-08-15T22:46:34Z",
        "age": 26
      },
      "registered": {
        "date": "2016-09-03T18:50:32Z",
        "age": 2
      },
      "phone": "(445)-155-7656",
      "cell": "(948)-442-0025",
      "id": {
        "name": "SSN",
        "value": "206-00-8974"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/62.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/62.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/62.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "niete",
        "last": "da cruz"
      },
      "location": {
        "street": "4247 rua rui barbosa ",
        "city": "cuiabá",
        "state": "pernambuco",
        "postcode": 37354,
        "coordinates": {
          "latitude": "-36.3629",
          "longitude": "-164.8533"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "niete.dacruz@example.com",
      "login": {
        "uuid": "f4b23a5a-d480-4a90-b61a-6ba95c024e6a",
        "username": "heavybird559",
        "password": "baritone",
        "salt": "htiIqcLd",
        "md5": "fe01a8d6b7f2be5dca82e0f53893a87b",
        "sha1": "17265ffe6fa7da54e829ae9282134662244de9c5",
        "sha256": "b5175e88c822ce9f00b521162772457f15ce7939c05d1ba81fa4ff056268adfe"
      },
      "dob": {
        "date": "1975-01-04T14:26:02Z",
        "age": 44
      },
      "registered": {
        "date": "2005-06-07T13:23:51Z",
        "age": 13
      },
      "phone": "(97) 4693-2819",
      "cell": "(13) 9588-4631",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "cecy",
        "last": "campos"
      },
      "location": {
        "street": "5162 rua da saudade",
        "city": "sinop",
        "state": "acre",
        "postcode": 78467,
        "coordinates": {
          "latitude": "-87.2869",
          "longitude": "163.2429"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "cecy.campos@example.com",
      "login": {
        "uuid": "e659367a-7905-4a11-a089-83349dd19801",
        "username": "greentiger909",
        "password": "theatre",
        "salt": "KV8aR7NA",
        "md5": "7f9a86d9260e5f819c8378fe0d6db60e",
        "sha1": "2a0a640a9582cd4b7bd4cacb8d565f738b886dce",
        "sha256": "bed8e49078d3c791bde74ccaf4bcec21e0ec96910ba6d1f3ea77e78d5d30f573"
      },
      "dob": {
        "date": "1961-03-26T05:10:44Z",
        "age": 58
      },
      "registered": {
        "date": "2018-01-14T19:06:41Z",
        "age": 1
      },
      "phone": "(67) 0327-7884",
      "cell": "(79) 7519-8960",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/0.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "naomi",
        "last": "leite"
      },
      "location": {
        "street": "kanonhallveien 4792",
        "city": "nordvågen",
        "state": "møre og romsdal",
        "postcode": "0441",
        "coordinates": {
          "latitude": "18.6034",
          "longitude": "-8.5837"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "naomi.leite@example.com",
      "login": {
        "uuid": "167da8ad-51b5-4cf4-b66f-093be421725f",
        "username": "beautifulmeercat558",
        "password": "cubs",
        "salt": "2fJnl88a",
        "md5": "df49f30c8abde6c73e86bfa0d905aecf",
        "sha1": "5a49ec5a4a9285001ff7e3ba38b713059d81be51",
        "sha256": "df416b4c22264deda8ebb73faa2ad469521ee9670b4b703dd450c95080a95ea8"
      },
      "dob": {
        "date": "1992-10-26T01:38:18Z",
        "age": 26
      },
      "registered": {
        "date": "2011-02-13T11:23:23Z",
        "age": 8
      },
      "phone": "85298082",
      "cell": "41663296",
      "id": {
        "name": "FN",
        "value": "26109214751"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/38.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "arwin",
        "last": "heesterbeek"
      },
      "location": {
        "street": "6611 haverstraat",
        "city": "binnenmaas",
        "state": "limburg",
        "postcode": 57166,
        "coordinates": {
          "latitude": "-60.4695",
          "longitude": "-18.4934"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "arwin.heesterbeek@example.com",
      "login": {
        "uuid": "77ef6d58-186b-4b8c-88a4-c930fac673d9",
        "username": "beautifulbutterfly212",
        "password": "moore",
        "salt": "ARQP182M",
        "md5": "cd77c88cd4f26962c50548a587353b26",
        "sha1": "057e1ea3c9b3157e931c67769fa331976f4817a8",
        "sha256": "6717572fd0e74e64e9b1b23f27706b21dea0d2300e54323f286e7e1e0d079cd7"
      },
      "dob": {
        "date": "1963-05-03T01:14:04Z",
        "age": 55
      },
      "registered": {
        "date": "2005-01-31T23:44:15Z",
        "age": 14
      },
      "phone": "(517)-636-6753",
      "cell": "(500)-874-9276",
      "id": {
        "name": "BSN",
        "value": "79431639"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "carol",
        "last": "carroll"
      },
      "location": {
        "street": "964 green lane",
        "city": "galway",
        "state": "mayo",
        "postcode": 96165,
        "coordinates": {
          "latitude": "-15.3892",
          "longitude": "-53.1884"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "carol.carroll@example.com",
      "login": {
        "uuid": "15a2e6c0-0100-4e39-b3d6-a660308da034",
        "username": "goldendog604",
        "password": "balloon",
        "salt": "KqhBbuF5",
        "md5": "082f53950c33a2161f429bb1bcd4ef80",
        "sha1": "769b24574f4ab415fd31271c181f7fc7e27f4ef2",
        "sha256": "4110371a45bf77b7e89f28a1a4990056ae5fdea4468e326965f0f6048212fa2c"
      },
      "dob": {
        "date": "1967-05-14T17:02:07Z",
        "age": 51
      },
      "registered": {
        "date": "2013-11-02T07:59:09Z",
        "age": 5
      },
      "phone": "021-737-0569",
      "cell": "081-609-1043",
      "id": {
        "name": "PPS",
        "value": "9211370T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "charles",
        "last": "renard"
      },
      "location": {
        "street": "2866 rue bossuet",
        "city": "amiens",
        "state": "orne",
        "postcode": 54642,
        "coordinates": {
          "latitude": "-55.3871",
          "longitude": "63.5314"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "charles.renard@example.com",
      "login": {
        "uuid": "036478f2-7fdf-4193-ad7d-506c3e42be19",
        "username": "crazyzebra785",
        "password": "robinson",
        "salt": "pXw7uX2Y",
        "md5": "bcf19f015a2810eeeb9fe53977fc09ec",
        "sha1": "28a4ab349c947e04e200abf71f2ddc80fffa0bd1",
        "sha256": "79dd9d4a0b94b2277819299683e8b273e37ebe66aeaa16b8aa24f42e605bbdf5"
      },
      "dob": {
        "date": "1946-11-29T08:34:26Z",
        "age": 72
      },
      "registered": {
        "date": "2011-01-29T23:38:53Z",
        "age": 8
      },
      "phone": "02-70-41-29-49",
      "cell": "06-26-23-88-15",
      "id": {
        "name": "INSEE",
        "value": "1NNaN28832685 67"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/1.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/1.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/1.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "alice",
        "last": "taylor"
      },
      "location": {
        "street": "4137 north road",
        "city": "taupo",
        "state": "auckland",
        "postcode": 64616,
        "coordinates": {
          "latitude": "-47.9644",
          "longitude": "-72.3175"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "alice.taylor@example.com",
      "login": {
        "uuid": "cfdf6863-373b-408c-8c0b-79596eeea778",
        "username": "greengoose954",
        "password": "chef",
        "salt": "C6AraEeI",
        "md5": "8bbfaaa61d8b0a8835e19b8663be904f",
        "sha1": "ca888e9170bf1fa63efb747cc5f14932c9d26f6f",
        "sha256": "64d8fde6a432e73aedfb411f3477175e9d1ecaf706b654a1f05a4c4e5197c3d7"
      },
      "dob": {
        "date": "1947-08-06T21:52:29Z",
        "age": 71
      },
      "registered": {
        "date": "2008-04-30T12:47:04Z",
        "age": 10
      },
      "phone": "(787)-347-2362",
      "cell": "(276)-891-9662",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "joshua",
        "last": "lee"
      },
      "location": {
        "street": "8768 memorial avenue",
        "city": "gisborne",
        "state": "wellington",
        "postcode": 82901,
        "coordinates": {
          "latitude": "-68.7285",
          "longitude": "20.8613"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "joshua.lee@example.com",
      "login": {
        "uuid": "8ca9af6d-6730-4038-80a0-0deb714b3669",
        "username": "ticklishgorilla220",
        "password": "bigbutt",
        "salt": "SQGIjvHJ",
        "md5": "239e91118225d3faadc87f827b415f65",
        "sha1": "e51942d132fa19171c37ed0e38ed78f9a39d6fea",
        "sha256": "a8348bae9cc91c7e620cd627af0725ee1990211446555ac6c1d780a6ae3c55e9"
      },
      "dob": {
        "date": "1960-05-14T08:09:52Z",
        "age": 58
      },
      "registered": {
        "date": "2014-05-06T06:03:09Z",
        "age": 4
      },
      "phone": "(691)-948-1687",
      "cell": "(093)-763-0012",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "sandra",
        "last": "nuñez"
      },
      "location": {
        "street": "5131 calle de téllez",
        "city": "torrejón de ardoz",
        "state": "comunidad valenciana",
        "postcode": 49576,
        "coordinates": {
          "latitude": "-39.5015",
          "longitude": "41.8576"
        },
        "timezone": {
          "offset": "-7:00",
          "description": "Mountain Time (US & Canada)"
        }
      },
      "email": "sandra.nuñez@example.com",
      "login": {
        "uuid": "41528409-1171-4893-afc7-9f64d2f25f8d",
        "username": "happykoala802",
        "password": "dudes",
        "salt": "k7KpSdQ3",
        "md5": "9564cba3bb1c9aea70181b6b17940f11",
        "sha1": "73925586307cb67dcfbfc200177d9eedeb42dc6c",
        "sha256": "acf16cdf7d37723646ad61f72034835f7f6fbb060df2ec3c4b36aa66a9d6295a"
      },
      "dob": {
        "date": "1985-05-03T21:51:40Z",
        "age": 33
      },
      "registered": {
        "date": "2007-01-24T06:41:08Z",
        "age": 12
      },
      "phone": "921-951-737",
      "cell": "691-184-031",
      "id": {
        "name": "DNI",
        "value": "40080602-M"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/92.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "anthony",
        "last": "ford"
      },
      "location": {
        "street": "4806 frances ct",
        "city": "darwin",
        "state": "australian capital territory",
        "postcode": 3036,
        "coordinates": {
          "latitude": "64.3034",
          "longitude": "-6.7633"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "anthony.ford@example.com",
      "login": {
        "uuid": "b511f211-283d-40c9-8f0b-fa6e6ee5f0ac",
        "username": "orangelion116",
        "password": "nitro",
        "salt": "7b1c9NV7",
        "md5": "4904f1b2eca1f6e2177ada8bf4aca4b6",
        "sha1": "5ce52aa63a77307d6936552d66402dbc2b163d41",
        "sha256": "166e1935e0e3caee20000637abf5610d8852511a655b83de35a8856044c3fc50"
      },
      "dob": {
        "date": "1954-11-30T20:32:32Z",
        "age": 64
      },
      "registered": {
        "date": "2008-07-20T01:26:33Z",
        "age": 10
      },
      "phone": "07-4305-6332",
      "cell": "0429-314-106",
      "id": {
        "name": "TFN",
        "value": "257178803"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/50.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/50.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/50.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "brooklyn",
        "last": "walker"
      },
      "location": {
        "street": "4373 memorial avenue",
        "city": "porirua",
        "state": "marlborough",
        "postcode": 69951,
        "coordinates": {
          "latitude": "-78.3906",
          "longitude": "-38.1176"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "brooklyn.walker@example.com",
      "login": {
        "uuid": "3bcdd7be-c82e-4df9-9cab-75396967d193",
        "username": "browngorilla466",
        "password": "gustav",
        "salt": "9MDD5yC4",
        "md5": "7a17c9d33287106ac9cd51edfec5167f",
        "sha1": "bf159be2b4c8a0b0aeb8c0a187456186ff242a6a",
        "sha256": "e68fa43904b62aa02b1b1116a15ce76fcdf4530ca59b3c488a0582ba65db30ee"
      },
      "dob": {
        "date": "1994-05-23T01:11:08Z",
        "age": 24
      },
      "registered": {
        "date": "2013-11-30T14:20:23Z",
        "age": 5
      },
      "phone": "(267)-193-4509",
      "cell": "(382)-723-4728",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "efigênia",
        "last": "castro"
      },
      "location": {
        "street": "839 rua joão xxiii",
        "city": "ipatinga",
        "state": "maranhão",
        "postcode": 59388,
        "coordinates": {
          "latitude": "-55.3896",
          "longitude": "165.9828"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "efigênia.castro@example.com",
      "login": {
        "uuid": "f04098e8-6f84-4ed1-a371-a954f94b70b6",
        "username": "smallzebra256",
        "password": "juliette",
        "salt": "KWWMkLOO",
        "md5": "0b1af3204c8f121ada4ff464aa032afa",
        "sha1": "cf26e524166b41d5b0b6c006272c4efa319400cc",
        "sha256": "aeb3ae597ebc571339ec9aea28423d9cf6181f7a80cb92bacb2f05aa9f1e3b23"
      },
      "dob": {
        "date": "1988-10-17T17:15:42Z",
        "age": 30
      },
      "registered": {
        "date": "2013-12-30T06:06:21Z",
        "age": 5
      },
      "phone": "(67) 8442-6625",
      "cell": "(17) 9501-6228",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "mathis",
        "last": "addy"
      },
      "location": {
        "street": "7216 coastal highway",
        "city": "hudson",
        "state": "québec",
        "postcode": "J1K 1P7",
        "coordinates": {
          "latitude": "-76.4497",
          "longitude": "-80.9914"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "mathis.addy@example.com",
      "login": {
        "uuid": "da41786b-aadf-4d99-9125-2c82ba5aac96",
        "username": "greenpanda765",
        "password": "nonono",
        "salt": "c72nY4zS",
        "md5": "d7b68329b3fbf36e929248c33ccf6f41",
        "sha1": "585be840d7611edd3f20217b72701fb64ae66bb1",
        "sha256": "e52bb813330d65cac17a1506d378d8dd47daff61e6959fe36b0b4932fd09a741"
      },
      "dob": {
        "date": "1976-03-29T12:35:39Z",
        "age": 43
      },
      "registered": {
        "date": "2012-09-21T02:59:22Z",
        "age": 6
      },
      "phone": "733-369-9633",
      "cell": "914-677-1766",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/68.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "rui",
        "last": "looije"
      },
      "location": {
        "street": "379 dorstige hartsteeg",
        "city": "smallingerland",
        "state": "noord-brabant",
        "postcode": 54976,
        "coordinates": {
          "latitude": "4.8682",
          "longitude": "-144.0695"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "rui.looije@example.com",
      "login": {
        "uuid": "0dc7e4cb-be66-42a5-aaa2-27b1369f9416",
        "username": "redrabbit615",
        "password": "brewer",
        "salt": "8Xc6h0sf",
        "md5": "07026bfa459979c7fa59f401053fd6ad",
        "sha1": "67a388ffbde6f1e69728a89f654e265f2ccfd405",
        "sha256": "09e50e164239583539977a7b77bad136ec15e1874c7b38d45e0fb22d9fe1a143"
      },
      "dob": {
        "date": "1961-06-08T21:41:32Z",
        "age": 57
      },
      "registered": {
        "date": "2014-03-09T14:17:18Z",
        "age": 5
      },
      "phone": "(302)-002-7942",
      "cell": "(040)-677-3969",
      "id": {
        "name": "BSN",
        "value": "49190302"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/90.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "théodore",
        "last": "lecomte"
      },
      "location": {
        "street": "3415 rue paul-duvivier",
        "city": "pau",
        "state": "alpes-de-haute-provence",
        "postcode": 59069,
        "coordinates": {
          "latitude": "-84.5840",
          "longitude": "-62.9409"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "théodore.lecomte@example.com",
      "login": {
        "uuid": "8e15286b-b3b5-4c09-af90-f2066e3225b0",
        "username": "biggorilla456",
        "password": "9999",
        "salt": "HXMrH61B",
        "md5": "b2d4944928bac40002d0d831a7398a6c",
        "sha1": "00057a3de61de8d9d817469fec7bbb948f7e3ac8",
        "sha256": "5a4afb03907c59625068d625acd25ac1edb0f8e39ce9e1fd6993c70946c807d0"
      },
      "dob": {
        "date": "1991-01-06T20:41:05Z",
        "age": 28
      },
      "registered": {
        "date": "2018-06-12T21:45:11Z",
        "age": 0
      },
      "phone": "05-68-32-88-68",
      "cell": "06-47-79-98-87",
      "id": {
        "name": "INSEE",
        "value": "1NNaN70595395 05"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/16.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "matthew",
        "last": "slawa"
      },
      "location": {
        "street": "9844 dieppe ave",
        "city": "delisle",
        "state": "nova scotia",
        "postcode": "P7A 6K8",
        "coordinates": {
          "latitude": "-0.6934",
          "longitude": "-21.2237"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "matthew.slawa@example.com",
      "login": {
        "uuid": "2d5460b7-4c5f-45cd-9c4f-c0804c0624f7",
        "username": "crazyzebra107",
        "password": "unique",
        "salt": "UCAwqzUy",
        "md5": "c8db475de416c4e3bf2cea7e555b7625",
        "sha1": "5fd8a1b53b8615f98d4884b97e0088c1c3bf7208",
        "sha256": "105c5217b42f606dbdd460f92f9219efd0ef8447949b350a2709ee1744f2271c"
      },
      "dob": {
        "date": "1959-07-22T02:45:45Z",
        "age": 59
      },
      "registered": {
        "date": "2011-05-07T08:43:24Z",
        "age": 7
      },
      "phone": "220-472-1253",
      "cell": "013-547-0565",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "damian",
        "last": "holsen"
      },
      "location": {
        "street": "friggs vei 149",
        "city": "brekkeåsen",
        "state": "rogaland",
        "postcode": "7458",
        "coordinates": {
          "latitude": "87.3196",
          "longitude": "-98.7432"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "damian.holsen@example.com",
      "login": {
        "uuid": "a36dd183-cd54-4ae8-aedf-0b6369b097e6",
        "username": "whitemeercat805",
        "password": "1226",
        "salt": "EIW9KF1k",
        "md5": "90cf9d1e800948e9d82354822b8420b6",
        "sha1": "22a26b25d3e67977dc882ccd582dc5b63e545297",
        "sha256": "08f8cefd28de9453aed308f04c54043c232b0744460a2185a22b4db1760e34e6"
      },
      "dob": {
        "date": "1974-06-01T04:59:43Z",
        "age": 44
      },
      "registered": {
        "date": "2015-02-01T22:00:42Z",
        "age": 4
      },
      "phone": "33850001",
      "cell": "40524240",
      "id": {
        "name": "FN",
        "value": "01067446891"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/29.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/29.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/29.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "kenan",
        "last": "erberk"
      },
      "location": {
        "street": "5486 istiklal cd",
        "city": "sakarya",
        "state": "sinop",
        "postcode": 38900,
        "coordinates": {
          "latitude": "-39.3865",
          "longitude": "-179.0375"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "kenan.erberk@example.com",
      "login": {
        "uuid": "718356f0-6acc-4b67-b46a-34badf1eaa3d",
        "username": "whiteelephant648",
        "password": "reddog",
        "salt": "t0lMzDbV",
        "md5": "875faf699389f24a19a1aa8e9f50dbd4",
        "sha1": "0cab9624e57ca9ddfe69c859378ef13688f8badc",
        "sha256": "94e65b950bdebefb5545f1fa9c31e01a568fde5aa7a98c6bc801edd08fd8164a"
      },
      "dob": {
        "date": "1947-08-11T13:22:46Z",
        "age": 71
      },
      "registered": {
        "date": "2006-01-21T18:17:59Z",
        "age": 13
      },
      "phone": "(879)-390-1274",
      "cell": "(279)-744-5927",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/55.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "ali",
        "last": "demirel"
      },
      "location": {
        "street": "9932 tunalı hilmi cd",
        "city": "zonguldak",
        "state": "aksaray",
        "postcode": 52671,
        "coordinates": {
          "latitude": "-23.8251",
          "longitude": "33.1324"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "email": "ali.demirel@example.com",
      "login": {
        "uuid": "6ce83ecb-a882-4589-ad62-4baae2f6c2ad",
        "username": "greenmeercat353",
        "password": "shot",
        "salt": "KnrjLLS9",
        "md5": "b1e74c4a47bcd57ede89df79cbd45ddd",
        "sha1": "6a3b0863242899f3912e0669c2fc2aec84c7b8ab",
        "sha256": "9d8530e9717a37e3262844fbca55b7d270984e1e881e56483fe831bf3eac6cae"
      },
      "dob": {
        "date": "1969-04-13T01:26:43Z",
        "age": 49
      },
      "registered": {
        "date": "2009-02-07T05:13:20Z",
        "age": 10
      },
      "phone": "(772)-338-6316",
      "cell": "(780)-240-9102",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/44.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/44.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/44.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "margarita",
        "last": "romero"
      },
      "location": {
        "street": "230 calle de pedro bosch",
        "city": "valladolid",
        "state": "asturias",
        "postcode": 49167,
        "coordinates": {
          "latitude": "41.3453",
          "longitude": "-154.7133"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "margarita.romero@example.com",
      "login": {
        "uuid": "f5b95001-469d-4ab2-8bd8-72f94b1bd567",
        "username": "lazygorilla400",
        "password": "reality",
        "salt": "ITNQ8Kck",
        "md5": "cc54991ef6a35eea635c8bbf00004abd",
        "sha1": "a94f0f7c1a095114264072003362d1a66c4c96d4",
        "sha256": "173af90a166068e11fa185c00a378caf4c219d4e394d9753f9db9965b4d1272a"
      },
      "dob": {
        "date": "1945-05-15T23:41:03Z",
        "age": 73
      },
      "registered": {
        "date": "2009-12-16T22:34:34Z",
        "age": 9
      },
      "phone": "998-599-539",
      "cell": "695-328-379",
      "id": {
        "name": "DNI",
        "value": "21504889-U"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/49.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/49.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/49.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "مرسانا",
        "last": "كامياران"
      },
      "location": {
        "street": "3675 شهید عباس افضلی",
        "city": "نیشابور",
        "state": "هرمزگان",
        "postcode": 33219,
        "coordinates": {
          "latitude": "50.4822",
          "longitude": "97.2909"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "مرسانا.كامياران@example.com",
      "login": {
        "uuid": "4f42f92b-4cf2-42d6-9626-11e0a1370004",
        "username": "happydog111",
        "password": "powell",
        "salt": "v9z4air1",
        "md5": "fbbc214722ecbf7e390947aa267670ce",
        "sha1": "3968317405a0d6b9fc6917cc84cd468a3d220ad5",
        "sha256": "25e0b96007e683735a76505826e69b578972a32d6730050dc8eb75c75978201c"
      },
      "dob": {
        "date": "1984-08-23T19:54:19Z",
        "age": 34
      },
      "registered": {
        "date": "2004-05-14T06:00:45Z",
        "age": 14
      },
      "phone": "067-70135822",
      "cell": "0953-645-1031",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/89.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/89.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/89.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "storm",
        "last": "larsen"
      },
      "location": {
        "street": "2241 vangen",
        "city": "gjern",
        "state": "hovedstaden",
        "postcode": 61321,
        "coordinates": {
          "latitude": "9.4285",
          "longitude": "176.7982"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "storm.larsen@example.com",
      "login": {
        "uuid": "441af0d0-facf-4a88-8368-b6619a5534f6",
        "username": "bigfrog153",
        "password": "lalakers",
        "salt": "DqJDw7Ay",
        "md5": "85cebe69149a842e540e8c58a0db001b",
        "sha1": "1157f824105a815893f0e2ebfff320f482d1640a",
        "sha256": "aff50d709b38a7b5c8828e07d7d9f8c845cc297bea37dd9d065e0885204b6877"
      },
      "dob": {
        "date": "1951-11-30T08:53:41Z",
        "age": 67
      },
      "registered": {
        "date": "2011-06-27T08:56:59Z",
        "age": 7
      },
      "phone": "01838968",
      "cell": "04105079",
      "id": {
        "name": "CPR",
        "value": "050686-9199"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/61.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/61.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "تارا",
        "last": "صدر"
      },
      "location": {
        "street": "9414 پارک 17 شهریور",
        "city": "مشهد",
        "state": "خراسان رضوی",
        "postcode": 44064,
        "coordinates": {
          "latitude": "-70.5588",
          "longitude": "-34.6992"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "تارا.صدر@example.com",
      "login": {
        "uuid": "20a39b2b-dd05-447d-b2de-968a6af977e6",
        "username": "sadladybug357",
        "password": "jerry1",
        "salt": "VgDbEr5D",
        "md5": "93ef1e1f0f4bf92069086f757b9d4033",
        "sha1": "347d9a07fef39e50dbef25aa4dc5ec780e4b2c47",
        "sha256": "763c555289f6d43b0666c0e2777ff567cf8529801dce78e4eec63b53f51ab79b"
      },
      "dob": {
        "date": "1977-02-05T11:58:47Z",
        "age": 42
      },
      "registered": {
        "date": "2011-04-23T10:59:19Z",
        "age": 7
      },
      "phone": "065-91152123",
      "cell": "0957-654-4826",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/14.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/14.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/14.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "karolina",
        "last": "repstad"
      },
      "location": {
        "street": "gravdalsveien 7793",
        "city": "vuku",
        "state": "buskerud",
        "postcode": "0876",
        "coordinates": {
          "latitude": "-6.7023",
          "longitude": "142.7866"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "karolina.repstad@example.com",
      "login": {
        "uuid": "6366fb64-ac2f-4669-9f5d-3b357b3d1942",
        "username": "sadwolf380",
        "password": "767676",
        "salt": "kPG0Ryvv",
        "md5": "210fe5225592d60b65ac91883bb566e2",
        "sha1": "ad8161941584c0c49140f4cc38f7abcd061e3790",
        "sha256": "17ec0e0855b34cbb99b99d5b1870b42d7deebbf22f2e364f244723e7657f997b"
      },
      "dob": {
        "date": "1972-08-19T23:49:16Z",
        "age": 46
      },
      "registered": {
        "date": "2015-07-05T17:31:58Z",
        "age": 3
      },
      "phone": "61189473",
      "cell": "95135215",
      "id": {
        "name": "FN",
        "value": "19087204165"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/46.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "madame",
        "first": "catarina",
        "last": "gaillard"
      },
      "location": {
        "street": "8238 avenue vauban",
        "city": "chêne-bourg",
        "state": "fribourg",
        "postcode": 9754,
        "coordinates": {
          "latitude": "76.8142",
          "longitude": "-137.3348"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "catarina.gaillard@example.com",
      "login": {
        "uuid": "156589cc-a29a-4a7d-b2db-5acd7739a382",
        "username": "sadladybug574",
        "password": "hippo",
        "salt": "tC2JnPoJ",
        "md5": "ab3f87c3f86589fa1e2583b395c8cd7b",
        "sha1": "666c62faca3889e2a4b85af227b72d25fa50f871",
        "sha256": "d375957624d5cbcff3e73f0e6b05cdbc34ee8b96aadb338c55d3c8b6979a34fe"
      },
      "dob": {
        "date": "1959-02-20T16:57:56Z",
        "age": 60
      },
      "registered": {
        "date": "2009-05-02T13:05:18Z",
        "age": 9
      },
      "phone": "(167)-794-3966",
      "cell": "(603)-359-6272",
      "id": {
        "name": "AVS",
        "value": "756.8234.7083.39"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "marilyn",
        "last": "romero"
      },
      "location": {
        "street": "2507 camden ave",
        "city": "downey",
        "state": "mississippi",
        "postcode": 25483,
        "coordinates": {
          "latitude": "46.8085",
          "longitude": "150.6651"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "marilyn.romero@example.com",
      "login": {
        "uuid": "912a34d2-0a05-4b47-930f-d3de6ba6bb9a",
        "username": "smallduck628",
        "password": "eleanor",
        "salt": "tFeFIUPt",
        "md5": "f8c53a356910be4979b5b9044bcd0f4e",
        "sha1": "09fcab38d7d217b8456855babd305dfe557da3e5",
        "sha256": "7a0382b6bf881afe69a515f077763c2ad67d004de9a4f100bce051b0432943fb"
      },
      "dob": {
        "date": "1965-05-14T09:12:02Z",
        "age": 53
      },
      "registered": {
        "date": "2006-01-27T06:31:00Z",
        "age": 13
      },
      "phone": "(587)-018-1419",
      "cell": "(397)-634-6754",
      "id": {
        "name": "SSN",
        "value": "277-46-7378"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/21.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "پارسا",
        "last": "كامياران"
      },
      "location": {
        "street": "9174 دکتر لواسانی",
        "city": "دزفول",
        "state": "چهارمحال و بختیاری",
        "postcode": 67513,
        "coordinates": {
          "latitude": "32.4254",
          "longitude": "96.5550"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "پارسا.كامياران@example.com",
      "login": {
        "uuid": "5559ef95-6e26-4acc-9baa-52619cb4c770",
        "username": "brownsnake298",
        "password": "milton",
        "salt": "ZVCSNUAS",
        "md5": "cb6448af1832b346e334f2c6d6c31ff3",
        "sha1": "d65958123262dc444f96f5292d016a90d7fef34b",
        "sha256": "f4b829a51c3e0525b0e57061ec62f29007c75b1ac0117d0ea648db5009df42a6"
      },
      "dob": {
        "date": "1990-02-02T10:49:41Z",
        "age": 29
      },
      "registered": {
        "date": "2012-11-01T18:17:01Z",
        "age": 6
      },
      "phone": "031-31355273",
      "cell": "0982-991-2136",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/79.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "iker",
        "last": "prieto"
      },
      "location": {
        "street": "3870 calle de ferraz",
        "city": "granada",
        "state": "galicia",
        "postcode": 43408,
        "coordinates": {
          "latitude": "-50.7824",
          "longitude": "93.5374"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "iker.prieto@example.com",
      "login": {
        "uuid": "87fc0e2f-412b-4c95-be50-3103be63161a",
        "username": "redladybug729",
        "password": "green1",
        "salt": "XXW9dS63",
        "md5": "5357d690e014677e94cf7fba01b74109",
        "sha1": "cd2138af9ee97a0bda900d88cf9759c0da99619a",
        "sha256": "5126402bef601690cd1235f81251f7428f5a11ce43b1669a5cf70742b417e282"
      },
      "dob": {
        "date": "1996-03-01T22:17:51Z",
        "age": 23
      },
      "registered": {
        "date": "2016-12-21T06:27:51Z",
        "age": 2
      },
      "phone": "952-142-086",
      "cell": "602-183-738",
      "id": {
        "name": "DNI",
        "value": "50555025-S"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/10.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "gordon",
        "last": "watson"
      },
      "location": {
        "street": "9344 brick kiln road",
        "city": "belfast",
        "state": "rutland",
        "postcode": "S9V 6GY",
        "coordinates": {
          "latitude": "47.1403",
          "longitude": "86.2570"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "gordon.watson@example.com",
      "login": {
        "uuid": "5fae6f2f-0604-482e-815f-b088c948ed70",
        "username": "smalllion225",
        "password": "temple",
        "salt": "7bfdQA5W",
        "md5": "2dd2233c14c6dd1c1cb37582b0a1d534",
        "sha1": "787977d1732c05aeb16a10799a9f97034793d646",
        "sha256": "785e62ab93c25de7ab2a81d578e19a932c3589494627b95587a45c3be2ed781c"
      },
      "dob": {
        "date": "1962-06-05T02:54:48Z",
        "age": 56
      },
      "registered": {
        "date": "2011-09-14T14:45:29Z",
        "age": 7
      },
      "phone": "015394 53122",
      "cell": "0790-899-148",
      "id": {
        "name": "NINO",
        "value": "WJ 91 46 70 Q"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/76.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/76.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/76.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "enni",
        "last": "ketola"
      },
      "location": {
        "street": "2435 tehtaankatu",
        "city": "ristijärvi",
        "state": "ostrobothnia",
        "postcode": 51078,
        "coordinates": {
          "latitude": "-67.1194",
          "longitude": "-34.8279"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "enni.ketola@example.com",
      "login": {
        "uuid": "6ef2fbd5-3de9-4d6c-8efd-dcb09f85e90a",
        "username": "heavycat284",
        "password": "season",
        "salt": "svcGkvom",
        "md5": "0fd9b289b2e8730823e2c39f4df6c3e2",
        "sha1": "51d4b276bacfb91503b604cc5e5d805d6da3809b",
        "sha256": "63d5bef4d8a8934cb270b3985ae5f5b46e6a8be7eede64a4633bb65a308776f0"
      },
      "dob": {
        "date": "1988-02-10T09:06:15Z",
        "age": 31
      },
      "registered": {
        "date": "2014-08-20T08:32:25Z",
        "age": 4
      },
      "phone": "05-389-153",
      "cell": "044-736-49-59",
      "id": {
        "name": "HETU",
        "value": "NaNNA038undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/54.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/54.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "millie",
        "last": "edwards"
      },
      "location": {
        "street": "6211 opoho road",
        "city": "wellington",
        "state": "auckland",
        "postcode": 28471,
        "coordinates": {
          "latitude": "-60.8188",
          "longitude": "-37.4227"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "millie.edwards@example.com",
      "login": {
        "uuid": "ad1f548b-c765-446b-ae4f-04804417b323",
        "username": "whitegorilla387",
        "password": "citroen",
        "salt": "vQYDGw2T",
        "md5": "75c41672c6ffd5c6bdb29c36a2632cac",
        "sha1": "b808ce341cbb1f0b605093a41abd3c6d7a42bfd4",
        "sha256": "bf001e92197e85a19bda2bd607cde7e38c886e8f05fd2476fd0d698172c5a274"
      },
      "dob": {
        "date": "1996-11-02T18:32:44Z",
        "age": 22
      },
      "registered": {
        "date": "2015-03-17T04:57:01Z",
        "age": 4
      },
      "phone": "(247)-049-4447",
      "cell": "(575)-028-1029",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/20.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/20.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/20.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "linnea",
        "last": "ahola"
      },
      "location": {
        "street": "9853 myllypuronkatu",
        "city": "posio",
        "state": "finland proper",
        "postcode": 16693,
        "coordinates": {
          "latitude": "3.2442",
          "longitude": "-71.9387"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "linnea.ahola@example.com",
      "login": {
        "uuid": "01697c08-989b-40a6-9c72-5d231a578cf9",
        "username": "greendog152",
        "password": "qiang",
        "salt": "uRl2S8h0",
        "md5": "a549d887105fe74be603e5b9f9db4590",
        "sha1": "ece0320f8b468d78dcc04763656c03b93a102220",
        "sha256": "b33328094f269166dd4d03e6cc0683c776968032fa53338a3ae337357d60743d"
      },
      "dob": {
        "date": "1976-05-28T07:58:57Z",
        "age": 42
      },
      "registered": {
        "date": "2007-03-23T12:47:46Z",
        "age": 12
      },
      "phone": "03-862-880",
      "cell": "047-210-36-81",
      "id": {
        "name": "HETU",
        "value": "NaNNA556undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "mar",
        "last": "dominguez"
      },
      "location": {
        "street": "7664 calle de alcalá",
        "city": "córdoba",
        "state": "canarias",
        "postcode": 49714,
        "coordinates": {
          "latitude": "0.8460",
          "longitude": "124.5561"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "mar.dominguez@example.com",
      "login": {
        "uuid": "20e9c9c4-35e8-4010-a718-46370710ce08",
        "username": "heavywolf966",
        "password": "biggie",
        "salt": "GtFnHy7B",
        "md5": "66dd3493d686269e802961dba9630de3",
        "sha1": "efb40fea17477a31b612ab702e06187223883e43",
        "sha256": "143f17274f554e8a162677ec28ec6b00a3d293988ec572791a50a18ceb65bb67"
      },
      "dob": {
        "date": "1995-06-02T08:03:09Z",
        "age": 23
      },
      "registered": {
        "date": "2016-08-22T01:08:45Z",
        "age": 2
      },
      "phone": "980-944-320",
      "cell": "623-114-003",
      "id": {
        "name": "DNI",
        "value": "77613453-X"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/39.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/39.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/39.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "madame",
        "first": "mona",
        "last": "muller"
      },
      "location": {
        "street": "7097 rue des jardins",
        "city": "rubigen",
        "state": "solothurn",
        "postcode": 7772,
        "coordinates": {
          "latitude": "-25.8457",
          "longitude": "63.2971"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "mona.muller@example.com",
      "login": {
        "uuid": "87ab55f3-a670-4cbf-b903-8ece5f014b64",
        "username": "yellowbutterfly139",
        "password": "hamster",
        "salt": "ZWEbCz6M",
        "md5": "8e94d9e3f0734fac04038968f757ff31",
        "sha1": "e4067bf908fef66f791265f6798e166f116500d5",
        "sha256": "90c6ecb65d2a8e748b0246eb639e1c6bb251b8b8d9eb93e948c40d1d0388fce0"
      },
      "dob": {
        "date": "1960-02-21T11:34:25Z",
        "age": 59
      },
      "registered": {
        "date": "2005-06-24T11:04:20Z",
        "age": 13
      },
      "phone": "(379)-527-8887",
      "cell": "(986)-224-1049",
      "id": {
        "name": "AVS",
        "value": "756.0708.4421.71"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "guido",
        "last": "otten"
      },
      "location": {
        "street": "birkenstraße 33",
        "city": "penkun",
        "state": "saarland",
        "postcode": 49471,
        "coordinates": {
          "latitude": "39.0967",
          "longitude": "170.3039"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "guido.otten@example.com",
      "login": {
        "uuid": "c778f3be-304a-4fad-9793-4299bfc69476",
        "username": "lazyladybug213",
        "password": "chicks",
        "salt": "cowBDdlD",
        "md5": "405017647e4481a63edfcfe74639fcd2",
        "sha1": "3f10af6e7fac47e38acd2bf97a6ff40d4a8fccbc",
        "sha256": "adac21bd8fa74d46e2156389a65a8fe58fadc0c112e05b1bbf9224c84e48f67e"
      },
      "dob": {
        "date": "1948-06-29T16:57:25Z",
        "age": 70
      },
      "registered": {
        "date": "2010-06-06T09:00:16Z",
        "age": 8
      },
      "phone": "0569-4756429",
      "cell": "0173-0289974",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/31.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "mademoiselle",
        "first": "katia",
        "last": "meunier"
      },
      "location": {
        "street": "5488 avenue debourg",
        "city": "hüniken",
        "state": "neuchâtel",
        "postcode": 3851,
        "coordinates": {
          "latitude": "-9.7276",
          "longitude": "94.6849"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "katia.meunier@example.com",
      "login": {
        "uuid": "c354ea52-9cc0-4471-b304-6d9ce009f168",
        "username": "ticklishdog994",
        "password": "double",
        "salt": "jQFqOWre",
        "md5": "84db32df78e41b042a34edc70ac15396",
        "sha1": "fa646ab6420ab1db73ec44d0570087b9ba33769b",
        "sha256": "9a57e20347931d228408689c6601fbf2943a2e5a01ac295e66b8fdea3fd07e92"
      },
      "dob": {
        "date": "1972-02-03T22:30:26Z",
        "age": 47
      },
      "registered": {
        "date": "2013-11-08T17:30:32Z",
        "age": 5
      },
      "phone": "(667)-622-4214",
      "cell": "(009)-228-9272",
      "id": {
        "name": "AVS",
        "value": "756.3366.0043.96"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "mathys",
        "last": "berger"
      },
      "location": {
        "street": "124 rue duquesne",
        "city": "argenteuil",
        "state": "tarn-et-garonne",
        "postcode": 86694,
        "coordinates": {
          "latitude": "42.4103",
          "longitude": "46.7697"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "mathys.berger@example.com",
      "login": {
        "uuid": "bf902b86-5078-4fc8-bf95-ef864d4bf418",
        "username": "tinybird222",
        "password": "xfiles",
        "salt": "FkKGJXcK",
        "md5": "388221e7cf008d00dec4825f0fe353e1",
        "sha1": "369d52c921b42b2b619a2a6d7ac8a760435450cf",
        "sha256": "d2ad0be20f7734a3973cab0d6c530bd5029b7fefacaf93896602bd1a87df0d2c"
      },
      "dob": {
        "date": "1958-09-13T08:06:11Z",
        "age": 60
      },
      "registered": {
        "date": "2005-04-29T06:12:29Z",
        "age": 13
      },
      "phone": "03-39-05-61-26",
      "cell": "06-51-30-31-06",
      "id": {
        "name": "INSEE",
        "value": "1NNaN43089267 77"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/95.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "zedeci",
        "last": "da cruz"
      },
      "location": {
        "street": "8133 rua castro alves ",
        "city": "codó",
        "state": "alagoas",
        "postcode": 24637,
        "coordinates": {
          "latitude": "-83.7325",
          "longitude": "-21.9466"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "zedeci.dacruz@example.com",
      "login": {
        "uuid": "edfcaca8-af57-4ca4-9f6e-024db620c2ea",
        "username": "redbird917",
        "password": "figaro",
        "salt": "X8ZhgV8G",
        "md5": "aea4668526e280ada24db91873b3b619",
        "sha1": "a21e3d25a1ad414a3c0d6f7627c94846032e3962",
        "sha256": "972db46ddbc8f6093a778e371b180960e336025384435294c7e56966a06f8bde"
      },
      "dob": {
        "date": "1986-09-17T07:54:41Z",
        "age": 32
      },
      "registered": {
        "date": "2007-04-02T23:21:11Z",
        "age": 12
      },
      "phone": "(71) 9616-9087",
      "cell": "(65) 8951-5968",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/28.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/28.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/28.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "ruben",
        "last": "ryan"
      },
      "location": {
        "street": "7770 the green",
        "city": "kildare",
        "state": "kildare",
        "postcode": 27854,
        "coordinates": {
          "latitude": "37.6788",
          "longitude": "87.1580"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "ruben.ryan@example.com",
      "login": {
        "uuid": "1159d449-6a69-4106-a50e-7e3e34974975",
        "username": "crazybear669",
        "password": "0987",
        "salt": "k71Yltmm",
        "md5": "88388aabf117de253f38bf8f6ef5d7db",
        "sha1": "cbe24b7f8caf458bbc9fe46618e093565f1bc2ce",
        "sha256": "8dbbbcf0aac7d61e06ad80bbda92a237f7127da9edf823d5f603ecc58f610567"
      },
      "dob": {
        "date": "1967-08-20T11:26:19Z",
        "age": 51
      },
      "registered": {
        "date": "2014-07-20T20:50:29Z",
        "age": 4
      },
      "phone": "021-086-4582",
      "cell": "081-854-5795",
      "id": {
        "name": "PPS",
        "value": "3934753T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/93.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/93.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/93.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "jonathan",
        "last": "jensen"
      },
      "location": {
        "street": "5432 kvædevej",
        "city": "roedovre",
        "state": "hovedstaden",
        "postcode": 63864,
        "coordinates": {
          "latitude": "78.6968",
          "longitude": "-24.8537"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "jonathan.jensen@example.com",
      "login": {
        "uuid": "68250299-02e5-4deb-9173-090bf1809c9f",
        "username": "purplefrog236",
        "password": "carpente",
        "salt": "8EfXEIcD",
        "md5": "0a928810feeb8b33c392f9e0ea08d2e6",
        "sha1": "6f0a05531087182d48d646c73086fbc8c353aa43",
        "sha256": "27a9dcb3a67a2cd6889dd4e7f4ec1686f34d123d0e4289d44c3633bd30ddfab8"
      },
      "dob": {
        "date": "1948-02-10T02:58:27Z",
        "age": 71
      },
      "registered": {
        "date": "2002-08-05T17:07:22Z",
        "age": 16
      },
      "phone": "60872563",
      "cell": "01900536",
      "id": {
        "name": "CPR",
        "value": "886677-7504"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/49.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "arthur",
        "last": "nelson"
      },
      "location": {
        "street": "1067 adams st",
        "city": "albuquerque",
        "state": "massachusetts",
        "postcode": 98273,
        "coordinates": {
          "latitude": "-57.7307",
          "longitude": "163.7161"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "arthur.nelson@example.com",
      "login": {
        "uuid": "fb846b6f-eb56-4c17-874e-77b74982a8f2",
        "username": "silvercat687",
        "password": "lovers",
        "salt": "IK7IGtgI",
        "md5": "77f4a0cd5964502a91bff8d4dc6ab6b5",
        "sha1": "b07fcdd44bd1d11bed446401c391edd445acc98e",
        "sha256": "59006b1ad48a223fdbb74abf8a2421ead72026eb018d8a1f5864deced52875bc"
      },
      "dob": {
        "date": "1974-04-22T10:23:51Z",
        "age": 44
      },
      "registered": {
        "date": "2009-10-17T18:16:02Z",
        "age": 9
      },
      "phone": "(866)-668-2589",
      "cell": "(961)-575-0001",
      "id": {
        "name": "SSN",
        "value": "779-45-7766"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/0.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "abigail",
        "last": "smith"
      },
      "location": {
        "street": "955 aldwins road",
        "city": "christchurch",
        "state": "tasman",
        "postcode": 75940,
        "coordinates": {
          "latitude": "-71.8165",
          "longitude": "15.1968"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "abigail.smith@example.com",
      "login": {
        "uuid": "32459c99-77d3-4aca-ba3c-c4f272a8fb65",
        "username": "greenleopard991",
        "password": "guitar",
        "salt": "qClZ91bd",
        "md5": "6062518696246b13ff39193435bc352f",
        "sha1": "38da3bda4bcbd62bfc9c60b720e63b3ab6706f42",
        "sha256": "995fd65187d9400ba6254e3f34afb98a168effb4180548a564940acfebb8da16"
      },
      "dob": {
        "date": "1970-09-14T01:22:32Z",
        "age": 48
      },
      "registered": {
        "date": "2009-07-03T00:16:50Z",
        "age": 9
      },
      "phone": "(660)-055-8538",
      "cell": "(843)-092-8350",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/41.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "gerald",
        "last": "ruiz"
      },
      "location": {
        "street": "5433 hogan st",
        "city": "hobart",
        "state": "victoria",
        "postcode": 3099,
        "coordinates": {
          "latitude": "-26.5890",
          "longitude": "-160.2625"
        },
        "timezone": {
          "offset": "+1:00",
          "description": "Brussels, Copenhagen, Madrid, Paris"
        }
      },
      "email": "gerald.ruiz@example.com",
      "login": {
        "uuid": "bf48d792-3de6-4c58-8368-318bec13c259",
        "username": "lazydog756",
        "password": "nopass",
        "salt": "eSXUmiNY",
        "md5": "a7681db0f83221f6a84b3698e3519d66",
        "sha1": "def394f988027ec32dec571af861a163d1281f7e",
        "sha256": "2f1902fb173f3dea396ddfe11adb8cfdb11b005cd6b1f57e001615a96d042372"
      },
      "dob": {
        "date": "1993-05-25T16:22:23Z",
        "age": 25
      },
      "registered": {
        "date": "2009-11-10T08:35:21Z",
        "age": 9
      },
      "phone": "00-7622-6765",
      "cell": "0481-637-987",
      "id": {
        "name": "TFN",
        "value": "368613593"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/67.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "terrence",
        "last": "torres"
      },
      "location": {
        "street": "9685 bollinger rd",
        "city": "dumas",
        "state": "utah",
        "postcode": 48066,
        "coordinates": {
          "latitude": "5.0330",
          "longitude": "116.5716"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "terrence.torres@example.com",
      "login": {
        "uuid": "224757d9-3a39-47b7-847b-8f3abce65e9a",
        "username": "lazyostrich928",
        "password": "twins",
        "salt": "kE3PgWvC",
        "md5": "d6a9608b7468849ad87cec18c8d9df8e",
        "sha1": "569c37297bb15b71161ecafb747a3592c8262a96",
        "sha256": "574579341eb67e542365811857fb2183a76e310a9a2981b19aceaef06a4a9f16"
      },
      "dob": {
        "date": "1981-11-25T23:04:57Z",
        "age": 37
      },
      "registered": {
        "date": "2015-12-18T19:26:06Z",
        "age": 3
      },
      "phone": "(070)-085-7377",
      "cell": "(689)-870-2447",
      "id": {
        "name": "SSN",
        "value": "061-87-3299"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "4b59c2bb8e28e785",
    "results": 50,
    "page": 1,
    "version": "1.2"
  }
};



app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/api/users', (req, res) => {
  console.log(req.query);

  if (req.query.gender === 'female' && req.query.minage) {
    let genderFilteredResults = users.data.filter(u => u.gender === req.query.gender);
    let data = genderFilteredResults.filter(u => u.dob.age >= +req.query.minage);
    res.send({
      data
    });
  } else if (req.query.gender === 'female') {
    let data = users.data.filter(u => u.gender === req.query.gender);
    res.send({
      data
    });
  } else if (req.query.gender === 'male') {
    const data = users.data.filter(u => u.gender === req.query.gender);
    res.send({
      data
    });
  } else {
    res.send(users);
  }
});

app.get('/api/users/:name', (req, res) => {
  const user = users.find(u =>
    u.name === req.params.name
  );
  if (!user) return res.status(404).send('user not found');
  res.send(user);
});

app.post('/api/users', (req, res) => {
  console.log(req.body);
  const {
    error
  } = validateuser(req.body); // result.error
  if (error) return res.status(400).send(error.details[0].message); // If invalid, return 400 - Bad request

  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  };
  users.push(user);
  console.log('item posted');
  res.send(users);
});

app.put('/api/users', (req, res) => {
  //Look up the user
  const user = users.find(e =>
    e.id === parseInt(req.body.id)
  );
  if (!user) return res.status(404).send('user not found'); // If not existing, return 404

  console.log(req.body);
  // Validate
  console.log(validateuser(req.body));
  const {
    error
  } = validateuser(req.body); // result.error

  if (error) return res.status(400).send(error.details[0].message); // If invalid, return 400 - Bad request

  // Update user
  user.name = req.body.name;
  user.email = req.body.email;
  user.address = req.body.address;

  //Return updated user to client
  res.send(user);
});

app.delete('/api/users/:id', (req, res) => {
  //Find user
  const user = users.find(e =>
    e.id === parseInt(req.params.id)
  );
  if (!user) return res.status(404).send('user not found'); // If not existing, return 404

  console.log(req);

  //Delete user in array
  const index = users.indexOf(user);
  users.splice(index, 1);

  res.send(user);
});

function validateuser(user) {
  const schema = {
    id: Joi.number(),
    name: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required()
  };

  return Joi.validate(user, schema);
}

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));