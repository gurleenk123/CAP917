import { Component } from '@angular/core';
@Component({
	selector:'gurleen',
	template: `<h1>Hello My Tag is Working</h1>
				<h1>this is the sum : {{c}}</h1>`,
}
)
export class Gurleen
{
	
	a=10;
	b=20;
	c=this.a+this.b;


}