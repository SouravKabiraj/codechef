class Point {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

function getLeftMostPoint(points: Point[]): number {
    let index = 0;
    for (let i = 0; i < points.length; i++) {
        if (points[index].x > points[i].x) {
            index = i;
        }
    }
    return index;
}

function getOrientation(M: Point, N: Point, O: Point): number {
    let value = (N.y - M.y) * (O.x - N.x) - (N.x - M.x) * (O.y - N.y);
    if (value === 0) {
        return 0;
    } else {
        return value > 0 ? 1 : 2;
    }
}

function convexHull(points: Point[]) {
    const N = points.length;
    const hull = [];

    const L = getLeftMostPoint(points);

    let p = L, q;
    do {
        hull.push(p);

        q = (p + 1) % N;

        for (let i = 0; i < N; i++) {
            if (getOrientation(points[p], points[i], points[q]) === 2) {
                q = i;
            }
        }
        p = q;
    } while (p != L);
    console.log(hull);
}

const points = [
    new Point(0, 0),
    new Point(0, 2),
    new Point(2, 0),
    new Point(2, 2),
    new Point(1, 1),
];
convexHull(points);
