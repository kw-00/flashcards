import { appendFile } from "fs/promises";



const raw = 
` 	das 	the
 	sein 	to be
 	und 	and
 	zu 	to
 	von 	of
 	ein 	a
 	ich 	I
 	im 	in
 	haben 	to have
 	Das 	that
 	er 	he
 	nicht 	not
 	seine 	his
 	ihr 	her
 	es 	it
 	Sie 	you
 	mit 	with
 	zum 	for
 	machen 	to do
 	sie 	she
 	wie 	as
 	auf 	on
 	sagen 	to say
 	beim 	at
 	ihm 	him
 	von 	from
 	aber 	but
 	mir 	me
 	meine 	my
 	gehen 	to go
 	Sie 	they
 	alles 	all
 	durch 	by
 	diese 	this
 	ein 	one
 	aus 	out
 	oben 	up
 	wissen 	to know
 	ein 	an
 	sehen 	to see
 	könnte 	could
 	oder 	or
 	Sie 	them
 	bekommen 	to get
 	wir 	we
 	mögen 	like
 	kommen 	to come
 	Mann 	man
 	Was 	what
 	zu machen 	to make
 	Dort 	there
 	Über 	about
 	welche 	which
 	ihr 	their
 	in 	into
 	denken 	to think
 	sehen 	to look
 	ob 	if
 	Wer 	who
 	wann 	when
 	nehmen 	to take
 	Zeit 	time
 	Nein 	no
 	zurück 	back
 	können 	to can
 	wollen 	to will
 	Ihre 	your
 	Mehr 	more
 	dann 	then
 	Nieder 	down
 	gut 	good
 	Über 	over
 	erzählen 	to tell
 	jetzt 	now
 	Hand 	hand
 	etwas 	some
 	wollen 	to want
 	gerade 	just
 	nur 	only
 	als 	than
 	Weg 	way
 	geben 	to give
 	andere 	other
 	Tag 	day
 	Auge 	eye
 	Vor 	before
 	Fragen 	to ask
 	finden 	to find
 	zwei 	two
 	wenig 	little
 	lange 	long
 	sehr 	very
 	fühlen 	to feel
 	irgendein 	any
 	Ding 	thing
 	auch 	too
 	Hier 	here
 	noch nie 	never
 	verlassen 	to leave
 	Person 	person
 	alt 	old
 	Kopf 	head
 	drehen 	to turn
 	nochmal 	again
 	durch 	through
 	sogar 	even
 	Gesicht 	face
 	viel 	much
 	aus 	off
 	uns 	us
 	zuerst 	first
 	Recht 	right
 	unsere 	our
 	Wie 	how
 	woher 	where
 	nach dem 	after
 	es ist 	its
 	Frau 	woman
 	Weg 	away
 	Leben 	life
 	scheinen 	to seem
 	anrufen 	to call
 	immer noch 	still
 	hören 	to hear
 	Jahr 	year
 	besitzen 	own
 	arbeiten 	to work
 	sollte 	should
 	Platz 	place
 	Zimmer 	room
 	Gut 	well
 	stehen 	to stand
 	müssen 	to must
 	selbst 	himself
 	um 	around
 	Tür 	door
 	zu könnte 	to might
 	etwas 	something
 	versuchen 	to try
 	lieben 	to love
 	Haus 	house
 	Nacht- 	night
 	stellen 	to put
 	großartig 	great
 	eine solche 	such
 	behalten 	to keep
 	sitzen 	to sit
 	zuletzt 	last
 	beginnen 	to begin
 	da 	because
 	jene 	those
 	diese 	these
 	Wort 	word
 	benutzen 	to use
 	benötigen 	to need
 	öffnen 	to open
 	halten 	to hold
 	Ein weiterer 	another
 	während 	while
 	die meisten 	most
 	sprechen 	to talk
 	lassen 	to let
 	auf 	upon
 	weit 	far
 	ohne 	without
 	Zuhause 	home
 	Lächeln 	to smile
 	immer 	always
 	Stimme 	voice
 	Kind 	child
 	Vater 	father
 	gehen 	to walk
 	jung 	young
 	meinen 	to mean
 	nichts 	nothing
 	zu rennen 	to run
 	obwohl 	though
 	Moment 	moment
 	gegen 	against
 	Mutter 	mother
 	gleich 	same
 	Name 	name
 	sprechen 	to speak
 	viele 	many
 	Verstand 	mind
 	wenige 	few
 	bringen 	to bring
 	Licht 	light
 	schließen 	to close
 	Seite 	side
 	je 	ever
 	bewegen 	to move
 	bis Mai 	to may
 	Freund 	friend
 	jeden 	every
 	Arm 	arm
 	drei 	three
 	Einmal 	once
 	genug 	enough
 	werden 	to become
 	Mädchen 	girl
 	unter 	under
 	Neu 	new
 	Ende 	end
 	Leben 	to live
 	ebenfalls 	also
 	helfen 	to help
 	zwischen 	between
 	Welt 	world
 	fallen 	to fall
 	anfangen 	to start
 	jeder 	each
 	warten 	to wait
 	sehen 	to watch
 	stoppen 	to stop
 	etwas 	anything
 	beide 	both
 	Fuß 	foot
 	Teil 	part
 	klein 	small
 	bis um 	until
 	Ja wirklich 	really
 	Antworten 	to answer
 	zeigen 	to show
 	Junge 	boy
 	Sie selber 	herself
 	Lügen 	to lie
 	sicher 	sure
 	Kurs 	course
 	passieren 	to happen
 	glauben 	to believe
 	zurückgeben 	to return
 	hinter 	behind
 	Punkt 	point
 	Nächster 	next
 	noch 	yet
 	Herz 	heart
 	Wasser 	water
 	fast 	almost
 	zu setzen 	to set
 	Karosserie 	body
 	Warum 	why
 	bestehen 	to pass
 	Morgen 	morning
 	Stunde 	hour
 	klingen 	sound
 	treffen 	to meet
 	Gott 	God
 	Weiß 	white
 	erinnern 	to remember
 	nett 	kind
 	hoffen 	to hope
 	erreichen 	to reach
 	sterben 	to die
 	schwer 	hard
 	Schlecht 	bad
 	Hälfte 	half
 	Lachen 	to laugh
 	Familie 	family
 	schon seit 	since
 	hoch 	high
 	Buch 	book
 	Angelegenheit 	matter
 	Schritt 	step
 	wechseln 	to change
 	Frage 	question
 	über 	across
 	verstehen 	to understand
 	Folgen 	to follow
 	zusammen 	together
 	Ehefrau 	wife
 	ziehen 	to pull
 	eine lange 	along
 	Tabelle 	table
 	spielen 	to play
 	verlieren 	to lose
 	groß 	big
 	Weinen 	to cry
 	schwarz 	black
 	Haar 	hair
 	lesen 	to read
 	Vorderseite 	front
 	senden 	to send
 	ziemlich 	quite
 	brechen 	to break
 	mich selber 	myself
 	sollen 	to shall
 	bereits 	already
 	Minute 	minute
 	dunkel 	dark
 	bald 	soon
 	Bett 	bed
 	zu 	toward
 	ganze 	whole
 	Auto 	car
 	Fenster 	window
 	schütteln 	to shake
 	sonst 	else
 	sich ausruhen 	rest
 	Geld 	money
 	Tatsache 	fact
 	Sohn 	son
 	schreiben 	to write
 	Feuer 	fire
 	zweite 	second
 	bleiben 	to stay
 	sich wundern 	to wonder
 	Fall 	case
 	Geschichte 	story
 	Linie 	line
 	wachsen 	to grow
 	Luft 	air
 	wünschen 	to wish
 	habe gedacht 	thought
 	zu erheben 	to rise
 	am wenigsten 	least
 	voll 	full
 	fangen 	to catch
 	führen 	to lead
 	groß 	large
 	erscheinen 	to appear
 	alles 	everything
 	sich kümmern 	to care
 	tragen 	to carry
 	Tod 	death
 	schlafen 	to sleep
 	töten 	to kill
 	Idee 	idea
 	Antworten 	to reply
 	tragen 	to wear
 	Wand 	wall
 	fahren 	to drive
 	nahe 	near
 	zeichnen 	to draw
 	Schulter 	shoulder
 	Woche 	week
 	Vergangenheit 	past
 	tot 	dead
 	früh 	early
 	anstarren 	to stare
 	allein 	alone
 	Sinn 	sense
 	Mund 	mouth
 	lieber 	rather
 	ertragen 	to bear
 	vier 	four
 	weitermachen 	to continue
 	Baum 	tree
 	Bruder 	brother
 	Grund 	reason
 	Pferd 	horse
 	Andere 	others
 	Auftrag 	order
 	Menge 	lot
 	fünf 	five
 	berühren 	to touch
 	runden 	round
 	tief 	deep
 	Brief 	letter
 	Fräulein 	Miss
 	vermuten 	to suppose
 	Macht 	force
 	Stadt, Dorf 	town
 	Essen 	to eat
 	klar 	clear
 	heiraten 	to marry
 	werfen 	to throw
 	Land 	country
 	vorhanden 	present
 	Innerhalb 	inside
 	Fußboden 	floor
 	bezahlen 	to pay
 	nicken 	to nod
 	Finger 	finger
 	bleiben 	to remain
 	reißen 	tear
 	Straße 	street
 	Dame 	lady
 	Weniger 	less
 	Angst 	fear
 	jemand 	someone
 	Geschäft 	business
 	fähig 	able
 	Stuhl 	chair
 	vergessen 	to forget
 	nehmen 	to pick
 	zu erwarten 	to expect
 	rot 	red
 	Leistung 	power
 	flüchtig hinblicken 	to glance
 	vielleicht 	perhaps
 	kurz 	short
 	Boden 	ground
 	wahr 	true
 	Lippe 	lip
 	echt 	real
 	sich anziehen 	to dress
 	Monat 	month
 	zuhören 	to listen
 	spät 	late
 	Schule 	school
 	entweder 	either
 	wem 	whom
 	niedrig 	low
 	unter 	among
 	Mann 	husband
 	hinzufügen 	to add
 	anders 	different
 	fallen lassen 	to drop
 	trinken 	to drink
 	lernen 	to learn
 	plötzlich 	suddenly
 	Papier- 	paper
 	Land 	land
 	Sortieren 	sort
 	häufig 	often
 	Abend 	evening
 	über 	above
 	hundert 	hundred
 	zu entscheiden 	to decide
 	bemerken 	to notice
 	Tochter 	daughter
 	Büro 	office
 	kalt 	cold
 	Zahl 	figure
 	Straße 	road
 	Gefühl 	feeling
 	hängen 	to hang
 	schneiden 	to cut
 	Nummer 	number
 	fein 	fine
 	Stadt 	city
 	überraschen 	to surprise
 	zu erhöhen 	to raise
 	füllen 	to fill
 	mehrere 	several
 	wessen 	whose
 	Arm 	poor
 	sicher 	certain
 	planen 	plan
 	wahrscheinlich 	probably
 	vor 	ago
 	oben 	top
 	verursachen 	to cause
 	betreten 	to enter
 	bereit 	ready
 	Blau 	blue
 	innerhalb 	within
 	sich 	themselves
 	nach vorne 	forward
 	Schwester 	sister
 	ausgeben 	to spend
 	Zustand 	state
 	jedoch 	however
 	kämpfen 	to fight
 	stark 	strong
 	küssen 	to kiss
 	während 	during
 	bisschen 	bit
 	bitte 	to please
 	draußen 	outside
 	Bein 	leg
 	sehr geehrter 	dear
 	glücklich 	happy
 	Traum 	dream
 	Hinweis 	note
 	falsch 	wrong
 	um festzustellen 	to realize
 	Interesse 	interest
 	Blut 	blood
 	schnell 	quickly
 	erklären 	to explain
 	Wind 	wind
 	Mensch 	human
 	Herr 	Lord
 	Reiten 	to ride
 	zudecken 	to cover
 	lehnen 	to lean
 	erlauben 	to allow
 	zehn 	ten
 	Zweifel 	doubt
 	zwanzig 	twenty
 	Herr 	sir
 	wunderschönen 	beautiful
 	Krieg 	war
 	ziemlich 	pretty
 	langsam 	slowly
 	möglich 	possible
 	Ärger 	trouble
 	besuchen 	to visit
 	Chance 	chance
 	drücken 	to push
 	kostenlos 	free
 	Atem 	breath
 	Stück 	piece
 	Sonne 	sun
 	Wahrheit 	truth
 	ankommen 	to arrive
 	sich überlegen 	to consider
 	ob 	whether
 	zu handeln 	to act
 	selbst 	itself
 	Noch 	nor
 	jemand 	anyone
 	Zeichen 	sign
 	Deal 	deal
 	kreuzen 	to cross
 	Glas 	glass
 	Job 	job
 	beenden 	to finish
 	Flüstern 	to whisper
 	studieren 	to study
 	bilden 	form
 	einfach 	easy
 	Alter 	age
 	Bild 	picture
 	sechs 	six
 	endlich 	finally
 	kaufen 	to buy
 	Stille 	silence
 	Hund 	dog
 	liegen 	to lay
 	Sicht 	sight
 	Ohr 	ear
 	anbieten 	to offer
 	Schiff 	ship
 	dich selbst 	yourself
 	gegenüber 	towards
 	Meer 	sea
 	Ring 	ring
 	Versprechen 	to promise
 	heben 	to lift
 	fliegen 	to fly
 	tausend 	thousand
 	raten 	to guess
 	Ecke 	corner
 	sich Sorgen machen 	to worry
 	Aussicht 	view
 	Problem 	problem
 	neben 	beside
 	Telefon 	phone
 	Beachtung 	attention
 	verstecken 	to hide
 	vermissen 	to miss
 	Blick 	gaze
 	Polizei 	police
 	speichern 	to save
 	Party 	party
 	Englisch 	English
 	Stein 	stone
 	seltsam 	strange
 	Baby 	baby
 	ängstlich 	afraid
 	Schmerzen 	pain
 	Welle 	wave
 	Küche 	kitchen
 	zustimmen 	to agree
 	streiken 	to strike
 	drücken 	to press
 	Grün 	green
 	Paar 	couple
 	Kerl 	guy
 	Es tut uns leid 	sorry
 	Erfahrung 	experience
 	bis 	till
 	amerikanisch 	American
 	könnte sein 	maybe
 	Sitz 	seat
 	Rollen 	to roll
 	tatsächlich 	indeed
 	Blasen 	to blow
 	manchmal 	sometimes
 	schwer 	heavy
 	Seele 	soul
 	wichtig 	important
 	Kind 	kid
 	betreffen 	to concern
 	Bergwerk 	mine
 	Position 	position
 	heiß 	hot
 	Arzt 	doctor
 	darüber hinaus 	beyond
 	rufen 	to shout
 	Gegenstand 	subject
 	Abendessen 	dinner
 	überprüfen 	to check
 	Geist 	spirit
 	Nachmittag 	afternoon
 	Offizier 	officer
 	ruhig 	quiet
 	Verlangen 	desire
 	außer 	except
 	Erde 	earth
 	vorstellen 	to imagine
 	pausieren 	to pause
 	sich nähern 	to approach
 	Hals 	neck
 	Meile 	mile
 	Weise 	manner
 	beitreten 	to join
 	Lebensmittel 	food
 	Gebäude 	building
 	zu bleiben 	to stick
 	Kante 	edge
 	Feld 	field
 	Natur 	nature
 	Fluss 	river
 	Rock 	rock
 	Gewehr 	gun
 	zu erwähnen 	to mention
 	Gerade 	straight
 	breit 	wide
 	Unternehmen 	company
 	Himmel 	sky
 	schießen 	to shoot
 	Holz 	wood
 	schlagen 	to hit
 	tanzen 	to dance
 	Menge 	crowd
 	brennen 	to burn
 	Gefährte 	fellow
 	Ausdruck 	expression
 	Box 	box
 	Steuerung 	control
 	Kirche 	church
 	Seufzen 	to sigh
 	jeder 	everyone
 	wählen 	to choose
 	Teilen 	to share
 	vorschlagen 	to suggest
 	König 	king
 	Elternteil 	parent
 	nett 	nice
 	rutschen 	to slip
 	bauen 	to build
 	auf zu 	onto
 	fast 	nearly
 	Erinnerung 	memory
 	Kleider 	clothes
 	Bericht 	report
 	einfach 	simply
 	akzeptieren 	to accept
 	zu genießen 	to enjoy
 	Haut 	skin
 	Geheimnis 	secret
 	bestimmt 	certainly
 	Spiel 	game
 	Konversation 	conversation
 	Boot 	boat
 	leeren 	empty
 	heute 	today
 	Hölle 	hell
 	dienen 	to serve
 	weich 	soft
 	fliehen 	to escape
 	Ton 	tone
 	hassen 	to hate
 	Richtung 	direction
 	Versuch 	attempt
 	obwohl 	although
 	Gruppe 	group
 	Wange 	cheek
 	Tasche 	pocket
 	managen 	to manage
 	Ja 	yes
 	suchen 	to search
 	riechen 	to smell
 	Frühling 	spring
 	Allgemeines 	general
 	Mitte 	middle
 	Konto 	account
 	links 	left
 	genau 	exactly
 	Bedienung 	service
 	folgenden 	following
 	verletzen 	to hurt
 	aufladen 	charge
 	Öffentlichkeit 	public
 	siedeln 	to settle
 	Vergnügen 	pleasure
 	stattdessen 	instead
 	entdecken 	to discover
 	Gentleman 	gentleman
 	Gold 	gold
 	was auch immer 	whatever
 	Nachrichten 	news
 	Knie 	knee
 	hell 	bright
 	sofort 	immediately
 	froh 	glad
 	schlagen 	to beat
 	schnell 	fast
 	Single 	single
 	tatsächlich 	actually
 	Entfernung 	distance
 	bekommen 	to receive
 	Stelle 	spot
 	Szene 	scene
 	zu fordern 	to demand
 	zugeben 	to admit
 	Zug 	train
 	Klasse 	class
 	Tier 	animal
 	Schreibtisch 	desk
 	Halle 	hall
 	Brust 	chest
 	Meister 	master
 	Kaffee 	coffee
 	Vertrauen 	to trust
 	bewachen 	guard
 	Leise 	silent
 	bewirken 	effect
 	Schatten 	shadow
 	singen 	to sing
 	Tasche 	bag
 	beweisen 	to prove
 	Französisch 	French
 	hoch 	tall
 	unter 	beneath
 	suchen 	to seek
 	keiner 	none
 	zu eilen 	to rush
 	Berg 	mountain
 	vorbereiten 	to prepare
 	Soldat 	soldier
 	kaum 	hardly
 	Bar 	bar
 	Grinsen 	to grin
 	Geschichte 	history
 	sauber 	clean
 	verkaufen 	to sell
 	Ehe 	marriage
 	Aktion 	action
 	Dorf 	village
 	Mitglied 	member
 	Zukunft 	future
 	Hügel 	hill
 	insbesondere 	especially
 	Garten 	garden
 	Süss 	sweet
 	Regen 	rain
 	Charakter 	character
 	Reisen 	to travel
 	Attacke 	attack
 	schließen 	to shut
 	Rauch 	smoke
 	sicher 	safe
 	Platz 	space
 	Bereich 	area
 	unten 	below
 	Situation 	situation
 	zu betrachten 	to regard
 	ablehnen 	to refuse
 	dreißig 	thirty
 	trocken 	dry
 	springen 	to jump
 	wiederholen 	to repeat
 	abschließen 	to lock
 	Kunst 	art
 	voraus 	ahead
 	dritte 	third
 	schnell 	quick
 	Hemd 	shirt
 	gewinnen 	to win
 	Nase 	nose
 	Sommer- 	summer
 	Kehle 	throat
 	Anstrengung 	effort
 	einfach 	simple
 	Begriff 	term
 	Lehren 	to teach
 	Rennen 	race
 	schleppend 	slow
 	Pflicht 	duty
 	Musik- 	music
 	indisch 	Indian
 	Veranstaltung 	event
 	Blume 	flower
 	markieren 	to mark
 	Vogel 	bird
 	zu sammeln 	to gather
 	Herr 	Mr
 	Gericht 	court
 	Treffen 	meeting
 	schreien 	to scream
 	Hut 	hat
 	Versagen 	to fail
 	klettern 	to climb
 	Mord 	murder
 	passen 	to fit
 	weder 	neither
 	dünn 	thin
 	Ergebnis 	result
 	sich beeilen 	to hurry
 	Komplett 	complete
 	Zahn 	tooth
 	zu binden 	to tie
 	Zweck 	purpose
 	Seite 	page
 	somit 	thus
 	passen 	suit
 	Feind 	enemy
 	Jahrhundert 	century
 	sich abmühen 	to struggle
 	üblich 	usual
 	Objekt 	object
 	aufwachen 	to wake
 	Reich 	rich
 	beanspruchen 	to claim
 	Messe 	fair
 	verbreitet 	common
 	Stärke 	strength
 	dick 	thick
 	Zeug 	stuff
 	Respekt 	respect
 	zu adressieren 	to address
 	Leben 	living
 	Sieben 	seven
 	erkennen 	to recognize
 	sollte 	to ought
 	zu unterstützen 	to support
 	Hof 	yard
 	greifen 	to grab
 	braun 	brown
 	Befehl 	command
 	Gegenwart 	presence
 	beschreiben 	to describe
 	Mantel 	coat
 	Bahnhof 	station
 	notwendig 	necessary
 	sinken 	to sink
 	Bank 	bank
 	Strecken 	to stretch
 	perfekt 	perfect
 	leiden 	to suffer
 	plötzlich 	sudden
 	verschwinden 	to disappear
 	acht 	eight
 	Pfad 	path
 	besonders 	particular
 	verbreiten 	to spread
 	Dunkelheit 	darkness
 	treppe 	stair
 	danken 	to thank
 	Bewegung 	movement
 	schwer 	difficult
 	Geschäft 	shop
 	blass 	pale
 	gehören 	to belong
 	Sprache 	language
 	Besondere 	special
 	ernst 	serious
 	erinnern 	to remind
 	bereitstellen 	to provide
 	eng 	narrow
 	Bedingung 	condition
 	biegen 	to bend
 	Star 	star
 	Flasche 	bottle
 	am Leben 	alive
 	Schlüssel 	key
 	Schaukeln 	to swing
 	laut 	loud
 	ruhig 	quietly
 	Fehler 	mistake
 	beobachten 	to observe
 	zu bemerken 	to remark
 	Schönheit 	beauty
 	vorsichtig 	carefully
 	Tor 	gate
 	klopfen 	to knock
 	schlittern 	to slide
 	bewusst 	aware
 	zu entfernen 	to remove
 	vollständig 	completely
 	sich trauen 	to dare
 	Diener 	servant
 	biegen 	to bow
 	Kreis 	circle
 	Aufzeichnung 	record
 	Tee 	tea
 	wütend 	angry
 	persönlich 	personal
 	Wolke 	cloud
 	Regel 	rule
 	Schlacht 	battle
 	Tafel 	board
 	Privatgelände 	private
 	Wunde 	wound
 	natürlich 	natural
 	irgendwo 	somewhere
 	her 	forth
 	Geschmack 	taste
 	reparieren 	to fix
 	leicht 	easily
 	sowieso 	anyway
 	Kreatur 	creature
 	Länge 	length
 	Geschäft 	store
 	frisch 	fresh
 	Wein 	wine
 	Wohnung 	apartment
 	Gelegenheit 	occasion
 	Bild 	image
 	System 	system
 	Richter 	judge
 	Zunge 	tongue
 	Pfund 	pound
 	Tasse 	cup
 	erschaffen 	to create
 	gestalten 	shape
 	wert 	worth
 	Lied 	song
 	produzieren 	to produce
 	heute Abend 	tonight
 	krank 	ill
 	Schnee 	snow
 	Niveau 	level
 	täuschen 	fool
 	deshalb 	therefore
 	zählen 	to count
 	krank 	sick
 	Sozial 	social
 	Morgen 	tomorrow
 	Detail 	detail
 	Meinung 	opinion
 	zucken 	to shrug
 	involvieren 	to involve
 	Dollar 	dollar
 	enorm 	huge
 	zu arm 	to pour
 	Brust 	breast
 	ermüden 	to tire
 	leicht 	slightly
 	Lager 	camp
 	Beispiel 	example
 	Ausflug 	trip
 	Hotel 	hotel
 	Paar 	pair
 	Geschichte 	tale
 	aufblitzen 	to flash
 	wahrscheinlich 	likely
 	meistens 	usually
 	unmöglich 	impossible
 	furchtbar 	terrible
 	Gesellschaft 	society
 	stehlen 	to steal
 	Frieden 	peace
 	Botschaft 	message
 	Schlafzimmer 	bedroom
 	Affäre 	affair
 	passieren 	to occur
 	benötigen 	to require
 	Schuh 	shoe
 	zu planen 	to intend
 	Hitze 	heat
 	Farbe 	color
 	Heer 	army
 	Fremder 	stranger
 	beschäftigt 	busy
 	grau 	gray
 	Deutsche 	German
 	enthalten 	to contain
 	Gelb 	yellow
 	Karte 	card
 	Scharf 	sharp
 	behandeln 	to treat
 	Ruhe 	calm
 	Ball 	ball
 	Unterseite 	bottom
 	Achtung 	danger
 	gesamte 	entire
 	bestimmen 	to determine
 	nur 	merely
 	Fisch 	fish
 	Main 	main
 	anstreichen 	to paint
 	zu gießen 	to cast
 	Autor 	author
 	Lärm 	noise
 	Zorn 	anger
 	Unterschied 	difference
 	Gast 	guest
 	vermuten 	to suspect
 	Schock 	shock
 	Schuss 	shot
 	Chef 	chief
 	Leuchten 	to shine
 	waschen 	to wash
 	atmen 	to breathe
 	Regierung 	government
 	vermeiden 	to avoid
 	Praktikum 	stage
 	fünfzig 	fifty
 	Loch 	hole
 	Schriftsteller 	writer
 	zu platzen 	to burst
 	Wahl 	choice
 	Silber 	silver
 	ausrufen 	to exclaim
 	Typ 	type
 	winzig 	tiny
 	Gras 	grass
 	zu lenken 	to direct
 	Aussehen 	appearance
 	Amerika 	America
 	wunderbar 	wonderful
 	zu packen 	to pack
 	Krankenhaus 	hospital
 	ihrs 	hers
 	sanft 	gently
 	leise 	softly
 	verfolgen 	track
 	Beweise 	evidence
 	böse 	evil
 	zu enthüllen 	to reveal
 	zu existieren 	to exist
 	zu ziehen 	to drag
 	zu beten 	to pray
 	Wissen 	knowledge
 	zum Ausdruck bringen 	to express
 	beiseite 	aside
 	vertraut 	familiar
 	Gott 	god
 	Zeitraum 	period
 	blockieren 	block
 	klar 	clearly
 	zu murmeln 	to murmur
 	posten 	post
 	Stream 	stream
 	fegen 	to sweep
 	Umstand 	circumstance
 	darauf bestehen 	to insist
 	Viertel 	quarter
 	Gehirn 	brain
 	schlicht 	plain
 	flach 	flat
 	Problem 	issue
 	Basis 	base
 	Freude 	delight
 	Insel 	island
 	Gelegenheit 	opportunity
 	Pflanze 	plant
 	Freude 	joy
 	zu verschieben 	to shift
 	Beziehung 	relationship
 	Messer 	knife
 	zu bürsten 	to brush
 	gering 	slight
 	verdammt 	damn
 	zu zittern 	to tremble
 	zu diskutieren 	to discuss
 	verschiedene 	various
 	Wert 	value
 	parken 	park
 	Sex 	sex
 	lokal 	local
 	Jugend 	youth
 	üben 	practice
 	Gesetz 	wet
 	Frühstück 	breakfast
 	Kapitän 	captain
 	zu zerstören 	to destroy
 	Reise 	journey
 	Sonntag 	Sunday
 	irgendwie 	somehow
 	zu runzeln 	to frown
 	zu wickeln 	to wrap
 	Katze 	cat
 	gebunden 	bound
 	trösten 	comfort
 	Geste 	gesture
 	Priester 	priest
 	Frankreich 	France
 	zu handhaben 	to handle
 	Himmel 	heaven
 	Zeuge 	witness
 	zu erhöhen 	to increase
 	Funktion 	feature
 	zu treten 	to kick
 	anzunehmen 	to assume
 	eingeschlafen 	asleep
 	zu erinnern 	to recall
 	Spiel 	match
 	eng 	tight
 	Wald 	forest
 	zu schützen 	to protect
 	fehlen 	lack
 	Begleiter 	companion
 	ganz 	entirely
 	Entscheidung 	decision
 	einzuschließen 	to include
 	Spur 	trail
 	einladen 	to invite
 	Emotion 	emotion
 	Knochen 	bone
 	Uhr 	o’clock
 	zu umgeben 	to surround
 	endgültig 	final
 	Oberfläche 	surface
 	Kisten 	dozen
 	zu erklären 	to declare
 	Waffe 	weapon
 	zentrieren 	center
 	herzlich willkommen 	welcome
 	Verbrechen 	crime
 	gewicht 	weight
 	Liebhaber 	lover
 	Schwert 	sword
 	Liste 	list
 	Datum 	date
 	zu besuchen 	to attend
 	Rede 	speech
 	zu versichern 	to assure
 	zu schnappen 	to snap
 	Bewegung 	motion
 	Leidenschaft 	passion
 	vorrücken 	to advance
 	willen 	sake
 	Einfluss 	influence
 	es sei denn 	unless
 	Geschwindigkeit 	speed
 	Leute 	folk
 	Sturm 	storm
 	Mond 	moon
 	zu füttern 	to feed
 	politisch 	political
 	betteln 	to beg
 	zu vereinbaren 	to accord
 	Maschine 	machine
 	vierzig 	forty
 	neun 	nine
 	freizugeben 	to release
 	Norden 	north
 	Onkel 	uncle
 	uralt 	ancient
 	traurig 	sad
 	Britisch 	British
 	schwach 	faint
 	verdoppeln 	double
 	Grab 	grave
 	Mittagessen 	lunch
 	sofort 	instant
 	Platte 	plate
 	zu begraben 	to bury
 	perfekt 	perfectly
 	lieblich 	lovely
 	deins 	yours
 	Eis 	ice
 	zu trennen 	to separate
 	zu beißen 	to bite
 	Raub 	roof
 	zu schwören 	to swear
 	Zoll 	inch
 	Fahrer 	driver
 	Spiegel 	mirror
 	Bauch 	stomach
 	sein 	being
 	zu gewinnen 	to gain
 	zu ignorieren 	to ignore
 	ok 	okay
 	zu antworten 	to respond
 	niemand 	nobody
 	gegenüber 	opposite
 	sich die Mühe machen 	to bother
 	zu arrangieren 	to arrange
 	Boot 	boot
 	Staub 	dust
 	zu reiben 	to rub
 	direkt 	directly
 	glühen 	glow
 	schreien 	to yell
 	individuell 	individual
 	Krankenschwester 	nurse
 	Frau 	Mrs
 	Vision 	vision
 	zu verschwenden 	to waste
 	stolz 	proud
 	verrückt 	mad
 	Behörde 	authority
 	Kontakt 	contact
 	zeitung 	newspaper
 	Weihnachten 	Christmas
 	Risiko 	risk
 	besonders 	particularly
 	Abschluss 	degree
 	früher 	former
 	etwas 	somewhat
 	Stil 	style
 	jemanden 	somebody
 	zu besitzen 	to possess
 	LKW 	truck
 	interessant 	interesting
 	witz 	joke
 	zu murmeln 	to mutter
 	Eigentum 	property
 	kahl 	bare
 	Fleisch 	flesh
 	Erleichterung 	relief
 	zu zögern 	to hesitate
 	zu erleichtern 	to ease
 	greifen 	grip
 	zu springen 	to leap
 	versorgung 	supply
 	zu unterbrechen 	to interrupt
 	Mahlzeit 	meal
 	Cousin 	cousin
 	verarbeiten 	process
 	weiblich 	female
 	Verlust 	loss
 	Zigarette 	cigarette
 	Eisen 	iron
 	zu überzeugen 	to convince
 	getrennt 	apart
 	Lust 	fancy
 	Reihe 	row
 	Schritt 	pace
 	zweimal 	twice
 	fließen 	to flow
 	geduldig 	patient
 	vorzutäuschen 	to pretend
 	Größe 	size
 	kaum 	barely
 	Hochzeit 	wedding
 	ankündigen 	to announce
 	Gelächter 	laughter
 	Blatt 	sheet
 	Design 	design
 	zu kochen 	to cook
 	deine 	thy
 	Rad 	wheel
 	erfolg 	success
 	gefährlich 	dangerous
 	süden 	south
 	wach 	awake
 	locker 	loose
 	Stirn 	forehead
 	breit 	broad
 	Wüste 	desert
 	umrühren 	to stir
 	Schlaganfall 	stroke
 	Flügel 	wing
 	zu warnen 	to warn
 	zu falten 	to fold
 	Haufen 	pile
 	Flamme 	flame
 	Eingang 	entrance
 	Herr 	lord
 	zu segeln 	to sail
 	vorstellen 	to introduce
 	glatt 	smooth
 	mächtig 	powerful
 	kosten 	cost
 	Millionen 	million
 	Glaube 	faith
 	zu schlucken 	to swallow
 	Brücke 	bridge
 	Student 	student
 	messen 	measure
 	alle zusammen 	everybody
 	Glück 	fortune
 	fällig 	due
 	sanft 	gentle
 	zu untersuchen 	to examine
 	verrückt 	crazy
 	spaß 	fun
 	Stolz 	pride
 	männlich 	male
 	zu engagieren 	to engage
 	Test 	test
 	Rahmen 	frame
 	Realität 	reality
 	sauber 	proper
 	zu reflektieren 	to reflect
 	zu wandern 	to wander
 	zu vertreten 	to represent
 	Bauernhof 	farm
 	wetter 	weather
 	zu befriedigen 	to satisfy
 	Schwierigkeit 	difficulty
 	schwach 	weak
 	bedeutung 	meaning
 	Flug 	flight
 	angenehm 	pleasant
 	Deck 	deck
 	vorsichtig 	careful
 	Platz 	square
 	Entschuldigung 	excuse
 	fest 	firm
 	Zweig 	branch
 	abwischen 	to wipe
 	Preis 	price
 	zwölf 	twelve
 	Anwalt 	lawyer
 	Spur 	trace
 	Gebet 	prayer
 	irgendjemand 	anybody
 	Ehre 	honor
 	Glocke 	bell
 	Geschenk 	gift
 	Christus 	Christ
 	Energie 	energy
 	möglicherweise 	possibly
 	Gewohnheit 	habit
 	bereit 	willing
 	Qualität 	quality
 	werfen 	to toss
 	Schuld 	fault
 	zu senken 	to lower
 	sicher 	surely
 	anscheinend 	apparently
 	zu streiten 	to argue
 	Anfang 	beginning
 	gut aussehend 	handsome
 	tief 	deeply
 	schuld 	to blame
 	zu protestieren 	to protest
 	Gefangener 	prisoner
 	anzugeben 	to indicate
 	Tee 	thee
 	zu verdrehen 	to twist
 	Jacke 	jacket
 	Held 	hero
 	Glück 	luck
 	Inhalt 	content
 	zu informieren 	to inform
 	zu verhindern 	to prevent
 	Glück 	happiness
 	aufrichtig 	truly
 	zu entwickeln 	to develop
 	Kinn 	chin
 	zu ruinieren 	to ruin
 	zu knacken 	to crack
 	Führer 	leader
 	gestern 	yesterday
 	fünfzehn 	fifteen
 	aus Holz 	wooden
 	zu liefern 	to deliver
 	Material 	material
 	Antwort 	response
 	Passage 	passage
 	dumm 	stupid
 	Mode 	fashion
 	Aufgabe 	task
 	neugierig 	curious
 	Erfolg haben 	to succeed
 	weise 	wise
 	Menge 	amount
 	telefon 	telephone
 	zu leugnen 	to deny
 	zu graben 	to dig
 	Gesetz 	law
 	zu drängen 	to urge
 	für immer 	forever
 	Gemeinschaft 	community
 	physisch 	physical
 	Quelle 	source
 	Handfläche 	palm
 	Lehrer 	teacher
 	Sklave 	slave
 	fett 	fat
 	zu bevorzugen 	to prefer
 	Militär 	military
 	Brot 	bread
 	zu verweisen 	to refer
 	Kabine 	cabin
 	voll 	fully
 	unfähig 	unable
 	zu begleiten 	to accompany
 	um fortzufahren 	to proceed
 	zu tauschen 	to exchange
 	Masse 	mass
 	Anfrage 	request
 	zu etablieren 	to establish
 	komisch 	odd
 	Ufer 	shore
 	zu führen 	to guide
 	uns selbst 	ourselves
 	bloß 	mere
 	beziehung 	relation
 	drohen 	to threaten
 	bewerten 	rate
 	zu fluchen 	to curse
 	tragen 	beer
 	entfernt 	distant
 	offensichtlich 	obvious
 	Kommentar 	comment
 	edel 	noble
 	Vorteil 	advantage
 	Trotz 	spite
 	Datei 	file
 	möglichkeit 	possibility
 	zu leiten 	to conduct
 	zu verblassen 	to fade
 	zu konzentrieren 	to focus
 	Bildschirm 	screen
 	Existenz 	existence
 	zu montieren 	to mount
 	Sand 	sand
 	Opfer 	victim
 	tipp 	tip
 	Wahnsinn 	rage
 	Zähler 	counter
 	Letzteres 	latter
 	zu erschrecken 	to scare
 	Unfall 	accident
 	Eindruck 	impression
 	zu sehen 	to peer
 	schwul 	gay
 	sich kräuseln 	to curl
 	zu sammeln 	to collect
 	marschieren 	to march
 	anzuzeigen 	to display
 	Strand 	beach
 	Tante 	aunt
 	Türöffnung 	doorway
 	gemütlich 	comfortable
 	treiben 	to drift
 	schade 	pity
 	Aufregung 	excitement
 	zu urteilen 	to arrest
 	offensichtlich 	obviously
 	ansonsten 	otherwise
 	Handel 	trade
 	Verein 	club
 	Zelle 	cell
 	gesundheit 	health
 	Leder 	leather
 	rau 	rough
 	nach Luft schnappen 	to gasp
 	durchführen 	to perform
 	kleiner Finger 	pink
 	Band 	band
 	Satz 	sentence
 	Stimmung 	mood
 	Artikel 	article
 	Kette 	chain
 	Beförderung 	carriage
 	zu äußern 	to utter
 	Schatten 	shade
 	Flugzeug 	plane
 	College 	college
 	zu vergeben 	to forgive
 	Gedicht 	poem
 	Seil 	rope
 	Lampe 	lamp
 	Instanz 	instance
 	rein 	pure
 	zu laden 	to load
 	zu ergreifen 	to seize
 	hinten 	rear
 	ehrlich 	honest
 	Hauptfach 	major
 	ähnlich 	similar
 	Aktivität 	activity
 	zu Echo 	to echo
 	zu besetzen 	to occupy
 	berühmt 	famous
 	um zu überleben 	to survive
 	ängstlich 	anxious
 	witzig 	funny
 	Argument 	argument
 	Teufel 	devil
 	Vertrauen 	confidence
 	zu bereuen 	to regret
 	zu begehen 	to commit
 	schwitzen 	sweat
 	Russisch 	Russian
 	Reichweite 	range
 	Alarm 	alarm
 	zu erholen 	to recover
 	Entsetzen 	horror
 	Sicherheit 	security
 	Besatzung 	crew
 	brüllen 	to roar
 	Morgengrauen 	dawn
 	Nation 	nation
 	Metall 	metal
 	nervös 	nervous
 	Gefängnis 	prison
 	zu verlassen 	to abandon
 	irgendwo 	anywhere
 	Dichter 	poet
 	seine 	sin
 	zu gras 	to grasp
 	Haltung 	attitude
 	zu sichern 	to secure
 	Aussage 	statement
 	nackt 	naked
 	Rechnung 	bill
 	Braue 	brow
 	Moral 	moral
 	rolle 	role
 	reichlich 	plenty
 	Karriere 	career
 	Schwanz 	tail
 	Geburt 	birth
 	zu bewerben 	to apply
 	Beamte 	official
 	erzählen 	to relate
 	Schicksal 	fate
 	Projekt 	project
 	Tal 	valley
 	Fantasie 	imagination
 	erschrecken 	to frighten
 	Markt 	market
 	Faust 	fist
 	zu Öfen 	to owe
 	Absicht 	intention
 	Verbindung 	connection
 	Serie 	series
 	Mut 	courage
 	Turm 	tower
 	See 	lake
 	auftauchen 	to emerge
 	zu wetten 	to bet
 	Film 	movie
 	Rock 	skirt
 	zu weinen 	to weep
 	Kammer 	chamber
 	Versuch 	trial
 	Magie 	magic
 	Motor 	engine
 	dank 	thanks
 	Schreiben 	writing
 	Taste 	button
 	Film 	film
 	jagen 	to hunt
 	gewöhnlich 	ordinary
 	verlängern 	to extend
 	zu retten 	to spare
 	Theorie 	theory
 	stetig 	steady
 	gewähren 	to grant
 	Juni 	June
 	Jude 	Jew
 	Text 	text
 	absolut 	absolutely
 	Ehre 	honour
 	zu schweben 	to float
 	Geheimnis 	mystery
 	Saison 	season
 	Eigentümer 	owner
 	sich leisten 	to afford
 	Farbe 	colour
 	Beratung 	advice
 	Partner 	partner
 	zu bewundern 	to admire
 	Kappe 	cap
 	Freiheit 	freedom
 	zwei Blendung 	to glare
 	zu verdienen 	to deserve
 	zu grüßen 	to greet
 	umarmen 	to hug
 	Personal 	staff
 	zu stoßen 	to thrust
 	danach 	afterwards
 	richtig 	correct
 	abhängen 	to depend
 	schwimmen 	to swim
 	Pool 	pool
 	Signal 	signal
 	unschuldig 	innocent
 	Ferse 	heel
 	Generelt 	generally
 	Vorhang 	curtain
 	Besitz 	possession
 	Foto 	photograph
 	kaum 	scarcely
 	Radio 	radio
 	Einheimische 	native
 	grau 	grey
 	Form 	blanket
 	Interview 	interview
 	zu erlauben 	to permit
 	schmutzig 	dirty
 	Scham 	shame
 	aufhören 	to cease
 	Ei 	egg
 	Erklärung 	explanation
 	Wagen 	wagon
 	Publikum 	audience
 	schrecklich 	awful
 	Rohr 	pipe
 	anstrengen 	to strain
 	Künstler 	artist
 	zu quetschen 	to squeeze
 	ansprechen 	to appeal
 	Tuch 	cloth
 	Terror 	terror
 	Volumen 	volume
 	Osten 	east
 	Abschnitt 	section
 	stören 	to disturb
 	Rang 	rank
 	freundlich 	friendly
 	hungrig 	hungry
 	kriechen 	to creep
 	Besucher 	visitor
 	überall 	everywhere
 	religiös 	religious
 	zu erhalten 	to obtain
 	Fleisch 	meat
 	Mädchen 	maid
 	Gerechtigkeit 	justice
 	Fortschritte 	progress
 	Runde 	lap
 	nach oben 	upstairs
 	Glaube 	belief
 	zu verbinden 	to connect
 	Roman 	novel
 	Geist 	ghost
 	zielen 	to aim
 	zu schleudern 	to fling
 	Samstag 	Saturday
 	Chirurgie 	operation
 	zu entlasten 	to relieve
 	mehr 	anymore
 	trabt 	despite
 	Taille 	waist
 	Milch 	milk
 	umarmen 	to embrace
 	Bad 	bathroom
 	Topf 	pot
 	zu begegnen 	to encounter
 	Gut 	estate
 	früher 	previous
 	zu spinnen 	to spin
 	Fiktion 	fiction
 	großartig 	grand
 	Falle 	trap
 	zu beeinflussen 	to affect
 	Trick 	trick
 	Arzneimittel 	drug
 	Seide 	silk
 	Suppen 	supper
 	betrunken 	drunk
 	Hinweis 	hint
 	zu ersetzen 	to replace
 	entrüstet 	harm
 	Obst 	fruit
 	Computer 	computer
 	Ellbogen 	elbow
 	absteigen 	to descend
 	zwei Verluste 	to tap
 	Veranda 	porch
 	anschwellen 	to swell
 	ups 	upper
 	Polizist 	cop
 	Großvater 	grandfather
 	Übung 	exercise
 	Bibliothek 	library
 	Muskel 	muscle
 	einfrieren 	to freeze
 	aufregen 	to upset
 	sich beschweren 	to complain
 	Europa 	Europe
 	bevorzugen 	favor
 	Wurzel 	root
 	Tier 	beast
 	entstehen 	to arise
 	Herausforderung 	challenge
 	Dusche 	shower
 	Griechisch 	Greek
 	während 	throughout
 	sexuell 	sexual
 	Schnur 	string
 	Limit 	limit
 	Restaurant 	restaurant
 	Religion 	religion
 	Druck 	pressure
 	zu verschwinden 	to vanish
 	Gnade 	grace
 	weit 	vast
 	zu gestehen 	to confess
 	Opfer 	sacrifice
 	Ankunft 	arrival
 	zu wichsen 	to jerk
 	Lektion 	lesson
 	verlassen 	lad
 	Öl 	oil
 	Muster 	pattern
 	regelmäßig 	regular
 	Gewehr 	rifle
 	glücklich 	lucky
 	Esel 	ass
 	trüb 	dull
 	bewusst 	conscious
 	Durcheinander 	mess
 	Element 	element
 	zu stöhnen 	to groan
 	konsekvens 	consequence
 	Balance 	balance
 	Prinzip 	principle
 	Zuneigung 	affection
 	Strom 	current
 	Kerze 	candle
 	Scheiße 	shit
 	zu fliehen 	to flee
 	Höhe 	height
 	Lager 	stock
 	Ritter 	knight
 	Uhr 	clock
 	Schloss 	castle
 	Zaun 	fence
 	schuldig 	guilty
 	zu lösen 	to resolve
 	knien 	to kneel
 	um sich zu entspannen 	to relax
 	Tempel 	temple
 	neben 	besides
 	Magazin 	magazine
 	Favorit 	favorite
 	sitzt 	seated
 	Tradition 	tradition
 	zu schätzen wissen 	to appreciate
 	Wissenschaft 	science
 	beliebt 	popular
 	Großmutter 	grandmother
 	Modell 	model
 	zwei zittern 	to shiver
 	täglich 	daily
 	Diskussion 	discussion
 	Prinz 	prince
 	Charme 	charm
 	zu streifen 	to strip
 	zu schließen 	to conclude
 	Uniform 	uniform
 	Beschreibung 	description
 	Decke 	ceiling
 	Busch 	bush
 	FALSCH 	FALSE
 	intersted 	interested
 	eng 	closely
 	zu klammern 	to cling
 	Bank 	bench
 	zu verfolgen 	to pursue
 	mutig 	brave
 	Zufriedenheit 	satisfaction
 	kriechen 	to crawl
 	Bus 	bus
 	literarisch 	literary
 	blutig 	bloody
 	zu vergleichen 	to compare
 	fremd 	foreign
 	vorzuschlagen 	to propose
 	Stift 	pen
 	sich erkundigen 	to inquire
 	Trauer 	grief
 	Hilfe 	aid
 	Freundschaft 	friendship
 	zum Absturz bringen 	to crash
 	Abenteuer 	adventure
 	zu kämpfen 	to stride
 	Kultur 	culture
 	Träger 	beam
 	Sicherheit 	safety
 	Marsch 	March
 	Brille 	glasses
 	evne 	ability
 	ausgezeichnet 	excellent
 	fest 	firmly
 	Verständnis 	understanding
 	Stahl 	steel
 	Nerv 	nerve
 	Engel 	angel
 	Riese 	giant
 	Argwohn 	suspicion
 	unbekannt 	unknown
 	erschrecken 	to startle
 	gleich 	equal
 	Zelt 	tent
 	zu lachen 	to gleam
 	intelligent 	smart
 	Generation 	generation
 	widerstehen 	to resist
 	schluchzen 	to sob
 	pro 	per
 	när je 	whenever
 	buchstabieren 	spell
 	Reaktion 	reaction
 	Bildung 	education
 	Beweis 	proof
 	zu erregen 	to excite
 	zu glänzen 	to blink
 	peitschen 	to whip
 	zu identifizieren 	to identify
 	Schüssel 	bowl
 	aussetzen 	to expose
 	Warnung 	warning
 	Tiefe 	depth
 	Kapitel 	chapter
 	Anordnung 	arrangement
 	schmerzen 	to ache
 	zu nippen 	to sip
 	stark 	heavily
 	Italienisch 	Italian
 	Augenbraue braue~~POS=HEADCOMP 	eyebrow
 	zu kichern 	to chuckle
 	Palast 	palace
 	ernst 	seriously
 	sich zurückziehen 	to retreat
 	Malerei 	painting
 	viktigheten 	importance
 	Königin 	queen
 	leise 	silently
 	Handgelenk 	wrist
 	zu schlamm 	to slam
 	Verantwortung 	responsibility
 	insgesamt 	altogether
 	Kiefer 	jaw
 	schlecht 	badly
 	Passagier 	passenger
 	Öffnung 	opening
 	Juli 	July
 	Geschicklichkeit 	skill
 	Mission 	mission
 	jagen 	to chase
 	Brauch 	custom
 	zu neigen 	to tend
 	Verfahren 	method
 	Kuh 	cow
 	begierig 	eager
 	Krieger 	warrior
 	zu kuppeln 	to clutch
 	wahrnehmen 	to perceive
 	Höhle 	cave
 	Kredit 	credit
 	Lob 	praise
 	fähig 	capable
 	zu mieten 	to hire
 	Version 	version
 	Nachbar 	neighbor
 	zu verbergen 	to conceal
 	zu bohren 	to bore
 	Sympathie 	sympathy
 	Draht 	wire
 	Neugier 	curiosity
 	zwei verpflichten 	to oblige
 	Gürtel 	belt
 	relativ 	relative
 	Vorstellung 	notion
 	zu erfassen 	to capture
 	zu wechseln 	to switch
 	Post 	mail
 	Couch 	couch
 	Flur 	corridor
 	abzureisen 	to depart
 	sofort 	instantly
 	Spanisch 	Spanish
 	Bedrohung 	threat
 	Chinesisch 	Chinese
 	hoch 	highly
 	schließlich 	eventually
 	zu beschäftigen 	to employ
 	Link 	link
 	Fehlen 	absence
 	Verzweiflung 	despair
 	Struktur 	structure
 	einsam 	lonely
 	dankbar 	grateful
 	zurückziehen 	to withdraw
 	Karte 	map
 	meist 	mostly
 	Minister 	minister
 	Kissen 	pillow
 	sichtbar 	visible
 	Schiff 	vessel
 	Herrin 	mistress
 	anhängen 	to attach
 	zart 	delicate
 	zu verwirren 	to confuse
 	Profi 	professional
 	Wärme 	warmth
 	gebrochen 	broken
 	zu erschöpfen 	to exhaust
 	albern 	silly
 	Detektiv 	detective
 	Trauer 	sorrow
 	Sattel 	saddle
 	Schaden 	damage
 	schön 	rare
 	zu verraten 	to betray
 	zu schlafen 	to slap
 	zu bestätigen 	to acknowledge
 	Kleid 	gown
 	fest 	solid
 	äußerst 	extremely
 	Phrase 	phrase
 	Nagel 	nail
 	zu reinigen 	to rent
 	zu pflegen 	to maintain
 	zu beeindrucken 	to impress
 	Arbeiter 	worker
 	Kugel 	bullet
 	Stamm 	trunk
 	konkluderer 	conclusion
 	Gewehr 	pistol
 	Hütte 	cottage
 	brillant 	brilliant
 	Bürger 	citizen
 	schnell 	rapidly
 	zu pfeifen 	to whistle
 	vor kurzem 	recently
 	verzweifelt 	desperate
 	leicht 	lightly
 	Aspekt 	aspect
 	Verwirrung 	confusion
 	hässlich 	ugly
 	Intelligenz 	intelligence
 	Bett 	sofa
 	zu vergießen 	to shed
 	Liebling 	darling
 	Papa 	dad
 	Kurve 	curve
 	Brise 	breeze
 	Lika 	equally
 	Band 	tape
 	zu wagen 	to venture
 	kratzen 	to scratch
 	Duft 	scent
 	anziehen 	to attract
 	Entwicklung 	development
 	zwei lahm 	to halt
 	festnageln 	to pin
 	zu schieben 	to shove
 	medizinische 	medical
 	Neigung 	slope
 	natürlich 	naturally
 	geistig 	mental
 	zu verteidigen 	to defend
 	zu verdienen 	to earn
 	zu beten 	to bid
 	Kamera 	camera
 	Schmutz 	dirt
 	Schale 	shell
 	Grundstück 	plot
 	Krone 	crown
 	erfolgreich 	successful
 	Tugend 	virtue
 	Flut 	flood
 	Rom 	Rome
 	Geldbeutel 	purse
 	Poesie 	poetry
 	zu knallen 	to pop
 	Bauch 	belly
 	gesamt 	total
 	zu bestätigen 	to confirm
 	Urteil 	judgment
 	enorme 	enormous
 	zu zerdrücken 	to crush
 	Basketball 	basket
 	Schutz 	shelter
 	zu klopfen 	to pat
 	ansvarlig 	responsible
 	Bewusstsein 	consciousness
 	senaste 	recent
 	zu teilen 	to divide
 	Verbrecher 	criminal
 	kostbar 	precious
 	ziemlich 	fairly
 	zu ermutigen 	to encourage
 	Grenze 	border
 	Ozean 	ocean
 	Laub 	blade
 	Schenkel 	thigh
 	Reflexion 	reflection
 	Bestattung 	funeral
 	Abteilung 	department
 	ungewöhnlich 	unusual
 	zwei überzeugungen 	to persuade
 	Fahrzeug 	vehicle
 	fürchten 	dread
 	Hintergrund 	background
 	Standard 	standard
 	Fernsehen 	television
 	beschuldigen 	to accuse
 	total 	totally
 	Nutzen 	benefit
 	Speise- 	dining
 	zu assoziieren 	to associate
 	zwei rendern 	to render
 	Schreiber 	clerk
 	Erlaubnis 	permission
 	Küste 	coast
 	mächtig 	mighty
 	Angst 	anxiety
 	Titel 	title
 	Angebot 	tender
 	Forschung 	research
 	Kuchen 	cake
 	zu retten 	to rescue
 	Bauer 	farmer
 	Gewalt 	violence
 	Blick 	glimpse
 	Vorschlag 	suggestion
 	Kindheit 	childhood
 	zwei Seufzer 	to suck
 	töricht 	foolish
 	Belohnung 	reward`


raw.split(/[\n\r]/)
    .forEach(async l => {
        const stripped = l.trim()
        const [de, en] = stripped.split(/[ \t]{2,}/)
        const question = (`${en},,${de};;\n`)
		await appendFile("DE_EN_flashcards.txt", question);
    })