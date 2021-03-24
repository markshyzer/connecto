let galaxy = {
    dot: [
        { x: 382, y: 328.6, selected: false, valid: true },
        { x: 673.4, y: 503.6, selected: false, valid: true },
        { x: 378.4, y: 500, selected: false, valid: true },
        { x: 82.5, y: 495.5, selected: false, valid: true },
        { x: 521.9, y: 587.3, selected: false, valid: true },
        { x: 229.6, y: 582.9, selected: false, valid: true },
        { x: 524.6, y: 758.5, selected: false, valid: true },
        { x: 226, y: 754, selected: false, valid: true },
        { x: 668.1, y: 844.9, selected: false, valid: true },
        { x: 374, y: 840.5, selected: false, valid: true },
        { x: 78, y: 836.9, selected: false, valid: true },
        { x: 369.5, y: 1011.6, selected: false, valid: true },
    ],
    line: [
        [0,1,'unselected'],
        [0,3,'unselected'],
        [0,2,'unselected'],
        [0,4,'unselected'],
        [0,5,'unselected'],
        [1,2,'unselected'],
        [1,4,'unselected'],
        [1,6,'unselected'],
        [1,8,'unselected'],
        [2,3,'unselected'],
        [2,6,'unselected'],
        [2,7,'unselected'],
        [3,5,'unselected'],
        [3,7,'unselected'],
        [3,10,'unselected'],
        [4,5,'unselected'],
        [4,8,'unselected'],
        [4,9,'unselected'],
        [5,9,'unselected'],
        [5,10,'unselected'],
        [6,7,'unselected'],
        [6,8,'unselected'],
        [6,11,'unselected'],
        [7,10,'unselected'],
        [7,11,'unselected'],
        [8,9,'unselected'],
        [8,11,'unselected'],
        [9,10,'unselected'],
        [9,11,'unselected'],
        [10,11,'unselected']
        ]
}

let xSmallest = 1000
let ySmallest = 1000

galaxy.dot.forEach(function (d){
    if (d.x < xSmallest){
        xSmallest=d.x
    }

    if (d.y < ySmallest){
        ySmallest=d.y
    }
})
console.log('smallests', xSmallest, ySmallest)
galaxy.dot.forEach(function (d){
    d.x = d.x-xSmallest
    d.y = d.y-ySmallest
})

console.log(galaxy)


export default galaxy
