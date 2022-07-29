
interface Media {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const media: Media = {
    volume: 90,
    second: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const author = 'Pepito';

const { volume, second, song, details } = media;
const { author: authorDetail } = details;

console.log('Actual volume is:', volume);
console.log('Actual second is:', second);
console.log('Actual song is:', song);
console.log('Actual author is:', authorDetail);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2 ] = dbz;
const [ , , p3 ] = dbz;

console.log('Character 1:', p1)
console.log('Character 2:', p2)
console.log('Character 3:', p3)


