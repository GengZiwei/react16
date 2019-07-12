const typs = () =>{
  enum Ren{one="第一个数", two="第二个数",}; // 枚举类型 
  console.log('123', Ren);

  let value:any = ''; // 万能类型 可以类型变化
  value += 1;
  console.log(value);

  const tsFhc = (name: string, hieght: number, age?: number):void => {
    console.log(name, hieght)
  }
  tsFhc('木鱼', 180)

  let arr1:number[] = [1,2,3];
  arr1.push(12)

  let str1:string = '测试字符串'

  console.log(str1);

  let dates:Date = new Date();
  console.log('时间'+ dates )

  class TsValue {
    public name: string
    public constructor(name: string){
      this.name = name
    }
  }
  
  let valueCass:TsValue = new TsValue('我的名字');
  valueCass.name
  
}
export default typs();




/* 
共用的修饰符合  pubilc
私有属性    private 
子类可访问  protected
只读属性   readonly
*/