


//let baseword = process.argv[2];// node[0] sript.js[1] "shitbag"[2]   ===   node script.js shitbag
//let w = process.argv[3];//  node script.js shitbag a



//werd = werd.match(/[dmpty]$/i);
//werd += werd + dmpty.toString();
//random number function
function r(min, max) {
	return ~~(Math.random() * (max - min) + min);
}

//array of all them suffixes
const suffixes = [
	'-a',
	'-athon',
	'-athalon',
	'-ab',
	'-ability',
	'-able',
	'-ably',
	'-aboo',
	'-ac',
	'-acal',
	'-aceous',
	'-acious',
	'-acity',
	'-acy',
	'-ad',
	'-ade',
	'-adelic',
	'-adenia',
	'-adic',
	'-adol',
	'-aemia',
	'-afil',
	'-age',
	'-agog',
	'-agogue',
	'-agogy',
	'-aholic',
	'-aire',
	'-al',
	'-algia',
	'-algy',
	'-ality',
	'-all',
	'-ally',
	'-alol',
	'-ambulist',
	'-amic',
	'-amidine',
	'-amine',
	'-amivir',
	'-amundo',
	'-an',
	'-ana',
	'-ance',
	'-ancy',
	'-and',
	'-ander',
	'-andrian',
	'-androus',
	'-andry',
	'-ane',
	'-aneous',
	'-angle',
	'-angular',
	'-anine',
	'-ant',
	'-anth',
	'-anthropy',
	'-apalooza',
	'-apine',
	'-ar',
	'-arabine',
	'-arch',
	'-archy',
	'-ard',
	'-arian',
	'-arium',
	'-arol',
	'-arone',
	'-aroo',
	'-aroonie',
	'-arotene',
	'-ary',
	'-ase',
	'-asone',
	'-ass',
	'-assed',
	'-ast',
	'-aster',
	'-astic',
	'-asvir',
	'-ata',
	'-ate',
	'-athlon',
	'-atim',
	'-ation',
	'-ative',
	'-ator',
	'-atory',
	'-ay',
	'-azam',
	'-azenil',
	'-azepam',
	'-azepate',
	'-azocine',
	'-azodone',
	'-azolam',
	'-azosin',
	'-bactam',
	'-bamate',
	'-betasol',
	'-bie',
	'-bility',
	'-biont',
	'-biosis',
	'-biotic',
	'-bital',
	'-blast',
	'-blastic',
	'-boro',
	'-borough',
	'-bot',
	'-bound',
	'-bradine',
	'-burg',
	'-burger',
	'-burgh',
	'-bury',
	'-buterol',
	'-buvir',
	'-by',
	'-cade',
	'-caine',
	'-capone',
	'-cardia',
	'-care',
	'-carnil',
	'-carp',
	'-carpic',
	'-carpous',
	'-cast',
	'-cavir',
	'-cc',
	'-ce',
	'-cele',
	'-cene',
	'-centesis',
	'-centric',
	'-centrism',
	'-cephalic',
	'-cephalous',
	'-cephaly',
	'-ception',
	'-chezia',
	'-chore',
	'-choron',
	'-chorous',
	'-chory',
	'-chrome',
	'-ciclovir',
	'-cidal',
	'-cide',
	'-cillin',
	'-cin',
	'-citabine',
	'-clase',
	'-clast',
	'-clidine',
	'-clidinium',
	'-clinal',
	'-cline',
	'-clinic',
	'-clofenac',
	'-cocci',
	'-coccus',
	'-coel',
	'-coele',
	'-cole',
	'-colous',
	'-conazole',
	'-core',
	'-corn',
	'-cort',
	'-coxib',
	'-cracy',
	'-craft',
	'-crasy',
	'-crat',
	'-cratic',
	'-crete',
	'-crine',
	'-cross',
	'-crypt',
	'-curium',
	'-curonium',
	'-cy',
	'-cycline',
	'-cyte',
	'-\'d',
	'-d',
	'-dactyl',
	'-dan',
	'-dar',
	'-dazole',
	'-dere',
	'-derm',
	'-derma',
	'-dermatous',
	'-desis',
	'-diene',
	'-dil',
	'-dilol',
	'-dipine',
	'-dipsia',
	'-dom',
	'-dopa',
	'-dralazine',
	'-drine',
	'-drome',
	'-dromous',
	'-dronate',
	'-dutant',
	'-dyl',
	'-e',
	'-ean',
	'-eaux',
	'-ectomy',
	'-ed',
	'-ee',
	'-een',
	'-eer',
	'-eh',
	'-ein',
	'-eine',
	'-el',
	'-elect',
	'-elle',
	'-eme',
	'-emia',
	'-en',
	'-ence',
	'-enchyma',
	'-ency',
	'-end',
	'-ene',
	'-ennial',
	'-ent',
	'-enyl',
	'-eous',
	'-`er',
	'-er',
	'-ergic',
	'-ergy',
	'-eridine',
	'-ern',
	'-eroo',
	'-eroonie',
	'-ers',
	'-ery',
	'-es',
	'-esce',
	'-escence',
	'-escent',
	'-ese',
	'-esis',
	'-esque',
	'-ess',
	'-est',
	'-et',
	'-eth',
	'-ethidine',
	'-etic',
	'-ette',
	'-ety',
	'-ex',
	'-exia',
	'-ey',
	'-facient',
	'-faction',
	'-fag',
	'-fenac',
	'-fentanil',
	'-ferous',
	'-fest',
	'-fiban',
	'-fibrate',
	'-fication',
	'-fier',
	'-fix',
	'-floxacin',
	'-flurane',
	'-flux',
	'-fold',
	'-form',
	'-formin',
	'-fos',
	'-fosfamide',
	'-fosine',
	'-fovir',
	'-free',
	'-frine',
	'-fu',
	'-fugal',
	'-fuge',
	'-ful',
	'-fungin',
	'-furter',
	'-fy',
	'-gamous',
	'-gamy',
	'-gasm',
	'-gastria',
	'-gate',
	'-gatran',
	'-gaze',
	'-geddon',
	'-gen',
	'-genesis',
	'-genic',
	'-genin',
	'-genous',
	'-geny',
	'-gerous',
	'-gest',
	'-gesterone',
	'-giline',
	'-giri',
	'-gliflozin',
	'-gliptin',
	'-glitazar',
	'-glitazone',
	'-glossia',
	'-glot',
	'-glutide',
	'-gnathous',
	'-golide',
	'-gon',
	'-gony',
	'-gram',
	'-gramme',
	'-graph',
	'-grapher',
	'-graphic',
	'-graphical',
	'-graphy',
	'-grave',
	'-grel',
	'-gyny',
	'-ham',
	'-happy',
	'-head',
	'-hedra',
	'-hedral',
	'-hedron',
	'-henge',
	'-holic',
	'-holism',
	'-hood',
	'-hour-old',
	'-i',
	'-ia',
	'-iad',
	'-ial',
	'-ian',
	'-iana',
	'-iasis',
	'-iatric',
	'-iatrician',
	'-iatrics',
	'-iatry',
	'-ibility',
	'-ible',
	'-ibly',
	'-ic',
	'-ica',
	'-ical',
	'-icam',
	'-icase',
	'-ication',
	'-ice',
	'-ician',
	'-icide',
	'-icism',
	'-icity',
	'-ick',
	'-icle',
	'-ics',
	'-id',
	'-ide',
	'-idene',
	'-idine',
	'-ie',
	'-ied',
	'-ienne',
	'-ier',
	'-ies',
	'-iest',
	'-iety',
	'-ifene',
	'-iferous',
	'-ific',
	'-ification',
	'-iform',
	'-ify',
	'-ile',
	'-ilide',
	'-illiard',
	'-illion',
	'-ily',
	'-imibe',
	'-imundo',
	'-imus',
	'-in',
	'-in`',
	'-in-law',
	'-in-waiting',
	'-inator',
	'-inda',
	'-ine',
	'-ing',
	'-ïng',
	'-ino',
	'-ion',
	'-iot',
	'-iour',
	'-ious',
	'-irudin',
	'-isation',
	'-ise',
	'-ish',
	'-ism',
	'-ismus',
	'-ist',
	'-ista',
	'-istic',
	'-istical',
	'-istically',
	'-it-all',
	'-ite',
	'-itis',
	'-itol',
	'-itude',
	'-ity',
	'-ium',
	'-ive',
	'-ization',
	'-ize',
	'-izer',
	'-izine',
	'-izzle',
	'-ja',
	'-ji',
	'-k',
	'-kacin',
	'-kin',
	'-kin-',
	'-kind',
	'-kinesis',
	'-kini',
	'-kinra',
	'-kins',
	'-kiren',
	'-kun',
	'-lagnia',
	'-lalia',
	'-land',
	'-landia',
	'-later',
	'-latry',
	'-le',
	'-lecithal',
	'-lect',
	'-leigh',
	'-lepsy',
	'-lept',
	'-leptic',
	'-less',
	'-let',
	'-licious',
	'-like',
	'-lin',
	'-ling',
	'-lings',
	'-lite',
	'-lith',
	'-lock',
	'-log',
	'-logic',
	'-logical',
	'-logist',
	'-logs',
	'-logue',
	'-logues',
	'-logy',
	'-long',
	'-loquy',
	'-lukast',
	'-lutamide',
	'-ly',
	'-lyn',
	'-lysis',
	'-lyte',
	'-lytic',
	'-mab',
	'-machy',
	'-mageddon',
	'-man',
	'-mance',
	'-mancer',
	'-mancy',
	'-mane',
	'-mania',
	'-maniac',
	'-mans',
	'-manship',
	'-mantadine',
	'-mantic',
	'-mas',
	'-mastia',
	'-max',
	'-meal',
	'-megaly',
	'-meister',
	'-men',
	'-ment',
	'-mer',
	'-mere',
	'-merous',
	'-mestane',
	'-metacin',
	'-metasone',
	'-meter',
	'-methasone',
	'-metre',
	'-metric',
	'-metry',
	'-micin',
	'-mifene',
	'-misia',
	'-misic',
	'-mo',
	'-mobile',
	'-mont',
	'-mony',
	'-more',
	'-morelin',
	'-morph',
	'-morphic',
	'-morphism',
	'-morphous',
	'-morphy',
	'-most',
	'-motide',
	'-mycete',
	'-mycin',
	'-n',
	'-nab',
	'-nado',
	'-naissance',
	'-nakinra',
	'-nap',
	'-nasty',
	'-naut',
	'-navir',
	'-nd',
	'-nema',
	'-neme',
	'-nercept',
	'-ness',
	'-netant',
	'-nicline',
	'-nidazole',
	'-nidipine',
	'-nik',
	'-nom',
	'-nomicon',
	'-nomics',
	'-nomy',
	'-n`t',
	'-nym',
	'-nymy',
	'-o',
	'-omatic',
	'-orama',
	'-oate',
	'-ock',
	'-ocracy',
	'-odd',
	'-ode',
	'-odont',
	'-odontia',
	'-odynia',
	'-oecious',
	'-off',
	'-oholic',
	'-oi',
	'-oic',
	'-oid',
	'-ol',
	'-ola',
	'-ole',
	'-ologist',
	'-ology',
	'-olol',
	'-olone',
	'-oma',
	'-ome',
	'-ometer',
	'-ometry',
	'-omics',
	'-on',
	'-one',
	'-onidine',
	'-onium',
	'-onomics',
	'-onomy',
	'-onym',
	'-onymy',
	'-oon',
	'-opamine',
	'-ophilic',
	'-opia',
	'-opsia',
	'-opsy',
	'-or',
	'-orium',
	'-orphan',
	'-orphine',
	'-orphone',
	'-ory',
	'-os',
	'-ose',
	'-osin',
	'-osis',
	'-osity',
	'-ostomy',
	'-oth',
	'-otic',
	'-otomy',
	'-our',
	'-ous',
	'-out-law',
	'-ov',
	'-oxacin',
	'-oxanide',
	'-oxepin',
	'-oxetine',
	'-oxifene',
	'-oxy',
	'-oyl',
	'-pagus',
	'-palooza',
	'-pamil',
	'-pants',
	'-parin',
	'-parinux',
	'-parous',
	'-partite',
	'-path',
	'-pathic',
	'-pathy',
	'-pause',
	'-ped',
	'-pedia',
	'-penia',
	'-people',
	'-peridol',
	'-peridone',
	'-perone',
	'-person',
	'-petal',
	'-pexy',
	'-phage',
	'-phagia',
	'-phagic',
	'-phagous',
	'-phagy',
	'-phany',
	'-phasia',
	'-phil',
	'-phile',
	'-philia',
	'-philiac',
	'-philic',
	'-philous',
	'-phily',
	'-phobe',
	'-phobia',
	'-phobiac',
	'-phobic',
	'-phone',
	'-phonia',
	'-phonic',
	'-phony',
	'-phor',
	'-phore',
	'-phoresis',
	'-phrenia',
	'-phyl',
	'-phyll',
	'-phyllous',
	'-physis',
	'-phyte',
	'-pidem',
	'-pine',
	'-piprazole',
	'-pitant',
	'-plasia',
	'-plast',
	'-plasty',
	'-platin',
	'-ple',
	'-plegia',
	'-plegic',
	'-plex',
	'-plinerved',
	'-ploid',
	'-plon',
	'-pnea',
	'-pnoea',
	'-pocalypse',
	'-pod',
	'-poeia',
	'-poiesis',
	'-polis',
	'-polises',
	'-poly',
	'-poo',
	'-poride',
	'-pramine',
	'-prazole',
	'-prenaline',
	'-preneur',
	'-previr',
	'-pride',
	'-pril',
	'-prilat',
	'-prim',
	'-pristin',
	'-profen',
	'-proof',
	'-prost',
	'-prostil',
	'-pter',
	'-pteran',
	'-pterous',
	'-ptile',
	'-punk',
	'-quine',
	'-quinil',
	'-racil',
	'-rama',
	'-rd',
	'-rds',
	'-red',
	'-rel',
	'-relin',
	'-ren',
	'-renone',
	'-reotide',
	'-ress',
	'-retin',
	'-ribine',
	'-ric',
	'-rices',
	'-ridden',
	'-riffic',
	'-rific',
	'-rinone',
	'-ritide',
	'-rix',
	'-rolimus',
	'-rozole',
	'-rrhagia',
	'-rrhaphy',
	'-rrhea',
	'-rrhexis',
	'-rrhoea',
	'-rubicin',
	'-ry',
	'-`s',
	'-s',
	'-safe',
	'-sal',
	'-salan',
	'-salazide',
	'-salazine',
	'-sama',
	'-san',
	'-sartan',
	'-sauce',
	'-saur',
	'-saurus',
	'-scape',
	'-scope',
	'-scopic',
	'-scopy',
	'-se',
	'-self',
	'-selves',
	'-semide',
	'-serod',
	'-serpine',
	'-setron',
	'-sexual',
	'-ship',
	'-shire',
	'-sicle',
	'-side',
	'-sie',
	'-sies',
	'-sion',
	'-sis',
	'-ski',
	'-sky',
	'-soft',
	'-sol',
	'-some',
	'-something',
	'-son',
	'-sona',
	'-sophy',
	'-speak',
	'-spect',
	'-sphere',
	'-spirone',
	'-splain',
	'-sploitation',
	'-spo',
	'-sson',
	'-st',
	'-stan',
	'-stasis',
	'-stat',
	'-static',
	'-statin',
	'-steine',
	'-ster',
	'-steride',
	'-sterone',
	'-stigmine',
	'-stock',
	'-stome',
	'-stomy',
	'-strophy',
	'-style',
	'-styly',
	'-t',
	'-tacular',
	'-tadine',
	'-tainment',
	'-tant',
	'-tard',
	'-tardy',
	'-tastic',
	'-taxel',
	'-teen',
	'-tegravir',
	'-tene',
	'-tepine',
	'-teplase',
	'-terenol',
	'-terol',
	'-terone',
	'-th',
	'-then',
	'-therm',
	'-thermal',
	'-thermic',
	'-thermy',
	'-thiazide',
	'-thiouracil',
	'-thon',
	'-thrin',
	'-tiazem',
	'-tide',
	'-tidine',
	'-time',
	'-tinib',
	'-tion',
	'-tirelin',
	'-tizide',
	'-tizolam',
	'-tobe',
	'-toin',
	'-tome',
	'-tomy',
	'-ton',
	'-tope',
	'-topia',
	'-topic',
	'-topy',
	'-tort',
	'-trakinra',
	'-traline',
	'-treme',
	'-trexate',
	'-trigine',
	'-trix',
	'-tron',
	'-trope',
	'-troph',
	'-trophic',
	'-trophy',
	'-tropic',
	'-tropin',
	'-tropism',
	'-tropy',
	'-tude',
	'-tuple',
	'-ty',
	'-type',
	'-ual',
	'-uide',
	'-ule',
	'-um',
	'-umab',
	'-uous',
	'-ure',
	'-uret',
	'-uretic',
	'-urgy',
	'-uria',
	'-vac',
	'-valent',
	'-vaptan',
	'-vastatin',
	'-verine',
	'-verse',
	'-ville',
	'-vir',
	'-virine',
	'-viroc',
	'-virsen',
	'-vore',
	'-vorous',
	'-vudine',
	'-wad',
	'-ward',
	'-wards',
	'-ware',
	'-wash',
	'-wave',
	'-ways',
	'-wear',
	'-wich',
	'-wick',
	'-wide',
	'-wise',
	'-woman',
	'-women',
	'-work',
	'-worth',
	'-worthy',
	'-xaban',
	'-xeny',
	'-ximab',
	'-xor',
	'-y',
	'-yer',
	'-yl',
	'-ylene',
	'-ylidene',
	'-yne',
	'-z',
	'-zepine',
	'-zilla',
	'-zoan',
	'-zoic',
	'-zolac',
	'-zoon',
	'-zumab',
	'-zygous',
	'-zza',
]



// const suffixing = suffixes
// 	.sort(() => Math.random() - Math.random())
// 	.slice(0, 25)
// 	.toString()
// 	.replace(/-/g, `#${werd}`)
// 	.replace(/\,/g, ' ');

// const suffixtags = suffixes
// 	.sort(() => Math.random() - Math.random())
// 	.slice(0, 25)
// 	.toString()
// 	.replace(/-/g, `#${werd}${w}`)
// 	.replace(/\,/g, ' ');

// const suffixed = `${suffixing} \n`;
// console.log(`${suffixtags} \n`);
// console.log(`${suffixing} \n`);




// grab the value of the input box
let getWord = function () {
	pageContentEl('#word').value;
	console.log(getWord);
}

//multistep process
function startSuffixing() {
	pageContentEl('#resultSection').classList.remove('hide');
	pageContentEl('#results').innerHTML = `${getWord}`;
	//checkWord();
	//showResults();

}

// global function variable for doc.qrySlctor
let pageContentEl = function (element) {
	return document.querySelector(element);
};


//activate the html suffixate button
pageContentEl('#go').addEventListener('click', startSuffixing());