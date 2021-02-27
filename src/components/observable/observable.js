import { interval } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';

const observable$ = interval(2000).pipe(
    startWith(1),
    scan(() => Math.ceil(Math.random() * 10)),
)

export default observable$;