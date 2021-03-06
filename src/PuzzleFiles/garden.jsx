let garden = {
    name: 'garden',
    dot: [
        {x: 70.3, y: 667.6, selected: false, valid: true},
        {x: 225.9, y: 668.7, selected: false, valid: true},
        {x: 292.1, y: 531.6, selected: false, valid: true},
        {x: 292.4, y: 804.6, selected: false, valid: true},
        {x: 374.5, y: 367.3, selected: false, valid: true},
        {x: 379.5, y: 670.2, selected: false, valid: true},
        {x: 375,   y: 972.4, selected: false, valid: true},
        {x: 464.7, y: 531.7, selected: false, valid: true},
        {x: 463.1, y: 804, selected: false, valid: true},
        {x: 533.9, y: 668.5, selected: false, valid: true},
        {x: 679.7, y: 667.7, selected: false, valid: true},
    ],

    line: [
        // [0, 4, 'unselected'],
        [4, 2, 'unselected'],
        [4, 7, 'unselected'],
        [4, 0, 'unselected'],
        [4, 10, 'unselected'],
        [7, 9, 'unselected'],
        [7, 5, 'unselected'],
        [2, 5, 'unselected'],
        [2, 1, 'unselected'],
        [0, 1, 'unselected'],
        [0, 6, 'unselected'],
        [1, 3, 'unselected'],
        [5, 3, 'unselected'],
        [5, 8, 'unselected'],
        [9, 8, 'unselected'],
        [10, 6, 'unselected'],
        [8, 6, 'unselected'],
        [3, 6, 'unselected'],
        [9, 10, 'unselected'],
    ],
    lineColour: 'rgb(251, 233, 120)',
    dotColour: 'rgb(244, 61, 33)',
    bgColour: 'rgb(163, 191, 73)'
}

let xSmallest = 1000
let ySmallest = 1000
let xLargest = 0
let yLargest = 0

garden.dot.forEach(function (d){
    if (d.x < xSmallest){
        xSmallest=d.x
    }

    if(d.x > xLargest){
        xLargest = d.x
    }

    if(d.y > yLargest){
        yLargest = d.y
    }

    if (d.y < ySmallest){
        ySmallest=d.y
    }
})

yLargest = yLargest - ySmallest
xLargest = xLargest - xSmallest


garden.dot.forEach(function (d){
    d.x = d.x-xSmallest
    d.y = d.y-ySmallest
    d.x = (d.x/xLargest)*80
    d.y = (d.y/yLargest)*80
})

export default garden