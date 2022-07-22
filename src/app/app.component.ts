import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  headers = ["ID", "Name", "Age", "Gender", "Country"];

  rows = [
    {
      "ID" : "1",
      "Name" : "Rahul",
      "Age" : "21",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "2",
      "Name" : "Ajay",
      "Age" : "25",
      "Gender" : "Male",
      "Country" : "India"
    },
    {
      "ID" : "3",
      "Name" : "Vikram",
      "Age" : "31",
      "Gender" : "Male",
      "Country" : "Australia"
    },
    {
      "ID" : "4",
      "Name" : "Ragu",
      "Age" : "20",
      "Gender" : "Female",
      "Country" : "India"
    },

  
   
  ]

}

