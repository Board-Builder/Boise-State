/* School config — Boise State. Everything school-specific lives in this file.
   The app itself (app.js) is school-agnostic. */
const _SEED_PROSPECTS = [
  {
    "id": "bs27-01",
    "name": "Kael Snyder",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 100,
    "status": "COMMITTED",
    "school": {
      "name": "Perry",
      "address": "Gilbert, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 10/19/25 · 6-2.5 / 200 · 247 rating 87 · QB #41 · AZ #16 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/kael-snyder-46150670/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-02",
    "name": "Ryce Palepoi",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2027,
    "grade": null,
    "order": 101,
    "status": "COMMITTED",
    "school": {
      "name": "Corner Canyon",
      "address": "Draper, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/15/26 · 6-0 / 205 · 247 rating 83 · QB #177 · UT #38 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/ryce-palepoi-46162462/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-03",
    "name": "Xavier Bala",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 102,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Anthony's",
      "address": "Long Island City, NY"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-0 / 215 · 247 rating 87 · RB #68 · NY #3 · Listed: RB · 247 lists commitment: Boston College",
    "links": {
      "s247": "https://247sports.com/Player/xavier-bala-46149108/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-04",
    "name": "Caris Sela",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 103,
    "status": "ELSEWHERE",
    "school": {
      "name": "Justin Northwest",
      "address": "Justin, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/22/26 · 6-0 / 190 · 247 rating 86 · RB #95 · TX #148 · Listed: RB · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/caris-sela-46165762/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-05",
    "name": "Malachi McFarland",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 104,
    "status": "COMMITTED",
    "school": {
      "name": "Damien",
      "address": "La Verne, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/19/26 · 5-10 / 175 · 247 rating 86 · RB #99 · CA #105 · Listed: RB",
    "links": {
      "s247": "https://247sports.com/Player/malachi-mcfarland-46161889/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-06",
    "name": "Jonah Mailei",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 105,
    "status": "ELSEWHERE",
    "school": {
      "name": "Skyline",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-1 / 205 · 247 rating 86 · RB #103 · UT #19 · Listed: RB · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/jonah-mailei-46162441/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-07",
    "name": "Kamden Tillis",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 106,
    "status": "ELSEWHERE",
    "school": {
      "name": "Los Alamitos",
      "address": "Los Alamitos, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/20/26 · 5-11 / 190 · 247 rating 85 · RB #201 · CA #123 · Listed: RB · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/kamden-tillis-46156264/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-08",
    "name": "Camden Morton",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 107,
    "status": "OFFERED",
    "school": {
      "name": "Creekside",
      "address": "St. Johns, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-9 / 170 · 247 rating NA · Listed: RB",
    "links": {
      "s247": "https://247sports.com/Player/camden-morton-46146199/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-09",
    "name": "Maleek Nolley",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2027,
    "grade": null,
    "order": 108,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cajon",
      "address": "San Bernardino, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-0 / 195 · 247 rating NA · Listed: RB · 247 lists commitment: San Jose State",
    "links": {
      "s247": "https://247sports.com/Player/maleek-nolley-46164211/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-10",
    "name": "Damani Warren",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 109,
    "status": "ELSEWHERE",
    "school": {
      "name": "Arbor View",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-4 / 210 · 247 rating 89 · WR #50 · NV #3 · Listed: WR · 247 lists commitment: Texas A&M",
    "links": {
      "s247": "https://247sports.com/Player/damani-warren-46147365/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-11",
    "name": "Taurean Rawlins",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 110,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Vernon Presbyterian",
      "address": "Atlanta, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-0 / 175 · 247 rating 89 · WR #59 · GA #49 · Listed: WR · 247 lists commitment: Georgia",
    "links": {
      "s247": "https://247sports.com/Player/taurean-rawlins-46164019/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-12",
    "name": "DJ Huggins",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 111,
    "status": "ELSEWHERE",
    "school": {
      "name": "Harrison",
      "address": "Kennesaw, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/30/26 · 5-10 / 165 · 247 rating 88 · WR #86 · GA #73 · Listed: WR · 247 lists commitment: South Carolina",
    "links": {
      "s247": "https://247sports.com/Player/dj-huggins-46159642/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-13",
    "name": "Jackson Coleman",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 112,
    "status": "ELSEWHERE",
    "school": {
      "name": "Valor Christian",
      "address": "Littleton, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/4/26 · 6-3 / 185 · 247 rating 87 · WR #114 · CO #5 · Listed: WR · 247 lists commitment: Notre Dame",
    "links": {
      "s247": "https://247sports.com/Player/jackson-coleman-46156590/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-14",
    "name": "Isaac Cook",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 113,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cathedral Catholic",
      "address": "San Diego, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-1 / 195 · 247 rating 86 · WR #173 · CA #107 · Listed: WR · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/isaac-cook-46156985/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-15",
    "name": "Blake Gunter",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 114,
    "status": "ELSEWHERE",
    "school": {
      "name": "Southlake Carroll",
      "address": "Southlake, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 3/7/26 · 6-2 / 180 · 247 rating 86 · WR #175 · TX #168 · Listed: WR · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/blake-gunter-46157583/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-16",
    "name": "Jimmel Champion",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 115,
    "status": "ELSEWHERE",
    "school": {
      "name": "Huntington Beach",
      "address": "Huntington Beach, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/25/26 · 6-2 / 195 · 247 rating 86 · WR #141 · CA #110 · Listed: WR · 247 lists commitment: Wyoming",
    "links": {
      "s247": "https://247sports.com/Player/jimmel-champion-46158789/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-17",
    "name": "Dillon Sykes",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 116,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lone Peak",
      "address": "American Fork, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-5 / 190 · 247 rating 85 · WR #210 · UT #23 · Listed: WR · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/dillon-sykes-46154619/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-18",
    "name": "Malachi Garlington",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 117,
    "status": "ELSEWHERE",
    "school": {
      "name": "Adrienne C. Nelson",
      "address": "Happy Valley, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-3 / 180 · 247 rating 85 · WR #211 · OR #4 · Listed: WR · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/malachi-garlington-46161630/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-19",
    "name": "Kingston Parks",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2027,
    "grade": null,
    "order": 118,
    "status": "COMMITTED",
    "school": {
      "name": "Aledo",
      "address": "Aledo, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/6/26 · 6-3 / 180 · 247 rating 84 · WR #218 · TX #215 · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/kingston-parks-46146165/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-20",
    "name": "Kai Cypher",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2027,
    "grade": null,
    "order": 119,
    "status": "ELSEWHERE",
    "school": {
      "name": "Arbor View",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 5-11 / 165 · 247 rating NA · Listed: WR · 247 lists commitment: UNLV",
    "links": {
      "s247": "https://247sports.com/Player/kai-cypher-46164366/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-21",
    "name": "Drake Mikkelsen",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 120,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lennox",
      "address": "Lennox, SD"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/6/26 · 6-5 / 210 · 247 rating 90 · Natl #214 · TE #10 · SD #2 · Listed: TE · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/drake-mikkelsen-46158520/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-22",
    "name": "Jace Cannon",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 121,
    "status": "ELSEWHERE",
    "school": {
      "name": "Junipero Serra",
      "address": "San Mateo, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/11/26 · 6-5 / 200 · 247 rating 88 · TE #31 · CA #57 · Listed: TE · 247 lists commitment: USC",
    "links": {
      "s247": "https://247sports.com/Player/jace-cannon-46155201/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-23",
    "name": "Zac Fares",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 122,
    "status": "ELSEWHERE",
    "school": {
      "name": "Arbor View",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/11/26 · 6-5 / 220 · 247 rating 88 · TE #33 · NV #6 · Listed: TE · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/zac-fares-46149288/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-24",
    "name": "Matthew Schimberg",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 123,
    "status": "OFFERED",
    "school": {
      "name": "Grandview",
      "address": "Aurora, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-6 / 235 · 247 rating 87 · TE #43 · CO #6 · Listed: TE",
    "links": {
      "s247": "https://247sports.com/Player/matthew-schimberg-46158418/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-25",
    "name": "Talan Scott",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 124,
    "status": "ELSEWHERE",
    "school": {
      "name": "American Leadership Academy",
      "address": "Queen Creek, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-3.5 / 230 · 247 rating 87 · TE #46 · AZ #22 · Listed: TE · 247 lists commitment: Oklahoma State",
    "links": {
      "s247": "https://247sports.com/Player/talan-scott-46156636/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-26",
    "name": "Bryer Putman",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 125,
    "status": "COMMITTED",
    "school": {
      "name": "Wilton",
      "address": "Wilton, IA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 6-5 / 195 · 247 rating 87 · TE #50 · IA #13 · Listed: TE",
    "links": {
      "s247": "https://247sports.com/Player/bryer-putman-46167719/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-27",
    "name": "Landon Wolny",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2027,
    "grade": null,
    "order": 126,
    "status": "OFFERED",
    "school": {
      "name": "Community School of Naples",
      "address": "Naples, FL"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-4 / 205 · 247 rating 84 · TE #84 · FL #200 · Listed: TE",
    "links": {
      "s247": "https://247sports.com/Player/landon-wolny-46142395/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-28",
    "name": "Drew Fielder",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 127,
    "status": "ELSEWHERE",
    "school": {
      "name": "Servite",
      "address": "Anaheim, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 3/28/26 · 6-6 / 280 · 247 rating 93 · Natl #86 · OT #11 · CA #9 · Listed: OT · 247 lists commitment: USC",
    "links": {
      "s247": "https://247sports.com/Player/drew-fielder-46158447/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-29",
    "name": "Avery Michael",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 128,
    "status": "ELSEWHERE",
    "school": {
      "name": "Turlock",
      "address": "Turlock, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-6 / 290 · 247 rating 89 · OT #37 · CA #27 · Listed: OT · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/avery-michael-46157076/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-30",
    "name": "Tye Kennedy",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 129,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mountain View",
      "address": "Mesa, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/1/26 · 6-4 / 270 · 247 rating 88 · OT #49 · AZ #12 · Listed: OT · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/tye-kennedy-46162261/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-31",
    "name": "George Tyus",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 130,
    "status": "ELSEWHERE",
    "school": {
      "name": "Antioch",
      "address": "Antioch, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/22/26 · 6-6 / 285 · 247 rating 87 · OT #82 · CA #80 · Listed: OT · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/george-tyus-46158935/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-32",
    "name": "Maxton Barnes",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 131,
    "status": "COMMITTED",
    "school": {
      "name": "Columbia",
      "address": "Nampa, ID"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/20/26 · 6-5.5 / 250 · 247 rating 86 · OT #112 · ID #3 · Listed: OT",
    "links": {
      "s247": "https://247sports.com/Player/maxton-barnes-46159375/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-33",
    "name": "Laseth Bryant",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 132,
    "status": "ELSEWHERE",
    "school": {
      "name": "Las Vegas Centennial",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/22/26 · 6-4 / 270 · 247 rating 86 · OT #114 · NV #13 · Listed: OT · 247 lists commitment: UNLV",
    "links": {
      "s247": "https://247sports.com/Player/laseth-bryant-46160867/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-34",
    "name": "Clint Lundin",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 133,
    "status": "ELSEWHERE",
    "school": {
      "name": "De La Salle",
      "address": "Concord, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/1/26 · 6-6 / 295 · 247 rating 85 · OT #118 · CA #135 · Listed: OT · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/clint-lundin-46158853/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-35",
    "name": "Sire Stewart",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 134,
    "status": "ELSEWHERE",
    "school": {
      "name": "Chandler",
      "address": "Chandler, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-5 / 255 · 247 rating 85 · OT #122 · AZ #32 · Listed: OT · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/sire-stewart-46159321/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-36",
    "name": "Ben Rainwater",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 135,
    "status": "COMMITTED",
    "school": {
      "name": "Inglemoor",
      "address": "Kenmore, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/22/26 · 6-6 / 280 · 247 rating 85 · OT #126 · WA #16 · Listed: OT",
    "links": {
      "s247": "https://247sports.com/Player/ben-rainwater-46164690/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-37",
    "name": "Randolph Santiago",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2027,
    "grade": null,
    "order": 136,
    "status": "ELSEWHERE",
    "school": {
      "name": "Kailua",
      "address": "Kailua, HI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-6 / 275 · 247 rating 84 · OT #132 · HI #9 · Listed: OT · 247 lists commitment: Washington State",
    "links": {
      "s247": "https://247sports.com/Player/randolph-santiago-46163858/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-38",
    "name": "Rashaun Lavata'i",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 137,
    "status": "ELSEWHERE",
    "school": {
      "name": "Curtis",
      "address": "University Place, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/23/26 · 6-6.5 / 265 · 247 rating 87 · IOL #67 · WA #10 · Listed: IOL · 247 lists commitment: Washington State",
    "links": {
      "s247": "https://247sports.com/Player/rashaun-lavatai-46155595/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-39",
    "name": "Will Endicott",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 138,
    "status": "ELSEWHERE",
    "school": {
      "name": "Prosper",
      "address": "Prosper, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/27/26 · 6-3 / 275 · 247 rating 86 · IOL #86 · TX #166 · Listed: IOL · 247 lists commitment: South Carolina",
    "links": {
      "s247": "https://247sports.com/Player/will-endicott-46160366/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-40",
    "name": "Phoenix Pollard",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 139,
    "status": "ELSEWHERE",
    "school": {
      "name": "Coronado",
      "address": "Henderson, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-6 / 348 · 247 rating 85 · IOL #105 · NV #15 · Listed: IOL · 247 lists commitment: UNLV",
    "links": {
      "s247": "https://247sports.com/Player/phoenix-pollard-46157532/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-41",
    "name": "Gage Esty",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 140,
    "status": "ELSEWHERE",
    "school": {
      "name": "Placer",
      "address": "Auburn, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/8/26 · 6-3 / 270 · 247 rating 85 · IOL #115 · CA #145 · Listed: IOL · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/gage-esty-46164078/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-42",
    "name": "Lauifi Tosi",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 141,
    "status": "ELSEWHERE",
    "school": {
      "name": "Millennium",
      "address": "Goodyear, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/6/26 · 6-4 / 325 · 247 rating 85 · IOL #120 · AZ #34 · Listed: IOL · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/lauifi-tosi-46164842/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-43",
    "name": "Elias Fineanganofo",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 142,
    "status": "OFFERED",
    "school": {
      "name": "Bingham",
      "address": "South Jordan, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-4 / 300 · 247 rating 83 · IOL #151 · UT #37 · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/elias-fineanganofo-46156775/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-44",
    "name": "Titus Lopati",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 143,
    "status": "OFFERED",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 295 · 247 rating 83 · IOL #157 · UT #39 · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/titus-lopati-46159662/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-45",
    "name": "David Kauvaka",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 144,
    "status": "OFFERED",
    "school": {
      "name": "Mater Dei",
      "address": "Santa Ana, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-3 / 305 · 247 rating 82 · IOL #173 · CA #227 · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/david-kauvaka-46158772/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-46",
    "name": "Saik Fiataugaluia",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 145,
    "status": "OFFERED",
    "school": {
      "name": "Corona Centennial",
      "address": "Corona, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-5 / 365 · 247 rating NA · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/saik-fiataugaluia-46158589/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-47",
    "name": "Kacyn Page",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 146,
    "status": "OFFERED",
    "school": {
      "name": "Lehi",
      "address": "Lehi, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-4 / 325 · 247 rating NA · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/kacyn-page-46153453/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-48",
    "name": "Deshaun Jackson",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2027,
    "grade": null,
    "order": 147,
    "status": "ELSEWHERE",
    "school": {
      "name": "Liberty Ranch",
      "address": "Galt, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-5 / 270 · 247 rating NA · Listed: IOL · 247 lists commitment: Nevada",
    "links": {
      "s247": "https://247sports.com/Player/deshaun-jackson-46164739/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-49",
    "name": "Uhila Wolfgramm",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 148,
    "status": "ELSEWHERE",
    "school": {
      "name": "Maple Mountain",
      "address": "Spanish Fork, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/2/26 · 6-3 / 245 · 247 rating 93 · Natl #104 · Edge #13 · UT #2 · Listed: Edge · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/uhila-wolfgramm-46152619/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-50",
    "name": "Krew Jones",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 149,
    "status": "ELSEWHERE",
    "school": {
      "name": "Orem",
      "address": "Orem, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 11/29/25 · 6-4.5 / 233 · 247 rating 90 · Edge #22 · UT #3 · Listed: Edge · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/krew-jones-46143771/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-51",
    "name": "Manase Brown",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 150,
    "status": "ELSEWHERE",
    "school": {
      "name": "Corner Canyon",
      "address": "Draper, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/2/26 · 6-6 / 265 · 247 rating 89 · Edge #40 · UT #5 · Listed: Edge · 247 lists commitment: Fresno State",
    "links": {
      "s247": "https://247sports.com/Player/manase-brown-46160918/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-52",
    "name": "Godschoice Eboigbodin",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 151,
    "status": "ELSEWHERE",
    "school": {
      "name": "JSerra Catholic",
      "address": "San Juan Capistrano, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-5 / 260 · 247 rating 89 · Edge #40 · CA #31 · Listed: Edge · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/godschoice-eboigbodin-46159650/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-53",
    "name": "Beaux Sauve",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 152,
    "status": "COMMITTED",
    "school": {
      "name": "College of San Mateo",
      "address": "San Mateo, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/6/26 · 6-4 / 235 · 247 rating 89 · Natl #3 · Edge #1 · CA #2 · Listed: Edge · JUCO",
    "links": {
      "s247": "https://247sports.com/Player/beaux-sauve-46137676/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-54",
    "name": "Achilles Reyna",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 153,
    "status": "ELSEWHERE",
    "school": {
      "name": "Rainier Beach",
      "address": "Seattle, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/8/26 · 6-8 / 250 · 247 rating 88 · Edge #85 · WA #6 · Listed: Edge · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/achilles-reyna-46154487/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-55",
    "name": "Troy Mailo",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 154,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mullen",
      "address": "Denver, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-3 / 252 · 247 rating 88 · Edge #53 · CO #3 · Listed: Edge · 247 lists commitment: Stanford",
    "links": {
      "s247": "https://247sports.com/Player/troy-mailo-46147113/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-56",
    "name": "Cameron Saunders",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 155,
    "status": "ELSEWHERE",
    "school": {
      "name": "Valley Christian",
      "address": "San Jose, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/9/26 · 6-4.5 / 245 · 247 rating 88 · Edge #92 · CA #58 · Listed: Edge · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/cameron-saunders-46159373/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-57",
    "name": "Josh Christensen",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 156,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lake Oswego",
      "address": "Lake Oswego, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-6 / 250 · 247 rating 88 · Edge #63 · OR #2 · Listed: Edge · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/josh-christensen-46155573/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-58",
    "name": "Fui Vakapuna",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 157,
    "status": "ELSEWHERE",
    "school": {
      "name": "Timpview",
      "address": "Provo, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-1.5 / 225 · 247 rating 87 · Edge #64 · UT #9 · Listed: Edge · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/fui-vakapuna-46162507/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-59",
    "name": "Lawrence Kanneh",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 158,
    "status": "ELSEWHERE",
    "school": {
      "name": "Whitehall Yearling",
      "address": "Columbus, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-3 / 220 · 247 rating 87 · Edge #67 · OH #35 · Listed: Edge · 247 lists commitment: Michigan State",
    "links": {
      "s247": "https://247sports.com/Player/lawrence-kanneh-46166428/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-60",
    "name": "Monson Tukuafu",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 159,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bingham",
      "address": "South Jordan, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-3 / 230 · 247 rating 87 · Edge #70 · UT #10 · Listed: Edge · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/monson-tukuafu-46161675/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-61",
    "name": "Roy Price",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 160,
    "status": "ELSEWHERE",
    "school": {
      "name": "Newark",
      "address": "Newark, OH"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/2/26 · 6-3 / 205 · 247 rating 87 · Edge #71 · OH #36 · Listed: Edge · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/roy-price-46155058/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-62",
    "name": "Alexander Coey",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 161,
    "status": "OFFERED",
    "school": {
      "name": "Conroe",
      "address": "Conroe, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-4 / 235 · 247 rating 87 · Edge #78 · TX #117 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/alexander-coey-46155780/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-63",
    "name": "Jackson West",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 162,
    "status": "ELSEWHERE",
    "school": {
      "name": "Corner Canyon",
      "address": "Draper, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-4 / 250 · 247 rating 87 · Edge #81 · UT #14 · Listed: Edge · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/jackson-west-46160922/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-64",
    "name": "Parker Bagley",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 163,
    "status": "COMMITTED",
    "school": {
      "name": "Lewiston",
      "address": "Lewiston, ID"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 6-4 / 265 · 247 rating 87 · Edge #88 · ID #1 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/parker-bagley-46162764/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-65",
    "name": "Grayson Kazmouz",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 164,
    "status": "COMMITTED",
    "school": {
      "name": "Laguna Beach",
      "address": "Laguna Beach, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/30/26 · 6-5 / 210 · 247 rating 86 · Edge #97 · CA #104 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/grayson-kazmouz-46165299/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-66",
    "name": "Ma'atoe Moe",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 165,
    "status": "ELSEWHERE",
    "school": {
      "name": "Timpview",
      "address": "Provo, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 6-3 / 240 · 247 rating 86 · Edge #106 · UT #18 · Listed: Edge · 247 lists commitment: Nebraska",
    "links": {
      "s247": "https://247sports.com/Player/maatoe-moe-46163147/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-67",
    "name": "Jag Ioane",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 166,
    "status": "ELSEWHERE",
    "school": {
      "name": "Orem",
      "address": "Orem, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/18/26 · 6-2.5 / 185 · 247 rating 85 · Edge #112 · UT #21 · Listed: Edge · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/jag-ioane-46152618/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-68",
    "name": "Sonasi Maka II",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 167,
    "status": "ELSEWHERE",
    "school": {
      "name": "Deer Valley",
      "address": "Antioch, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-2.5 / 245 · 247 rating 85 · Edge #118 · CA #136 · Listed: Edge · 247 lists commitment: Washington State",
    "links": {
      "s247": "https://247sports.com/Player/sonasi-maka-ii-46158742/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-69",
    "name": "Dieter Lotulelei",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 168,
    "status": "ELSEWHERE",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-3 / 225 · 247 rating 84 · Edge #132 · UT #30 · Listed: Edge · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/dieter-lotulelei-46157221/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-70",
    "name": "Kemper Castro",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 169,
    "status": "ELSEWHERE",
    "school": {
      "name": "Herriman",
      "address": "Herriman, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/2/26 · 6-4 / 235 · 247 rating 84 · Edge #133 · UT #31 · Listed: Edge · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/kemper-castro-46159261/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-71",
    "name": "Tautai Meredith",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 170,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lehi",
      "address": "Lehi, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-3 / 260 · 247 rating 84 · Edge #203 · UT #32 · Listed: Edge · 247 lists commitment: Washington State",
    "links": {
      "s247": "https://247sports.com/Player/tautai-meredith-46154796/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-72",
    "name": "Colton Richter",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 171,
    "status": "ELSEWHERE",
    "school": {
      "name": "Shadow Ridge",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-3 / 235 · 247 rating 83 · Edge #146 · NV #20 · Listed: Edge · 247 lists commitment: Washington State",
    "links": {
      "s247": "https://247sports.com/Player/colton-richter-46159742/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-73",
    "name": "Drenden Knaevelsrud",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 172,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mount Si",
      "address": "Snoqualmie, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/5/26 · 6-4 / 215 · 247 rating 83 · Edge #184 · WA #23 · Listed: Edge · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/drenden-knaevelsrud-46157384/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-74",
    "name": "Finn Walker",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 173,
    "status": "ELSEWHERE",
    "school": {
      "name": "Conroe Oak Ridge",
      "address": "Conroe, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/24/26 · 6-6 / 245 · 247 rating 88 · DL #88 · TX #85 · Listed: DL · 247 lists commitment: Kansas State",
    "links": {
      "s247": "https://247sports.com/Player/finn-walker-46159175/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-75",
    "name": "Ahzan Bacote",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 174,
    "status": "ELSEWHERE",
    "school": {
      "name": "Cornerstone Christian",
      "address": "San Antonio, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/2/26 · 6-2 / 260 · 247 rating 87 · DL #109 · TX #113 · Listed: DL · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/ahzan-bacote-46161695/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-76",
    "name": "Maa'imoa Havili",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 175,
    "status": "ELSEWHERE",
    "school": {
      "name": "Granger",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/20/26 · 6-3 / 290 · 247 rating 87 · DL #118 · UT #11 · Listed: DL · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/maaimoa-havili-46167045/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-77",
    "name": "Aniti Paiva",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 176,
    "status": "ELSEWHERE",
    "school": {
      "name": "Skyline",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/22/26 · 6-2 / 315 · 247 rating 87 · DL #120 · UT #13 · Listed: DL · 247 lists commitment: Penn State",
    "links": {
      "s247": "https://247sports.com/Player/aniti-paiva-46161730/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-78",
    "name": "Lemani Fehoko",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 177,
    "status": "ELSEWHERE",
    "school": {
      "name": "Junipero Serra",
      "address": "San Mateo, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-1 / 275 · 247 rating 86 · DL #122 · CA #81 · Listed: DL · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/lemani-fehoko-46140961/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-79",
    "name": "Kekoa Peko",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 178,
    "status": "COMMITTED",
    "school": {
      "name": "St. John Bosco",
      "address": "Bellflower, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/31/26 · 6-2 / 280 · 247 rating 86 · DL #129 · CA #86 · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/kekoa-peko-46142061/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-80",
    "name": "Charles Nance",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 179,
    "status": "ELSEWHERE",
    "school": {
      "name": "Dooly County",
      "address": "Vienna, GA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/20/26 · 6-2 / 280 · 247 rating 86 · DL #157 · GA #154 · Listed: DL · 247 lists commitment: Western Michigan",
    "links": {
      "s247": "https://247sports.com/Player/charles-nance-46161500/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-81",
    "name": "Magic Haynes",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 180,
    "status": "ELSEWHERE",
    "school": {
      "name": "Compton Centennial",
      "address": "Compton, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-5 / 270 · 247 rating 86 · DL #163 · CA #114 · Listed: DL · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/magic-haynes-46167306/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-82",
    "name": "Hunter Eligon",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2027,
    "grade": null,
    "order": 181,
    "status": "ELSEWHERE",
    "school": {
      "name": "Anaheim Western",
      "address": "Anaheim, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-3 / 285 · 247 rating 84 · DL #198 · CA #168 · Listed: DL · 247 lists commitment: Vanderbilt",
    "links": {
      "s247": "https://247sports.com/Player/hunter-eligon-46158103/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-83",
    "name": "Ilivai Taiese",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 182,
    "status": "ELSEWHERE",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 8/5/26 · 6-3 / 265 · 247 rating NA · Listed: DL · 247 lists commitment: San Jose State",
    "links": {
      "s247": "https://247sports.com/Player/ilivai-taiese-46161022/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-84",
    "name": "Augustine Irek",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2027,
    "grade": null,
    "order": 183,
    "status": "OFFERED",
    "school": {
      "name": "NFL Academy",
      "address": "London, EN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-7 / 260 · 247 rating NA · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/augustine-irek-46161970/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-85",
    "name": "Toa Satele",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 184,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mililani",
      "address": "Mililani, HI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/3/26 · 6-3 / 200 · 247 rating 93 · Natl #84 · LB #6 · HI #1 · Listed: LB · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/toa-satele-46145646/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-86",
    "name": "Sam Ngata",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 185,
    "status": "ELSEWHERE",
    "school": {
      "name": "Olympus",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 1/24/26 · 6-3.5 / 215 · 247 rating 87 · LB #84 · UT #12 · Listed: LB · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/sam-ngata-46157095/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-87",
    "name": "Jeremy Davis",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 186,
    "status": "ELSEWHERE",
    "school": {
      "name": "Helix",
      "address": "La Mesa, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/29/26 · 6-1 / 205 · 247 rating 86 · LB #103 · CA #96 · Listed: LB · 247 lists commitment: Fresno State",
    "links": {
      "s247": "https://247sports.com/Player/jeremy-davis-46164728/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-88",
    "name": "Linkin Apana",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 187,
    "status": "ELSEWHERE",
    "school": {
      "name": "Kamehameha Kapalama",
      "address": "Honolulu, HI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-1 / 207 · 247 rating 86 · LB #107 · HI #4 · Listed: LB · 247 lists commitment: TCU",
    "links": {
      "s247": "https://247sports.com/Player/linkin-apana-46157846/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-89",
    "name": "Broncs Baker",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 188,
    "status": "ELSEWHERE",
    "school": {
      "name": "Stansbury",
      "address": "Tooele, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/10/26 · 6-1 / 215 · 247 rating 85 · LB #135 · UT #22 · Listed: LB · 247 lists commitment: West Virginia",
    "links": {
      "s247": "https://247sports.com/Player/broncs-baker-46155019/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-90",
    "name": "Kawai Chamberlin",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 189,
    "status": "ELSEWHERE",
    "school": {
      "name": "Willamette",
      "address": "Eugene, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/16/26 · 6-2 / 217 · 247 rating 84 · LB #164 · OR #8 · Listed: LB · 247 lists commitment: Oregon State",
    "links": {
      "s247": "https://247sports.com/Player/kawai-chamberlin-46150513/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-91",
    "name": "Almasi Glenn",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 190,
    "status": "ELSEWHERE",
    "school": {
      "name": "Williams Field",
      "address": "Gilbert, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/17/26 · 6-2.5 / 195 · 247 rating 84 · LB #168 · AZ #44 · Listed: LB · 247 lists commitment: Yale",
    "links": {
      "s247": "https://247sports.com/Player/almasi-glenn-46159900/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-92",
    "name": "Philip Wilson III",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 191,
    "status": "OFFERED",
    "school": {
      "name": "Oxnard Pacifica",
      "address": "Oxnard, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-0 / 205 · 247 rating 83 · LB #175 · CA #196 · Listed: LB",
    "links": {
      "s247": "https://247sports.com/Player/philip-wilson-iii-46151737/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-93",
    "name": "TJ Alualu",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 192,
    "status": "OFFERED",
    "school": {
      "name": "St. Louis",
      "address": "Honolulu, HI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-11 / 200 · 247 rating 83 · LB #178 · HI #13 · Listed: LB",
    "links": {
      "s247": "https://247sports.com/Player/tj-alualu-46151275/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-94",
    "name": "Hayden Stepp",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 193,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bishop Gorman",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/1/26 · 6-3.5 / 185 · 247 rating 94 · Natl #61 · CB #5 · NV #1 · Listed: CB · 247 lists commitment: Oregon",
    "links": {
      "s247": "https://247sports.com/Player/hayden-stepp-46147446/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-95",
    "name": "Kamil Loud",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 194,
    "status": "ELSEWHERE",
    "school": {
      "name": "Bishop Gorman",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-0.5 / 170 · 247 rating 90 · Natl #211 · CB #25 · NV #2 · Listed: CB · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/kamil-loud-46153753/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-96",
    "name": "Evan Mack",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 195,
    "status": "ELSEWHERE",
    "school": {
      "name": "Crean Lutheran",
      "address": "Irvine, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/2/26 · 6-3 / 175 · 247 rating 88 · CB #49 · CA #34 · Listed: CB · 247 lists commitment: Arizona",
    "links": {
      "s247": "https://247sports.com/Player/evan-mack-46154204/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-97",
    "name": "Jernaro Gilford Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 196,
    "status": "OFFERED",
    "school": {
      "name": "Saline",
      "address": "Saline, MI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-1 / 170 · 247 rating 88 · CB #53 · MI #11 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/jernaro-gilford-jr-46147364/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-98",
    "name": "John Catlin IV",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 197,
    "status": "ELSEWHERE",
    "school": {
      "name": "Denton Ryan",
      "address": "Denton, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/13/26 · 5-11 / 167 · 247 rating 87 · CB #70 · TX #93 · Listed: CB · 247 lists commitment: Arkansas",
    "links": {
      "s247": "https://247sports.com/Player/john-catlin-iv-46161841/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-99",
    "name": "Dylin Bruce",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 198,
    "status": "ELSEWHERE",
    "school": {
      "name": "Huntington Beach",
      "address": "Huntington Beach, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 6-0 / 170 · 247 rating 87 · CB #87 · CA #77 · Listed: CB · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/dylin-bruce-46155369/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-100",
    "name": "Nathaniel Mensah",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 199,
    "status": "ELSEWHERE",
    "school": {
      "name": "Rancho Cucamonga",
      "address": "Rancho Cucamonga, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-0.5 / 160 · 247 rating 86 · CB #110 · CA #89 · Listed: CB · 247 lists commitment: Oregon State",
    "links": {
      "s247": "https://247sports.com/Player/nathaniel-mensah-46154894/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-101",
    "name": "Johnny McNeil",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 200,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Pius X-St. Matthias Academy",
      "address": "Downey, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-0 / 160 · 247 rating 86 · CB #119 · CA #100 · Listed: CB · 247 lists commitment: Oregon State",
    "links": {
      "s247": "https://247sports.com/Player/johnny-mcneil-46158457/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-102",
    "name": "Hassan Smith",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 201,
    "status": "COMMITTED",
    "school": {
      "name": "Desert Mountain",
      "address": "Scottsdale, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/7/26 · 5-11 / 165 · 247 rating 86 · CB #122 · AZ #25 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/hassan-smith-46162805/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-103",
    "name": "Noah Clark",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2027,
    "grade": null,
    "order": 202,
    "status": "ELSEWHERE",
    "school": {
      "name": "Inglewood",
      "address": "Inglewood, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/10/26 · 5-11.5 / 175 · 247 rating 83 · CB #160 · CA #204 · Listed: CB · 247 lists commitment: Washington State",
    "links": {
      "s247": "https://247sports.com/Player/noah-clark-46157739/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-104",
    "name": "Pole Moala",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 203,
    "status": "ELSEWHERE",
    "school": {
      "name": "Junipero Serra",
      "address": "Gardena, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 4/12/26 · 6-0 / 185 · 247 rating 90 · Natl #171 · S #13 · CA #15 · Listed: S · 247 lists commitment: UCLA",
    "links": {
      "s247": "https://247sports.com/Player/pole-moala-46154623/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-105",
    "name": "Jaden Walk-Green",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 204,
    "status": "ELSEWHERE",
    "school": {
      "name": "Corona Centennial",
      "address": "Corona, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/20/26 · 5-11 / 188 · 247 rating 88 · S #54 · CA #46 · Listed: S · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/jaden-walk-green-46154955/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-106",
    "name": "Kaleb Hall",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 205,
    "status": "ELSEWHERE",
    "school": {
      "name": "Syracuse",
      "address": "Syracuse, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-2 / 185 · 247 rating 86 · S #118 · UT #16 · Listed: S · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/kaleb-hall-46164678/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-107",
    "name": "Jayden Bradley",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 206,
    "status": "COMMITTED",
    "school": {
      "name": "Eaglecrest",
      "address": "Aurora, CO"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/22/26 · 6-1 / 170 · 247 rating 86 · S #142 · CO #9 · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/jayden-bradley-46167312/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-108",
    "name": "Caysen Badawi",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 207,
    "status": "ELSEWHERE",
    "school": {
      "name": "Valencia",
      "address": "Valencia, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/27/26 · 6-1 / 165 · 247 rating 86 · S #144 · CA #117 · Listed: S · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/caysen-badawi-46165006/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-109",
    "name": "Kye Cooper",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 208,
    "status": "ELSEWHERE",
    "school": {
      "name": "San Diego",
      "address": "San Diego, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/4/26 · 6-1 / 180 · 247 rating 85 · S #160 · CA #126 · Listed: S · 247 lists commitment: San Diego State",
    "links": {
      "s247": "https://247sports.com/Player/kye-cooper-46151871/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-110",
    "name": "Brett Smith",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 209,
    "status": "ELSEWHERE",
    "school": {
      "name": "Corona Centennial",
      "address": "Corona, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-1 / 170 · 247 rating 84 · S #182 · CA #166 · Listed: S · 247 lists commitment: UNLV",
    "links": {
      "s247": "https://247sports.com/Player/brett-smith-46154957/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-111",
    "name": "Grant Moser",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 210,
    "status": "ELSEWHERE",
    "school": {
      "name": "Buchanan",
      "address": "Clovis, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/14/26 · 6-4 / 200 · 247 rating 84 · S #183 · CA #179 · Listed: S · 247 lists commitment: Fresno State",
    "links": {
      "s247": "https://247sports.com/Player/grant-moser-46159612/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-112",
    "name": "Uatesoni Pifeleti",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 211,
    "status": "OFFERED",
    "school": {
      "name": "St. Francis",
      "address": "Mountain View, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-3 / 190 · 247 rating NA · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/uatesoni-pifeleti-46161714/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-113",
    "name": "George Richards",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 212,
    "status": "ELSEWHERE",
    "school": {
      "name": "St. Thomas More",
      "address": "Oakdale, CT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/21/26 · 6-1 / 205 · 247 rating NA · Listed: S · 247 lists commitment: James Madison",
    "links": {
      "s247": "https://247sports.com/Player/george-richards-46167105/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-114",
    "name": "Bode Sparrow",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 213,
    "status": "ELSEWHERE",
    "school": {
      "name": "Davis",
      "address": "Kaysville, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/26/26 · 6-2 / 195 · 247 rating 93 · Natl #82 · ATH #8 · UT #1 · Listed: ATH · 247 lists commitment: Oklahoma",
    "links": {
      "s247": "https://247sports.com/Player/bode-sparrow-46143770/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-115",
    "name": "Jaxton Itaaehau",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 214,
    "status": "ELSEWHERE",
    "school": {
      "name": "Davis",
      "address": "Kaysville, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 5-11 / 185 · 247 rating 90 · ATH #18 · UT #4 · Listed: ATH · 247 lists commitment: Utah",
    "links": {
      "s247": "https://247sports.com/Player/jaxton-itaaehau-46160892/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-116",
    "name": "Maurice Williams",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 215,
    "status": "ELSEWHERE",
    "school": {
      "name": "Timberline",
      "address": "Lacey, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 12/24/25 · 6-1 / 180 · 247 rating 88 · ATH #60 · WA #7 · Listed: ATH · 247 lists commitment: Washington",
    "links": {
      "s247": "https://247sports.com/Player/maurice-williams-46142087/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-117",
    "name": "Maxwell Miles",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 216,
    "status": "ELSEWHERE",
    "school": {
      "name": "Las Vegas Centennial",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 5/31/26 · 6-2 / 190 · 247 rating 88 · ATH #70 · NV #7 · Listed: ATH · 247 lists commitment: Minnesota",
    "links": {
      "s247": "https://247sports.com/Player/maxwell-miles-46149471/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-118",
    "name": "J'Isaiah Mitchell",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 217,
    "status": "COMMITTED",
    "school": {
      "name": "Puyallup",
      "address": "Puyallup, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/2/26 · 6-5 / 180 · 247 rating 87 · ATH #75 · WA #9 · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/jisaiah-mitchell-46147310/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-119",
    "name": "Peyton Higginson",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 218,
    "status": "ELSEWHERE",
    "school": {
      "name": "Salem Hills",
      "address": "Salem, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/6/26 · 6-3 / 181 · 247 rating 86 · ATH #90 · UT #15 · Listed: ATH · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/peyton-higginson-46149856/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-120",
    "name": "Jaxson Rex",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 219,
    "status": "ELSEWHERE",
    "school": {
      "name": "San Clemente",
      "address": "San Clemente, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/18/26 · 6-1 / 190 · 247 rating 85 · ATH #115 · CA #143 · Listed: ATH · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/jaxson-rex-46158844/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-121",
    "name": "Jaylen Fitzgerald",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 220,
    "status": "ELSEWHERE",
    "school": {
      "name": "Shakopee",
      "address": "Shakopee, MN"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/19/26 · 6-3 / 215 · 247 rating 85 · ATH #82 · MN #13 · Listed: ATH · 247 lists commitment: UNLV",
    "links": {
      "s247": "https://247sports.com/Player/jaylen-fitzgerald-46155725/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-122",
    "name": "Tytan DeJong",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 221,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mountain Ridge",
      "address": "Herriman, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 3/30/26 · 6-2 / 215 · 247 rating 84 · ATH #126 · UT #29 · Listed: ATH · 247 lists commitment: BYU",
    "links": {
      "s247": "https://247sports.com/Player/tytan-dejong-46147761/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-123",
    "name": "Jeovanni Henley",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 222,
    "status": "ELSEWHERE",
    "school": {
      "name": "Junipero Serra",
      "address": "San Mateo, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-0 / 165 · 247 rating 84 · ATH #130 · CA #162 · Listed: ATH · 247 lists commitment: California",
    "links": {
      "s247": "https://247sports.com/Player/jeovanni-henley-46148322/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-124",
    "name": "Kingston Anetema",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 223,
    "status": "ELSEWHERE",
    "school": {
      "name": "Mesa",
      "address": "Mesa, AZ"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/13/26 · 6-1 / 175 · 247 rating 84 · ATH #135 · AZ #45 · Listed: ATH · 247 lists commitment: Arizona State",
    "links": {
      "s247": "https://247sports.com/Player/kingston-anetema-46147996/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-125",
    "name": "Houston Lillard Jr.",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 224,
    "status": "OFFERED",
    "school": {
      "name": "Tualatin",
      "address": "Tualatin, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-9 / 155 · 247 rating NA · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/houston-lillard-jr-46164729/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-126",
    "name": "Mose Kalepo",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2027,
    "grade": null,
    "order": 225,
    "status": "OFFERED",
    "school": {
      "name": "Bellevue",
      "address": "Bellevue, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 215 · 247 rating NA · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/mose-kalepo-46164043/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-127",
    "name": "Elijah Carney",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 226,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lincoln",
      "address": "Tacoma, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 7/2/26 · 6-1.5 / 175 · 247 rating NA · Listed: ATH · 247 lists commitment: Eastern Washington",
    "links": {
      "s247": "https://247sports.com/Player/elijah-carney-46149890/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-128",
    "name": "Ben Wiepert",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 227,
    "status": "ELSEWHERE",
    "school": {
      "name": "Wilsonville",
      "address": "Wilsonville, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/23/26 · 6-2 / 205 · 247 rating NA · Listed: ATH · 247 lists commitment: New Mexico",
    "links": {
      "s247": "https://247sports.com/Player/ben-wiepert-46164484/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-129",
    "name": "Kolton Prox",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 228,
    "status": "ELSEWHERE",
    "school": {
      "name": "Grand Saline",
      "address": "Grand Saline, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/12/26 · 6-3 / 170 · 247 rating NA · Listed: ATH · 247 lists commitment: North Texas",
    "links": {
      "s247": "https://247sports.com/Player/kolton-prox-46156714/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-130",
    "name": "Peyton Shaw",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2027,
    "grade": null,
    "order": 229,
    "status": "OFFERED",
    "school": {
      "name": "Mansfield",
      "address": "Mansfield, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-10 / 160 · 247 rating NA · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/peyton-shaw-46157578/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs27-131",
    "name": "Jackson Spitz",
    "jersey": "—",
    "positionGroup": "P",
    "classYear": 2027,
    "grade": null,
    "order": 230,
    "status": "ELSEWHERE",
    "school": {
      "name": "Lewis & Clark",
      "address": "Spokane, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 6/26/26 · 6-1 / 215 · 247 rating NA · Listed: P · 247 lists commitment: Montana",
    "links": {
      "s247": "https://247sports.com/Player/jackson-spitz-46168350/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-01",
    "name": "Hunter Fujikawa",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 300,
    "status": "OFFERED",
    "school": {
      "name": "Mililani",
      "address": "Mililani, HI"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 200 · 247 rating 90 · Natl #234 · QB #13 · HI #2 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/hunter-fujikawa-46151384/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-02",
    "name": "Zeke Thomas",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 301,
    "status": "COMMITTED",
    "school": {
      "name": "Willamette",
      "address": "Eugene, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "Committed 3/16/26 · 6-0.5 / 185 · 247 rating 86 · QB #47 · OR #3 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/zeke-thomas-46151666/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-03",
    "name": "Brodie Scheinberg",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 302,
    "status": "OFFERED",
    "school": {
      "name": "Davis",
      "address": "Kaysville, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-5 / 195 · 247 rating 86 · QB #48 · UT #13 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/brodie-scheinberg-46151030/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-04",
    "name": "Ace Amina",
    "jersey": "—",
    "positionGroup": "QB",
    "classYear": 2028,
    "grade": null,
    "order": 303,
    "status": "OFFERED",
    "school": {
      "name": "Bishop Gorman",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-0 / 180 · 247 rating 85 · QB #63 · NV #8 · Listed: QB",
    "links": {
      "s247": "https://247sports.com/Player/ace-amina-46150781/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-05",
    "name": "Micah Rhodes",
    "jersey": "—",
    "positionGroup": "RB",
    "classYear": 2028,
    "grade": null,
    "order": 304,
    "status": "OFFERED",
    "school": {
      "name": "Klein Oak",
      "address": "Spring, TX"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-9.5 / 180 · 247 rating 90 · Natl #135 · RB #8 · TX #18 · Listed: RB",
    "links": {
      "s247": "https://247sports.com/Player/micah-rhodes-46147811/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-06",
    "name": "Quincey Clay",
    "jersey": "—",
    "positionGroup": "WR_SLOT",
    "classYear": 2028,
    "grade": null,
    "order": 305,
    "status": "OFFERED",
    "school": {
      "name": "Capital",
      "address": "Boise, ID"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-11 / 170 · 247 rating 90 · Natl #152 · WR #22 · ID #1 · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/quincey-clay-46162489/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-07",
    "name": "Eli Mortensen",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 306,
    "status": "OFFERED",
    "school": {
      "name": "Skyridge",
      "address": "Lehi, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-1 / 180 · 247 rating 88 · WR #42 · UT #8 · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/eli-mortensen-46160974/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-08",
    "name": "Monson Vaenuku",
    "jersey": "—",
    "positionGroup": "WR_OUT",
    "classYear": 2028,
    "grade": null,
    "order": 307,
    "status": "OFFERED",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-3 / 200 · 247 rating NA · Listed: WR",
    "links": {
      "s247": "https://247sports.com/Player/monson-vaenuku-46157180/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-09",
    "name": "Presley DeLance",
    "jersey": "—",
    "positionGroup": "TE",
    "classYear": 2028,
    "grade": null,
    "order": 308,
    "status": "OFFERED",
    "school": {
      "name": "Lake Oswego",
      "address": "Lake Oswego, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-4 / 230 · 247 rating 90 · Natl #85 · TE #4 · OR #1 · Listed: TE",
    "links": {
      "s247": "https://247sports.com/Player/presley-delance-46167008/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-10",
    "name": "Samiu Taukiuvea",
    "jersey": "—",
    "positionGroup": "OL_SWING",
    "classYear": 2028,
    "grade": null,
    "order": 309,
    "status": "OFFERED",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-5 / 270 · 247 rating 90 · Natl #112 · OT #14 · UT #5 · Listed: OT",
    "links": {
      "s247": "https://247sports.com/Player/samiu-taukiuvea-46156375/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-11",
    "name": "Kaisen Garrett",
    "jersey": "—",
    "positionGroup": "OL_INT",
    "classYear": 2028,
    "grade": null,
    "order": 310,
    "status": "OFFERED",
    "school": {
      "name": "Las Vegas Centennial",
      "address": "Las Vegas, NV"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-4 / 260 · 247 rating NA · Listed: IOL",
    "links": {
      "s247": "https://247sports.com/Player/kaisen-garrett-46164153/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-12",
    "name": "Major Stokes",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 311,
    "status": "OFFERED",
    "school": {
      "name": "Orem",
      "address": "Orem, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-5.5 / 240 · 247 rating 91 · Natl #32 · Edge #8 · UT #3 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/major-stokes-46151043/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-13",
    "name": "Takeshi Savery",
    "jersey": "—",
    "positionGroup": "EDGE",
    "classYear": 2028,
    "grade": null,
    "order": 312,
    "status": "OFFERED",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 245 · 247 rating 87 · Edge #49 · UT #12 · Listed: Edge",
    "links": {
      "s247": "https://247sports.com/Player/takeshi-savery-46157220/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-14",
    "name": "Samuel Chien-Tauvao",
    "jersey": "—",
    "positionGroup": "DT",
    "classYear": 2028,
    "grade": null,
    "order": 313,
    "status": "OFFERED",
    "school": {
      "name": "West",
      "address": "Salt Lake City, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-0.5 / 290 · 247 rating 88 · DL #51 · UT #9 · Listed: DL",
    "links": {
      "s247": "https://247sports.com/Player/samuel-chien-tauvao-46157718/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-15",
    "name": "Julian Bruno",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 314,
    "status": "OFFERED",
    "school": {
      "name": "Grant Union",
      "address": "Sacramento, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-1 / 220 · 247 rating 88 · LB #30 · CA #37 · Listed: LB",
    "links": {
      "s247": "https://247sports.com/Player/julian-bruno-46156479/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-16",
    "name": "Jordan Slye Jr.",
    "jersey": "—",
    "positionGroup": "CB",
    "classYear": 2028,
    "grade": null,
    "order": 315,
    "status": "OFFERED",
    "school": {
      "name": "Bishop Mora Salesian",
      "address": "Los Angeles, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-1 / 170 · 247 rating 87 · CB #55 · CA #42 · Listed: CB",
    "links": {
      "s247": "https://247sports.com/Player/jordan-slye-jr-46153205/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-17",
    "name": "Markel Newell",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 316,
    "status": "OFFERED",
    "school": {
      "name": "Puyallup",
      "address": "Puyallup, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "5-9.5 / 190 · 247 rating 86 · S #46 · WA #9 · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/markel-newell-46153829/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-18",
    "name": "Jayden Cumbee",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 317,
    "status": "OFFERED",
    "school": {
      "name": "Bingham",
      "address": "South Jordan, UT"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 185 · 247 rating 86 · S #51 · UT #14 · Listed: S",
    "links": {
      "s247": "https://247sports.com/Player/jayden-cumbee-46159597/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-19",
    "name": "Gaige Weddle",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 318,
    "status": "OFFERED",
    "school": {
      "name": "Rancho Bernardo",
      "address": "San Diego, CA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 175 · 247 rating 90 · Natl #189 · ATH #10 · CA #14 · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/gaige-weddle-46153692/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-20",
    "name": "Kaicen Carter",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 319,
    "status": "OFFERED",
    "school": {
      "name": "Federal Way",
      "address": "Federal Way, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-2 / 220 · 247 rating 88 · ATH #33 · WA #6 · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/kaicen-carter-46155175/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-21",
    "name": "RJ Ward",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 320,
    "status": "OFFERED",
    "school": {
      "name": "Bellevue",
      "address": "Bellevue, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-0.5 / 200 · 247 rating 86 · ATH #56 · WA #10 · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/rj-ward-46155902/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-22",
    "name": "Leofatu Filipe",
    "jersey": "—",
    "positionGroup": "ILB",
    "classYear": 2028,
    "grade": null,
    "order": 321,
    "status": "OFFERED",
    "school": {
      "name": "Thurston",
      "address": "Springfield, OR"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-5 / 230 · 247 rating 86 · ATH #63 · OR #5 · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/leofatu-filipe-46168360/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  },
  {
    "id": "bs28-23",
    "name": "Amosa Masaniai",
    "jersey": "—",
    "positionGroup": "SAF",
    "classYear": 2028,
    "grade": null,
    "order": 322,
    "status": "OFFERED",
    "school": {
      "name": "Emerald Ridge",
      "address": "Puyallup, WA"
    },
    "birthday": "",
    "cell": "",
    "homeAddress": "",
    "parents": [],
    "callLog": [],
    "miscNotes": "6-0 / 200 · 247 rating NA · Listed: ATH",
    "links": {
      "s247": "https://247sports.com/Player/amosa-masaniai-46158501/"
    },
    "updatedBy": "247 import",
    "updatedAt": "Aug 21, 2026"
  }
];

const _STAFF_GROUPS = [
  {
    label: "Coaches",
    members: [
      "Danielson HC", "Collins AHC/STC/LB", "Chinander DC", "Potter OC",
      "Brown Co-DC", "Hill Co-OC", "Frazier Edge", "Keane OL", "Whitted WR",
      "Killings CB", "Maile DL", "Montgomery RB", "Udy TE",
    ],
  },
  {
    label: "Assistants & Analysts",
    members: [
      "McMahen Asst DB", "Pope Asst WR", "Satterlee Asst LB", "Washington Asst DL",
      "Koetter Sr Analyst", "Strausser Off Analyst", "McPeek ST Analyst",
      "Zamberlin Off QC", "Holmes Off QC",
    ],
  },
  {
    label: "Personnel & Operations",
    members: [
      "Brandon Jones GM", "Kenny Macklin FB Ops", "Shauny Fisk Dir Recruiting",
      "Landan Yount Player Personnel", "Charlotte Siegel Chief of Staff",
    ],
  },
  {
    label: "Performance & Medical",
    members: [
      "Benjamin Hilgart S&C", "Marques White S&C", "Collin McKelvey S&C",
      "Josh Price S&C", "Tom Keay S&C",
      "Jeremy Busch AT", "McKenna Drevno AT", "Brandon Voigt AT", "Michael Fanning AT",
    ],
  },
];

window.BOARD_CONFIG = {
  school: {
    id: "boise-state",
    name: "Boise State Football",
    short: "BOISE STATE",
    primary: "#0033A0", // Bronco blue
    accent: "#D64309",  // Bronco orange
  },
  /* app logo mark on the board (ESPN CDN id lives in the template) */
  logoSchool: "Boise State",
  /* HS Prospect Rankings — the program's 7-tier grading scale (board lanes,
     profile dropdown, feed chips). Colors match the printed scale sheet.
       RARE               Premier/Elite — impact starter 3-4 yrs, win FOR player
       ALL-LEAGUE         Difference maker — build around, win WITH player
       MULTI-YEAR STARTER Functional starter w/ limitations — Year 2 contributor
       STARTER            Solid backup — projected starter in career, Year 3
       PROGRAM            Contributor — high-ceiling project / ST depth, Year 4
       NOT GOOD ENOUGH    Camp prospect — walk-on candidate, scout team
       BUST               Not a fit. Do not take. Avoid.
     The Ungraded lane is appended automatically. */
  grades: [
    { id: "RARE", label: "Rare", color: "#0B0B0D", text: "#FFFFFF", tint: "rgba(0,0,0,0.35)" },
    { id: "ALL_LEAGUE", label: "All-League", color: "#C9A227", text: "#14181F", tint: "rgba(201,162,39,0.10)" },
    { id: "MULTI_YEAR", label: "Multi-Year Starter", color: "#2E5488", text: "#FFFFFF", tint: "rgba(46,84,136,0.16)" },
    { id: "STARTER", label: "Starter", color: "#5B8BD5", text: "#FFFFFF", tint: "rgba(91,139,213,0.12)" },
    { id: "PROGRAM", label: "Program", color: "#3BE8E8", text: "#14181F", tint: "rgba(59,232,232,0.08)" },
    { id: "NGE", label: "Not Good Enough", color: "#F4F01A", text: "#14181F", tint: "rgba(244,240,26,0.06)" },
    { id: "BUST", label: "Bust", color: "#E02B20", text: "#FFFFFF", tint: "rgba(224,43,32,0.10)" },
  ],
  /* Position groups — Boise State board layout (X/F/Z receiver system).
     Ids reuse template defaults wherever the meaning matches, so existing
     player data stays valid and only the labels change; WR_Z is the one new
     id. Removed groups (DE/NT/NICKEL-only-renames): sub-275 DL types live in
     EDGE, interior in DT. Specialists keep the template default (K/P/LS). */
  positions: {
    offense: [
      { id: "QB", label: "QB" },
      { id: "RB", label: "RB" },
      { id: "WR_OUT", label: "X WR" },
      { id: "WR_SLOT", label: "F WR" },
      { id: "WR_Z", label: "Z WR" },
      { id: "TE", label: "TE" },
      { id: "OL_INT", label: "IOL" },
      { id: "OL_SWING", label: "OT" },
    ],
    defense: [
      { id: "EDGE", label: "EDGE" },
      { id: "DT", label: "DT" },
      { id: "ILB", label: "LB" },
      { id: "CB", label: "CB" },
      { id: "SAF", label: "SAF" },
      { id: "NICKEL", label: "NICKEL" },
    ],
  },
  staffGroups: _STAFF_GROUPS,
  /* 2026 schedule — first Pac-12 season. Times MT; TBA games get times as
     the league announces them. Week 13 opponent TBA (add when scheduled). */
  games: [
    { date: "2026-09-05", opponent: "Oregon",                                home: false, time: "1:30 PM MT",  tv: "CBS" },
    { date: "2026-09-12", opponent: "Memphis",                               home: true,  time: "4:00 PM MT",  tv: "USA" },
    { date: "2026-09-19", opponent: "South Dakota",   short: "S Dakota",     home: true,  time: "8:00 PM MT",  tv: "CBSSN" },
    { date: "2026-09-26", opponent: "Western Michigan", short: "W Michigan", home: false },
    { date: "2026-10-03", opponent: "Utah State",     short: "Utah St",      home: true,  time: "5:30 PM MT",  tv: "CBSSN" },
    { date: "2026-10-10", opponent: "Fresno State",   short: "Fresno St",    home: false, time: "8:30 PM MT",  tv: "The CW" },
    { date: "2026-10-24", opponent: "Washington State", short: "Wash St",    home: false, time: "8:00 PM MT",  tv: "USA" },
    { date: "2026-10-31", opponent: "Texas State",    short: "Texas St",     home: true,  time: "4:00 PM MT",  tv: "The CW" },
    { date: "2026-11-07", opponent: "Colorado State", short: "Colorado St",  home: false, time: "4:00 PM MT",  tv: "USA" },
    { date: "2026-11-14", opponent: "Oregon State",   short: "Oregon St",    home: true,  time: "4:00 PM MT",  tv: "USA" },
    { date: "2026-11-21", opponent: "San Diego State", short: "SDSU",        home: true,  time: "7:30 PM MT",  tv: "USA" },
  ],
  /* Board admins — HC + GM to start (same pattern as the other schools;
     one-line change to add a Chief-of-Staff equivalent or testers). */
  boardAdmins: ["Danielson HC", "Brandon Jones GM"],
  seedProspects: _SEED_PROSPECTS,
  /* DEDICATED Supabase project with real server-side auth (Supabase Auth +
     row-level security): the anon key alone reads NOTHING — every request
     must carry a signed-in staffer's session token, and deactivation cuts
     data access at the database. Setup (once): run template/schema-auth.sql
     in this project's SQL Editor, then provision accounts with
     scripts/provision_users.py boise-state.
     scripts/provision_users.py boise-state. */
  supabase: {
    url: "https://bmzpyoahwzbuwbfqrrlb.supabase.co",
    anonKey: "sb_publishable_8SryNtz3Pi_sBQZQdnaFBQ_lZXUI3p4",
    authMode: true,
  },
  // Compliance calendar: template ships the 2026-27 FBS calendar. Override
  // any date without a template change via recruitingCalendar: {...}.
};

/* generated by build_school.py */
window.BOARD_CONFIG.iconDataUrl = "data:image/png;base64,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";
