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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
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
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "carla",
        "last": "ferrer"
      },
      "location": {
        "street": "8268 calle mota",
        "city": "toledo",
        "state": "navarra",
        "postcode": 19994,
        "coordinates": {
          "latitude": "-16.0514",
          "longitude": "87.8219"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "carla.ferrer@example.com",
      "login": {
        "uuid": "242cdddd-16a9-4578-91e9-a672ac55a0f1",
        "username": "purpleostrich449",
        "password": "survivor",
        "salt": "yPJwBHZf",
        "md5": "5df6ac992eaf7926bc09998cfbc3c312",
        "sha1": "8706bb4fc0cbd31c19d75a8b3e8573a283308ba5",
        "sha256": "37d56ca83903c53b83a0d31a79776cbd80f6c34ce5c7369aade30ec5b06c270a"
      },
      "dob": {
        "date": "1969-12-02T13:33:55Z",
        "age": 49
      },
      "registered": {
        "date": "2004-12-05T23:28:44Z",
        "age": 14
      },
      "phone": "973-360-906",
      "cell": "689-910-813",
      "id": {
        "name": "DNI",
        "value": "38895323-U"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "laura",
        "last": "larsen"
      },
      "location": {
        "street": "7170 snerlevej",
        "city": "støvring ",
        "state": "nordjylland",
        "postcode": 34873,
        "coordinates": {
          "latitude": "22.5877",
          "longitude": "138.5999"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "laura.larsen@example.com",
      "login": {
        "uuid": "ee20d256-dde9-4546-85f8-773bcda44b2f",
        "username": "ticklishrabbit265",
        "password": "mackie",
        "salt": "rRi7wBe9",
        "md5": "85fd7d32f37705889383ae2a011a552c",
        "sha1": "c70a199da38cab60fd3907d837124e70cbf58fa6",
        "sha256": "a181a6c743cad229d49e5de7b35c342944c0de168f5d4294b7f6835a441524b8"
      },
      "dob": {
        "date": "1995-02-16T14:24:14Z",
        "age": 24
      },
      "registered": {
        "date": "2016-03-08T02:01:26Z",
        "age": 3
      },
      "phone": "08374413",
      "cell": "59137748",
      "id": {
        "name": "CPR",
        "value": "745986-7067"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/9.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "andrew",
        "last": "hansen"
      },
      "location": {
        "street": "4962 valley view ln",
        "city": "colorado springs",
        "state": "florida",
        "postcode": 44943,
        "coordinates": {
          "latitude": "-23.7885",
          "longitude": "-23.0019"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "andrew.hansen@example.com",
      "login": {
        "uuid": "1f8dc2fd-10e6-4c67-969f-15cc6dc78fda",
        "username": "yellowpanda847",
        "password": "death1",
        "salt": "ns32hCdy",
        "md5": "412b080e21521adf3f0493d623f760da",
        "sha1": "29662294bd6fb20c59b41a817b609ef82ed87d59",
        "sha256": "bfd3c0d48ad592448e601d17988a3f05e6f8cdb901252b9159efbcd6727ef0cf"
      },
      "dob": {
        "date": "1968-01-22T18:18:29Z",
        "age": 51
      },
      "registered": {
        "date": "2003-08-09T15:36:15Z",
        "age": 15
      },
      "phone": "(343)-299-4550",
      "cell": "(841)-918-7854",
      "id": {
        "name": "SSN",
        "value": "903-29-1182"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "elisane",
        "last": "almeida"
      },
      "location": {
        "street": "3462 rua são joão ",
        "city": "mogi das cruzes",
        "state": "pará",
        "postcode": 40256,
        "coordinates": {
          "latitude": "42.3096",
          "longitude": "-165.5432"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "elisane.almeida@example.com",
      "login": {
        "uuid": "abf40577-d326-434d-9170-64fbd71b5753",
        "username": "purpleswan964",
        "password": "bruiser",
        "salt": "DonKxHAl",
        "md5": "11ff18745d10f183a4dec82ff12d25f7",
        "sha1": "c352d43009f8c2767b190c5d1307a5c1d3c25af8",
        "sha256": "ae3c07d4a5d8529689315301e9cad228b15e9ea984a2e75d923ec1460d3c4550"
      },
      "dob": {
        "date": "1994-12-07T11:56:32Z",
        "age": 24
      },
      "registered": {
        "date": "2013-09-24T03:42:47Z",
        "age": 5
      },
      "phone": "(99) 5131-9466",
      "cell": "(63) 5676-0872",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/7.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "lena",
        "last": "rodriguez"
      },
      "location": {
        "street": "3956 w pecan st",
        "city": "green bay",
        "state": "louisiana",
        "postcode": 21736,
        "coordinates": {
          "latitude": "73.9436",
          "longitude": "170.0881"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "lena.rodriguez@example.com",
      "login": {
        "uuid": "7990d72f-1cbe-487f-953f-22d41b40a85c",
        "username": "yellowpanda759",
        "password": "griffin",
        "salt": "7NQ5S3Yu",
        "md5": "f766ab130d83dac922710c04ecbf2b28",
        "sha1": "0c678be9da5bf903e8aba7c97f4b2527a610095b",
        "sha256": "a57f434902aa5cc0d067cf8cb19206a96bfde755a155a475d2e9c85e6a2b77ad"
      },
      "dob": {
        "date": "1969-09-10T18:27:06Z",
        "age": 49
      },
      "registered": {
        "date": "2017-05-23T16:40:54Z",
        "age": 1
      },
      "phone": "(666)-346-4062",
      "cell": "(878)-048-5201",
      "id": {
        "name": "SSN",
        "value": "797-34-2074"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/77.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "gabriella",
        "last": "griffin"
      },
      "location": {
        "street": "7487 marsh ln",
        "city": "albany",
        "state": "new south wales",
        "postcode": 7579,
        "coordinates": {
          "latitude": "10.0535",
          "longitude": "24.2256"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "gabriella.griffin@example.com",
      "login": {
        "uuid": "57339686-22ad-4ffb-9fe8-253f7a9a68ac",
        "username": "yellowmeercat567",
        "password": "canyon",
        "salt": "WU1X9nsx",
        "md5": "a79e5b165c1fef471c1645324945f5d1",
        "sha1": "4027ee3290c815b092a93f1aeca120e600392af8",
        "sha256": "a0cb99319167021dba6953f69b276867ad06d8e54a24184094ff74272ac932b1"
      },
      "dob": {
        "date": "1997-01-22T08:15:23Z",
        "age": 22
      },
      "registered": {
        "date": "2006-11-29T15:20:03Z",
        "age": 12
      },
      "phone": "00-2977-5806",
      "cell": "0413-616-716",
      "id": {
        "name": "TFN",
        "value": "695185982"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "ثنا",
        "last": "نكو نظر"
      },
      "location": {
        "street": "7158 میدان جمهوری",
        "city": "سبزوار",
        "state": "کردستان",
        "postcode": 20040,
        "coordinates": {
          "latitude": "35.4480",
          "longitude": "-150.6855"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "ثنا.نكونظر@example.com",
      "login": {
        "uuid": "ec3f89c5-96e6-452f-aaeb-dc56fbb7ecaa",
        "username": "angrydog112",
        "password": "kenny",
        "salt": "16VJ4PeE",
        "md5": "80d0235abaad6b370fa25fa6653357f9",
        "sha1": "2099d0818055c215b36235b0f43e9679b659875b",
        "sha256": "c92bca1ec5e7f33f12d3670e9e5ba973c32b1566f090dd8ceff3cc4da2abe085"
      },
      "dob": {
        "date": "1953-07-02T03:24:55Z",
        "age": 65
      },
      "registered": {
        "date": "2013-07-01T00:03:02Z",
        "age": 5
      },
      "phone": "027-68394141",
      "cell": "0921-250-5465",
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
        "first": "leon",
        "last": "johnston"
      },
      "location": {
        "street": "8108 queen street",
        "city": "bradford",
        "state": "county fermanagh",
        "postcode": "QJ95 3PF",
        "coordinates": {
          "latitude": "34.7717",
          "longitude": "-42.8144"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "leon.johnston@example.com",
      "login": {
        "uuid": "7b71a3db-d06d-4841-abfc-5630b70c558f",
        "username": "goldenzebra771",
        "password": "strike",
        "salt": "tVIg8ctx",
        "md5": "5adab4b7b8943a1eadfc70d5d143ffb0",
        "sha1": "a5b5e4a35e017a266abbfa17cc6bd5f2ec694c36",
        "sha256": "27508c67052e270be452797aede7d8b187cafa525a001bf82e49aaa7df212186"
      },
      "dob": {
        "date": "1965-06-20T22:14:01Z",
        "age": 53
      },
      "registered": {
        "date": "2011-01-15T05:25:36Z",
        "age": 8
      },
      "phone": "017683 48884",
      "cell": "0702-581-691",
      "id": {
        "name": "NINO",
        "value": "EC 84 84 93 E"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/13.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/13.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/13.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "mustafa",
        "last": "kunt"
      },
      "location": {
        "street": "8072 fatih sultan mehmet cd",
        "city": "ankara",
        "state": "kars",
        "postcode": 87199,
        "coordinates": {
          "latitude": "87.8695",
          "longitude": "-6.1452"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "mustafa.kunt@example.com",
      "login": {
        "uuid": "023ccdcf-3463-4f98-b4f0-4fcb8e092691",
        "username": "sadladybug712",
        "password": "imagine",
        "salt": "tlGon4MA",
        "md5": "41ba04aeb82c2f668c1a0a9e55f00aeb",
        "sha1": "220c5afb8b722f4e629f7b356e7400050572a577",
        "sha256": "cbd758b4bf410582788786c91255faafb811815b95c98678af5aa0802bbf0e58"
      },
      "dob": {
        "date": "1957-06-30T23:07:22Z",
        "age": 61
      },
      "registered": {
        "date": "2008-01-07T14:37:04Z",
        "age": 11
      },
      "phone": "(932)-779-0604",
      "cell": "(268)-126-2404",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "zara",
        "last": "walker"
      },
      "location": {
        "street": "7381 tuam street",
        "city": "greymouth",
        "state": "west coast",
        "postcode": 28819,
        "coordinates": {
          "latitude": "26.1174",
          "longitude": "93.3610"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "zara.walker@example.com",
      "login": {
        "uuid": "29af91e8-ee3c-4bba-9b77-bb8c1dec9ea1",
        "username": "lazypanda245",
        "password": "heineken",
        "salt": "BrSzYVJT",
        "md5": "81c9c74b0e84f6ce9e6152e1579b2a12",
        "sha1": "809af5fc907bd71f1ff6ba2dba27ce01a4626f0f",
        "sha256": "bb89d618f0378ede24cae9bd0c2bdb40f58bcaf8681e3ae90d860029f058e1fc"
      },
      "dob": {
        "date": "1974-09-24T09:49:23Z",
        "age": 44
      },
      "registered": {
        "date": "2003-12-19T01:27:41Z",
        "age": 15
      },
      "phone": "(808)-763-5630",
      "cell": "(330)-092-9008",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/13.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/13.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/13.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "venla",
        "last": "rinne"
      },
      "location": {
        "street": "1509 rotuaari",
        "city": "luvia",
        "state": "north karelia",
        "postcode": 74398,
        "coordinates": {
          "latitude": "-2.6451",
          "longitude": "3.3583"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "venla.rinne@example.com",
      "login": {
        "uuid": "0202be4c-9e5f-4627-a324-8187a992973c",
        "username": "orangebear129",
        "password": "slayer",
        "salt": "0pX4sZWg",
        "md5": "e07d522ed7179649f35d993fdfdc5bcb",
        "sha1": "63bfddaf8b5abc77e60844b972cd83b24e53e2fb",
        "sha256": "301de5206f1c5768fc601190026370e1de0739c83e571dae5317bb3874cbddfb"
      },
      "dob": {
        "date": "1952-06-15T20:37:05Z",
        "age": 66
      },
      "registered": {
        "date": "2013-05-08T09:06:43Z",
        "age": 5
      },
      "phone": "03-280-205",
      "cell": "041-615-47-11",
      "id": {
        "name": "HETU",
        "value": "NaNNA958undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "derrick",
        "last": "olson"
      },
      "location": {
        "street": "3 mill lane",
        "city": "durham",
        "state": "west sussex",
        "postcode": "OT0 0PZ",
        "coordinates": {
          "latitude": "24.2172",
          "longitude": "-144.9988"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "derrick.olson@example.com",
      "login": {
        "uuid": "324c81f0-46d5-4fb6-8224-679a8683afb0",
        "username": "silvermouse925",
        "password": "troll",
        "salt": "0y65jRDu",
        "md5": "bf3e28f3a41001238768cd9fd6459847",
        "sha1": "c7ec6aa3ec84848a98f41b286a65399d026c0cef",
        "sha256": "a9cd18c4cf8dc0d3d0e7943fba81977fba063036dadb5a296620f49edf9668b5"
      },
      "dob": {
        "date": "1973-07-26T16:36:12Z",
        "age": 45
      },
      "registered": {
        "date": "2006-01-27T03:03:39Z",
        "age": 13
      },
      "phone": "0131 688 6206",
      "cell": "0743-133-705",
      "id": {
        "name": "NINO",
        "value": "OA 03 46 70 G"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "dora",
        "last": "schug"
      },
      "location": {
        "street": "mittelweg 156",
        "city": "mainbernheim",
        "state": "schleswig-holstein",
        "postcode": 31643,
        "coordinates": {
          "latitude": "-20.2406",
          "longitude": "71.0280"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "dora.schug@example.com",
      "login": {
        "uuid": "107229bd-36f1-4012-958a-864953e503a1",
        "username": "tinyzebra370",
        "password": "jordan1",
        "salt": "Of1QUs2L",
        "md5": "a1982c7686e3397ce4a9c5079cda29dc",
        "sha1": "91aca098ff23ca9788b17513e0817e6813421202",
        "sha256": "d6e8917e37365f267fa520f6a06426896f8475e63c8bfb90503f17c30b99e17b"
      },
      "dob": {
        "date": "1984-03-02T13:52:49Z",
        "age": 35
      },
      "registered": {
        "date": "2017-04-13T02:33:05Z",
        "age": 1
      },
      "phone": "0203-8023118",
      "cell": "0170-6771371",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/24.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/24.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/24.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "anne",
        "last": "cunningham"
      },
      "location": {
        "street": "3742 avondale ave",
        "city": "rockhampton",
        "state": "tasmania",
        "postcode": 1474,
        "coordinates": {
          "latitude": "-50.2893",
          "longitude": "-168.2480"
        },
        "timezone": {
          "offset": "-3:00",
          "description": "Brazil, Buenos Aires, Georgetown"
        }
      },
      "email": "anne.cunningham@example.com",
      "login": {
        "uuid": "369a241e-4c3b-47d9-b5a6-bc2c50374659",
        "username": "blackswan884",
        "password": "987987",
        "salt": "l1qlDZ0r",
        "md5": "58aca9c47136e10992cc6c9d9a192afd",
        "sha1": "9d90b6fdf86af8d104dd7987f32fab83b92c67f0",
        "sha256": "2afbf8f976742c285b51132ceaaa90133f3fc90bd2d0c09d70d740452d2a17cc"
      },
      "dob": {
        "date": "1955-02-04T04:19:13Z",
        "age": 64
      },
      "registered": {
        "date": "2014-09-27T17:34:08Z",
        "age": 4
      },
      "phone": "01-4172-6234",
      "cell": "0498-929-075",
      "id": {
        "name": "TFN",
        "value": "222714010"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "susanna",
        "last": "reid"
      },
      "location": {
        "street": "6316 alexander road",
        "city": "oxford",
        "state": "lincolnshire",
        "postcode": "ZJ6 2BL",
        "coordinates": {
          "latitude": "-7.3778",
          "longitude": "130.0186"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "susanna.reid@example.com",
      "login": {
        "uuid": "de71b4da-4c71-4f78-8fec-740abb31b048",
        "username": "blackmouse600",
        "password": "phoenix1",
        "salt": "R5p1c6L3",
        "md5": "e569288e3b1bfe4f9b180ccc00790170",
        "sha1": "f1ab5666e0c3df56b7c4d0470492ea77aacf25f0",
        "sha256": "0cd7b48c7fda6e968a68426cf4bf9792517c4bfd14a5c58be0769b4d71616f16"
      },
      "dob": {
        "date": "1969-02-22T06:43:34Z",
        "age": 50
      },
      "registered": {
        "date": "2003-12-02T13:25:31Z",
        "age": 15
      },
      "phone": "019467 39467",
      "cell": "0755-530-759",
      "id": {
        "name": "NINO",
        "value": "NN 10 86 06 F"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/46.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/46.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/46.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "arnas",
        "last": "martin"
      },
      "location": {
        "street": "kristiansands gate 1604",
        "city": "sandnessjøen",
        "state": "oppland",
        "postcode": "8450",
        "coordinates": {
          "latitude": "55.5464",
          "longitude": "-134.0051"
        },
        "timezone": {
          "offset": "+5:30",
          "description": "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      "email": "arnas.martin@example.com",
      "login": {
        "uuid": "af24188b-73f6-4fc1-892c-ba5f8583becf",
        "username": "crazycat486",
        "password": "newark",
        "salt": "EINdW84i",
        "md5": "3e0e55a7ed4fbf5a3ccce9400f565797",
        "sha1": "341b8a714bda1c88b14cd910028ab2e8d7bda2e4",
        "sha256": "00ad0bad880e054c3d758205c3defbb22428ea0dd4bc7813a2d5a9cccf8f8d26"
      },
      "dob": {
        "date": "1976-02-24T09:47:39Z",
        "age": 43
      },
      "registered": {
        "date": "2004-12-06T00:01:52Z",
        "age": 14
      },
      "phone": "52662388",
      "cell": "92941299",
      "id": {
        "name": "FN",
        "value": "24027641845"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/97.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/97.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/97.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "isobel",
        "last": "harris"
      },
      "location": {
        "street": "8253 armagh street",
        "city": "dunedin",
        "state": "waikato",
        "postcode": 76992,
        "coordinates": {
          "latitude": "-70.1729",
          "longitude": "-17.8443"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "isobel.harris@example.com",
      "login": {
        "uuid": "0b8b4fa8-22d7-4d7f-a2f2-a8ccc17d4283",
        "username": "bigcat555",
        "password": "friday",
        "salt": "lWgdhyJy",
        "md5": "3cd289fd210658a11494d14fb96c72a1",
        "sha1": "fc9ea1601738277e5c374b768b67f2733a432842",
        "sha256": "c0ac25eae2170a1dcf12c5b513265108241f165ff4b4c5a4870d8d96e1990ee6"
      },
      "dob": {
        "date": "1984-08-21T07:54:20Z",
        "age": 34
      },
      "registered": {
        "date": "2018-05-28T23:48:46Z",
        "age": 0
      },
      "phone": "(510)-707-7859",
      "cell": "(923)-491-9511",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/67.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "cennet",
        "last": "goertz"
      },
      "location": {
        "street": "7125 abstederdijk",
        "city": "bedum",
        "state": "limburg",
        "postcode": 29300,
        "coordinates": {
          "latitude": "-50.9826",
          "longitude": "143.9018"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "cennet.goertz@example.com",
      "login": {
        "uuid": "967b7a35-8f64-4cbf-8a16-49d2493707db",
        "username": "silverswan630",
        "password": "shai",
        "salt": "R8AFjuSh",
        "md5": "ca99bf3565e0266e375123d88f1f0b5b",
        "sha1": "efa3d9a2b9e485ea33239496cb554c34303dd181",
        "sha256": "7adb7534e66f2a0b3ef1c3f1935be35e2f76226be3c5400a0cba2c02d0f0bf49"
      },
      "dob": {
        "date": "1973-01-31T07:32:22Z",
        "age": 46
      },
      "registered": {
        "date": "2016-04-30T00:38:06Z",
        "age": 2
      },
      "phone": "(427)-325-7050",
      "cell": "(787)-371-3077",
      "id": {
        "name": "BSN",
        "value": "34686541"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/36.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/36.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/36.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "mikael",
        "last": "kivi"
      },
      "location": {
        "street": "8028 esplanadi",
        "city": "haapavesi",
        "state": "uusimaa",
        "postcode": 93054,
        "coordinates": {
          "latitude": "87.8219",
          "longitude": "101.1952"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "mikael.kivi@example.com",
      "login": {
        "uuid": "f3be3f37-4b6d-4c9b-a7b2-912d1cca58a4",
        "username": "organiclion709",
        "password": "smith",
        "salt": "xi095fHW",
        "md5": "c83493be78c6a0a17723b36a26cd3bae",
        "sha1": "e52cebc3cbcdb56bb05d57dacc1a96c84f92b6f2",
        "sha256": "62ae494466444dd0b8c310e3ad7d51d1d984ba137f8d1e2c8c79fd4844cda4b1"
      },
      "dob": {
        "date": "1991-04-12T16:25:25Z",
        "age": 27
      },
      "registered": {
        "date": "2011-03-15T13:57:50Z",
        "age": 8
      },
      "phone": "03-392-712",
      "cell": "047-773-08-34",
      "id": {
        "name": "HETU",
        "value": "NaNNA797undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "jackie",
        "last": "morgan"
      },
      "location": {
        "street": "4056 photinia ave",
        "city": "orange",
        "state": "tasmania",
        "postcode": 7947,
        "coordinates": {
          "latitude": "-85.5136",
          "longitude": "-36.2857"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "jackie.morgan@example.com",
      "login": {
        "uuid": "511e3f01-e7ff-4c3b-ab75-bf4ce4dc1d80",
        "username": "angryrabbit263",
        "password": "venus",
        "salt": "1ib1KbcD",
        "md5": "153062fc93c169f210b6c1d51630a923",
        "sha1": "a55a9549e6bbc81e4ebeb45c0a83dbf579a151ba",
        "sha256": "0c6366b264d52dcdf7248a3f4207b84695db2cddf64b992330306478edf1daab"
      },
      "dob": {
        "date": "1947-02-08T08:12:27Z",
        "age": 72
      },
      "registered": {
        "date": "2015-10-23T06:52:56Z",
        "age": 3
      },
      "phone": "05-1980-8454",
      "cell": "0456-209-336",
      "id": {
        "name": "TFN",
        "value": "193271908"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "kaia",
        "last": "aarseth"
      },
      "location": {
        "street": "problemveien 1361",
        "city": "skiptvet",
        "state": "description",
        "postcode": "6301",
        "coordinates": {
          "latitude": "-84.1181",
          "longitude": "-126.7986"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "kaia.aarseth@example.com",
      "login": {
        "uuid": "a423d030-81a2-497b-b2f8-f943ab074f7f",
        "username": "goldenfrog283",
        "password": "puss",
        "salt": "bULAXfX3",
        "md5": "ada8149c3d507660c7a0df86f258c94f",
        "sha1": "03e2b9614a10f824d5e447337040b3bd44ee9b8c",
        "sha256": "c48ab54fd6f6ddb0399acaace8024af8ef2a267cbea86b25180cda7af9d92d46"
      },
      "dob": {
        "date": "1964-12-31T13:23:09Z",
        "age": 54
      },
      "registered": {
        "date": "2005-06-28T20:01:25Z",
        "age": 13
      },
      "phone": "63622668",
      "cell": "95931945",
      "id": {
        "name": "FN",
        "value": "31126411718"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/64.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "baptiste",
        "last": "fleury"
      },
      "location": {
        "street": "669 rue du stade",
        "city": "rennes",
        "state": "jura",
        "postcode": 20172,
        "coordinates": {
          "latitude": "-17.6141",
          "longitude": "151.7945"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "baptiste.fleury@example.com",
      "login": {
        "uuid": "e2b75eba-e83f-4baa-96de-d6a7523194f4",
        "username": "smallgoose665",
        "password": "1357",
        "salt": "XOr1ZtQ8",
        "md5": "b34d8a1f3f2f559fbbc601c0ab36b27d",
        "sha1": "00c74c3aa9420e8aa4974f6751db7cd25e4c0cea",
        "sha256": "8f245aab122b4c9d4765395284c7630972ea72e49daad0bdee4bf369d14b0304"
      },
      "dob": {
        "date": "1956-06-10T03:17:32Z",
        "age": 62
      },
      "registered": {
        "date": "2012-06-18T10:55:45Z",
        "age": 6
      },
      "phone": "03-06-50-40-40",
      "cell": "06-32-50-56-33",
      "id": {
        "name": "INSEE",
        "value": "1NNaN35033559 01"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/47.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "eldana",
        "last": "worren"
      },
      "location": {
        "street": "bølerskrenten 6904",
        "city": "kiberg",
        "state": "nord-trøndelag",
        "postcode": "9508",
        "coordinates": {
          "latitude": "44.6661",
          "longitude": "-145.7350"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "eldana.worren@example.com",
      "login": {
        "uuid": "53478d85-bdc9-4419-9691-bfcf02d70a98",
        "username": "purplemeercat931",
        "password": "pulled",
        "salt": "0wIya2Ne",
        "md5": "a3146a1d46ffeb1c7f1bf98e2732c576",
        "sha1": "7b62a5fc8b74f39a8cad5d86aeae0aacea265986",
        "sha256": "c4b1d01fe36232524dddb149f6f3496681db5949c4e10080bd938405c25463af"
      },
      "dob": {
        "date": "1959-07-26T20:13:13Z",
        "age": 59
      },
      "registered": {
        "date": "2005-10-09T14:06:32Z",
        "age": 13
      },
      "phone": "66009880",
      "cell": "99524053",
      "id": {
        "name": "FN",
        "value": "26075944321"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "abigail",
        "last": "lam"
      },
      "location": {
        "street": "535 pine rd",
        "city": "enterprise",
        "state": "nova scotia",
        "postcode": "C7P 4Y2",
        "coordinates": {
          "latitude": "44.8831",
          "longitude": "149.8277"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "abigail.lam@example.com",
      "login": {
        "uuid": "5a9d4c21-0e86-4ecd-95c8-51e6e18347a7",
        "username": "bluesnake297",
        "password": "terror",
        "salt": "v5df5dPs",
        "md5": "4d0882e966f4e67b4294f87929ddf76b",
        "sha1": "13645c2c5a7717cf00b002c5a21e6d146e917a63",
        "sha256": "14ec0a148c68d2a5f55a933a8962a0049a0c8cd57e67383659bfbc14d6fbb5f3"
      },
      "dob": {
        "date": "1960-08-27T16:26:32Z",
        "age": 58
      },
      "registered": {
        "date": "2014-05-03T01:54:35Z",
        "age": 4
      },
      "phone": "244-654-0660",
      "cell": "496-343-7892",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/71.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/71.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/71.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "nooa",
        "last": "tuomala"
      },
      "location": {
        "street": "4721 rautatienkatu",
        "city": "vihanti",
        "state": "central ostrobothnia",
        "postcode": 21998,
        "coordinates": {
          "latitude": "-50.9887",
          "longitude": "142.5482"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "nooa.tuomala@example.com",
      "login": {
        "uuid": "529c4310-e9a2-4433-b4de-b5a275355c08",
        "username": "crazygorilla772",
        "password": "xxxxxxx",
        "salt": "oIr8m2JU",
        "md5": "00401b4d47046bdd95687414c09afecd",
        "sha1": "e992a342743b906e55fb74b065eefa1131890f57",
        "sha256": "5c36407eb3584f08b40652bbcd063c72348614a2805fa0688dc8f40123a8410d"
      },
      "dob": {
        "date": "1983-11-22T14:00:52Z",
        "age": 35
      },
      "registered": {
        "date": "2004-03-17T13:46:34Z",
        "age": 15
      },
      "phone": "09-511-574",
      "cell": "044-886-11-18",
      "id": {
        "name": "HETU",
        "value": "NaNNA565undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/32.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "paige",
        "last": "thomas"
      },
      "location": {
        "street": "370 springfield road",
        "city": "oranmore",
        "state": "galway",
        "postcode": 86859,
        "coordinates": {
          "latitude": "47.7403",
          "longitude": "-110.3031"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "paige.thomas@example.com",
      "login": {
        "uuid": "9f89b018-f6be-487b-b15f-ac7e395586ac",
        "username": "ticklishpeacock970",
        "password": "norwich",
        "salt": "cOqK2iwu",
        "md5": "34a01588ea0ee05b2b49ac8620c84180",
        "sha1": "b6b6b44d12b7e0e8c91f062805cab7cee34989f0",
        "sha256": "1c66c8a4114563f2a3f2ab274b5289e7d98e467623628bfff8e4bfea2cb828d8"
      },
      "dob": {
        "date": "1986-10-29T12:07:56Z",
        "age": 32
      },
      "registered": {
        "date": "2016-08-31T16:50:04Z",
        "age": 2
      },
      "phone": "011-151-3877",
      "cell": "081-143-7089",
      "id": {
        "name": "PPS",
        "value": "5600892T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/73.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/73.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/73.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "louis",
        "last": "brown"
      },
      "location": {
        "street": "1783 west street",
        "city": "londonderry",
        "state": "west midlands",
        "postcode": "JA5R 5FB",
        "coordinates": {
          "latitude": "9.3324",
          "longitude": "145.9926"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "louis.brown@example.com",
      "login": {
        "uuid": "5d490057-ab03-44f3-89c6-a8e3a1dbb4d9",
        "username": "organicdog901",
        "password": "tester",
        "salt": "2GhqoRaQ",
        "md5": "e4e6db3f077f0ea752d70944f9d3542d",
        "sha1": "f0c7a20870488d43962a46ad8f51e0183b4b2342",
        "sha256": "107d768286ffcfed8b723df06142edf01b19f3b9e4753e2bdbb41ca781fee9bc"
      },
      "dob": {
        "date": "1970-03-26T19:06:43Z",
        "age": 49
      },
      "registered": {
        "date": "2003-03-26T04:38:46Z",
        "age": 16
      },
      "phone": "01117 21016",
      "cell": "0797-867-286",
      "id": {
        "name": "NINO",
        "value": "PY 65 66 66 N"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/95.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
      },
      "nat": "GB"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "mildred",
        "last": "ramirez"
      },
      "location": {
        "street": "1834 thornridge cir",
        "city": "amarillo",
        "state": "louisiana",
        "postcode": 70863,
        "coordinates": {
          "latitude": "-0.9261",
          "longitude": "136.0865"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "mildred.ramirez@example.com",
      "login": {
        "uuid": "f4be4406-d035-412d-9bbc-25c1c0b02553",
        "username": "tinypanda913",
        "password": "laser1",
        "salt": "sa8Nxaph",
        "md5": "a280f4bb8904279712b76a1211a9defd",
        "sha1": "382ed44dda190af8cbc825f40f83333deed5f4c9",
        "sha256": "7433d234e8e3c395a0aec6ef3e70a535b4d0c5930b1df71f59218efbb9ea11c0"
      },
      "dob": {
        "date": "1946-12-08T02:29:17Z",
        "age": 72
      },
      "registered": {
        "date": "2004-11-04T23:39:35Z",
        "age": 14
      },
      "phone": "(260)-751-4401",
      "cell": "(416)-188-6039",
      "id": {
        "name": "SSN",
        "value": "266-83-3670"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/40.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/40.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/40.jpg"
      },
      "nat": "US"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "mercedes",
        "last": "castillo"
      },
      "location": {
        "street": "3598 avenida de castilla",
        "city": "la coruña",
        "state": "país vasco",
        "postcode": 29937,
        "coordinates": {
          "latitude": "-86.1516",
          "longitude": "78.9003"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "mercedes.castillo@example.com",
      "login": {
        "uuid": "b93d427d-f402-4dd3-8e27-3c3a456fdf4f",
        "username": "orangelion798",
        "password": "sisters",
        "salt": "dgm0iQzx",
        "md5": "a9bfa36f105b2c9ff9d02eb4792d80f7",
        "sha1": "db69fd033d1cddcf4a7c02e7a25e189063b9288e",
        "sha256": "722cb991a38eab89729effb701d93da69f0b647e733d89b9088628af1fe28b84"
      },
      "dob": {
        "date": "1982-08-15T16:51:58Z",
        "age": 36
      },
      "registered": {
        "date": "2017-12-10T23:48:44Z",
        "age": 1
      },
      "phone": "937-514-434",
      "cell": "696-511-329",
      "id": {
        "name": "DNI",
        "value": "35032360-M"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/12.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "nando",
        "last": "moulin"
      },
      "location": {
        "street": "2725 avenue tony-garnier",
        "city": "bremgarten (ag)",
        "state": "neuchâtel",
        "postcode": 1992,
        "coordinates": {
          "latitude": "-89.6345",
          "longitude": "99.2015"
        },
        "timezone": {
          "offset": "+10:00",
          "description": "Eastern Australia, Guam, Vladivostok"
        }
      },
      "email": "nando.moulin@example.com",
      "login": {
        "uuid": "8444c270-1125-48be-bd3a-0a94be4d0e9e",
        "username": "smallleopard156",
        "password": "montecar",
        "salt": "PuY2lNVH",
        "md5": "05d39a3a2ddec75a1b229e57027e707e",
        "sha1": "2005659fc1a3db1d406920b2acc1f721b467c0c2",
        "sha256": "9872925f6a9aad5fb62128c07fb58dc9c6996da7da86f8c8fcc1dfe524a623bc"
      },
      "dob": {
        "date": "1957-02-09T03:36:52Z",
        "age": 62
      },
      "registered": {
        "date": "2014-06-14T05:13:30Z",
        "age": 4
      },
      "phone": "(135)-488-0486",
      "cell": "(636)-380-0513",
      "id": {
        "name": "AVS",
        "value": "756.7307.9372.42"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/32.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/32.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/32.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "fernando",
        "last": "iglesias"
      },
      "location": {
        "street": "9217 calle de téllez",
        "city": "vitoria",
        "state": "castilla y león",
        "postcode": 28195,
        "coordinates": {
          "latitude": "34.1285",
          "longitude": "-127.5208"
        },
        "timezone": {
          "offset": "+3:00",
          "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      "email": "fernando.iglesias@example.com",
      "login": {
        "uuid": "a87177fa-3663-4748-8b9c-d9d142c0efa2",
        "username": "happyzebra549",
        "password": "mazda",
        "salt": "PfYKhSBn",
        "md5": "fbb229848127e2e3743d09e0fef1a5b5",
        "sha1": "939c141fc2959363fc8b7bdb49eefe74d3e30e9a",
        "sha256": "4b98daf656ca2e2add661f2df8463745ac091868e08cb802fd0f8cd28624d7a7"
      },
      "dob": {
        "date": "1971-09-28T09:52:10Z",
        "age": 47
      },
      "registered": {
        "date": "2013-09-11T12:33:38Z",
        "age": 5
      },
      "phone": "959-846-160",
      "cell": "609-447-272",
      "id": {
        "name": "DNI",
        "value": "90603492-W"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "monsieur",
        "first": "gianni",
        "last": "fleury"
      },
      "location": {
        "street": "9433 rue du cardinal-gerlier",
        "city": "ferden",
        "state": "fribourg",
        "postcode": 8351,
        "coordinates": {
          "latitude": "56.3264",
          "longitude": "-43.8738"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "gianni.fleury@example.com",
      "login": {
        "uuid": "feaec0d7-796d-4f5e-a21b-aec5e0491584",
        "username": "brownwolf478",
        "password": "corinne",
        "salt": "mWwPL6i0",
        "md5": "604cd3c6141adc04eaac1ca728766341",
        "sha1": "9a0ada38bc28a2e4ab9a4fbc3bddb8124f6f71e3",
        "sha256": "60675afe76ff347fa5eb90b77b6313187d6ce1c7faf519776155929d4cac23ed"
      },
      "dob": {
        "date": "1983-02-25T05:43:14Z",
        "age": 36
      },
      "registered": {
        "date": "2014-04-30T14:06:52Z",
        "age": 4
      },
      "phone": "(809)-382-7731",
      "cell": "(585)-260-9637",
      "id": {
        "name": "AVS",
        "value": "756.7534.2730.75"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "hunter",
        "last": "king"
      },
      "location": {
        "street": "5669 oxford terrace",
        "city": "dunedin",
        "state": "manawatu-wanganui",
        "postcode": 76997,
        "coordinates": {
          "latitude": "-32.7991",
          "longitude": "-48.1247"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "hunter.king@example.com",
      "login": {
        "uuid": "189eb494-61eb-4cd1-8a16-075af803bbd9",
        "username": "lazyduck170",
        "password": "mnbv",
        "salt": "6sN6lk6j",
        "md5": "3fd391a6e476290e434a89090211d626",
        "sha1": "d9806e65102d760457c100325ee9705d2790d3d6",
        "sha256": "7d4d52fddd5a23a0c3c96088f1e6e0d1f1c3afd6e3b7f7a885b84ba96496b95b"
      },
      "dob": {
        "date": "1946-04-27T23:06:37Z",
        "age": 72
      },
      "registered": {
        "date": "2005-03-12T06:18:30Z",
        "age": 14
      },
      "phone": "(402)-071-8710",
      "cell": "(933)-903-9494",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "perpétua",
        "last": "duarte"
      },
      "location": {
        "street": "6521 beco dos namorados",
        "city": "contagem",
        "state": "são paulo",
        "postcode": 38149,
        "coordinates": {
          "latitude": "44.9330",
          "longitude": "21.7327"
        },
        "timezone": {
          "offset": "-4:00",
          "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
      },
      "email": "perpétua.duarte@example.com",
      "login": {
        "uuid": "46f7acea-a453-401e-a898-50b8e7ffb8f6",
        "username": "heavyelephant731",
        "password": "yellow1",
        "salt": "LUrjpzGy",
        "md5": "d307e15905765f65cce016557c74c1ba",
        "sha1": "7e49b9bc046f2afe0564cfc3b72c39858a415001",
        "sha256": "f0765740b9d5f3a198ff3df648c581e152a1a6c0da48403325af2b38c129f436"
      },
      "dob": {
        "date": "1961-04-23T16:31:33Z",
        "age": 57
      },
      "registered": {
        "date": "2014-05-18T14:53:38Z",
        "age": 4
      },
      "phone": "(87) 0896-6556",
      "cell": "(01) 2502-2437",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/18.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "paulina",
        "last": "viana"
      },
      "location": {
        "street": "9375 rua dois",
        "city": "itapetininga",
        "state": "distrito federal",
        "postcode": 39478,
        "coordinates": {
          "latitude": "20.7766",
          "longitude": "-88.1105"
        },
        "timezone": {
          "offset": "+5:00",
          "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      "email": "paulina.viana@example.com",
      "login": {
        "uuid": "16de1494-8910-4888-b25d-b3fdb52fa388",
        "username": "angryswan740",
        "password": "pacino",
        "salt": "Fn9fH9Ab",
        "md5": "0888f4f1cadde8ddb9eb8cdc064d9979",
        "sha1": "9024c85f69c9305e50bfe3047eba45fcea584e97",
        "sha256": "b54939520e31035964dd45e10bd663ede344bb3158d6cefdb973105efd1a32b9"
      },
      "dob": {
        "date": "1946-12-03T15:45:06Z",
        "age": 72
      },
      "registered": {
        "date": "2014-05-12T08:43:15Z",
        "age": 4
      },
      "phone": "(45) 5096-3198",
      "cell": "(28) 2744-4843",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/31.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/31.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/31.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "victor",
        "last": "kowalski"
      },
      "location": {
        "street": "1225 duke st",
        "city": "grand falls",
        "state": "newfoundland and labrador",
        "postcode": "B6R 5G4",
        "coordinates": {
          "latitude": "-56.7102",
          "longitude": "-171.1718"
        },
        "timezone": {
          "offset": "+5:45",
          "description": "Kathmandu"
        }
      },
      "email": "victor.kowalski@example.com",
      "login": {
        "uuid": "da0a3c61-8b37-4a8c-b8a0-cfe2a42692f6",
        "username": "organicpanda127",
        "password": "payton",
        "salt": "9u0Ej0t4",
        "md5": "67a846b3982c37ae86ae4b00c256d007",
        "sha1": "2beb6e8fd944d9c4abd17e8997b4fc1e63b42184",
        "sha256": "5460bd17d6b140ae455b7a379e568318cbae321ff8c4b85282bf4c254f87d52f"
      },
      "dob": {
        "date": "1948-02-22T09:26:07Z",
        "age": 71
      },
      "registered": {
        "date": "2007-03-17T19:40:51Z",
        "age": 12
      },
      "phone": "876-129-0346",
      "cell": "814-142-7478",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/25.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/25.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/25.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "judith",
        "last": "ryan"
      },
      "location": {
        "street": "637 the drive",
        "city": "tramore",
        "state": "donegal",
        "postcode": 36571,
        "coordinates": {
          "latitude": "-45.9049",
          "longitude": "69.9637"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "judith.ryan@example.com",
      "login": {
        "uuid": "a36ddc3e-724f-4e92-aedf-7368d02db2c1",
        "username": "brownpeacock956",
        "password": "return",
        "salt": "GGVYN6bn",
        "md5": "d22a6c366cc3518479473672c06b7d41",
        "sha1": "44c705aaf3acdfd9612e5ca69f4439e04ea4f375",
        "sha256": "0160d2019c0fbfe128637aeb1780cd84ffb32cd29b19684ef285067e1ffaec1e"
      },
      "dob": {
        "date": "1988-02-20T15:58:40Z",
        "age": 31
      },
      "registered": {
        "date": "2002-07-11T00:46:12Z",
        "age": 16
      },
      "phone": "061-550-4478",
      "cell": "081-937-7787",
      "id": {
        "name": "PPS",
        "value": "4153361T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/6.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "benjamin",
        "last": "sørensen"
      },
      "location": {
        "street": "8240 overgade",
        "city": "nykøbing f",
        "state": "hovedstaden",
        "postcode": 74307,
        "coordinates": {
          "latitude": "-80.9489",
          "longitude": "-135.6623"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "benjamin.sørensen@example.com",
      "login": {
        "uuid": "6965128c-fb81-41b0-bbe8-ef447e2f923b",
        "username": "heavyleopard411",
        "password": "bong",
        "salt": "xIadtKW6",
        "md5": "812e52ac5226084cea075b905e14d8b3",
        "sha1": "dc1032d019b6e08ea0bb6a47c07da0af6fce0b89",
        "sha256": "19c2c4334875ed0465d746eb4e251d36e50bf37eaa72dc8d21da598c559787c9"
      },
      "dob": {
        "date": "1966-03-20T05:15:03Z",
        "age": 53
      },
      "registered": {
        "date": "2002-03-28T16:00:06Z",
        "age": 17
      },
      "phone": "92451537",
      "cell": "26318289",
      "id": {
        "name": "CPR",
        "value": "122348-7877"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/95.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "anunciata",
        "last": "campos"
      },
      "location": {
        "street": "2086 rua santa rita ",
        "city": "crato",
        "state": "amapá",
        "postcode": 94978,
        "coordinates": {
          "latitude": "40.9653",
          "longitude": "-129.2044"
        },
        "timezone": {
          "offset": "+4:30",
          "description": "Kabul"
        }
      },
      "email": "anunciata.campos@example.com",
      "login": {
        "uuid": "35db0173-bf68-425b-9ccd-98d674c639b1",
        "username": "heavypanda822",
        "password": "tripod",
        "salt": "UOafbsXT",
        "md5": "934ceb104e62bd15c7d28804933fe9ad",
        "sha1": "d6f2988773ac4c790d81cae100206929443aef4e",
        "sha256": "89661620f3c37bb1fb54e0f337f4f4ce461a85541cc9644eca0678e67abdd08b"
      },
      "dob": {
        "date": "1946-01-25T17:48:00Z",
        "age": 73
      },
      "registered": {
        "date": "2004-04-25T14:09:13Z",
        "age": 14
      },
      "phone": "(41) 1814-6845",
      "cell": "(06) 1535-6471",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/5.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/5.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/5.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "hailey",
        "last": "lévesque"
      },
      "location": {
        "street": "9655 main st",
        "city": "hampstead",
        "state": "nunavut",
        "postcode": "W3P 4Z5",
        "coordinates": {
          "latitude": "6.2350",
          "longitude": "-153.5544"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "hailey.lévesque@example.com",
      "login": {
        "uuid": "bdc5c150-cc56-49da-8637-595dc10ee62f",
        "username": "angrymouse858",
        "password": "zhong",
        "salt": "UdGBGfqp",
        "md5": "2320086290b3908c0ff8198dbecc603b",
        "sha1": "c515b1dc1c6e2d9a0332799cdb828f84c56be674",
        "sha256": "86741aeaca051f830e8ed4ab2c162afcc046824ebe05c89feb76812d9b3c8da1"
      },
      "dob": {
        "date": "1989-05-06T09:38:16Z",
        "age": 29
      },
      "registered": {
        "date": "2010-02-08T17:28:40Z",
        "age": 9
      },
      "phone": "966-540-7834",
      "cell": "640-523-0690",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/2.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "iida",
        "last": "ketola"
      },
      "location": {
        "street": "8497 hatanpään valtatie",
        "city": "kokkola",
        "state": "satakunta",
        "postcode": 40924,
        "coordinates": {
          "latitude": "84.5471",
          "longitude": "149.1317"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "iida.ketola@example.com",
      "login": {
        "uuid": "18cd98ae-8525-4e4b-a4cc-b51e56bfa0b6",
        "username": "lazymeercat483",
        "password": "incubus",
        "salt": "v7IO9Uzd",
        "md5": "b9096f21c5db97e0d037abbd131e3db3",
        "sha1": "b30f0cd8b3f609803cb62056b98522a717d0a3a1",
        "sha256": "789b2f7dbd9b948b3943dc256bbfcc4bd3d7ef4f10c378d8bd74eaa7b7652d7d"
      },
      "dob": {
        "date": "1969-02-15T19:39:02Z",
        "age": 50
      },
      "registered": {
        "date": "2013-02-20T06:57:36Z",
        "age": 6
      },
      "phone": "07-238-218",
      "cell": "045-397-66-85",
      "id": {
        "name": "HETU",
        "value": "NaNNA780undefined"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/43.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/43.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/43.jpg"
      },
      "nat": "FI"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "karsten",
        "last": "neteland"
      },
      "location": {
        "street": "markveien 2646",
        "city": "harpefoss",
        "state": "troms - romsa",
        "postcode": "4154",
        "coordinates": {
          "latitude": "22.0233",
          "longitude": "177.7981"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "karsten.neteland@example.com",
      "login": {
        "uuid": "aa9ab2d2-0d90-407f-8c20-d892ec0d7878",
        "username": "bigbear398",
        "password": "cubswin",
        "salt": "KuWsNMAG",
        "md5": "4694098847b532d852b6f5eda1356be7",
        "sha1": "c5debc3c2ec88e11e38ac0eb76e9bda4522cdff5",
        "sha256": "96651695d47a7e2fab420c239860926b53e819aff1aaa937f29b302c69eaec6b"
      },
      "dob": {
        "date": "1978-02-12T18:11:38Z",
        "age": 41
      },
      "registered": {
        "date": "2015-06-12T11:37:22Z",
        "age": 3
      },
      "phone": "70586619",
      "cell": "97720067",
      "id": {
        "name": "FN",
        "value": "12027839485"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/45.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "elvin",
        "last": "kolseth"
      },
      "location": {
        "street": "fetsundgata 5223",
        "city": "monssveen",
        "state": "bergen",
        "postcode": "5585",
        "coordinates": {
          "latitude": "25.7786",
          "longitude": "-93.9659"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "elvin.kolseth@example.com",
      "login": {
        "uuid": "0e5592e5-3b1e-40dc-acb7-f3faab320b96",
        "username": "blackpeacock824",
        "password": "button",
        "salt": "ZhcTXjCJ",
        "md5": "bddf2d2af52fb041eeafdc8e3928cc0a",
        "sha1": "c135f0688ebba046202f713318674f841f20a61d",
        "sha256": "90ef8a76798a1cb6e17cb6a333db8690233f6ed148bec1484c7686161fa61d64"
      },
      "dob": {
        "date": "1983-06-28T07:01:27Z",
        "age": 35
      },
      "registered": {
        "date": "2003-06-01T22:20:03Z",
        "age": 15
      },
      "phone": "53949350",
      "cell": "42164359",
      "id": {
        "name": "FN",
        "value": "28068312037"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/71.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/71.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/71.jpg"
      },
      "nat": "NO"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "cäcilie",
        "last": "ketterer"
      },
      "location": {
        "street": "ringstraße 149",
        "city": "espelkamp",
        "state": "baden-württemberg",
        "postcode": 52182,
        "coordinates": {
          "latitude": "53.6483",
          "longitude": "-149.2721"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "cäcilie.ketterer@example.com",
      "login": {
        "uuid": "ceb55363-a86b-443a-9eb8-e52f78c2a771",
        "username": "happytiger547",
        "password": "pyon",
        "salt": "KXLOLkWx",
        "md5": "c72570bda388b3e78368ed5b6e9dda81",
        "sha1": "862ef92240590b8e9bb6f845d83b5c30d04964f9",
        "sha256": "17fc2ba16524bf4e7fed3244183fc832f5640ff2ce4e140d8e4b4395700eb293"
      },
      "dob": {
        "date": "1966-02-24T08:40:42Z",
        "age": 53
      },
      "registered": {
        "date": "2018-04-13T10:56:34Z",
        "age": 0
      },
      "phone": "0732-2571103",
      "cell": "0176-4514873",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/59.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "hunter",
        "last": "mitchell"
      },
      "location": {
        "street": "6728 cedar st",
        "city": "minto",
        "state": "nunavut",
        "postcode": "O8X 1F0",
        "coordinates": {
          "latitude": "-34.9374",
          "longitude": "-83.1137"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "hunter.mitchell@example.com",
      "login": {
        "uuid": "1db81ca4-dd4a-4f0c-aa3a-790a90607044",
        "username": "organicwolf883",
        "password": "hottie",
        "salt": "cQMxPFZo",
        "md5": "ccf20a00cb5027b28849dddcd54ff1f5",
        "sha1": "34f009c5db01df187be8cf23cc416a99318f7985",
        "sha256": "83449485cc86a60b6ffe42d8c8fb2bd8dd3f6234fb5043e85ca1fabadecbba78"
      },
      "dob": {
        "date": "1965-05-12T01:11:01Z",
        "age": 53
      },
      "registered": {
        "date": "2011-12-25T14:03:48Z",
        "age": 7
      },
      "phone": "863-529-3550",
      "cell": "721-982-2987",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/83.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/83.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/83.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "irem",
        "last": "niesen"
      },
      "location": {
        "street": "6357 furkabaan",
        "city": "schouwen-duiveland",
        "state": "gelderland",
        "postcode": 65237,
        "coordinates": {
          "latitude": "3.4312",
          "longitude": "-155.2932"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "irem.niesen@example.com",
      "login": {
        "uuid": "9b555905-488e-403c-83f7-6d157df5860d",
        "username": "yellowrabbit304",
        "password": "bugs",
        "salt": "IefncJ8v",
        "md5": "af1a7ad9ea99320cb1235434bef222a2",
        "sha1": "4b79314c53391bd081f00fffb10ea1993d92510d",
        "sha256": "12c0ac6036799d668b76d8decd77c12075c7e89d9f8506ec0cff59a513a7e8d5"
      },
      "dob": {
        "date": "1959-02-16T16:56:54Z",
        "age": 60
      },
      "registered": {
        "date": "2008-11-25T17:09:30Z",
        "age": 10
      },
      "phone": "(214)-986-2147",
      "cell": "(439)-806-6800",
      "id": {
        "name": "BSN",
        "value": "59991943"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/10.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "thilo",
        "last": "valentin"
      },
      "location": {
        "street": "uhlandstraße 102",
        "city": "römhild",
        "state": "bayern",
        "postcode": 81541,
        "coordinates": {
          "latitude": "24.3922",
          "longitude": "-154.0695"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "thilo.valentin@example.com",
      "login": {
        "uuid": "ba9e4398-911e-4de0-9e84-70851bf29079",
        "username": "ticklishcat360",
        "password": "county",
        "salt": "jeQfIg7m",
        "md5": "806d62d195593f83600a0132d9f1cc6a",
        "sha1": "91be1d53ca818f02f698910932e7155b7b1f5397",
        "sha256": "f8bf147f6c40616716afb6cb93da7b31b28a8fd60d497e99a93717cf6f3203c2"
      },
      "dob": {
        "date": "1979-08-19T12:07:44Z",
        "age": 39
      },
      "registered": {
        "date": "2017-08-06T07:23:18Z",
        "age": 1
      },
      "phone": "0683-2082537",
      "cell": "0174-4650983",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/60.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "زهرا",
        "last": "كامياران"
      },
      "location": {
        "street": "7169 میدان امام خمینی",
        "city": "اراک",
        "state": "هرمزگان",
        "postcode": 86069,
        "coordinates": {
          "latitude": "56.6585",
          "longitude": "-160.7552"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "زهرا.كامياران@example.com",
      "login": {
        "uuid": "b4745e01-e0a4-4e3c-b4bb-377a871aa06f",
        "username": "happybutterfly734",
        "password": "slut",
        "salt": "6btSCcso",
        "md5": "dca9f7ed067a8460c2c5c5397fc095cb",
        "sha1": "d534de84c9d89496108cfcb163bd2201f26b93dc",
        "sha256": "1d9048c1e5e2eca7ebc624715a2e48e46c459298f5619b754dfad4e4e649ce97"
      },
      "dob": {
        "date": "1952-07-03T19:41:09Z",
        "age": 66
      },
      "registered": {
        "date": "2008-02-08T20:56:48Z",
        "age": 11
      },
      "phone": "045-98889471",
      "cell": "0909-215-8299",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/58.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/58.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/58.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "emilia",
        "last": "haapala"
      },
      "location": {
        "street": "7337 aleksanterinkatu",
        "city": "parikkala",
        "state": "finland proper",
        "postcode": 56166,
        "coordinates": {
          "latitude": "18.4117",
          "longitude": "-60.6065"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "emilia.haapala@example.com",
      "login": {
        "uuid": "66cde31c-97f4-475a-a07a-f12384f3d9bf",
        "username": "goldenbutterfly613",
        "password": "corndog",
        "salt": "zkwpWulh",
        "md5": "8b0e2a3618eed85b930aff7d748aa8ee",
        "sha1": "83d48f0a693571e93ef8d3d6c8bae7ae3880a90d",
        "sha256": "0012949be73fc94bf6a70a41af88be765ff17b503276f7f30a192ccf467545d5"
      },
      "dob": {
        "date": "1959-10-23T20:00:23Z",
        "age": 59
      },
      "registered": {
        "date": "2008-10-20T15:58:24Z",
        "age": 10
      },
      "phone": "06-098-123",
      "cell": "049-311-05-90",
      "id": {
        "name": "HETU",
        "value": "NaNNA314undefined"
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
        "title": "ms",
        "first": "emilia",
        "last": "cabrera"
      },
      "location": {
        "street": "1188 calle nebrija",
        "city": "oviedo",
        "state": "comunidad valenciana",
        "postcode": 78798,
        "coordinates": {
          "latitude": "-40.1547",
          "longitude": "-33.7873"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "emilia.cabrera@example.com",
      "login": {
        "uuid": "bb15f822-8c77-4dd9-912e-8a89fce950cb",
        "username": "angrycat899",
        "password": "leroy",
        "salt": "AUfENSqu",
        "md5": "ce3f66339a1008b22a0f37d1c6ead493",
        "sha1": "c75511241bab096adaad9163567f0d579b350603",
        "sha256": "4aabf6c52cdabb4175cce26ccebc468a404bbedbb21ea11a1a62c1d22a7998ca"
      },
      "dob": {
        "date": "1967-01-12T06:46:05Z",
        "age": 52
      },
      "registered": {
        "date": "2006-06-10T23:42:24Z",
        "age": 12
      },
      "phone": "931-735-501",
      "cell": "621-957-399",
      "id": {
        "name": "DNI",
        "value": "51964233-D"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/91.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/91.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/91.jpg"
      },
      "nat": "ES"
    }
  ],
  "info": {
    "seed": "e17f97182d601a25",
    "results": 50,
    "page": 1,
    "version": "1.2"
  }
};



app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/api/users', (req, res) => {
  res.send(users);
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