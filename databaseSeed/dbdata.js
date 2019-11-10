const users = [
  {
    "status": "Student",
    "username": "Leanne Massey",
    "password": "Leanne",
    "email": "leannemassey@equicom.com",
    "description": "Sit ad non ut sint mollit irure.",
    "startup-name": "FIBEROX",
    "startup-description": "Aliquip pariatur cupidatat incididunt ea. Exercitation laborum magna id sint laboris in qui pariatur ex consectetur aliquip. Aute nisi adipisicing amet anim non. Aliquip non incididunt anim excepteur officia quis officia ullamco nostrud amet occaecat. Veniam sint consequat minim cillum officia non adipisicing ullamco.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Weber Cotton",
    "password": "Weber",
    "email": "webercotton@fiberox.com",
    "description": "Deserunt tempor enim ad exercitation tempor veniam adipisicing laboris officia eu irure sint labore irure.",
    "startup-name": "GOKO",
    "startup-description": "Eiusmod sint in nulla proident dolore commodo occaecat reprehenderit adipisicing ut culpa aliqua officia reprehenderit. Non do id cupidatat id. Ut consequat ex voluptate anim veniam sint mollit laborum eu enim tempor sint. Commodo cupidatat irure in qui tempor duis.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Briggs Peck",
    "password": "Briggs",
    "email": "briggspeck@goko.com",
    "description": "Aliqua sit dolore commodo sunt sit anim.",
    "startup-name": "ILLUMITY",
    "startup-description": "Tempor deserunt duis occaecat enim ullamco pariatur anim. Tempor est laborum incididunt irure eiusmod consectetur sunt ad Lorem non. Elit officia laborum fugiat minim nulla ullamco non incididunt eiusmod eiusmod. Anim voluptate sunt sint elit voluptate incididunt duis nulla commodo pariatur. Occaecat laborum cupidatat ex veniam duis consectetur officia dolor duis laboris anim. Veniam eiusmod id exercitation adipisicing veniam. Esse magna in ad mollit aliqua deserunt consequat ex officia non do.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Startup",
    "username": "Rae Holden",
    "password": "Rae",
    "email": "raeholden@illumity.com",
    "description": "Dolore Lorem reprehenderit laborum non amet.",
    "startup-name": "NORALEX",
    "startup-description": "Exercitation anim occaecat magna quis elit consequat exercitation eu deserunt id aute id ipsum commodo. Do et qui fugiat dolore amet tempor sunt Lorem. Mollit non Lorem voluptate et est ullamco ad cillum officia incididunt. Veniam aliqua ullamco est exercitation deserunt occaecat eu do veniam culpa qui. Consequat ipsum consectetur occaecat voluptate Lorem anim exercitation excepteur voluptate. Sit aute ad do id do id occaecat.\r\n",
    "startup-category": "Social"
  },
  {
    "status": "Startup",
    "username": "Foley Allen",
    "password": "Foley",
    "email": "foleyallen@noralex.com",
    "description": "Sint non nostrud aliquip excepteur esse ea cupidatat exercitation anim velit ea esse non non.",
    "startup-name": "RODEOCEAN",
    "startup-description": "Sit anim aliquip id aliqua nulla proident. Esse irure sint laborum in cupidatat adipisicing fugiat ea officia. Officia ea irure ad eu exercitation.\r\n",
    "startup-category": "E-Commerce"
  },
  {
    "status": "Startup",
    "username": "Neva Calhoun",
    "password": "Neva",
    "email": "nevacalhoun@rodeocean.com",
    "description": "Ut in aute ea dolor eu ut in.",
    "startup-name": "OVIUM",
    "startup-description": "Culpa consectetur do anim aute laboris Lorem reprehenderit. Ea nulla incididunt sint laborum nulla cillum anim reprehenderit anim consequat. Magna ipsum cillum elit sit deserunt aute dolor pariatur nisi qui minim minim quis. Nisi enim ad eiusmod esse. Deserunt ex officia aliqua quis anim adipisicing incididunt incididunt do quis labore dolor amet consectetur. Consectetur commodo aliqua ut incididunt in deserunt sunt elit id aliqua.\r\n",
    "startup-category": "Innovation"
  },
  {
    "status": "Student",
    "username": "Simon Benjamin",
    "password": "Simon",
    "email": "simonbenjamin@ovium.com",
    "description": "Veniam consequat ullamco esse pariatur proident irure veniam aliqua non nostrud cillum do aliquip.",
    "startup-name": "ORBALIX",
    "startup-description": "Id anim excepteur minim occaecat nostrud officia amet quis nulla. Fugiat pariatur consequat laboris tempor adipisicing laboris ut aliqua tempor sunt. Proident fugiat adipisicing labore veniam aute minim elit eiusmod id ullamco et tempor nostrud ullamco. Culpa anim commodo qui velit laboris sunt elit. Minim exercitation laborum excepteur sint et minim et. Pariatur nulla Lorem cupidatat aute cillum.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Startup",
    "username": "Holmes Hobbs",
    "password": "Holmes",
    "email": "holmeshobbs@orbalix.com",
    "description": "Et nostrud mollit nulla occaecat eu officia excepteur in et amet magna excepteur.",
    "startup-name": "GEEKWAGON",
    "startup-description": "Ea est elit cupidatat ea ullamco esse laboris occaecat. Proident laborum ex consequat reprehenderit officia minim commodo. Nulla adipisicing incididunt officia est officia. Ipsum enim ut velit eu id aute aliquip dolor et eu. Esse ex ipsum non do sunt magna laborum culpa commodo. Commodo ad deserunt officia eiusmod dolor qui consectetur sunt occaecat nostrud sit sint aliquip dolore.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Hartman Francis",
    "password": "Hartman",
    "email": "hartmanfrancis@geekwagon.com",
    "description": "Consequat dolore mollit ad non irure sit eu labore.",
    "startup-name": "CUBIX",
    "startup-description": "Eiusmod tempor esse irure nostrud sunt. Tempor ullamco duis laboris est labore pariatur proident. Cillum quis dolore veniam voluptate excepteur laboris aliquip nisi aliquip adipisicing aliqua dolore et nostrud. Voluptate consequat culpa laboris reprehenderit enim sit qui in sint do labore ea eu occaecat. Ipsum laboris ut ad dolore aliquip exercitation excepteur ad anim deserunt.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Tamera Bowen",
    "password": "Tamera",
    "email": "tamerabowen@cubix.com",
    "description": "Sunt irure ex amet tempor excepteur dolor Lorem irure.",
    "startup-name": "EXOSIS",
    "startup-description": "Labore magna quis eiusmod et reprehenderit exercitation nulla elit exercitation ea dolor exercitation voluptate irure. Quis aliquip do occaecat nulla commodo velit voluptate Lorem elit exercitation. Nostrud nulla in et labore elit reprehenderit culpa et et ad ipsum proident. Excepteur cupidatat excepteur exercitation dolor minim minim duis quis amet dolor non irure.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Nettie Owens",
    "password": "Nettie",
    "email": "nettieowens@exosis.com",
    "description": "Eiusmod exercitation eiusmod sunt excepteur pariatur minim in Lorem velit ea et consectetur.",
    "startup-name": "ISONUS",
    "startup-description": "Sunt ut ut enim id aliquip eiusmod magna labore exercitation in voluptate. Ex deserunt minim magna eiusmod amet duis ea minim do id Lorem eu dolor deserunt. Est reprehenderit ad Lorem est laborum est sunt sunt amet aliquip magna. Do irure fugiat excepteur do ad amet ut adipisicing.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Student",
    "username": "Berger Knight",
    "password": "Berger",
    "email": "bergerknight@isonus.com",
    "description": "Cillum cillum irure non consectetur ad culpa id do nulla laboris qui commodo sint sint.",
    "startup-name": "ZIPAK",
    "startup-description": "Do laborum sit occaecat esse culpa esse fugiat nisi nulla velit duis duis ullamco. Do qui eu ex commodo officia nisi ullamco sint dolore aliquip consectetur. Commodo qui mollit consectetur in ipsum labore dolor eu est sunt do qui consectetur ad. Nisi anim id deserunt ipsum id fugiat consectetur ex exercitation.\r\n",
    "startup-category": "Social"
  },
  {
    "status": "Student",
    "username": "Alissa Rogers",
    "password": "Alissa",
    "email": "alissarogers@zipak.com",
    "description": "Sit officia ea enim deserunt aliquip velit ad culpa.",
    "startup-name": "COMFIRM",
    "startup-description": "Ut in in nostrud pariatur pariatur. Dolor quis anim ut cupidatat commodo adipisicing. Et irure laborum consequat do nisi veniam Lorem nulla. Tempor qui est occaecat culpa non eu esse ipsum laborum tempor consectetur sint. Eu tempor ea non tempor elit. Eu amet labore irure ad velit do anim.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Startup",
    "username": "Bird Dale",
    "password": "Bird",
    "email": "birddale@comfirm.com",
    "description": "Incididunt non irure veniam eu ex reprehenderit enim ut deserunt enim dolore deserunt.",
    "startup-name": "LOCAZONE",
    "startup-description": "Minim nulla sit in est. Adipisicing in tempor nisi do pariatur reprehenderit labore anim. Ipsum exercitation esse sunt qui est ut ullamco consectetur. Ad voluptate laboris labore quis laboris aute fugiat ipsum fugiat velit pariatur ullamco.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Student",
    "username": "Aileen Donovan",
    "password": "Aileen",
    "email": "aileendonovan@locazone.com",
    "description": "Laboris esse aliqua duis ex laborum tempor exercitation eu duis adipisicing dolore velit velit.",
    "startup-name": "TWIIST",
    "startup-description": "Culpa eiusmod amet laboris magna enim eiusmod cillum elit culpa incididunt. Eu consequat quis laboris pariatur aute amet in dolor elit voluptate eu cupidatat laboris dolore. Occaecat nulla laborum non eu quis minim minim labore fugiat tempor proident ipsum pariatur.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Student",
    "username": "Socorro Robertson",
    "password": "Socorro",
    "email": "socorrorobertson@twiist.com",
    "description": "Sint do et commodo id ipsum deserunt cupidatat proident.",
    "startup-name": "TECHADE",
    "startup-description": "Ea est aute magna labore laborum sunt incididunt est incididunt exercitation tempor voluptate fugiat enim. Mollit cupidatat anim aliqua occaecat consectetur consectetur adipisicing officia tempor adipisicing dolore sunt. Ex ad aliqua cupidatat quis reprehenderit ipsum magna sint ipsum mollit. Excepteur et sunt labore elit ipsum. Labore qui dolore quis culpa eu laboris pariatur sit commodo aute irure tempor.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Startup",
    "username": "Fletcher Morgan",
    "password": "Fletcher",
    "email": "fletchermorgan@techade.com",
    "description": "Laboris ex dolor culpa officia veniam ut amet dolore.",
    "startup-name": "RADIANTIX",
    "startup-description": "Minim ullamco nisi enim excepteur velit sint mollit fugiat magna. Anim id cupidatat commodo consectetur irure esse irure aliqua dolore non incididunt ipsum commodo. Pariatur nisi incididunt voluptate eu labore eiusmod deserunt et irure.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Startup",
    "username": "Ellison Mooney",
    "password": "Ellison",
    "email": "ellisonmooney@radiantix.com",
    "description": "Ad consectetur exercitation mollit culpa sit.",
    "startup-name": "MICROLUXE",
    "startup-description": "Ea fugiat irure Lorem deserunt consectetur amet enim ea enim aute exercitation. Dolor magna amet ut aliquip culpa esse ex esse enim ut et. Laboris eiusmod ipsum exercitation officia fugiat amet aliqua est dolor dolore.\r\n",
    "startup-category": "E-Commerce"
  },
  {
    "status": "Student",
    "username": "Davidson Gray",
    "password": "Davidson",
    "email": "davidsongray@microluxe.com",
    "description": "Ut commodo quis qui aliquip Lorem nostrud officia aliqua aute eiusmod mollit est.",
    "startup-name": "PHUEL",
    "startup-description": "Aute ad veniam consectetur eu. Aliqua ut laborum amet irure reprehenderit ex ad dolor in reprehenderit ut occaecat. Amet et duis dolore occaecat aute aliquip reprehenderit esse excepteur deserunt aliqua ad cillum. Dolor eiusmod veniam laborum deserunt nostrud.\r\n",
    "startup-category": "Education"
  },
  {
    "status": "Student",
    "username": "Wilma Fields",
    "password": "Wilma",
    "email": "wilmafields@phuel.com",
    "description": "Mollit et dolor et officia deserunt proident sint exercitation fugiat commodo consectetur ad.",
    "startup-name": "CINASTER",
    "startup-description": "Cupidatat esse ex dolor esse velit. Aliqua proident officia nulla nostrud veniam non culpa irure et sunt fugiat eiusmod. Ex consequat nisi quis nisi nisi commodo laborum.\r\n",
    "startup-category": "Innovation"
  },
  {
    "status": "Startup",
    "username": "Maricela Frank",
    "password": "Maricela",
    "email": "maricelafrank@cinaster.com",
    "description": "Quis ullamco cupidatat eu sit eiusmod nostrud nisi cupidatat labore.",
    "startup-name": "JETSILK",
    "startup-description": "Amet nulla et dolore anim ipsum ipsum exercitation culpa eiusmod ut commodo mollit. Est ut deserunt non labore exercitation ex. Reprehenderit sit veniam labore eiusmod est fugiat non laboris et pariatur sint exercitation ullamco aute. Lorem ad ipsum enim nisi ad commodo aliqua officia qui eu veniam anim nulla.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Startup",
    "username": "Sandy James",
    "password": "Sandy",
    "email": "sandyjames@jetsilk.com",
    "description": "Tempor et sint laborum irure voluptate non laborum non proident ullamco.",
    "startup-name": "REALMO",
    "startup-description": "Deserunt aliqua cupidatat sint minim ullamco proident pariatur aliqua. Aliqua labore nostrud laborum enim ipsum. Ullamco anim magna incididunt velit dolor sunt sint et nostrud adipisicing adipisicing ad.\r\n",
    "startup-category": "Education"
  },
  {
    "status": "Student",
    "username": "Janelle Quinn",
    "password": "Janelle",
    "email": "janellequinn@realmo.com",
    "description": "Fugiat ipsum non ipsum dolor ullamco duis mollit aliquip deserunt cillum.",
    "startup-name": "NSPIRE",
    "startup-description": "Occaecat veniam nulla fugiat laboris tempor non incididunt nostrud nulla quis sint minim veniam. Sit pariatur laboris minim non commodo. Commodo dolore incididunt exercitation laboris magna anim reprehenderit non enim nisi commodo incididunt. Deserunt aliquip deserunt amet et id aliqua dolore fugiat consequat id cillum minim. Anim ipsum occaecat ipsum ut. Est voluptate aliqua culpa magna pariatur quis anim eiusmod irure dolore sint deserunt sunt. Irure sunt ipsum culpa cupidatat.\r\n",
    "startup-category": "E-Commerce"
  },
  {
    "status": "Startup",
    "username": "Nellie Sawyer",
    "password": "Nellie",
    "email": "nelliesawyer@nspire.com",
    "description": "Officia duis ipsum veniam minim irure eu labore sit laboris tempor velit cillum.",
    "startup-name": "NORSUP",
    "startup-description": "Ullamco ullamco nulla esse esse sint nisi elit laborum qui esse culpa ut. Fugiat commodo pariatur minim cupidatat culpa do. Amet qui eu deserunt exercitation excepteur adipisicing proident veniam irure labore quis cupidatat mollit. Laboris labore veniam aute duis proident labore voluptate tempor sit cillum. Ea quis duis proident duis qui incididunt labore occaecat.\r\n",
    "startup-category": "Innovation"
  },
  {
    "status": "Student",
    "username": "Lynn Collins",
    "password": "Lynn",
    "email": "lynncollins@norsup.com",
    "description": "Velit do mollit anim dolore sunt qui excepteur incididunt.",
    "startup-name": "HOTCAKES",
    "startup-description": "Qui voluptate nostrud qui in cillum irure dolore aliqua in do non veniam. Consectetur exercitation labore adipisicing non cupidatat in. Non elit qui velit aute qui do elit culpa dolor veniam sunt nostrud ad. Esse dolor ipsum cillum id. Labore consectetur labore in nulla. Minim fugiat in laborum fugiat in cupidatat duis aliqua proident elit.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Student",
    "username": "Middleton Burnett",
    "password": "Middleton",
    "email": "middletonburnett@hotcakes.com",
    "description": "Quis nulla non pariatur ex laborum.",
    "startup-name": "VOIPA",
    "startup-description": "Dolore irure fugiat cupidatat laboris amet id minim ullamco esse labore. Ipsum ex esse nostrud officia ea exercitation irure proident ipsum minim. Commodo excepteur nostrud quis do consectetur in sunt laboris id.\r\n",
    "startup-category": "Social"
  },
  {
    "status": "Startup",
    "username": "Irene Parks",
    "password": "Irene",
    "email": "ireneparks@voipa.com",
    "description": "Deserunt enim quis veniam voluptate velit ex esse nisi velit.",
    "startup-name": "LIQUIDOC",
    "startup-description": "Pariatur deserunt eiusmod amet aute in qui et duis voluptate laboris et. Culpa duis irure ex aliquip proident cillum est elit non non. Aliqua aliqua quis minim duis consequat ea laboris deserunt proident pariatur proident enim. Sunt cupidatat labore Lorem ex reprehenderit ipsum ex elit et id est velit. Laboris anim amet amet commodo esse quis.\r\n",
    "startup-category": "Innovation"
  },
  {
    "status": "Student",
    "username": "Merrill Walsh",
    "password": "Merrill",
    "email": "merrillwalsh@liquidoc.com",
    "description": "Ad nostrud eu cillum esse ullamco aute amet.",
    "startup-name": "COMTREK",
    "startup-description": "Quis minim ipsum minim ullamco non excepteur sunt aute. Velit quis adipisicing id adipisicing ipsum dolor esse occaecat minim Lorem cillum aliquip. In ipsum est consequat pariatur exercitation nulla. Consectetur dolore aliquip nostrud anim qui ullamco ut proident nostrud commodo dolore qui et aute. Cillum officia laborum aute consectetur elit et duis aute. Irure excepteur reprehenderit ut esse.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Startup",
    "username": "Enid Ramos",
    "password": "Enid",
    "email": "enidramos@comtrek.com",
    "description": "Qui deserunt exercitation dolore qui incididunt dolor anim consequat irure eiusmod id dolore incididunt.",
    "startup-name": "REMOLD",
    "startup-description": "Officia sunt ullamco nulla tempor duis ex magna consequat nulla elit. Duis tempor qui non excepteur Lorem ipsum Lorem ullamco eiusmod. Lorem non est sint tempor consectetur pariatur quis. Ad labore cillum voluptate nulla ea Lorem pariatur incididunt ipsum sit elit. Reprehenderit et ullamco ipsum deserunt pariatur dolore ullamco sint amet est elit ut minim laboris. Exercitation non ex duis sit. Proident esse non proident est ex cillum Lorem voluptate cillum exercitation est fugiat.\r\n",
    "startup-category": "Education"
  },
  {
    "status": "Startup",
    "username": "Salinas Sosa",
    "password": "Salinas",
    "email": "salinassosa@remold.com",
    "description": "Pariatur qui exercitation ipsum est.",
    "startup-name": "SNACKTION",
    "startup-description": "Anim nostrud occaecat aliquip laborum nisi deserunt. Minim aliqua velit ex dolore officia dolor consequat sit laboris amet id sit velit. Quis esse aliquip do exercitation veniam. Pariatur ea aute est Lorem consectetur adipisicing. Magna sint sit culpa non nulla sint elit cupidatat dolor culpa.\r\n",
    "startup-category": "Social"
  },
  {
    "status": "Student",
    "username": "Tyson Howell",
    "password": "Tyson",
    "email": "tysonhowell@snacktion.com",
    "description": "Deserunt deserunt Lorem eu exercitation laborum mollit ullamco ad adipisicing enim fugiat.",
    "startup-name": "EARTHWAX",
    "startup-description": "Reprehenderit in dolore quis dolore tempor est fugiat laboris dolore consectetur sit. Culpa ad Lorem sint eiusmod et qui anim dolor adipisicing et commodo dolor laborum. Pariatur in esse magna consequat Lorem voluptate consequat.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Startup",
    "username": "Hillary Orr",
    "password": "Hillary",
    "email": "hillaryorr@earthwax.com",
    "description": "Et occaecat sint dolor consequat veniam in cupidatat.",
    "startup-name": "TURNLING",
    "startup-description": "Nisi pariatur labore occaecat reprehenderit reprehenderit occaecat velit cupidatat voluptate sunt id. Minim commodo laborum aliquip voluptate. Fugiat qui cupidatat ex ut quis enim ex.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Student",
    "username": "Martinez Murphy",
    "password": "Martinez",
    "email": "martinezmurphy@turnling.com",
    "description": "Aliqua officia est cupidatat aliquip non magna exercitation commodo excepteur est velit.",
    "startup-name": "ISOTERNIA",
    "startup-description": "Ut sit esse anim officia reprehenderit nostrud exercitation dolor do culpa. Ut voluptate consectetur do cillum et anim nisi ea. Occaecat magna amet aute fugiat duis mollit do magna quis cupidatat sint Lorem tempor ea. Anim nulla aliquip eiusmod quis velit cillum mollit ea. Aliquip nulla elit incididunt cillum.\r\n",
    "startup-category": "Innovation"
  },
  {
    "status": "Student",
    "username": "Lester Parker",
    "password": "Lester",
    "email": "lesterparker@isoternia.com",
    "description": "Qui et exercitation deserunt irure dolor incididunt mollit deserunt commodo id.",
    "startup-name": "RETROTEX",
    "startup-description": "Anim excepteur aute id sit Lorem aliquip duis amet commodo culpa et in consectetur officia. Aute incididunt eu est magna cillum dolore enim ut labore cupidatat sunt consectetur. Do cillum ut tempor dolore dolor eu.\r\n",
    "startup-category": "E-Commerce"
  },
  {
    "status": "Startup",
    "username": "Nanette Vazquez",
    "password": "Nanette",
    "email": "nanettevazquez@retrotex.com",
    "description": "Voluptate duis mollit esse amet.",
    "startup-name": "DYNO",
    "startup-description": "Anim anim exercitation laborum adipisicing nisi commodo in Lorem sint et enim. Magna excepteur fugiat nulla est dolore duis consectetur adipisicing magna cupidatat non deserunt ipsum. Anim ex ut labore anim cupidatat magna laboris sit mollit est et. Anim commodo fugiat elit sint consequat commodo magna est consectetur eu laboris eu.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Student",
    "username": "Abbott Sellers",
    "password": "Abbott",
    "email": "abbottsellers@dyno.com",
    "description": "Est anim incididunt enim ea sit irure ut.",
    "startup-name": "ISOSTREAM",
    "startup-description": "Nostrud ullamco ut nostrud ut exercitation anim. Eu aliquip excepteur dolore Lorem laboris deserunt amet pariatur ipsum ad. Elit est nostrud elit Lorem sunt sint. Ipsum incididunt elit cillum sit ullamco sint ipsum irure dolor proident aute commodo. Est do eiusmod esse nisi occaecat exercitation est cillum ut minim nulla commodo ullamco. Elit id deserunt cillum nisi culpa in voluptate nostrud commodo. Est eiusmod laboris aliquip nisi qui.\r\n",
    "startup-category": "Social"
  },
  {
    "status": "Startup",
    "username": "Cruz Peterson",
    "password": "Cruz",
    "email": "cruzpeterson@isostream.com",
    "description": "Reprehenderit consectetur tempor ut magna elit cillum exercitation.",
    "startup-name": "TERRASYS",
    "startup-description": "Qui ad veniam Lorem officia anim aliqua commodo. Ullamco ea veniam ad nulla et magna pariatur. Aliqua commodo occaecat nostrud reprehenderit deserunt ut consequat occaecat et. Dolor dolore culpa sit cillum adipisicing ad ex id eiusmod qui laboris duis commodo excepteur. Cillum nostrud laborum pariatur qui deserunt qui minim. Fugiat velit quis fugiat nisi officia aute quis nisi veniam esse. Irure velit non laborum amet eu.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Startup",
    "username": "Dean Barrera",
    "password": "Dean",
    "email": "deanbarrera@terrasys.com",
    "description": "Et pariatur nulla aliqua non et ullamco amet minim dolor nisi sunt ipsum magna.",
    "startup-name": "BLEENDOT",
    "startup-description": "Incididunt adipisicing velit aute proident incididunt fugiat pariatur non. Consequat ut sunt velit ut excepteur officia. Ipsum duis commodo sit officia pariatur proident esse duis. Id dolor nostrud officia non qui sunt veniam voluptate pariatur culpa elit.\r\n",
    "startup-category": "Education"
  },
  {
    "status": "Startup",
    "username": "Wilkinson Patel",
    "password": "Wilkinson",
    "email": "wilkinsonpatel@bleendot.com",
    "description": "Qui non dolor labore nisi proident consectetur Lorem nulla est ut enim nulla eiusmod deserunt.",
    "startup-name": "EMPIRICA",
    "startup-description": "Sunt aute aliquip occaecat laborum cupidatat cillum sint deserunt anim. Nostrud eiusmod deserunt mollit velit excepteur non duis sint culpa in. Deserunt officia veniam velit exercitation eiusmod incididunt in cillum velit laboris quis est officia.\r\n",
    "startup-category": "Medical"
  },
  {
    "status": "Startup",
    "username": "Coffey Tanner",
    "password": "Coffey",
    "email": "coffeytanner@empirica.com",
    "description": "Ad ex incididunt laborum incididunt adipisicing Lorem qui ad dolore cillum veniam nostrud et.",
    "startup-name": "MAGNEMO",
    "startup-description": "Culpa do elit elit est consequat qui voluptate laborum. Cillum ipsum voluptate ullamco do. Elit cupidatat excepteur deserunt veniam eiusmod aute eu duis exercitation ex commodo anim deserunt fugiat. Do pariatur qui aliquip Lorem esse velit non aute aliquip fugiat id ex amet labore. Cupidatat proident fugiat labore excepteur elit incididunt sint occaecat. Ea fugiat sint duis esse id.\r\n",
    "startup-category": "Education"
  },
  {
    "status": "Student",
    "username": "Goodman Giles",
    "password": "Goodman",
    "email": "goodmangiles@magnemo.com",
    "description": "Enim fugiat do nulla nostrud consectetur aliqua dolore officia nulla.",
    "startup-name": "ENJOLA",
    "startup-description": "In occaecat pariatur velit veniam laboris exercitation veniam excepteur aliqua occaecat culpa adipisicing. Voluptate do aute do occaecat eu. Ut et consectetur fugiat in labore minim in ipsum et. Officia pariatur cillum nulla nulla. Esse pariatur amet quis quis ullamco do sit nisi. Nulla velit enim officia qui dolor est. Do pariatur laborum culpa adipisicing.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Colette Hunt",
    "password": "Colette",
    "email": "colettehunt@enjola.com",
    "description": "Lorem ea adipisicing sit eu tempor consequat proident enim anim labore officia duis minim irure.",
    "startup-name": "EQUITOX",
    "startup-description": "Occaecat quis ex dolor exercitation pariatur irure. Consequat irure duis proident qui culpa Lorem est in commodo tempor. Dolor in culpa ea cillum ad nulla id eiusmod ex eu.\r\n",
    "startup-category": "Tech"
  },
  {
    "status": "Student",
    "username": "Marks Bright",
    "password": "Marks",
    "email": "marksbright@equitox.com",
    "description": "Fugiat sunt ad commodo anim aliquip reprehenderit ut.",
    "startup-name": "EXPOSA",
    "startup-description": "Eu veniam ad Lorem irure cupidatat. Culpa ut velit aliqua consectetur esse sint. Aliqua quis eiusmod proident nisi velit eu ipsum cillum. Sint laborum anim laborum nulla anim pariatur cupidatat proident commodo pariatur ullamco enim. Pariatur ea consequat mollit culpa anim ad nulla cupidatat.\r\n",
    "startup-category": "E-Commerce"
  },
  {
    "status": "Student",
    "username": "Kramer Bush",
    "password": "Kramer",
    "email": "kramerbush@exposa.com",
    "description": "Sit non tempor dolor est aute nisi nisi.",
    "startup-name": "OBONES",
    "startup-description": "Ullamco do est laborum sint ex est fugiat. Laboris nisi cillum elit cupidatat mollit. Officia nostrud eu sit nulla in laborum fugiat nisi. Elit id laborum labore adipisicing minim ut magna commodo id aliquip dolor sunt ea. Velit magna nulla amet id nulla. Aliqua deserunt fugiat amet commodo quis magna aliqua magna eu.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Startup",
    "username": "Jacqueline Hatfield",
    "password": "Jacqueline",
    "email": "jacquelinehatfield@obones.com",
    "description": "Laboris officia nostrud eu velit nulla proident non labore eu tempor dolore voluptate enim exercitation.",
    "startup-name": "BOLAX",
    "startup-description": "Officia adipisicing excepteur duis mollit officia duis sunt cillum nostrud veniam incididunt excepteur ad. Adipisicing ullamco voluptate nostrud nisi commodo cupidatat proident. Veniam veniam esse id est amet. Eiusmod aute in commodo ea. Tempor veniam veniam ipsum eu Lorem ipsum adipisicing magna. Ullamco quis nulla ullamco do ex officia eiusmod nisi. Velit elit fugiat est dolore laborum voluptate eu.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Startup",
    "username": "Ewing Colon",
    "password": "Ewing",
    "email": "ewingcolon@bolax.com",
    "description": "Reprehenderit enim nulla adipisicing ipsum dolore enim excepteur cupidatat commodo deserunt eiusmod cillum ullamco officia.",
    "startup-name": "SENMEI",
    "startup-description": "Ea est ut exercitation aliqua minim voluptate nostrud ipsum sunt excepteur. Fugiat aliqua officia duis officia. Dolore irure dolore consectetur sunt enim incididunt qui. In sint incididunt eiusmod tempor fugiat minim. Officia pariatur eu eiusmod qui sint sunt exercitation exercitation velit aliqua voluptate. Consequat consectetur elit pariatur non ex minim anim et aliqua ea.\r\n",
    "startup-category": "Social"
  },
  {
    "status": "Startup",
    "username": "Jeannette Kane",
    "password": "Jeannette",
    "email": "jeannettekane@senmei.com",
    "description": "Adipisicing consequat quis cupidatat cupidatat consequat consectetur.",
    "startup-name": "BOILICON",
    "startup-description": "Ea veniam qui ad est et. Est pariatur pariatur non minim Lorem excepteur ex Lorem sunt nostrud id deserunt ex reprehenderit. Est sunt duis sint ut id. Magna amet mollit consectetur eiusmod quis minim eu eiusmod nulla. Irure incididunt sunt anim eiusmod incididunt aliqua voluptate labore dolore dolor deserunt culpa. Excepteur incididunt proident do ad quis aute irure Lorem adipisicing irure.\r\n",
    "startup-category": "Innovation"
  },
  {
    "status": "Startup",
    "username": "Rosario Anderson",
    "password": "Rosario",
    "email": "rosarioanderson@boilicon.com",
    "description": "Exercitation ea officia anim exercitation cupidatat et veniam ut excepteur sit sint elit adipisicing.",
    "startup-name": "CORPORANA",
    "startup-description": "Occaecat adipisicing non et fugiat laborum voluptate esse minim. Fugiat sunt magna consectetur labore. Do do laborum adipisicing amet.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Student",
    "username": "Blankenship Tucker",
    "password": "Blankenship",
    "email": "blankenshiptucker@corporana.com",
    "description": "Anim officia ipsum aliquip sint commodo non adipisicing exercitation sint ipsum tempor Lorem.",
    "startup-name": "ZANILLA",
    "startup-description": "Exercitation magna duis id culpa adipisicing. Sit nisi consequat proident enim exercitation labore sunt qui consectetur veniam duis. Id quis esse excepteur consectetur mollit non ipsum aliquip et qui nisi. Pariatur mollit voluptate enim aliqua. Id sit reprehenderit commodo occaecat sunt aliqua exercitation laborum est ea labore incididunt officia dolor. Velit magna excepteur sint laborum magna fugiat sint amet cillum commodo.\r\n",
    "startup-category": "Social Networking"
  },
  {
    "status": "Startup",
    "username": "Webster Keller",
    "password": "Webster",
    "email": "websterkeller@zanilla.com",
    "description": "Eu est ad magna amet id quis reprehenderit nulla consectetur.",
    "startup-name": "FLEETMIX",
    "startup-description": "Aute excepteur reprehenderit est laboris id ea consectetur exercitation enim consectetur in officia. Labore nostrud do eiusmod esse cillum enim quis cupidatat officia consectetur occaecat mollit. Culpa magna id sunt deserunt et anim pariatur proident ad esse cupidatat. Ut proident et et adipisicing anim nostrud sunt cupidatat ullamco. Lorem duis dolor aliquip culpa elit adipisicing ex nisi aute aliqua tempor aliquip eiusmod pariatur. Aliqua voluptate aliqua tempor in anim. Nostrud ad cupidatat ex aute adipisicing.\r\n",
    "startup-category": "Tech"
  }
]

module.exports = users;