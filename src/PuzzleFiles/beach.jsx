let beach = {
    name: 'beach',
    dot: [
        {x: 375.3, y: 336.6, selected: false, valid: true },
        {x: 686.7, y: 565.3, selected: false, valid: true },
        {x: 567.7, y: 930.9, selected: false, valid: true },
        {x: 181.4, y: 931.9, selected: false, valid: true },
        {x: 62.3, y: 564.9, selected: false, valid: true },
        {x: 150.8, y: 592.6, selected: false, valid: true },
        {x: 598.8, y: 592.6, selected: false, valid: true },
        {x: 374.8, y: 430.2, selected: false, valid: true },
        {x: 236.4, y: 855.2, selected: false, valid: true },
        {x: 512.1, y: 855.2, selected: false, valid: true },
        {x: 296.3, y: 564.9, selected: false, valid: true },
        {x: 445.1, y: 564.6, selected: false, valid: true },
        {x: 250.3, y: 706.3, selected: false, valid: true },
        {x: 490.1, y: 706.1, selected: false, valid: true },
        {x: 370.4, y: 792.8, selected: false, valid: true },
        {x: 553.9, y: 730.2, selected: false, valid: true },
        {x: 195, y: 727.4, selected: false, valid: true },
        {x: 260.9, y: 512.6, selected: false, valid: true },
        {x: 494.6, y: 517.3, selected: false, valid: true },
        {x: 370.6, y: 856.1, selected: false, valid: true }
    ],

    line: [
        [0, 7, 'unselected'],
        [0, 4, 'unselected'],
        [0, 1, 'unselected'],
        [7, 17, 'unselected'],
        [7, 18, 'unselected'],
        [17, 5, 'unselected'],
        [17, 10, 'unselected'],
        [18, 11, 'unselected'],
        [18, 6, 'unselected'],
        [4, 5, 'unselected'],
        [4, 3, 'unselected'],
        [5, 16, 'unselected'],
        [12, 16, 'unselected'],
        [16, 8, 'unselected'],
        [1, 2, 'unselected'],
        [6, 15, 'unselected'],
        [13, 15, 'unselected'],
        [15, 9, 'unselected'],
        [9, 19, 'unselected'],
        [14, 19, 'unselected'],
        [19, 8, 'unselected'],
        [2, 3, 'unselected'],
        [11, 13, 'unselected'],
        [13, 14, 'unselected'],
        [12, 14, 'unselected'],
        [10, 12, 'unselected'],
        [10, 11, 'unselected'],
        [1, 6, 'unselected'],
        [9, 2, 'unselected'],
        [8, 3, 'unselected'],
    ],
    lineColour: 'rgb(253, 201, 121)',
    dotColour: 'rgb(234, 120, 51)',
    bgColour: 'rgb(0, 148, 139)'

}


let xSmallest = 1000
let ySmallest = 1000
let xLargest = 0
let yLargest = 0

beach.dot.forEach(function (d){
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


beach.dot.forEach(function (d){
    d.x = d.x-xSmallest
    d.y = d.y-ySmallest
    d.x = (d.x/xLargest)*80
    d.y = (d.y/yLargest)*80
})

export default beach