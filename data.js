/* ═══════════════════════════════════════════════════════════
   data.js — All static state data
   Edit this file to update any state info, add facts, etc.
═══════════════════════════════════════════════════════════ */

const DATA = {

  /* FIPS code → abbreviation */
  FIPS: {
    "01":"AL","04":"AZ","05":"AR","06":"CA","08":"CO","09":"CT","10":"DE",
    "12":"FL","13":"GA","16":"ID","17":"IL","18":"IN","19":"IA","20":"KS",
    "21":"KY","22":"LA","23":"ME","24":"MD","25":"MA","26":"MI","27":"MN",
    "28":"MS","29":"MO","30":"MT","31":"NE","32":"NV","33":"NH","34":"NJ",
    "35":"NM","36":"NY","37":"NC","38":"ND","39":"OH","40":"OK","41":"OR",
    "42":"PA","44":"RI","45":"SC","46":"SD","47":"TN","48":"TX","49":"UT",
    "50":"VT","51":"VA","53":"WA","54":"WV","55":"WI","56":"WY"
  },

  /* Abbreviation → full name */
  NAMES: {
    AL:"Alabama",      AZ:"Arizona",       AR:"Arkansas",      CA:"California",
    CO:"Colorado",     CT:"Connecticut",   DE:"Delaware",      FL:"Florida",
    GA:"Georgia",      ID:"Idaho",         IL:"Illinois",      IN:"Indiana",
    IA:"Iowa",         KS:"Kansas",        KY:"Kentucky",      LA:"Louisiana",
    ME:"Maine",        MD:"Maryland",      MA:"Massachusetts", MI:"Michigan",
    MN:"Minnesota",    MS:"Mississippi",   MO:"Missouri",      MT:"Montana",
    NE:"Nebraska",     NV:"Nevada",        NH:"New Hampshire", NJ:"New Jersey",
    NM:"New Mexico",   NY:"New York",      NC:"North Carolina",ND:"North Dakota",
    OH:"Ohio",         OK:"Oklahoma",      OR:"Oregon",        PA:"Pennsylvania",
    RI:"Rhode Island", SC:"South Carolina",SD:"South Dakota",  TN:"Tennessee",
    TX:"Texas",        UT:"Utah",          VT:"Vermont",       VA:"Virginia",
    WA:"Washington",   WV:"West Virginia", WI:"Wisconsin",     WY:"Wyoming"
  },

  /* State capitals */
  CAPITALS: {
    AL:"Montgomery",   AZ:"Phoenix",       AR:"Little Rock",   CA:"Sacramento",
    CO:"Denver",       CT:"Hartford",      DE:"Dover",         FL:"Tallahassee",
    GA:"Atlanta",      ID:"Boise",         IL:"Springfield",   IN:"Indianapolis",
    IA:"Des Moines",   KS:"Topeka",        KY:"Frankfort",     LA:"Baton Rouge",
    ME:"Augusta",      MD:"Annapolis",     MA:"Boston",        MI:"Lansing",
    MN:"St. Paul",     MS:"Jackson",       MO:"Jefferson City",MT:"Helena",
    NE:"Lincoln",      NV:"Carson City",   NH:"Concord",       NJ:"Trenton",
    NM:"Santa Fe",     NY:"Albany",        NC:"Raleigh",       ND:"Bismarck",
    OH:"Columbus",     OK:"Oklahoma City", OR:"Salem",         PA:"Harrisburg",
    RI:"Providence",   SC:"Columbia",      SD:"Pierre",        TN:"Nashville",
    TX:"Austin",       UT:"Salt Lake City",VT:"Montpelier",    VA:"Richmond",
    WA:"Olympia",      WV:"Charleston",    WI:"Madison",       WY:"Cheyenne"
  },

  /* Largest city */
  LARGEST_CITY: {
    AL:"Birmingham",   AZ:"Phoenix",       AR:"Little Rock",   CA:"Los Angeles",
    CO:"Denver",       CT:"Bridgeport",    DE:"Wilmington",    FL:"Jacksonville",
    GA:"Atlanta",      ID:"Boise",         IL:"Chicago",       IN:"Indianapolis",
    IA:"Des Moines",   KS:"Wichita",       KY:"Louisville",    LA:"New Orleans",
    ME:"Portland",     MD:"Baltimore",     MA:"Boston",        MI:"Detroit",
    MN:"Minneapolis",  MS:"Jackson",       MO:"Kansas City",   MT:"Billings",
    NE:"Omaha",        NV:"Las Vegas",     NH:"Manchester",    NJ:"Newark",
    NM:"Albuquerque",  NY:"New York City", NC:"Charlotte",     ND:"Fargo",
    OH:"Columbus",     OK:"Oklahoma City", OR:"Portland",      PA:"Philadelphia",
    RI:"Providence",   SC:"Charleston",    SD:"Sioux Falls",   TN:"Memphis",
    TX:"Houston",      UT:"Salt Lake City",VT:"Burlington",    VA:"Virginia Beach",
    WA:"Seattle",      WV:"Charleston",    WI:"Milwaukee",     WY:"Cheyenne"
  },

  /* Region */
  REGIONS: {
    AL:"South",  AZ:"West",      AR:"South",     CA:"West",
    CO:"West",   CT:"Northeast", DE:"South",     FL:"South",
    GA:"South",  ID:"West",      IL:"Midwest",   IN:"Midwest",
    IA:"Midwest",KS:"Midwest",   KY:"South",     LA:"South",
    ME:"Northeast",MD:"South",   MA:"Northeast", MI:"Midwest",
    MN:"Midwest",MS:"South",     MO:"Midwest",   MT:"West",
    NE:"Midwest",NV:"West",      NH:"Northeast", NJ:"Northeast",
    NM:"West",   NY:"Northeast", NC:"South",     ND:"Midwest",
    OH:"Midwest",OK:"South",     OR:"West",      PA:"Northeast",
    RI:"Northeast",SC:"South",   SD:"Midwest",   TN:"South",
    TX:"South",  UT:"West",      VT:"Northeast", VA:"South",
    WA:"West",   WV:"South",     WI:"Midwest",   WY:"West"
  },

  /* Year of statehood */
  STATEHOOD: {
    AL:1819,AZ:1912,AR:1836,CA:1850,CO:1876,CT:1788,DE:1787,FL:1845,
    GA:1788,ID:1890,IL:1818,IN:1816,IA:1846,KS:1861,KY:1792,LA:1812,
    ME:1820,MD:1788,MA:1788,MI:1837,MN:1858,MS:1817,MO:1821,MT:1889,
    NE:1867,NV:1864,NH:1788,NJ:1787,NM:1912,NY:1788,NC:1789,ND:1889,
    OH:1803,OK:1907,OR:1859,PA:1787,RI:1790,SC:1788,SD:1889,TN:1796,
    TX:1845,UT:1896,VT:1791,VA:1788,WA:1889,WV:1863,WI:1848,WY:1890
  },

  /* Order admitted to the union */
  ORDER: {
    DE:1,PA:2,NJ:3,GA:4,CT:5,MA:6,MD:7,SC:8,NH:9,VA:10,
    NY:11,NC:12,RI:13,VT:14,KY:15,TN:16,OH:17,LA:18,IN:19,MS:20,
    IL:21,AL:22,ME:23,MO:24,AR:25,MI:26,FL:27,TX:28,IA:29,WI:30,
    CA:31,MN:32,OR:33,KS:34,WV:35,NV:36,NE:37,CO:38,ND:39,SD:40,
    MT:41,WA:42,ID:43,WY:44,UT:45,OK:46,NM:47,AZ:48
  },

  /* [land mi², total mi², population 2023 estimate] */
  AREAS: {
    AL:[50645,52420,5108468],   AZ:[113594,113990,7431344],
    AR:[52035,53179,3067732],   CA:[155779,163696,38965193],
    CO:[103642,104094,5877610], CT:[4842,5543,3617176],
    DE:[1948,2489,1031890],     FL:[53625,65758,22610726],
    GA:[57513,59425,11029227],  ID:[82643,83569,1939033],
    IL:[55519,57914,12549689],  IN:[35826,36420,6862199],
    IA:[55857,56273,3207004],   KS:[81759,82278,2940865],
    KY:[39486,40408,4526154],   LA:[43204,52378,4573749],
    ME:[30843,35380,1395722],   MD:[9707,12407,6180253],
    MA:[7800,10554,7001399],    MI:[56804,96714,10037261],
    MN:[79627,86936,5737915],   MS:[46923,48432,2940057],
    MO:[68742,69707,6196156],   MT:[145546,147040,1122867],
    NE:[76824,77358,1978116],   NV:[109781,110572,3194176],
    NH:[8953,9349,1402054],     NJ:[7354,8723,9290841],
    NM:[121298,121590,2114371], NY:[47126,54555,19571216],
    NC:[48618,53819,10835491],  ND:[69001,70698,779261],
    OH:[40861,44826,11785935],  OK:[68595,69899,4053824],
    OR:[95988,98379,4233358],   PA:[44743,46054,13002700],
    RI:[1034,1545,1095962],     SC:[30061,32020,5282634],
    SD:[75811,77116,919318],    TN:[41235,42144,7126489],
    TX:[261232,268596,30503301],UT:[82170,84897,3417734],
    VT:[9216,9616,647464],      VA:[39490,42775,8715698],
    WA:[66456,71298,7812880],   WV:[24038,24230,1775156],
    WI:[54158,65496,5910955],   WY:[97093,97813,584057]
  },

  /* Bordering states */
  ADJACENT: {
    ME:["NH"],
    NH:["ME","VT","MA"],
    VT:["NH","NY","MA"],
    MA:["RI","CT","NY","NH","VT"],
    RI:["MA","CT"],
    CT:["RI","MA","NY"],
    NY:["NJ","PA","VT","MA","CT"],
    NJ:["NY","PA","DE","MD"],
    PA:["NY","NJ","DE","MD","WV","OH"],
    DE:["MD","PA","NJ"],
    MD:["DE","PA","WV","VA"],
    VA:["MD","WV","KY","TN","NC"],
    WV:["MD","VA","KY","OH","PA"],
    NC:["VA","TN","SC","GA"],
    SC:["GA","NC"],
    GA:["FL","AL","TN","NC","SC"],
    FL:["GA","AL"],
    AL:["FL","GA","TN","MS"],
    MS:["LA","TN","AL","AR"],
    TN:["KY","VA","NC","GA","AL","MS","AR","MO"],
    KY:["MO","IL","IN","OH","WV","VA","TN"],
    OH:["PA","WV","KY","IN","MI"],
    IN:["IL","KY","OH","MI"],
    IL:["WI","IA","MO","KY","IN"],
    WI:["MN","IA","IL","MI"],
    MI:["WI","IN","OH"],
    MN:["ND","SD","IA","WI"],
    IA:["MN","WI","IL","MO","NE","SD"],
    MO:["IA","IL","KY","TN","AR","OK","KS","NE"],
    AR:["MO","TN","MS","LA","TX","OK"],
    LA:["TX","AR","MS"],
    TX:["NM","OK","AR","LA"],
    OK:["KS","MO","AR","TX","NM","CO"],
    KS:["NE","MO","OK","CO"],
    NE:["SD","IA","MO","KS","CO","WY"],
    SD:["ND","MN","IA","NE","WY","MT"],
    ND:["MT","SD","MN"],
    MT:["ID","WY","SD","ND"],
    WY:["MT","ID","UT","CO","NE","SD"],
    CO:["WY","NE","KS","OK","NM","UT"],
    NM:["UT","CO","OK","TX","AZ"],
    UT:["ID","WY","CO","NM","AZ","NV"],
    NV:["OR","ID","UT","AZ","CA"],
    AZ:["CA","NV","UT","NM"],
    CA:["OR","NV","AZ"],
    OR:["WA","ID","NV","CA"],
    WA:["OR","ID"],
    ID:["WA","OR","MT","WY","UT","NV"]
  },

  /* Fun emoji per state */
  FLAGS: {
    AL:"🏳",AZ:"🌵",AR:"💎",CA:"🐻",CO:"⛰️",CT:"🦅",DE:"🔵",FL:"🌴",
    GA:"🍑",ID:"🥔",IL:"🌽",IN:"🏎️",IA:"🌽",KS:"🌻",KY:"🏇",LA:"🎷",
    ME:"🦞",MD:"🦀",MA:"🫐",MI:"🚗",MN:"🌲",MS:"🎸",MO:"🏛️",MT:"🦌",
    NE:"🌾",NV:"🎰",NH:"🍁",NJ:"🏙️",NM:"🌶️",NY:"🗽",NC:"🏔️",ND:"🌾",
    OH:"🏭",OK:"🤠",OR:"🌲",PA:"🔔",RI:"⚓",SC:"🌴",SD:"🗿",TN:"🎵",
    TX:"🤠",UT:"🏜️",VT:"🍁",VA:"🏛️",WA:"☕",WV:"⛏️",WI:"🧀",WY:"🦬"
  },

  /* Nicknames */
  NICKNAMES: {
    AL:"The Heart of Dixie",   AZ:"The Grand Canyon State",
    AR:"The Natural State",    CA:"The Golden State",
    CO:"The Centennial State", CT:"The Constitution State",
    DE:"The First State",      FL:"The Sunshine State",
    GA:"The Peach State",      ID:"The Gem State",
    IL:"The Prairie State",    IN:"The Hoosier State",
    IA:"The Hawkeye State",    KS:"The Sunflower State",
    KY:"The Bluegrass State",  LA:"The Pelican State",
    ME:"The Pine Tree State",  MD:"The Old Line State",
    MA:"The Bay State",        MI:"The Great Lakes State",
    MN:"The North Star State", MS:"The Magnolia State",
    MO:"The Show Me State",    MT:"The Treasure State",
    NE:"The Cornhusker State", NV:"The Silver State",
    NH:"The Granite State",    NJ:"The Garden State",
    NM:"The Land of Enchantment",NY:"The Empire State",
    NC:"The Tar Heel State",   ND:"The Peace Garden State",
    OH:"The Buckeye State",    OK:"The Sooner State",
    OR:"The Beaver State",     PA:"The Keystone State",
    RI:"The Ocean State",      SC:"The Palmetto State",
    SD:"The Mount Rushmore State",TN:"The Volunteer State",
    TX:"The Lone Star State",  UT:"The Beehive State",
    VT:"The Green Mountain State",VA:"The Old Dominion",
    WA:"The Evergreen State",  WV:"The Mountain State",
    WI:"The Badger State",     WY:"The Equality State"
  }

}; // end DATA
