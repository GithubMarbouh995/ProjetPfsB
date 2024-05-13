// import { Component, Input } from '@angular/core';
// import {
//   IconDefinition,
//   faMoneyBill,
//   faUsers,
//   faClock,
//   faBriefcase,
// } from '@fortawesome/free-solid-svg-icons';
//
//
// @Component({
//   selector: 'app-card',
//   template: `
//
//
// {{ title }}
//
// {{ value }}
//
//
// {{ change }} Since Last Month
//
//
//
//
//
//
//
// `,
//   styleUrls: ['./card.component.css'],
// })
// export class CardComponent {
//   @Input() title: string = '';
//   @Input() value: number = 0;
//   @Input() change: string = '';
//   @Input() iconName: string = '';
//
//
// // Map the icon names to FontAwesome icons
//   iconMappings: { [key: string]: IconDefinition } = {
//     budget: faMoneyBill,
//     project: faUsers,
//     clock: faClock,
//     briefcase: faBriefcase,
//   };
//
//
//   get icon(): IconDefinition {
//     return this.iconMappings[this.iconName] || faMoneyBill; // Default to a specific icon if the name is not recognized
//   }
// }
//
//
