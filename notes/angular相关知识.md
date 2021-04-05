##### angular介绍

```js
谷歌开发的一款开源的web前端框架，诞生于2009年
angular是基于typescript
```

##### angular环境搭建

```js
安装nodejs
安装cnmp（非必要）
//install cli
npm install -g @angular/cli
// install project
ng new project name
// run project
ng server --open
```

##### 创建组件

```js
ng g component componentName
```

##### typescript的class类声明属性的几种方式

```js
public  共有（默认） 可以在类里面使用，也可以在类外面使用
protected 保护类型  只有在当前类和他的子类可以访问
private 私有   只有在当前类可以访问
```

##### angular模板绑定动态数据和动态绑定属性

```html
 <div>
     {{title}}
</div>

<div [bingTitle]="title">
    
</div>
```

##### angular绑定html标签

```js
public content = "<h2>我是一个html标签</h2>"

<div [innerHTML='conten']></div>
```

##### angulr定义数组循环

```js
/∥定义数组
public arr=['1111'，'2222'，'33333'];
//推荐
public 1ist:any[]=['我是第一个新闻'，'222222222222'，'我是第三个新闻'];
public items:Array<string>=[“我是第一个新闻”，‘我是第二个新间‘];

<o1>
<1i *ngFor="let item of items">
{{item}}
</1i>
</ol>
```

##### 双向数据绑定---只是针对表单

```js
在appmodule里面引入 formmodule

<input type="text"[(ngModel)]="keywords'/>
```

##### angular动态样式

```html
<h1 class="abc" class="{{classStr}}">class1</h1>
<h1 class="abc" [class]="classstr">class2</h1>
<h1 [attr.class]="classStr">class3</h1>
```

##### 自定义管道

```
创建自定义管道文件
ng g pipe filter/lcUppercase
```



##### angular数据持久化服务（组件传值）

```js
1、创建服务在指定目录里面
ng g service services/storag
2、app.module.ts里面引入创建的服务并且声明
import{Storageservice）from './services/storage.service'
prowiders:[storageservice]
3、在用到的组件里面
//引入服务
import{storageservice）from '../../services/storage.service'；
/初始化
constructor（public storage:storageservice）{
1et s=this.storage.get（）；
 console.1og（s）；
      }
```

storage.servers.ts

```js
 import{Injectable}from‘gangular/core'；
 @eInjectable({
providedIn:"root"
 })
 export class StorageService{
  constructor(){}
     set(key:any,value:any){
	  1ocalstorage. setItem(key,JSON.stringify(value))
     };
	
     get(key:any,value:any){
         return JSON.parse(localStrage.getItem(key))
     }
     
	remove(key:any){
	1ocalstorage. removeItem(key);
   }
```

##### angular中的dom操作

```js
ViewChild获取dom节点
1、模板中给dom起一个名字
<div #myBox> 我是一个dom节点 </div>
2、在业务逻辑里面引入viewChild 
import{Component，OnInit，ViewChild}from‘@angular/core'；
3、写在类里面@viewChild（'myBox'）myBox:any；
4、ngAfterViewInit生命周期函数里面获取dom 
this.myBox.nativeElement I
```

##### angular组件传值

父组件模板传递

```html
<app-header [title]='title' [msg]='msg' [home]='this'></app-header>
```

子组件接收

```js
子组件引入Input
import { Component,OnInit,Input} from'gangular/core';


@input() title:any;   接收数据
@input() msg:any;	  接收方法
@input() home:any;	  接收整个父组件
```



父组件主动获取子组件的数据和方法

```json
<app-footer #footer></app-footer>

@viewChild('footer') footer:any;

this.footer.msg
this.footer.run()
```

子组件调用父组件的数据和方法

子组件

```json
引入outputd
import{Component,OnInit,Outputd,EventEmitter }from 'gangular/core';

@0utput() private outer = new EventEmitter();

this.outer.emit('我是子组件的数据')
```

父组件的html文件

```html
<app-footer (outer)='run(event)'></app-footer>
```

父组件ts文件

```js
run(event){
	console.log(event)  //子组件给父组件广播的数据   我是子组件的数据
}
```



