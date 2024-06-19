import { Injectable } from '@nestjs/common';
import * as IceCreamFlavoes from '../../../data/flavors.json';
import { FlavorI } from 'src/icecream/utils/types';

@Injectable()
export class GetAllIcecreamService {
  // Call the database and get the icecream
  //Use ORM Prisma

  //Dummy data instead of fetched data from a database
  private flavors = IceCreamFlavoes.flavors;

  /**
   * FlavorsList ==> returns Array of flavors [Flavors...]
   */
  FlavorsList(): FlavorI[] {
    const flavorsArray = this.flavors.map((flavor) => {
      return {
        id: flavor.id,
        name: flavor.flavorName,
        origin: flavor.origin,
      };
    });

    // console.log(flavorsArray);

    return flavorsArray;
  }

  /**
   * CreateNewFlavor ==> Create a new  record in the DB fro the new created
   * flavor.
   */
  CreateNewFlavor() {
    // Another method to create new flavor
  }

  /**
   * GetFlavorById ==> fetch a flavor by it's id
   * flavor.
   */
  GetFlavorById(id: number) {
    const filtredById = this.flavors.filter((flavor) => {
      return flavor.id === id;
    });

    console.log(typeof id);

    return filtredById;
  }
}
