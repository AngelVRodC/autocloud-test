# Code Challenge — Autocloud

## Folder Structure 
    .
    ├── dist                   # Compiled files
    ├── src                    # Source files
        ├── __mocks__          # Data Mock for unit testing
        ├── __test__           # Unit testing functions
        ├── constants          # constants and environment variables
        ├── interfaces         # Typescript Interfaces
        ├── middlewares        # Auth middleware
        ├── api                # Requests to external api
        ├── functions          # pipeline functions
        ├── utils              # commons functions
        index.ts               # App entry point with express config
    .env.example               # Environment variables example
    Dockerfile                 # Docker configurations
    package.json               # Dependencies management
    tsconfig.json              # Typescript Configurations
    jest.config.js             # Testing Configurations


## How to build and run with docker 🚀
### Prerequisites 📋

[Docker](https://www.docker.com/get-started/) A set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.

### Environment variables

You must create a `.env` file in the root of the project to add the environment variables.

```
# This is the token that you must send in the header for authentication
CUSTOM_TOKEN=58cfe8bf4434e1e34fc0487c491049a4
BREWERIES_EXTERNAL_API=https://api.openbrewerydb.org/breweries
```

### Build and run the docker container  🔧

Execute in console:
```sh
docker build -t autocloud-test .
```
```sh
docker run -it -p 3000:3000 autocloud-test
```

### Running the tests

```sh
yarn test
```

### Running the project

```sh
yarn start
```

### Testing the api with curl

```sh
curl --request GET \
  --url http://localhost:3000/breweries \
  --header 'custom-token: 58cfe8bf4434e1e34fc0487c491049a4'
```

### example output


```sh
{
  "Texas": [
    {
      "id": 9094,
      "obdbId": "bnaf-llc-austin",
      "name": "Bnaf, LLC",
      "breweryType": "planning",
      "city": "Austin",
      "state": "Texas",
      "postalCode": "78727-7602",
      "country": "United States",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 12023,
      "obdbId": "la-funke-brewing-bulverde",
      "name": "La Funke Brewing",
      "breweryType": "planning",
      "city": "Bulverde",
      "state": "Texas",
      "postalCode": "78163-4156",
      "country": "United States",
      "phone": "2104602083",
      "websiteUrl": "http://www.lafunke.com",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 12459,
      "obdbId": "mallory-brewing-houston",
      "name": "Mallory Brewing",
      "breweryType": "planning",
      "city": "Houston",
      "state": "Texas",
      "postalCode": "77018",
      "country": "United States",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Colorado": [
    {
      "id": 9180,
      "obdbId": "boulder-beer-co-boulder",
      "name": "Boulder Beer Co",
      "breweryType": "regional",
      "street": "2880 Wilderness Pl",
      "city": "Boulder",
      "state": "Colorado",
      "postalCode": "80301-5401",
      "country": "United States",
      "longitude": "-105.2480158",
      "latitude": "40.026439",
      "updatedAt": "2018-08-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 14347,
      "obdbId": "ska-brewing-durango",
      "name": "SKA Brewing",
      "breweryType": "regional",
      "street": "225 Girard, Bodo Park",
      "city": "Durango",
      "state": "Colorado",
      "postalCode": "81303-6827",
      "country": "United States",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Florida": [
    {
      "id": 9754,
      "obdbId": "clermont-brewing-company-clermont",
      "name": "Clermont Brewing Company",
      "breweryType": "planning",
      "city": "Clermont",
      "state": "Florida",
      "postalCode": "34711-2108",
      "country": "United States",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 11968,
      "obdbId": "king-fox-brewery-hialeah",
      "name": "King Fox Brewery",
      "breweryType": "planning",
      "city": "Hialeah",
      "state": "Florida",
      "postalCode": "33014-5231",
      "country": "United States",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Iowa": [
    {
      "id": 10186,
      "obdbId": "dimensional-brewing-co-dubuque",
      "name": "Dimensional Brewing Co.",
      "breweryType": "planning",
      "city": "Dubuque",
      "state": "Iowa",
      "postalCode": "52001",
      "country": "United States",
      "websiteUrl": "http://www.dimensionalbrewing.com",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Louisiana": [
    {
      "id": 10217,
      "obdbId": "dixie-brewing-co-inc-new-orleans",
      "name": "Dixie Brewing Co Inc.",
      "breweryType": "contract",
      "street": "6221 S Claiborne Ave Ste 101",
      "city": "New Orleans",
      "state": "Louisiana",
      "postalCode": "70125-4191",
      "country": "United States",
      "phone": "5048228711",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "California": [
    {
      "id": 10486,
      "obdbId": "epidemic-ales-concord",
      "name": "Epidemic Ales",
      "breweryType": "micro",
      "street": "150 Mason Circle Stes I&J",
      "city": "Concord",
      "state": "California",
      "postalCode": "94520",
      "country": "United States",
      "phone": "9255668850",
      "websiteUrl": "http://www.epidemicales.com",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Pennsylvania": [
    {
      "id": 11039,
      "obdbId": "goose-island-philadelphia-philadelphia",
      "name": "Goose Island Philadelphia",
      "breweryType": "brewpub",
      "street": "1002 Canal St",
      "city": "Philadelphia",
      "state": "Pennsylvania",
      "postalCode": "19123",
      "country": "United States",
      "longitude": "-75.13506341",
      "latitude": "39.9648491",
      "updatedAt": "2018-08-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 12202,
      "obdbId": "lincoln-avenue-brewery-pittsburgh",
      "name": "Lincoln Avenue Brewery",
      "breweryType": "planning",
      "city": "Pittsburgh",
      "state": "Pennsylvania",
      "postalCode": "15202",
      "country": "United States",
      "phone": "4124274078",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Georgia": [
    {
      "id": 11235,
      "obdbId": "grits-brewing-chamblee",
      "name": "GRITS Brewing",
      "breweryType": "planning",
      "city": "Chamblee",
      "state": "Georgia",
      "postalCode": "30341-2024",
      "country": "United States",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Michigan": [
    {
      "id": 11767,
      "obdbId": "ironbark-brewery-jackson",
      "name": "Ironbark Brewery",
      "breweryType": "micro",
      "street": "2610 Kibby Rd",
      "city": "Jackson",
      "state": "Michigan",
      "postalCode": "49203-4908",
      "country": "United States",
      "longitude": "-84.43762976",
      "latitude": "42.2188971",
      "phone": "5177487988",
      "updatedAt": "2018-08-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Virginia": [
    {
      "id": 12294,
      "obdbId": "long-way-brewing-radford",
      "name": "Long Way Brewing",
      "breweryType": "planning",
      "city": "Radford",
      "state": "Virginia",
      "postalCode": "24141-1403",
      "country": "United States",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 14677,
      "obdbId": "straight-shot-brewing-poquoson",
      "name": "Straight Shot Brewing",
      "breweryType": "planning",
      "city": "Poquoson",
      "state": "Virginia",
      "postalCode": "23662-0000",
      "country": "United States",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "New Hampshire": [
    {
      "id": 13018,
      "obdbId": "northwoods-brewing-co-northwood",
      "name": "Northwoods Brewing Co",
      "breweryType": "planning",
      "city": "Northwood",
      "state": "New Hampshire",
      "postalCode": "3261",
      "country": "United States",
      "phone": "2073516983",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Maryland": [
    {
      "id": 12705,
      "obdbId": "mobtown-brewing-co-baltimore",
      "name": "Mobtown Brewing Co",
      "breweryType": "planning",
      "city": "Baltimore",
      "state": "Maryland",
      "postalCode": "21224-4716",
      "country": "United States",
      "phone": "4104198312",
      "updatedAt": "2018-08-11T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ],
  "Ohio": [
    {
      "id": 14417,
      "obdbId": "snow-belt-brew-chardon",
      "name": "Snow Belt Brew",
      "breweryType": "micro",
      "street": "9511 Kile Rd",
      "city": "Chardon",
      "state": "Ohio",
      "postalCode": "44024",
      "country": "United States",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    },
    {
      "id": 12773,
      "obdbId": "mosaic-brewing-lancaster",
      "name": "Mosaic Brewing",
      "breweryType": "planning",
      "city": "Lancaster",
      "state": "Ohio",
      "postalCode": "43130-4308",
      "country": "United States",
      "phone": "6149402500",
      "websiteUrl": "http://www.double.edge.beer",
      "updatedAt": "2018-07-24T00:00:00.000Z",
      "createdAt": "2018-07-24T00:00:00.000Z"
    }
  ]
}
```