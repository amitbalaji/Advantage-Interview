import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

   cardList = [
     {img: 'https://picsum.photos/300/200',
     title: 'Barbeque Nation Grill',
     rating: '4.3',
     location: 'Pan India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Fasos',
     rating: '4.8',
     location: 'Mumbai India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Firangi Bakes',
     rating: '4.4',
     location: 'Pan India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Good Bowl',
     rating: '4.5',
     location: 'Pan India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Mandarin Oak',
     rating: '4.2',
     location: 'Pan India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Sweet Truth',
     rating: '4.1',
     location: 'Pan India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Barbeque Nation Grill',
     rating: '4.3',
     location: 'Pan India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Bakingo',
     rating: '4.3',
     location: 'Delhi India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     },
     {img: 'https://picsum.photos/300/200',
     title: 'Mughlai Dhaba',
     rating: '4.6',
     location: 'Noida India',
     offers : [
       "Food Vouchers"," Buy a gift Voucher worth Rs. 1800 and get two Compilmentary Mocktail/Beer Pint"
     ],
     fav: true
     }
   ];


}


