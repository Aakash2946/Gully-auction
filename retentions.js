/*
 * IPL 2025 retentions (announced 31 Oct 2024, source: iplt20.com / BCCI media advisory)
 *
 * `team` is the franchise id used by Gully Auction (SAMPLE.teams in index.html):
 *   t0 CSK | t1 MI | t2 RCB | t3 KKR | t4 DC | t5 RR | t6 PBKS | t7 SRH | t8 LSG | t9 GT
 *
 * `price` is the actual retention price in Cr. It is written to sold/<id> and
 * counts towards that team's spend.
 * `role`  is BAT / BOWL / AR / WK.
 * `country` decides overseas status (anything other than "India" is overseas).
 *
 * Keep each player's name spelled the same as in players.js, because the
 * app matches retained players to the player pool by name.
 */
window.IPL2025_RETENTIONS = [
  // Chennai Super Kings (t0) - 5 retained, purse left 55 Cr
  { team: 't0', name: 'Ruturaj Gaikwad',      role: 'BAT',  price: 18,    country: 'India' },
  { team: 't0', name: 'Matheesha Pathirana',  role: 'BOWL', price: 13,    country: 'Sri Lanka' },
  { team: 't0', name: 'Shivam Dube',          role: 'AR',   price: 12,    country: 'India' },
  { team: 't0', name: 'Ravindra Jadeja',      role: 'AR',   price: 18,    country: 'India' },
  { team: 't0', name: 'MS Dhoni',             role: 'WK',   price: 4,     country: 'India' },

  // Mumbai Indians (t1) - 5 retained, purse left 45 Cr
  { team: 't1', name: 'Jasprit Bumrah',       role: 'BOWL', price: 18,    country: 'India' },
  { team: 't1', name: 'Suryakumar Yadav',     role: 'BAT',  price: 16.35, country: 'India' },
  { team: 't1', name: 'Hardik Pandya',        role: 'AR',   price: 16.35, country: 'India' },
  { team: 't1', name: 'Rohit Sharma',         role: 'BAT',  price: 16.3,  country: 'India' },
  { team: 't1', name: 'Tilak Varma',          role: 'BAT',  price: 8,     country: 'India' },

  // Royal Challengers Bengaluru (t2) - 3 retained, purse left 83 Cr
  { team: 't2', name: 'Virat Kohli',          role: 'BAT',  price: 21,    country: 'India' },
  { team: 't2', name: 'Rajat Patidar',        role: 'BAT',  price: 11,    country: 'India' },
  { team: 't2', name: 'Yash Dayal',           role: 'BOWL', price: 5,     country: 'India' },

  // Kolkata Knight Riders (t3) - 6 retained, purse left 51 Cr
  { team: 't3', name: 'Rinku Singh',          role: 'BAT',  price: 13,    country: 'India' },
  { team: 't3', name: 'Varun Chakaravarthy',  role: 'BOWL', price: 12,    country: 'India' },
  { team: 't3', name: 'Sunil Narine',         role: 'AR',   price: 12,    country: 'West Indies' },
  { team: 't3', name: 'Andre Russell',        role: 'AR',   price: 12,    country: 'West Indies' },
  { team: 't3', name: 'Harshit Rana',         role: 'BOWL', price: 4,     country: 'India' },
  { team: 't3', name: 'Ramandeep Singh',      role: 'AR',   price: 4,     country: 'India' },

  // Delhi Capitals (t4) - 4 retained, purse left 73 Cr
  { team: 't4', name: 'Axar Patel',           role: 'AR',   price: 16.5,  country: 'India' },
  { team: 't4', name: 'Kuldeep Yadav',        role: 'BOWL', price: 13.25, country: 'India' },
  { team: 't4', name: 'Tristan Stubbs',       role: 'WK',   price: 10,    country: 'South Africa' },
  { team: 't4', name: 'Abhishek Porel',       role: 'WK',   price: 4,     country: 'India' },

  // Rajasthan Royals (t5) - 6 retained, purse left 41 Cr
  { team: 't5', name: 'Sanju Samson',         role: 'WK',   price: 18,    country: 'India' },
  { team: 't5', name: 'Yashasvi Jaiswal',     role: 'BAT',  price: 18,    country: 'India' },
  { team: 't5', name: 'Riyan Parag',          role: 'AR',   price: 14,    country: 'India' },
  { team: 't5', name: 'Dhruv Jurel',          role: 'WK',   price: 14,    country: 'India' },
  { team: 't5', name: 'Shimron Hetmyer',      role: 'BAT',  price: 11,    country: 'West Indies' },
  { team: 't5', name: 'Sandeep Sharma',       role: 'BOWL', price: 4,     country: 'India' },

  // Punjab Kings (t6) - 2 retained, purse left 110.5 Cr
  { team: 't6', name: 'Shashank Singh',       role: 'BAT',  price: 5.5,   country: 'India' },
  { team: 't6', name: 'Prabhsimran Singh',    role: 'WK',   price: 4,     country: 'India' },

  // Sunrisers Hyderabad (t7) - 5 retained, purse left 45 Cr
  { team: 't7', name: 'Heinrich Klaasen',     role: 'WK',   price: 23,    country: 'South Africa' },
  { team: 't7', name: 'Pat Cummins',          role: 'BOWL', price: 18,    country: 'Australia' },
  { team: 't7', name: 'Abhishek Sharma',      role: 'AR',   price: 14,    country: 'India' },
  { team: 't7', name: 'Travis Head',          role: 'BAT',  price: 14,    country: 'Australia' },
  { team: 't7', name: 'Nitish Kumar Reddy',   role: 'AR',   price: 6,     country: 'India' },

  // Lucknow Super Giants (t8) - 5 retained, purse left 69 Cr
  { team: 't8', name: 'Nicholas Pooran',      role: 'WK',   price: 21,    country: 'West Indies' },
  { team: 't8', name: 'Ravi Bishnoi',         role: 'BOWL', price: 11,    country: 'India' },
  { team: 't8', name: 'Mayank Yadav',         role: 'BOWL', price: 11,    country: 'India' },
  { team: 't8', name: 'Mohsin Khan',          role: 'BOWL', price: 4,     country: 'India' },
  { team: 't8', name: 'Ayush Badoni',         role: 'BAT',  price: 4,     country: 'India' },

  // Gujarat Titans (t9) - 5 retained, purse left 69 Cr
  { team: 't9', name: 'Rashid Khan',          role: 'BOWL', price: 18,    country: 'Afghanistan' },
  { team: 't9', name: 'Shubman Gill',         role: 'BAT',  price: 16.5,  country: 'India' },
  { team: 't9', name: 'Sai Sudharsan',        role: 'BAT',  price: 8.5,   country: 'India' },
  { team: 't9', name: 'Rahul Tewatia',        role: 'AR',   price: 4,     country: 'India' },
  { team: 't9', name: 'Shahrukh Khan',        role: 'BAT',  price: 4,     country: 'India' }
];

/*
 * Extra purse deduction on top of the retention prices above.
 * The IPL deducts fixed slab amounts (18 / 14 / 11 / 18 / 14 Cr for capped
 * players, 4 Cr for uncapped), which can differ from the actual price paid.
 * Official purse left = 120 - slab total:
 *   DC : slab total 47 Cr vs 43.75 Cr of prices -> +3.25 Cr  (purse left 73)
 *   KKR: slab total 69 Cr vs 57 Cr of prices    -> +12 Cr    (purse left 51)
 * Every other team's prices already equal the official deduction.
 * Keys are the franchise ids.
 */
window.IPL2025_RETENTION_ADJUSTMENTS = { t3: 12, t4: 3.25 };
