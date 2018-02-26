import { Component, ViewChild } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    $(document).ready(function () {

      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
        }
      );

      $('.button-collapse-derecha').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
        onClose: function (el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
        }
      );


    });
  }

}
