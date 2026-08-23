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
