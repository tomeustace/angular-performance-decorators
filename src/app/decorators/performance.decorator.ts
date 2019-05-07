export function PerformanceMark( name: string = '' ) {
  return function( target, key, descriptor ) {
    console.log('mark', name);
    performance.mark(name);
  }
}
export function PerformanceMeasure( name: string, mark1: string = '', mark2: string = '' ) {
  return function( target, key, descriptor ) {
    console.log('measure', name, mark1, mark2);
    performance.measure(name, mark1, mark2);
  }
}