import _ from "lodash";

export const numberFormat = (value?:number):string => {
    const string:string = _.toString(value);
    const splitDecimal:string[] = _.split(string, '.');
    const arr:string[] = _.toArray(splitDecimal[0]);
    const reverse:string[] = _.reverse(arr);
    const chunk:string[][] = _.chunk(reverse, 3);
    const arr2:string[] = [];

    _.map(chunk, (a:string[]) => {
        const rev:string[] = _.reverse(a);
        arr2.push(_.join(rev, ""));
    });
    const ems:string[] = _.reverse(arr2);
    let formated:string = _.join(ems, ",");
    if (splitDecimal[1]) {
        formated += "." + splitDecimal[1]
    }

    return formated;
}
