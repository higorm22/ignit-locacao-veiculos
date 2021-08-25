import { Specification } from "../model/Specification";
import { ICreateCategoryDTO } from "./ICategoriesRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateCategoryDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
