# VERA WORLDWIDE: DIALECT ATLAS & FOLDER STRUCTURE**Version:** 1.0.0**Purpose:** Maps the geographic folder hierarchy for all dialects and content files in the application.

---## 1. THE ATLAS HIERARCHY
The `src/atlas/` directory organizes content chronologically by geography:**Hierarchy:** `atlas` ➔ `dialects` ➔ `continent` ➔ `[dialect code named by the country]`*Developer Note:* the file name is country, the code inside is the most popular dialect from that country 

2. FOLDER TREE STRUCTURE  'src/atlas/'
├── availability.js
├── continents
│   ├── africa.js
│   ├── antartica.js
│   ├── asia.js
│   ├── europe.js
│   ├── north-america.js
│   ├── oceania.js
│   └── south-america.js
├── continents.js
├── dialects
│   ├── africa
│   │   ├── algeria.js
│   │   ├── angola.js
│   │   ├── botswana.js
│   │   ├── burundi.js
│   │   ├── cameroon.js
│   │   ├── central-africa-republic.js
│   │   ├── chad.js
│   │   ├── comoros.js
│   │   ├── congo.js
│   │   ├── cote-divoire.js
│   │   ├── djibouti.js
│   │   ├── dr-congo.js
│   │   ├── egypt.js
│   │   ├── equatorial-guinea.js
│   │   ├── eritrea.js
│   │   ├── eswatini.js
│   │   ├── ethiopia.js
│   │   ├── gabon.js
│   │   ├── gambia.js
│   │   ├── ghana.js
│   │   ├── kenya.js
│   │   ├── lesotho.js
│   │   ├── libya.js
│   │   ├── madagascar.js
│   │   ├── mauritius.js
│   │   ├── morocco.js
│   │   ├── mozambique.js
│   │   ├── namibia.js
│   │   ├── nigeria.js
│   │   ├── rwanda.js
│   │   ├── senegal.js
│   │   ├── seychelles.js
│   │   ├── somalia.js
│   │   ├── south-africa.js
│   │   ├── south-sudan.js
│   │   ├── sudan.js
│   │   ├── tanzania.js
│   │   ├── tunisia.js
│   │   ├── uganda.js
│   │   ├── western-sahara.js
│   │   ├── zambia.js
│   │   └── zimbabwe.js
│   ├── antartica
│   │   └──
│   ├── asia
│   │   ├── bahrain.js
│   │   ├── bangladesh.js
│   │   ├── bhutan.js
│   │   ├── brunei.js
│   │   ├── cambodia.js
│   │   ├── china.js
│   │   ├── east-timor.js
│   │   ├── india.js
│   │   ├── indonesia.js
│   │   ├── iran.js
│   │   ├── iraq.js
│   │   ├── israel.js
│   │   ├── japan.js
│   │   ├── jordan.js
│   │   ├── kazakhstan.js
│   │   ├── kuwait.js
│   │   ├── kyrgyzstan.js
│   │   ├── laos.js
│   │   ├── lebanon.js
│   │   ├── malaysia.js
│   │   ├── maldives.js
│   │   ├── mongolia.js
│   │   ├── myanmar.js
│   │   ├── nepal.js
│   │   ├── north-korea.js
│   │   ├── oman.js
│   │   ├── pakistan.js
│   │   ├── palestine.js
│   │   ├── philippines.js
│   │   ├── qatar.js
│   │   ├── saudi-arabia.js
│   │   ├── singapore.js
│   │   ├── south-korea.js
│   │   ├── sri-lanka.js
│   │   ├── syria.js
│   │   ├── taiwan.js
│   │   ├── tajikistan.js
│   │   ├── thailand.js
│   │   ├── turkey.js
│   │   ├── turkmenistan.js
│   │   ├── uae.js
│   │   ├── uzbekistan.js
│   │   ├── vietnam.js
│   │   └── yemen.js
│   ├── europe
│   │   ├── albania.js
│   │   ├── andorra.js
│   │   ├── austria.js
│   │   ├── belarus.js
│   │   ├── belgium.js
│   │   ├── bosnia-herzegovina.js
│   │   ├── bulgaria.js
│   │   ├── croatia.js
│   │   ├── cyprus.js
│   │   ├── czechia.js
│   │   ├── denmark.js
│   │   ├── estonia.js
│   │   ├── finland.js
│   │   ├── france.js
│   │   ├── germany.js
│   │   ├── greece.js
│   │   ├── hungary.js
│   │   ├── iceland.js
│   │   ├── ireland.js
│   │   ├── italy.js
│   │   ├── kosovo.js
│   │   ├── latvia.js
│   │   ├── liechtenstein.js
│   │   ├── lithuania.js
│   │   ├── luxembourg.js
│   │   ├── malta.js
│   │   ├── moldova.js
│   │   ├── monaco.js
│   │   ├── montenegro.js
│   │   ├── netherlands.js
│   │   ├── north-macedonia.js
│   │   ├── norway.js
│   │   ├── poland.js
│   │   ├── portugal.js
│   │   ├── romania.js
│   │   ├── russia.js
│   │   ├── san-marino.js
│   │   ├── serbia.js
│   │   ├── slovakia.js
│   │   ├── slovenia.js
│   │   ├── spain.js
│   │   ├── sweden.js
│   │   ├── switzerland.js
│   │   ├── turkey.js
│   │   ├── uk.js
│   │   ├── ukraine.js
│   │   └── vatican-city.js
│   ├── north-america
│   │   ├── anguilla.js
│   │   ├── antigua-barbuda.js
│   │   ├── aruba.js
│   │   ├── bahamas.js
│   │   ├── barbados.js
│   │   ├── belize.js
│   │   ├── bonaire.js
│   │   ├── canada.js
│   │   ├── cayman-islands.js
│   │   ├── costa-rica.js
│   │   ├── cuba.js
│   │   ├── curacao.js
│   │   ├── dominica.js
│   │   ├── dominican-republic.js
│   │   ├── el-salvador.js
│   │   ├── grenada.js
│   │   ├── guadeloupe.js
│   │   ├── guatemala.js
│   │   ├── haiti.js
│   │   ├── honduras.js
│   │   ├── jamaica.js
│   │   ├── martinique.js
│   │   ├── mexico.js
│   │   ├── montserrat.js
│   │   ├── nicaragua.js
│   │   ├── puerto-rico.js
│   │   ├── saint-barthelemy.js
│   │   ├── saint-kitts-nevis.js
│   │   ├── saint-lucia.js
│   │   ├── saint-vincent.js
│   │   ├── sint-maarten.js
│   │   ├── trinidad-tobago.js
│   │   ├── turks-caicos.js
│   │   ├── us-virgin-islands.js
│   │   └── usa.js
│   ├── oceania
│   │   ├── american-samoa.js
│   │   ├── australia.js
│   │   ├── christmas-island.js
│   │   ├── cocos-keeling.js
│   │   ├── cook-islands.js
│   │   ├── fiji.js
│   │   ├── french-polynesia.js
│   │   ├── kiribati.js
│   │   ├── marshall-islands.js
│   │   ├── nauru.js
│   │   ├── new-caledonia.js
│   │   ├── new-zealand.js
│   │   ├── niue.js
│   │   ├── norfolk-island.js
│   │   ├── northern-mariana-islands.js
│   │   ├── palau.js
│   │   ├── papua-new-guinea.js
│   │   ├── pitcairn.js
│   │   ├── rotuma.js
│   │   ├── samoa.js
│   │   ├── solomon-islands.js
│   │   ├── tokelau.js
│   │   ├── tonga.js
│   │   ├── tuvalu.js
│   │   ├── vanuatu.js
│   │   └── wallis-futuna.js
│   └── south-america
│       ├── argentina.js
│       ├── bolivia.js
│       ├── brazil.js
│       ├── chile.js
│       ├── chiloe.js
│       ├── colombia.js
│       ├── ecuador.js
│       ├── falkland-islands.js
│       ├── french-guiana.js
│       ├── guyana.js
│       ├── juan-fernandez.js
│       ├── paraguay.js
│       ├── peru.js
│       ├── rapa-nui.js
│       ├── south-georgia.js
│       ├── suriname.js
│       ├── uruguay.js
│       └── venezuela.js
├── languages.js
└── subregions.js
10 directories, 223 files


3. CONFIG.JSON SCHEMA (Inside each dialect folder)
Each dialect must contain a config.json that the Admin.jsx dashboard and Dashboard.jsx UI read from.

JSON
{
  "dialectCode": "es-MX",
  "displayName": "Mexican Spanish",
  "continent": "North_America",
  "country": "Mexico",
  "flagEmoji": "🇲🇽",
  "difficulty": "Medium",
  "status": "active", 
  "aiBasePersona": "Urban local, uses 'chido', 'qué onda', fast pacing."
}
