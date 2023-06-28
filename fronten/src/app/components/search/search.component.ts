import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  

  constructor(private userService:UserService) { }
  productName:any
  productId:any
  message:any;
  product:any;
  brandName: any;
  ngOnInit(): void {
  }
  
  searchByproductName(): void {
    if (this.productName) {
      // Check if the entered productName is a valid product ID
      const isProductId = /^\d+$/.test(this.productName);
      if (isProductId) {
        // Call the getProductById() method from the UserService
        this.userService.getProductById(this.productName).subscribe(
          (data: any) => {
            this.product = [data]; // Assign the retrieved product to the 'product' property as an array
            this.message = ''; // Clear any previous error message
          },
          (error) => {
            this.product = null; // Set 'product' to null in case of error
            this.message = 'Product not found'; // Display an error message
          }
        );
      } else {
        // Perform search by product name
        this.userService.getproductByProductName(this.productName).subscribe(
          (res: any) => {
            console.log(res);
            this.product = res;
            console.log("In this", this.product);
            if (this.product.length === 0) {
              this.message = 'No product found';
            } else {
              this.message = '';
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
      
    }
  }
  // search(): void {
  //   if (this.productName) {
  //     // Check if the entered productName is a valid product ID
  //     const isProductId = /^\d+$/.test(this.productName);
  //     if (isProductId) {
  //       // Call the getProductById() method from the UserService
  //       this.userService.getProductById(this.productName).subscribe(
  //         (data: any) => {
  //           this.product = [data]; // Assign the retrieved product to the 'product' property as an array
  //           this.message = ''; // Clear any previous error message
  //         },
  //         (error) => {
  //           this.product = null; // Set 'product' to null in case of error
  //           this.message = 'Product not found'; // Display an error message
  //         }
  //       );
  //     } else {
  //       // Perform search by product name
  //       this.userService.getproductByProductName(this.productName).subscribe(
  //         (res: any) => {
  //           console.log(res);
  //           this.product = res;
  //           if (this.product.length === 0) {
  //             this.message = 'No products found for the given product name';
  //           } else {
  //             this.message = '';
  //           }
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   } else if (this.brandName) {
  //     // Perform search by brand name
  //     this.userService.getproductByBrandName(this.brandName).subscribe(
  //       (res: any) => {
  //         console.log(res);
  //         this.product = res;
  //         if (this.product.length === 0) {
  //           this.message = 'No products found for the given brand name';
  //         } else {
  //           this.message = '';
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }
  
  
  
}
