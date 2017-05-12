/**
 * Created by EVA-Hieunv on 11/05/2017.
 */
export class Film {
  constructor(
    public id: number,
    public title: string,
    public subtitle: string,
    public infor: string,
    public videolink: string,
    public imagelink: string,
    public view: number,
    public rate: number,
    public categoryId : number
  ){}
}
