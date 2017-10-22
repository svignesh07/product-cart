import { Component, OnInit } from '@angular/core';

import { CartAction } from 'app/store/actions/cart.actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public cart:any = [];

  public totalPrice: number;
  public totalQuantity: any;

  constructor(private cartStore: CartAction) {}

  getTotalPrice() {
    let totalCost: Array<number> = []
    let quantity: Array<number> = []
    let intPrice: number
    let intQuantity: number

    this.cart.products.forEach((item, i) => {
      intPrice = parseInt(item.price)
      intQuantity = parseInt(item.quantity)
      totalCost.push(intPrice)
      quantity.push(intQuantity)
    })

    this.totalPrice = totalCost.reduce((acc, item) => {
      return acc += item
    }, 0)
    this.totalQuantity = quantity.reduce((acc, item) => {
      return acc += item
    }, 0)

  }

  ngOnInit() {
    this.cartStore.getState().subscribe(res => {
      this.cart = res
      this.getTotalPrice()
    })
  }

}
