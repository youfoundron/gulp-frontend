## HELPER METHODS
## ###############################
$.fn.extend
addClassUnique: (klass) ->
	$(@).siblings().removeClass klass
	$(@).addClass klass
	return $(@)
points = (x=0, y=0, z=0) -> {x: x, y: y, z: z}
degToRad = (deg) -> Math.PI / 180 * deg

## PRELOADER
## ###############################
preloader = Preloader()

## INITIALIZE SCENE
## ###############################
GAME = new WHS.init
	background: 0x000000
	autoresize: true
	# gravity: points 0, -100, 0
	camera:
		far: 10000
		x: 150
		y: 20
		z: 150
	# rWidth: 1 / 1.5
	# rHeight: 1 / 1.5
	stats: "fps" # fps, ms, mb
	# path_worker: './libs/physijs_worker.js'
	# path_ammo: './ammo.js'


## SKYBOX
## ###############################
GAME.skybox = GAME.Skybox
	path: './images/textures/skybox/skybox-'
	imgSuffix: '.jpg'
	skyType: 'box' # box, sphere
	radius: GAME._camera.far
	rot:
		x: 0
		y: degToRad -165
		z: 0
	pos: { y: -200 }


## TERRAIN
## ###############################
# terrainMap = new Image()
# terrainMap.src = './assets/terrain/default_terrain.png'
# terrainMap = require('./assets/terrain/export_default_terrain.js')()
# console.log terrainMap
# GAME.ground = GAME.Terrain
# 	geometry:
# 		map: terrainMap
# 		depth: 100
# 		width: 256
# 		height: 256
# 	material:
# 		color: 0xff0000
# 		side: THREE.DoubleSide
# 		kind: "basic"
# 	pos: points 0, 0, 0


## MODELS
## ###############################
GAME.flamingo = GAME.Model
	geometry:
		path: 'assets/models/morph/flamingo.js'
		mass: 30
		onlyvis: false
	material:
		kind: "phong"
		vertexColors: THREE.VertexColors
		shading: THREE.SmoothSHading
	pos: points 0, 0, 0
	rot: points 0, 0, 0


## FOG
## ###############################
# https://github.com/WhitestormJS/whitestorm.js/issues/5


## LIGHTING
## ###############################
GAME.spotlight_white = GAME.SpotLight
	light:
		color: 0xffffff
		intensity: 2
		distance: 1000
	pos: points 160, 120, 160
	target: points 0, 10, 0
GAME.spotlight_cool = GAME.SpotLight
	light:
		color: 0x003366
		intensity: 1.5
		distance: 1000
	pos: points 160, 200, 160
	target: points 0, 0, 0
GAME.spotlight_warm = GAME.SpotLight
	light:
		color: 0x8b0000
		intensity: 1
		distance: 1000
	pos: points 100, 120, 160
	target: points 0, 0, 0


## SUNSET LIGHTING
## ###############################
# https://github.com/WhitestormJS/whitestorm.js/issues/54
# GAME.ambient_light = GAME.AmbientLight
# 	light:
# 		color: 0x080808
# # GAME.blue_light = GAME.DirectionalLight
# 	light:
# 		color: 0x003366 # midnightblue
# 		intensity: 1
# 	pos: points 5, 1, 0
# GAME.red_light = GAME.DirectionalLight
# 	light:
# 		color: 0x8b0000 # darkred
# 		intensity: 1.5


## 3-POINT LIGHTING
## ###############################
# https://github.com/WhitestormJS/whitestorm.js/issues/54
# GAME.ambient_light = GAME.AmbientLight
# 	light:
# 		color: 0x101010
# GAME.back_light = GAME.DirectionalLight
# 	light:
# 		color: 0xffffff
# 		intensity: 0.225
# 	pos: points 2.6, 1, 3
# GAME.key_light = GAME.DirectionalLight
# 	light:
# 		color: 0xffffff
# 		intensity: 0.375
# 	pos: points -2, -1, 0
# GAME.fill_light = GAME.DirectionalLight
# 	light:
# 		color: 0xffffff
# 		intensity: 0.75
# 	pos: points -3, -3, 2


## POST EFFECTS
## ###############################
effects = GAME.Wagner()
# effects.add( "ZoomBlurPass", {} )
effects.add( "VignettePass", {} )

## CONTROLS
## ###############################
GAME.OrbitControls()
# GAME.FPSControls()


GAME.start()
preloader.check()

#ready
# $(document).ready ->
# 	console.log "World o' Hell"
